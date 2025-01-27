'use client'
import React, { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'

// Import slides
import TitleSlide from '../slides/TitleSlide'
import WhatIsAISlide from '../slides/WhatIsAISlide'
import TimelineSlide from '../slides/TimelineSlide'
import HowMachineLearnSlide from '../slides/HowMachineLearnSlide'
import LearningVisualization from '../slides/LearningVisualization'
import OverfittingSlide from '../slides/OverfittingSlide'
import NeuralNetworkSlide from '../slides/NeuralNetworkArchitectureSlide'
import LLMSlide from '../slides/LLMSlide'
import LLMUseCasesSlide from '../slides/LLMUseCasesSlide'
import APIExampleSlide from '../slides/APIExampleSlide'
import PromptEngineeringSide from '../slides/PromptEngineeringSide'
import RAGSlide from '../slides/RAGSlide'
import LLMAgentSlide from '../slides/LLMAgentSlide'
import AIDevSkillsSlide from '../slides/AIDevSkillsSlide'
import AIAdvancedRequirementsSlide from '../slides/AIAdvancedRequirementsSlide'
const PresentationApp = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const slides = [
    { component: TitleSlide, title: 'פתיחה' },
    { component: WhatIsAISlide, title: 'מהי בינה מלאכותית?' },
    // { component: TimelineSlide, title: 'התפתחות הבינה המלאכותית' },
    { component: HowMachineLearnSlide, title: 'איך מכונות לומדות?' },
    { component: LearningVisualization, title: 'איך המודל לומד?' },
    { component: OverfittingSlide, title: 'Overfitting' },
    { component: NeuralNetworkSlide, title: 'רשתות נוירונים' },
    { component: LLMSlide, title: 'מודלי שפה גדולים' },
    { component: LLMUseCasesSlide, title: 'שימושים של LLM באפליקציות' },
    { component: APIExampleSlide, title: 'שימוש ב-API של OpenAI' },
    { component: PromptEngineeringSide, title: 'הכנת פרומפט' },
    { component: RAGSlide, title: 'RAG' },
    { component: LLMAgentSlide, title: 'סוכנים מבוססי LLM' },
    { component: AIDevSkillsSlide, title: 'להיות מפתח בעידן ה-AI' },
    { component: AIAdvancedRequirementsSlide, title: 'להעמיק בעולם ה-AI' },
    // נוסיף שקפים נוספים בהמשך
  ]

  const CurrentSlide = slides[currentSlideIndex].component

  const goToNextSlide = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    }
  }

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToPreviousSlide()
      } else if (event.key === 'ArrowLeft') {
        goToNextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlideIndex])

  return (
    <div className="min-h-screen bg-gray-900 text-white" dir="rtl">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4 flex justify-between items-center z-50">
        <button 
          onClick={goToPreviousSlide}
          disabled={currentSlideIndex === 0}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        <div className="text-lg font-bold">
          שקף {currentSlideIndex + 1} מתוך {slides.length}: {slides[currentSlideIndex].title}
        </div>
        
        <button 
          onClick={goToNextSlide}
          disabled={currentSlideIndex === slides.length - 1}
          className="p-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </nav>

      {/* Slide Content */}
      <div className="pt-16">
        <CurrentSlide />
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-4 right-4 text-sm text-gray-400">
        השתמש במקשי החצים ← → למעבר בין השקפים
      </div>
    </div>
  )
}

export default PresentationApp
