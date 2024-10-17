import React, { useState } from 'react'
import { Search, ShoppingCart, Heart, Filter } from 'lucide-react'

const languages = [
  {
    id: 1,
    name: "JavaScript",
    description: "Lenguaje de programación versátil para web",
    color: '#F59E0B',
    originalPrice: 800.05,
    discountedPrice: 744.05,
    category: "Frontend"
  },
  {
    id: 2,
    name: "Python",
    description: "Lenguaje de alto nivel para propósito general",
    color: '#3B82F6',
    originalPrice: 750.00,
    discountedPrice: 697.50,
    category: "Backend"
  },
  {
    id: 3,
    name: "Java",
    description: "Lenguaje orientado a objetos para aplicaciones empresariales",
    color: '#EF4444',
    originalPrice: 663.78,
    discountedPrice: 617.32,
    category: "Backend"
  },
  {
    id: 4,
    name: "C++",
    description: "Lenguaje de programación de sistemas y juegos",
    color: '#10B981',
    originalPrice: 700.00,
    discountedPrice: 650.00,
    category: "Sistemas"
  },
  {
    id: 5,
    name: "Ruby",
    description: "Lenguaje dinámico para desarrollo web rápido",
    color: '#EC4899',
    originalPrice: 600.00,
    discountedPrice: 550.00,
    category: "Backend"
  },
  {
    id: 6,
    name: "TypeScript",
    description: "JavaScript con tipos estáticos",
    color: '#8B5CF6',
    originalPrice: 550.00,
    discountedPrice: 500.00,
    category: "Frontend"
  },
]
// Targeta 
function LanguageCard({ language }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
      <div 
        className="relative h-48 flex items-center justify-center text-white text-2xl font-bold"
        style={{ backgroundColor: language.color }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {language.name}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
            <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="p-2 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
              <Heart size={20} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{language.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{language.description}</p>
        <div className="flex flex-col items-start">
          <span className="text-xs text-gray-500 line-through">C${language.originalPrice.toFixed(2)}</span>
          <span className="text-sm font-semibold text-blue-600">C${language.discountedPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default function ResponsiveLanguageGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Frontend", "Backend", "Móvil", "Ciencia de datos", "Sistemas", "DevOps"]

  const filteredLanguages = languages.filter(lang =>
    (selectedCategory === "Todos" || lang.category === selectedCategory) &&
    (lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="container mx-auto h-[100vh] px-4 py-8">
      {/* Barra de búsqueda y botones */}
      <div className="flex flex-wrap justify-center items-center mb-8 space-x-2 space-y-2">
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Buscar lenguajes de programación"
            className="w-full pl-10 pr-4 py-2 border rounded-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <ShoppingCart size={24} className="text-gray-600" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Heart size={24} className="text-gray-600" />
        </button>
        <button 
          className="md:hidden p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          onClick={() => setShowCategories(!showCategories)}
        >
          <Filter size={24} className="text-gray-600" />
        </button>
      </div>

      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row">
        {/* Barra lateral (categorías) */}
        <aside className={`w-full md:w-1/4 md:pr-8 ${showCategories ? 'block' : 'hidden md:block'}`}>
          <h2 className="text-lg font-semibold mb-4">CATEGORÍAS</h2>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li 
                key={index}
                className={`cursor-pointer ${selectedCategory === category ? 'font-bold text-blue-600' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Cuadrícula de lenguajes */}
        <main className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLanguages.map((language) => (
              <LanguageCard key={language.id} language={language} />
            ))}
          </div>
          {filteredLanguages.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No se encontraron lenguajes que coincidan con tu búsqueda.</p>
          )}
        </main>
      </div>
    </div>
  )
}