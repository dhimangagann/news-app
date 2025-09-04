import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

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
    <nav className="bg-gray-800 text-white shadow-lg font-serif border-b border-red-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold flex items-center text-white hover:text-red-400 transition-colors font-serif">
              <span className="hidden sm:inline">NewsApp</span>
              <span className="sm:hidden">News</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 font-serif ${
                isActive('/') 
                  ? 'bg-red-600 text-white font-medium' 
                  : 'text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/technology" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 font-serif ${
                isActive('/technology') 
                  ? 'bg-red-600 text-white font-medium' 
                  : 'text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              Technology
            </Link>
            <Link 
              to="/business" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 font-serif ${
                isActive('/business') 
                  ? 'bg-red-600 text-white font-medium' 
                  : 'text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              Business
            </Link>
            <Link 
              to="/about" 
              className={`px-4 py-2 rounded-md transition-colors duration-200 font-serif ${
                isActive('/about') 
                  ? 'bg-red-600 text-white font-medium' 
                  : 'text-gray-300 hover:bg-red-500 hover:text-white'
              }`}
            >
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-red-600">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-serif ${
                  isActive('/') 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:bg-red-500 hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/technology" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-serif ${
                  isActive('/technology') 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:bg-red-500 hover:text-white'
                }`}
              >
                Technology
              </Link>
              <Link 
                to="/business" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-serif ${
                  isActive('/business') 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:bg-red-500 hover:text-white'
                }`}
              >
                Business
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 font-serif ${
                  isActive('/about') 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-300 hover:bg-red-500 hover:text-white'
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