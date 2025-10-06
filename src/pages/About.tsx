import { Link } from 'react-router'
import { Button } from '../components/ui/button'

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="mb-4">This is the about page.</p>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  )
}
