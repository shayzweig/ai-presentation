'use client'
import React from 'react'
import { ArrowLeft, Check, X } from 'lucide-react'
import ModelBox from './ModelBox'

const PredictionStep = ({ 
  actual,
  prediction
}: { 
  actual: string,
  prediction: string
}) => {
  const isCorrect = actual === prediction

  return (
    <div className="border border-gray-700 rounded p-2 bg-gray-900">
      <div className="flex items-center gap-2">
        {/* Input */}
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-400">קלט</div>
          <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
            <img src={`/mnist/mnist-test-${actual}.png`} alt={`MNIST digit ${actual}`} className="w-10 h-10 object-contain" />
          </div>
          <div className="text-xs text-gray-400">
            תיוג: <span className="text-white">{actual}</span>
          </div>
        </div>

        <ArrowLeft className="w-3 h-3 text-gray-400" />

        {/* Model */}
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-400">מודל</div>
          <ModelBox phase="prediction" isCorrectPrediction={isCorrect} />
        </div>

        <ArrowLeft className="w-3 h-3 text-gray-400" />

        {/* Output */}
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-400">חיזוי</div>
          <div className="flex items-center gap-1 h-12 justify-center">
            <div className="text-xl font-bold">
              {prediction}
            </div>
            {isCorrect ? 
              <Check className="text-green-500 w-4 h-4" /> : 
              <X className="text-red-500 w-4 h-4" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const TestingProcess = () => {
  const testExamples = [
    { actual: "4", prediction: "4" },
    { actual: "8", prediction: "8" },
    { actual: "1", prediction: "1" },
    { actual: "9", prediction: "9" },
    { actual: "3", prediction: "8" },
    { actual: "5", prediction: "5" },
    { actual: "2", prediction: "2" },
    { actual: "7", prediction: "1" }
  ]

  const correctPredictions = testExamples.filter(ex => ex.actual === ex.prediction).length
  const accuracy = (correctPredictions / testExamples.length) * 100

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        {testExamples.map((example, index) => (
          <PredictionStep 
            key={index}
            actual={example.actual}
            prediction={example.prediction}
          />
        ))}
      </div>

      <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4">
        <div className="text-center">
          <span className="text-xl font-bold text-blue-400">{accuracy}%</span>
          <span className="text-gray-300 mr-2">דיוק בבדיקה</span>
          <div className="text-sm text-gray-400 mt-1">
            {correctPredictions} מתוך {testExamples.length} דוגמאות חדשות זוהו נכון
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestingProcess