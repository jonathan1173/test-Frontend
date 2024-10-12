import React, { useState } from 'react'

const topics = [
  { name: 'C', bgColor: 'bg-pink-200', textColor: 'text-pink-800', hoverColor: 'text-pink-950' },
  { name: 'C#', bgColor: 'bg-yellow-200', textColor: 'text-yellow-800', hoverColor: 'text-yellow-950' },
  { name: 'R', bgColor: 'bg-gray-200', textColor: 'text-gray-800', hoverColor: 'text-gray-950' },
  { name: 'Kotlin', bgColor: 'bg-green-200', textColor: 'text-green-800', hoverColor: 'text-green-950' },
  { name: 'Node.js', bgColor: 'bg-blue-200', textColor: 'text-blue-800', hoverColor: 'text-blue-950' },
  { name: 'React', bgColor: 'bg-pink-200', textColor: 'text-pink-800', hoverColor: 'text-pink-950' },
  { name: 'JSON', bgColor: 'bg-yellow-200', textColor: 'text-yellow-800', hoverColor: 'text-yellow-950' },
  { name: 'Vue', bgColor: 'bg-gray-200', textColor: 'text-gray-800', hoverColor: 'text-gray-950' },
  { name: 'MySQL', bgColor: 'bg-green-200', textColor: 'text-green-800', hoverColor: 'text-green-950' },
  { name: 'XML', bgColor: 'bg-blue-200', textColor: 'text-blue-800', hoverColor: 'text-blue-950' },
  { name: 'Sass', bgColor: 'bg-pink-200', textColor: 'text-pink-800', hoverColor: 'text-pink-950' },
  { name: 'Icons', bgColor: 'bg-yellow-200', textColor: 'text-yellow-800', hoverColor: 'text-yellow-950' },
  { name: 'RWD', bgColor: 'bg-gray-200', textColor: 'text-gray-800', hoverColor: 'text-gray-950' },
  { name: 'Graphics', bgColor: 'bg-green-200', textColor: 'text-green-800', hoverColor: 'text-green-950' },
]

export default function Component() {
  const [hoveredIndex, setHoveredIndex] = useState([])

  return (
    <div className=" bg-gray-900 p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`${topic.bgColor} rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onTouchStart={() => setHoveredIndex(index)}
            onTouchEnd={() => setHoveredIndex(null)}
          >
            <h2 
              className={`text-center text-lg font-bold transition-colors duration-300 ease-in-out
                ${hoveredIndex === index ? topic.hoverColor : topic.textColor}`}
            >
              {topic.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}