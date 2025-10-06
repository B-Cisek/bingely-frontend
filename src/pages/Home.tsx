import { Link } from 'react-router'
import { Button } from '../components/ui/button'

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">Welcome to the home page!</p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/about">Go to About</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/contact">Go to Contact</Link>
        </Button>
      </div>
    </div>
  )
}
