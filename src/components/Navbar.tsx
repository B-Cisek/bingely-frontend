import { Link } from 'react-router'
import { Button } from './ui/button'
import { Tv } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
            <Tv className="w-8 h-8" />
            <span className="text-2xl font-bold">Bingely</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shows" className="text-white hover:text-gray-300 transition-colors">
              Shows
            </Link>
            <Link to="/watchlist" className="text-white hover:text-gray-300 transition-colors">
              Watchlist
            </Link>
            <Link to="/discover" className="text-white hover:text-gray-300 transition-colors">
              Discover
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
