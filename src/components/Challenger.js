import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Search, ChevronDown } from 'lucide-react'

export default function Component() {
  return (
    <div className="bg-gray-900 text-white p-5 sm:p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <motion.div 
        className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full md:w-1/4 bg-gray-700 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-blue-400 font-bold">Suggested Challenge</h2>
            <Settings className="text-gray-400" size={20} />
          </div>
          <div className="space-y-2">
            <div className="relative">
              <select className="w-full bg-gray-600 text-white p-2 rounded appearance-none">
                <option>PHP</option>
                <option>JavaScript</option>
                <option>Python</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div className="relative">
              <select className="w-full bg-gray-600 text-white p-2 rounded appearance-none">
                <option>Fundamentals</option>
                <option>Algorithms</option>
                <option>Data Structures</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <button className="bg-gray-600 text-white px-4 py-1 rounded">TRAIN</button>
            <button className="bg-gray-600 text-white px-4 py-1 rounded">SKIP</button>
          </div>
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-gray-600 text-white pl-8 pr-4 py-2 rounded"
            />
            <Search className="absolute left-2 top-2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="w-full md:w-3/4 p-4 flex flex-col">
          <div className="flex items-center mb-4">
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded mr-2">8 kyu</span>
            <h3 className="text-lg font-bold">Reversed Strings</h3>
          </div>
          <p className="text-gray-300 mb-4">Complete the solution so that it reverses the string passed into it.</p>
          <div className="bg-gray-800 p-4 rounded flex-grow">
            <pre className="text-green-400 overflow-x-auto h-full">
              {'\'world\'  =>  \'dlrow\'\n\'word\'   =>  \'drow\''}
            </pre>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="bg-gray-700 text-white px-4 py-1 rounded">STRINGS</button>
            <button className="bg-gray-700 text-white px-4 py-1 rounded">FUNDAMENTALS</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}