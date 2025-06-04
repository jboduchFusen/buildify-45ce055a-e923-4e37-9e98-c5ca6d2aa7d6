
import { Link } from 'react-router-dom'
import { GolfBall } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="flex justify-center mb-6">
        <GolfBall className="h-16 w-16 text-primary" />
      </div>
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound