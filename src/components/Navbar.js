import { useState } from 'react'
import { Menu, X, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import LogoBeta from '../assets/logoBeta.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-md min-h-[8vh] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <button className="flex-shrink-0  flex flex-row items-center gap-2 ">
              <img className="h-24 w-24 " src={LogoBeta} alt="Logo" />
            </button>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/home"> <button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</button> </Link>
                <Link to="/community"><button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Community</button> </Link>
                <Link to="/doc"><button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Doc</button> </Link>
                <Link to="/store"><button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Store</button> </Link>
                <Link to="/contact"><button className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</button> </Link>
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
              <Link to="/home"><button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</button> </Link>
              <Link to="/community"><button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Community</button> </Link>
              <Link to="/doc"><button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Doc</button> </Link>
              <Link to="/store"><button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Store</button> </Link>
              <Link to="/contact"><button className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</button> </Link>
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