'use client'
import React, { useState, useEffect } from 'react'
import BaseSlide from '../components/BaseSlide'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  delay: number
  isLeft?: boolean
}

const TimelineItem = ({ year, title, description, delay, isLeft = false }: TimelineItemProps) => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div 
      className={`flex items-center gap-4 ${isLeft ? 'flex-row-reverse' : ''} transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="text-xl font-bold mb-1">{year}</div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
      
      {/* Timeline Line and Dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="w-1 h-16 bg-blue-500/50"></div>
      </div>
      
      {/* Empty space for alignment */}
      <div className="flex-1"></div>
    </div>
  )
}

const TimelineSlide = () => {
  const timelineEvents = [
    {
      year: "1950",
      title: "מבחן טיורינג",
      description: "אלן טיורינג מציע מבחן לקביעה האם מכונה יכולה לחשוב כמו בן אדם",
      delay: 200
    },
    {
      year: "1956",
      title: "הולדת התחום",
      description: "כנס דרטמות' - המונח 'בינה מלאכותית' נטבע לראשונה",
      delay: 400
    },
    {
      year: "1970-1980",
      title: "מערכות מומחה",
      description: "פיתוח מערכות שמחקות מומחים בתחומים ספציפיים כמו רפואה ומדע",
      delay: 600
    },
    {
      year: "1990-2000",
      title: "למידת מכונה",
      description: "התפתחות אלגוריתמים שמאפשרים למחשבים ללמוד מדוגמאות",
      delay: 800
    },
    {
      year: "2010-2015",
      title: "למידה עמוקה",
      description: "פריצות דרך ברשתות נוירונים עמוקות ויכולות זיהוי תמונה ושפה",
      delay: 1000
    },
    {
      year: "2018-2022",
      title: "מודלי שפה גדולים",
      description: "GPT, BERT ודומיהם משנים את האופן בו מחשבים מבינים ומייצרים שפה",
      delay: 1200
    },
    {
      year: "2022-היום",
      title: "AI בכל מקום",
      description: "ChatGPT, Midjourney ודומיהם הופכים את הבינה המלאכותית לנגישה לכולם",
      delay: 1400
    }
  ]

  return (
    <BaseSlide 
      title="התפתחות הבינה המלאכותית"
      subtitle="ציר זמן של התפתחות התחום"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {timelineEvents.map((event, index) => (
          <TimelineItem 
            key={index}
            {...event}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </BaseSlide>
  )
}

export default TimelineSlide