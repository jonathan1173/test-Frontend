import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Welcome() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Bienvenido
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Estamos encantados de tenerte aquí
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Comenzar
        </motion.button>
      </motion.div>
    </div>
  )
}