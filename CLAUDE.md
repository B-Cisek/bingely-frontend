# React Project Guidance

## Project Overview
Modern React application with TypeScript, using enterprise-grade libraries for forms, data fetching, and state management.

## Tech Stack
- **React 19+** - UI library
- **React Router** - routing
- **Axios** - HTTP client
- **TanStack Query** - server state management
- **Zustand** - client state management
- **React Hook Form** - form handling
- **Zod** - schema validation
- **shadcn/ui** - component library
- **Tailwind CSS** - styling

## Project Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── forms/           # Form components
│   └── shared/          # Reusable components
├── pages/               # Route components
├── hooks/               # Custom hooks
├── lib/
│   ├── api.ts           # Axios instance config
│   ├── queryClient.ts   # TanStack Query config
│   └── utils.ts         # Helper functions
├── stores/              # Zustand stores
├── schemas/             # Zod validation schemas
├── types/               # TypeScript types
└── routes/              # Route definitions
```

## Code Patterns

### API Calls with Axios & TanStack Query

**Axios instance configuration** (`src/lib/api.ts`):
```typescript
import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401, 403, etc.
    return Promise.reject(error);
  }
);
```

**API service layer** (`src/services/userService.ts`):
```typescript
import { api } from '@/lib/api';
import type { User, CreateUserDto } from '@/types/user';

export const userService = {
  getUsers: async (): Promise<User[]> => {
    const { data } = await api.get('/users');
    return data;
  },

  getUser: async (id: string): Promise<User> => {
    const { data } = await api.get(`/users/${id}`);
    return data;
  },

  createUser: async (userData: CreateUserDto): Promise<User> => {
    const { data } = await api.post('/users', userData);
    return data;
  },
};
```

**TanStack Query hooks** (`src/hooks/useUsers.ts`):
```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/userService';
import type { CreateUserDto } from '@/types/user';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useUser = (id: string) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => userService.getUser(id),
    enabled: !!id,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: CreateUserDto) => userService.createUser(userData),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};
```

### Zustand Store

**Create store** (`src/stores/authStore.ts`):
```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  clearAuth: () => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      
      setAuth: (user, token) => {
        set({ user, token, isAuthenticated: true });
      },
      
      clearAuth: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
```

**Usage in components**:
```typescript
import { useAuthStore } from '@/stores/authStore';

function Header() {
  const { user, clearAuth } = useAuthStore();
  
  return (
    <header>
      {user?.name}
      <button onClick={clearAuth}>Logout</button>
    </header>
  );
}
```

### Forms with React Hook Form & Zod

**Define schema** (`src/schemas/userSchema.ts`):
```typescript
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().min(18, 'Must be at least 18 years old'),
  terms: z.boolean().refine((val) => val === true, {
    message: 'You must accept terms and conditions',
  }),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;
```

**Form component** (`src/components/forms/CreateUserForm.tsx`):
```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema, type CreateUserFormData } from '@/schemas/userSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCreateUser } from '@/hooks/useUsers';

export function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      email: '',
      name: '',
      age: 18,
      terms: false,
    },
  });

  const createUser = useCreateUser();

  const onSubmit = async (data: CreateUserFormData) => {
    try {
      await createUser.mutateAsync(data);
      reset();
      // Show success toast
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting || createUser.isPending}>
        {createUser.isPending ? 'Creating...' : 'Create User'}
      </Button>
    </form>
  );
}
```

### Routing with React Router

**Route configuration** (`src/routes/index.tsx`):
```typescript
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <ProtectedRoute><UsersPage /></ProtectedRoute>,
      },
      {
        path: 'users/:id',
        element: <ProtectedRoute><UserDetailPage /></ProtectedRoute>,
      },
    ],
  },
]);
```

**Protected route component**:
```typescript
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
```

### Styling with Tailwind & shadcn/ui

**Using shadcn/ui components**:
```typescript
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>
        <Button className="mt-4" variant="outline">View Profile</Button>
      </CardContent>
    </Card>
  );
}
```

**Custom utilities** (`src/lib/utils.ts`):
```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## Best Practices

### TanStack Query
- Use query keys consistently: `['resource', id]` pattern
- Set appropriate `staleTime` for data freshness
- Use `invalidateQueries` after mutations
- Handle loading and error states in components
- Use `enabled` option for dependent queries

### Zustand
- Keep stores focused (single responsibility)
- Use `persist` middleware for data that should survive refresh
- Avoid derived state - compute in selectors
- Use `shallow` comparison for object selectors

### Forms
- Always use Zod schemas for validation
- Keep schemas in separate files for reusability
- Use `zodResolver` from `@hookform/resolvers/zod`
- Handle both client and server validation errors
- Reset forms after successful submission

### Components
- Co-locate related files (component + tests + styles if needed)
- Use TypeScript for all components
- Prefer composition over prop drilling
- Keep components under 200 lines
- Extract custom hooks for complex logic

### API Layer
- Always use the configured axios instance
- Create service layer for API calls
- Define TypeScript types for all requests/responses
- Handle errors consistently
- Use interceptors for auth and global error handling

### Error Handling
- Use error boundaries for component errors
- Display user-friendly error messages
- Log errors to monitoring service
- Handle network errors gracefully
- Show loading states during async operations

## Naming Conventions
- Components: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (`useAuth.ts`)
- Stores: camelCase with 'Store' suffix (`authStore.ts`)
- Types: PascalCase (`User`, `CreateUserDto`)
- Files: match export name
- Zod schemas: camelCase with 'Schema' suffix (`userSchema.ts`)

## File Organization
- Group by feature when app grows large
- Keep related files together
- Use barrel exports (`index.ts`) sparingly
- Separate concerns: UI, logic, types, schemas

## Common Tasks

### Adding a new feature
1. Define TypeScript types in `src/types/`
2. Create Zod schema in `src/schemas/`
3. Create API service in `src/services/`
4. Create TanStack Query hooks in `src/hooks/`
5. Build UI components using shadcn/ui
6. Add route if needed

### Adding shadcn/ui component
```bash
npx shadcn-ui@latest add button
```

### Creating a new form
1. Define Zod schema
2. Infer TypeScript type from schema
3. Use `useForm` with `zodResolver`
4. Use shadcn/ui form components
5. Handle submission with TanStack Query mutation

## Performance Tips
- Use React.memo sparingly (profile first)
- Optimize Zustand selectors to prevent re-renders
- Use TanStack Query's built-in caching
- Lazy load routes with React.lazy
- Keep bundle size in check (analyze with vite-bundle-visualizer)

## Environment Variables
Create `.env` file:
```
VITE_API_URL=http://localhost:3000/api
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```