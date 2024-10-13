import { useState } from 'react'
import { Menu, X, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md min-h-[8vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <button className="flex-shrink-0 flex flex-row items-center gap-2 ">
              <img className="h-12 w-12 bg-black rounded-full" src="https://img.icons8.com/?size=512&id=17949&format=png " alt="Logo" />
              <h1 className='text-3xl font-bold ' >BETA</h1>
            </button>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/index"> <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</button> </Link>
                <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</button>
                <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</button>
                <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">

              <Link to="/login">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2">
                  <LogIn className="w-4 h-4 inline-block mr-1" />
                  Access
                </button>
              </Link>

            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* menu hamburgesa  */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/index"> <button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</button> </Link>
              <button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</button>
              <button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Services</button>
              <button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</button>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-200">

              <div className="flex items-center px-5">
                <Link to="/login">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2">
                    <LogIn className="w-4 h-4 inline-block mr-1" />
                    Access
                  </button>
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}