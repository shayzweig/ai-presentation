'use client'
import React from 'react'
import { Brain, ArrowUp, ArrowDown } from 'lucide-react'

const ModelBox = ({ 
  phase, 
  isCorrectPrediction 
}: { 
  phase: 'input' | 'prediction' | 'comparison' | 'update',
  isCorrectPrediction: boolean
}) => {
  // מערך של 9 פרמטרים (3x3 grid)
  const parameters = Array.from({ length: 9 })

  return (
    <div className="border border-blue-500 rounded p-1.5 w-20 h-28 relative bg-gray-900">
      {/* אייקון מוח בפינה */}
      <div className="absolute top-2 right-2">
        <Brain className="w-5 h-5 text-blue-400" />
      </div>

      {/* פרמטרים */}
      <div className="grid grid-cols-3 gap-1 mt-10 mx-auto w-fit">
        {parameters.map((_, index) => (
          <div 
            key={index}
            className={`
              w-4 h-4 rounded-sm border flex items-center justify-center
              ${phase === 'update' 
                ? (isCorrectPrediction 
                  ? (index % 3 === 0 ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500')
                  : (index % 2 === 0 ? 'bg-red-500/20 border-red-500' : 'bg-green-500/20 border-green-500')
                )
                : 'bg-gray-800 border-gray-600'
              }
            `}
          >
            {phase === 'update' && (
              isCorrectPrediction
                ? (index % 3 === 0 
                  ? <ArrowUp className="w-3 h-3 text-green-500" />
                  : <ArrowDown className="w-3 h-3 text-red-500" />)
                : (index % 2 === 0 
                  ? <ArrowDown className="w-3 h-3 text-red-500" />
                  : <ArrowUp className="w-3 h-3 text-green-500" />)
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ModelBox