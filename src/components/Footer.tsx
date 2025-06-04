
import { Link } from 'react-router-dom'
import { GolfBall, Instagram, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-green-50 dark:bg-gray-900 border-t border-green-100 dark:border-green-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <GolfBall className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">Golf Legends</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-20 mb-8 md:mb-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link to="/schedule" className="footer-link">Tournament Schedule</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-primary">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-green-100 dark:border-green-900 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Golf Legends. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <a href="#" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer