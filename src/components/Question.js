import React, { useState } from 'react'

const colors = [
  '#3B82F6', // Azul
  '#10B981', // Verde
  '#F59E0B', // Ámbar
  '#EF4444', // Rojo
  '#8B5CF6', // Violeta
  '#EC4899', // Rosa
]

export default function Component() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')

  const topics = [
    "JavaScript", "Python", "React", "Node.js", "CSS", "Git"
  ]

  const allQuestions = [
    {
      id: 1,
      title: "¿Cómo se usa async/await?",
      topic: "JavaScript",
    },
    {
      id: 2,
      title: "¿Qué es un componente en React?",
      topic: "React",
    },
    {
      id: 3,
      title: "¿Cómo se maneja el estado en React?",
      topic: "React",
    },
    {
      id: 4,
      title: "¿Qué es una promesa en JavaScript?",
      topic: "JavaScript",
    },
    {
      id: 5,
      title: "¿Cómo se crea un servidor en Node.js?",
      topic: "Node.js",
    },
    {
      id: 6,
      title: "¿Qué son las list comprehensions en Python?",
      topic: "Python",
    },
    {
      id: 7,
      title: "¿Cómo se centra un div con Flexbox?",
      topic: "CSS",
    },
    {
      id: 8,
      title: "¿Cómo se hace un merge en Git?",
      topic: "Git",
    },
  ]

  const filteredQuestions = selectedTopic
    ? allQuestions.filter(q => q.topic === selectedTopic)
    : allQuestions

  const handleTopicClick = (topic) => {
    setSelectedTopic(prevTopic => prevTopic === topic ? '' : topic)
  }

  return (
    <div className="h-[100vh] min-h-screen  bg-gray-100">
      <main className='px-36 pt-6 font-sans'>
        {/* barra de busqueda */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Busca tu pregunta..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
            aria-label="Buscar preguntas"
          />
        </div>
        {/* botones  */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Temas</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={`px-3 py-1 text-white text-sm transition-all rounded-md ${
                  selectedTopic === topic ? 'ring-2 ring-white' : ''
                }`}
                style={{ 
                  backgroundColor: colors[index % colors.length],
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* tarjetas */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {selectedTopic ? `Preguntas de ${selectedTopic}` : 'Todas las preguntas'}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {filteredQuestions.map((question, index) => (
              <div
                key={question.id}
                className="p-4 shadow-md text-white rounded-lg"
                style={{ 
                  backgroundColor: colors[index % colors.length],
                }}
              >
                <h3 className="font-semibold mb-2">{question.title}</h3>
                <span className="text-sm bg-white bg-opacity-30 px-2 py-1 rounded-md">
                  {question.topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}