import React, { useState } from "react"
import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const developers = [
    "Ana Martínez",
    "Carlos Rodríguez",
    "Elena Sánchez",
    "David López"
  ]

  const socialIcons = [
    { name: "Github", icon: Github, color: "hover:text-[#000000]" },
    { name: "Twitter", icon: Twitter, color: "hover:text-[#3FD3F4]" },
    { name: "LinkedIn", icon: Linkedin, color: "hover:text-[#0A66C2]" },
    { name: "Facebook", icon: Facebook, color: "hover:text-[#0025FF]" },
  ]

  return (
    <footer className="bg-gray-300 border-t border-t-black text-gray-800 py-2 px-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex space-x-4">
          {socialIcons.map((social) => (
            <button
              key={social.name}
              aria-label={social.name}
              onMouseEnter={() => setHoveredIcon(social.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              className={`p-2 rounded-full transition-colors duration-200 ${
                hoveredIcon === social.name ? 'bg-gray-200' : 'bg-transparent'
              } ${social.color}`}
            >
              <social.icon 
                size={20}
                className={hoveredIcon === social.name ? '' : 'text-gray-600'}
              />
            </button>
          ))}
        </div>
        <div>
          <h2 className="text-[#000000] text-sm font-semibold mb-2">Desarrollado por</h2>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {developers.map((dev, index) => (
              <li key={index} className="text-sm text-gray-600">{dev}</li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-gray-600">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}