
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}

export default NotFound