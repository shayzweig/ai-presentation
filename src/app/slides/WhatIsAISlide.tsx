'use client'
import React, { useState, useEffect } from 'react'
import BaseSlide from '../components/BaseSlide'

interface ExampleCardProps {
  images: { src: string; alt: string }[]
  title: string
  description: string
  delay: number
}

const ExampleCard = ({ images, title, description, delay }: ExampleCardProps) => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  
  return (
    <div 
      className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-500 transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex gap-2">
          {images.map((image, index) => (
            <div key={index} className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-10 h-10 object-contain"
              />
            </div>
          ))}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

const WhatIsAISlide = () => {
  const examples = [
    {
      images: [
        { src: '/chatgpt-logo.png', alt: 'ChatGPT Logo' },
        { src: '/siri-logo.png', alt: 'Siri Logo' }
      ],
      title: "צ'אט ועוזרים וירטואליים",
      description: "ChatGPT, Siri ודומיהם עוזרים לנו בכתיבה, למידה פתרון בעיות והתמודדות עם משימות יומיומיות.",
      delay: 200
    },
    {
      images: [
        { src: '/midjourney-logo.png', alt: 'Midjourney Logo' }
      ],
      title: "עיבוד תמונה",
      description: "זיהוי פנים בטלפון, פילטרים בסנאפצ'ט, יצירת תמונות ב-Midjourney ואפילו ניתוח אוטומטי של אירועי ספורט.",
      delay: 400
    },
    {
      images: [
        { src: '/irobot-logo.png', alt: 'iRobot Logo' },
        { src: '/tesla-logo.png', alt: 'Tesla Logo' }
      ],
      title: "רובוטיקה ומוביליות",
      description: "מכוניות אוטונומיות מתחילות להיות דבר שבשגרה, רובוטים מבצעים משימות החל מנקיון הבית ועד להרכבת רכיבית במפעלים.",
      delay: 600
    },
    {
      images: [
        { src: '/netflix-logo.png', alt: 'Netflix Logo' },
        { src: '/spotify-logo.png', alt: 'Spotify Logo' }
      ],
      title: "המלצות מותאמות אישית",
      description: "ספוטיפיי ונטפליקס משתמשים ב-AI כדי להמליץ על תכנים חדשים בהתאם לטעם האישי",
      delay: 800
    },
    {
      images: [
        { src: '/google-logo.png', alt: 'Google Logo' }
      ],
      title: "חיפוש מתקדם",
      description: "מנועי חיפוש מבינים את הכוונה שלנו ומציגים תוצאות רלוונטיות",
      delay: 1000
    },
    {
      images: [
        { src: '/gmail-logo.png', alt: 'Gmail Logo' },
        { src: '/whatsapp-logo.png', alt: 'WhatsApp Logo' }
      ],
      title: "אפליקציות יומיומיות",
      description: "תיקון שגיאות כתיב, תרגום אוטומטי, סינון ספאם בג'ימייל",
      delay: 1200
    }
  ]

  return (
    <BaseSlide 
      title="מהי בינה מלאכותית?"
      subtitle="היא כבר חלק בלתי נפרד מחיי היומיום שלנו"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <ExampleCard key={index} {...example} />
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-300">
        <p>והדוגמאות רק הולכות ומתרבות...</p>
      </div>
    </BaseSlide>
  )
}

export default WhatIsAISlide