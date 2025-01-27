import React from 'react'

interface BaseSlideProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const BaseSlide = ({ children, title, subtitle }: BaseSlideProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 p-6 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        {title && <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>}
        {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
      </div>
      
      {/* Content */}
      <div className="w-full max-w-6xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default BaseSlide
