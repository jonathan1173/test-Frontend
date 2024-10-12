'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselItems = [
    {
        id: 1,
        color: 'bg-gradient-to-br from-red-500 to-pink-500',
        author: 'BETA',
        title: 'JAVASCRIPT MASTERY',
        topic: 'DYNAMIC WEB',
        description: 'Explora el poder de JavaScript, el lenguaje de programación que da vida a las aplicaciones web dinámicas y modernas con interactividad avanzada.',
    },
    {
        id: 2,
        color: 'bg-gradient-to-br from-blue-500 to-purple-500',
        author: 'BETA',
        title: 'PYTHON SIMPLICITY',
        topic: 'VERSATILITY',
        description: 'Con su sintaxis clara y fácil de aprender, Python es perfecto para el desarrollo de software, análisis de datos y aprendizaje automático.',
    },
    {
        id: 3,
        color: 'bg-gradient-to-br from-green-500 to-teal-500',
        author: 'BETA',
        title: 'JAVA RELIABILITY',
        topic: 'SCALABILITY',
        description: 'Construye aplicaciones escalables y seguras con Java, un lenguaje que sigue siendo una de las opciones más confiables en el desarrollo empresarial.',
    },
    {
        id: 4,
        color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
        author: 'BETA',
        title: 'C++ PERFORMANCE',
        topic: 'EFFICIENCY',
        description: 'Domina la eficiencia y el control con C++, el lenguaje elegido para el desarrollo de software de alto rendimiento, desde videojuegos hasta sistemas operativos.',
    },
    
]

export default function Component() {
    const [items, setItems] = useState(carouselItems)
    const [currentIndex, setCurrentIndex] = useState(0)

    const showSlider = useCallback((type) => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            if (type === 'next') {
                const firstItem = newItems.shift();
                if (firstItem) newItems.push(firstItem);
            } else {
                const lastItem = newItems.pop();
                if (lastItem) newItems.unshift(lastItem);
            }
            return newItems;
        });
        setCurrentIndex((prevIndex) => (type === 'next' ? (prevIndex + 1) % items.length : (prevIndex - 1 + items.length) % items.length));
    }, [items.length]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            showSlider('next')
        }, 7000)
        return () => clearTimeout(timer)
    }, [currentIndex, showSlider])

    return (
        <div className="h-[600px] sm:h-[450px] md:h-[580px] w-full overflow-hidden relative flex flex-col justify-between">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    className={`w-full h-full absolute inset-0 ${items[0].color}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="list relative z-10 flex-grow flex flex-col justify-center px-4 md:px-8 lg:px-16">
                <div className="w-full max-w-[1140px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-bold tracking-[10px] text-xs sm:text-sm mb-2"
                    >
                        {items[0].author}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2"
                    >
                        {items[0].title}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#f1683a] mb-4"
                    >
                        {items[0].topic}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-sm sm:text-base mb-6 max-w-2xl"
                    >
                        {items[0].description}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex gap-4"
                    >
                        <button className="bg-white text-black tracking-[3px] font-medium py-2 px-4 sm:px-6 rounded-full text-xs hover:bg-opacity-90 transition-colors">SEE MORE</button>
                        <button className="bg-transparent border border-white text-white tracking-[3px] font-medium py-2 px-4 sm:px-6 rounded-full text-xs hover:bg-white hover:text-black transition-colors">SUBSCRIBE</button>
                    </motion.div>
                </div>
            </div>

            <div className="thumbnail relative z-10 flex justify-center items-center gap-2 sm:gap-4 overflow-x-auto py-4 px-4 sm:px-8">
                {items.slice(1).map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                            opacity: 1 - (index * 0.3), 
                            scale: 1,
                            x: index * 10 // Slight offset to create a stacked effect
                        }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-[100px] h-[150px] sm:w-[120px] sm:h-[180px] flex-shrink-0 relative overflow-hidden rounded-[20px] shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        style={{
                            transform: `perspective(1000px) rotateY(${index * 5}deg)`, // 3D effect
                            transformOrigin: 'center right'
                        }}
                        onClick={() => showSlider('next')}
                    >
                        <div className={`w-full h-full ${item.color}`} />
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black to-transparent">
                            <div className="font-medium text-xs sm:text-sm text-white">{item.title}</div>
                            <div className="font-light text-[10px] sm:text-xs text-gray-300">{item.topic}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* botones */}
            {/* absolute bottom-20 sm:bottom-24 md:bottom-auto md:top-1/2 left-4 md:left-auto md:right-10 */}
            <div className="arrows absolute bottom-52 sm:bottom-24 md:bottom-auto md:top-1/2 left-6 md:left-auto md:right-10 z-20 flex flex-row md:flex-col sm:flex-col gap-4 items-center justify-center md:transform md:-translate-y-1/2">
                <button
                    onClick={() => showSlider('prev')}
                    className="w-10 h-10  rounded-full bg-white bg-opacity-20 text-white flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => showSlider('next')}
                    className="w-10 h-10  rounded-full bg-white bg-opacity-20 text-white flex items-center justify-center hover:bg-opacity-30 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="time absolute z-[1000] h-1 bg-white bg-opacity-50 left-0 bottom-0 transition-all duration-[7000ms] ease-linear" style={{ width: '100%' }} />
        </div>
    )
}