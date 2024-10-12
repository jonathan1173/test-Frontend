import { useState } from 'react'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button  className="flex-shrink-0">
              <img className="h-12 w-12 bg-black" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDiiI4YpJsuwAnEE1SisDQ73YC87MRo4fAg&s" alt="Logo" />
            </button>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</button>
                <button  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</button>
                <button  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</button>
                <button  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2">
                <LogIn className="w-4 h-4 inline-block mr-1" />
                Login
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                <UserPlus className="w-4 h-4 inline-block mr-1" />
                Register
              </button>
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
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Services</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2 w-full">
                  <LogIn className="w-4 h-4 inline-block mr-1" />
                  Login
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 w-full">
                  <UserPlus className="w-4 h-4 inline-block mr-1" />
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}