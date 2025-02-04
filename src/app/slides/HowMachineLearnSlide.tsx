'use client'
import React, { useState } from 'react'
import BaseSlide from '../components/BaseSlide'
import { Database, Brain, LineChart } from 'lucide-react'
import TrainingProcess from './TrainingProcess'
import TestingProcess from './TestingProcess'

const StepCard = ({ icon: Icon, title, description, isActive }: {
  icon: any,
  title: string,
  description: string,
  isActive: boolean
}) => (
  <div className={`
    p-6 rounded-lg transition-all duration-300 cursor-pointer
    ${isActive 
      ? 'bg-blue-600 text-white transform scale-105' 
      : 'bg-white/10 backdrop-blur-sm text-gray-300'
    }
  `}>
    <div className="flex items-center gap-4 mb-3">
      <div className={`
        p-2 rounded-full
        ${isActive ? 'bg-blue-500' : 'bg-gray-700'}
      `}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-400'}`}>
      {description}
    </p>
  </div>
)

const DataExample = ({ number }: { number: string }) => (
  <div className="flex items-center gap-4 border-2 border-gray-700 rounded-lg p-4">
    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
      <img src={`/mnist/mnist-${number}.png`} alt={`MNIST digit ${number}`} className="w-12 h-12 object-contain" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-400">תיוג:</span>
      <span className="text-xl font-bold">{number}</span>
    </div>
  </div>
)

const DataExamples = () => (
  <div className="grid grid-cols-3 gap-4">
    <DataExample number="7" />
    <DataExample number="3" />
    <DataExample number="9" />
    <DataExample number="2" />
    <DataExample number="5" />
    <DataExample number="0" />
  </div>
)

const HowMachineLearnSlide = () => {
  const [activeStep, setActiveStep] = useState(0)
  
  const steps = [
    {
      icon: Database,
      title: "1. איסוף נתונים מתויגים",
      description: "אוספים תמונות של מספרים בכתב יד כשלכל תמונה יש תיוג של המספר הנכון."
    },
    {
      icon: Brain,
      title: "2. אימון המודל",
      description: "המודל לומד בתהליך איטרטיבי: חוזה, משווה לתיוג האמיתי, ומתעדכן בהתאם."
    },
    {
      icon: LineChart,
      title: "3. בדיקה ושיפור",
      description: "בודקים את הדיוק על דוגמאות חדשות שהמודל לא ראה באימון."
    }
  ]

  return (
    <BaseSlide 
      title="איך מכונות לומדות?"
      subtitle="בואו נראה דוגמא פשוטה של זיהוי מספרים בכתב יד (MNIST)"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation Steps */}
        <div className="grid grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index}
              onClick={() => setActiveStep(index)}
            >
              <StepCard 
                {...step}
                isActive={activeStep === index}
              />
            </div>
          ))}
        </div>

        {/* Content based on active step */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-center mb-4">
            {activeStep === 0 && "דוגמאות לנתונים מתויגים מתוך MNIST"}
            {activeStep === 1 && "תהליך האימון - המודל לומד מהטעויות שלו"}
            {activeStep === 2 && "בודקים את הביצועים על דוגמאות חדשות"}
          </h4>
          
          {activeStep === 0 && <DataExamples />}
          {activeStep === 1 && <TrainingProcess />}
          {activeStep === 2 && <TestingProcess />}
        </div>
      </div>
    </BaseSlide>
  )
}

export default HowMachineLearnSlide