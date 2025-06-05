
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, GolfBall } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm dark:bg-gray-900 border-b border-[#006400]/20 dark:border-[#006400]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <GolfBall className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">Masters Golf</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "nav-link-active" 
                  : "nav-link text-gray-600 dark:text-gray-300"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                isActive 
                  ? "nav-link-active" 
                  : "nav-link text-gray-600 dark:text-gray-300"
              }
            >
              Tournament Schedule
            </NavLink>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-[#006400]/10 dark:hover:bg-[#006400]/20"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-primary bg-[#006400]/10 dark:bg-[#006400]/20" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-[#006400]/10 dark:text-gray-300 dark:hover:bg-[#006400]/20"
              }
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/schedule" 
              className={({ isActive }) => 
                isActive 
                  ? "block px-3 py-2 rounded-md text-base font-medium text-primary bg-[#006400]/10 dark:bg-[#006400]/20" 
                  : "block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-[#006400]/10 dark:text-gray-300 dark:hover:bg-[#006400]/20"
              }
              onClick={toggleMenu}
            >
              Tournament Schedule
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar