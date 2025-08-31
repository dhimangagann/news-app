import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isActive = (path) => {
    return location.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-red-600 dark:bg-red-800 text-white shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3v8m0 0V9a2 2 0 012-2h2M7 7h3v3H7z" />
              </svg>
              <span className="hidden sm:inline">NewsApp</span>
              <span className="sm:hidden">News</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/') 
                  ? 'bg-red-800 dark:bg-red-900 text-white' 
                  : 'hover:bg-red-700 dark:hover:bg-red-700 hover:text-red-100'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/technology" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/technology') 
                  ? 'bg-red-800 dark:bg-red-900 text-white' 
                  : 'hover:bg-red-700 dark:hover:bg-red-700 hover:text-red-100'
              }`}
            >
              Technology
            </Link>
            <Link 
              to="/business" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/business') 
                  ? 'bg-red-800 dark:bg-red-900 text-white' 
                  : 'hover:bg-red-700 dark:hover:bg-red-700 hover:text-red-100'
              }`}
            >
              Business
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                isActive('/about') 
                  ? 'bg-red-800 dark:bg-red-900 text-white' 
                  : 'hover:bg-red-700 dark:hover:bg-red-700 hover:text-red-100'
              }`}
            >
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-red-200 focus:outline-none focus:text-red-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-red-700 dark:border-red-600">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'bg-red-800 dark:bg-red-900 text-white' 
                    : 'text-red-100 hover:bg-red-700 dark:hover:bg-red-700 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/technology" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/technology') 
                    ? 'bg-red-800 dark:bg-red-900 text-white' 
                    : 'text-red-100 hover:bg-red-700 dark:hover:bg-red-700 hover:text-white'
                }`}
              >
                Technology
              </Link>
              <Link 
                to="/business" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/business') 
                    ? 'bg-red-800 dark:bg-red-900 text-white' 
                    : 'text-red-100 hover:bg-red-700 dark:hover:bg-red-700 hover:text-white'
                }`}
              >
                Business
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive('/about') 
                    ? 'bg-red-800 dark:bg-red-900 text-white' 
                    : 'text-red-100 hover:bg-red-700 dark:hover:bg-red-700 hover:text-white'
                }`}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar