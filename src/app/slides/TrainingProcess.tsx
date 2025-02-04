'use client'
import React from 'react'
import { ArrowLeft, Check, X } from 'lucide-react'
import ModelBox from './ModelBox'

const ProcessStep = ({ 
  phase,
  prediction,
  actual,
  isCorrectExample
}: {
  phase: 'input' | 'prediction' | 'comparison' | 'update',
  prediction: string,
  actual: string,
  isCorrectExample: boolean
}) => {
  return (
    <div className="border border-gray-700 rounded p-3 bg-gray-900">
      <div className="flex items-center gap-3">
        {/* Input */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-400">קלט</div>
          <div className="w-16 h-16 bg-black rounded flex items-center justify-center">
            <img src={`/mnist/mnist-${actual}.png`} alt={`MNIST digit ${actual}`} className="w-14 h-14 object-contain" />
          </div>
          <div className="text-sm text-gray-400">
            תיוג: <span className="text-white">{actual}</span>
          </div>
        </div>

        <ArrowLeft className="w-3 h-3 text-gray-400" />

        {/* Model */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-400">מודל</div>
          <ModelBox phase={phase} isCorrectPrediction={isCorrectExample} />
        </div>

        <ArrowLeft className="w-3 h-3 text-gray-400" />

        {/* Output */}
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-400">פלט</div>
          <div className="flex items-center gap-1 h-16 justify-center">
            <div className="text-2xl font-bold">
              {phase === 'input' ? '?' : prediction}
            </div>
            {phase === 'comparison' && (
              isCorrectExample ? 
                <Check className="text-green-500 w-5 h-5" /> : 
                <X className="text-red-500 w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-2 text-center text-sm text-gray-400">
        {phase === 'input' && 'קבלת דוגמא חדשה'}
        {phase === 'prediction' && 'חיזוי הספרה'}
        {phase === 'comparison' && 'השוואה לתיוג'}
        {phase === 'update' && 'עדכון פרמטרים'}
      </div>
    </div>
  )
}

const TrainingProcess = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-semibold mb-3">דוגמא לחיזוי נכון</h3>
        <div className="grid grid-cols-4 gap-3">
          <ProcessStep phase="input" prediction="?" actual="5" isCorrectExample={true} />
          <ProcessStep phase="prediction" prediction="5" actual="5" isCorrectExample={true} />
          <ProcessStep phase="comparison" prediction="5" actual="5" isCorrectExample={true} />
          <ProcessStep phase="update" prediction="5" actual="5" isCorrectExample={true} />
        </div>
      </div>

      <div>
        <h3 className="text-base font-semibold mb-3">דוגמא לחיזוי שגוי</h3>
        <div className="grid grid-cols-4 gap-3">
          <ProcessStep phase="input" prediction="?" actual="5" isCorrectExample={false} />
          <ProcessStep phase="prediction" prediction="3" actual="5" isCorrectExample={false} />
          <ProcessStep phase="comparison" prediction="3" actual="5" isCorrectExample={false} />
          <ProcessStep phase="update" prediction="3" actual="5" isCorrectExample={false} />
        </div>
      </div>
    </div>
  )
}

export default TrainingProcess