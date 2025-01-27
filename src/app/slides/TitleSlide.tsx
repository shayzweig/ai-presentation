'use client'
import React, { useState, useEffect } from 'react'
import { Brain, Cpu } from 'lucide-react'

const TitleSlide = () => {
  const [showSubtitle, setShowSubtitle] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center text-white p-8 relative overflow-hidden" dir="rtl">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Brain className="w-24 h-24" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Cpu className="w-24 h-24" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-8 tracking-wide">
          בינה מלאכותית
        </h1>
        
        <div className={`transition-opacity duration-1000 ${showSubtitle ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl mb-6">
            מהמתמטיקה ועד ליישומים מעשיים
          </h2>
          <p className="text-xl text-gray-300">
            מבוא לעולם הבינה המלאכותית למתכנתים צעירים
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-20 text-sm text-gray-300">
        <div className="text-center">בית ספר נבון</div>
        <div className="mt-1 text-center">שי צווייג, 2.2.2025</div>
      </div>
    </div>
  )
}

export default TitleSlide
