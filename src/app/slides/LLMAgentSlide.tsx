import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { 
  BrainCog, 
  Wrench, 
  Calendar, 
  Calculator, 
  Cloud, 
  Search, 
  ArrowRight 
} from 'lucide-react';

const IconWrapper = ({ children, active }: { children: React.ReactNode; active: boolean }) => (
  <div className={`p-4 rounded-full mb-4 ${active ? 'bg-blue-600' : 'bg-gray-700'}`}>
    {children}
  </div>
);

const AgentDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const userQueries = [
    "כמה זה 234 * 567?",
    "מה מזג האוויר בתל אביב?",
    "תקבע לי פגישה ליום רביעי ב-15:00"
  ];

  const tools = [
    { icon: <Calculator className="w-6 h-6 text-blue-400" />, name: "מחשבון" },
    { icon: <Cloud className="w-6 h-6 text-green-400" />, name: "מזג אוויר" },
    { icon: <Calendar className="w-6 h-6 text-purple-400" />, name: "יומן" }
  ];

  const agentSteps = [
    {
      title: "ניתוח המשימה",
      description: "הסוכן מבין את המשימה ומחליט איזה כלי נדרש",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "בחירת כלי",
      description: "הסוכן בוחר את הכלי המתאים מתוך הכלים הזמינים",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "ביצוע הפעולה",
      description: "הסוכן מפעיל את הכלי ומעבד את התוצאה",
      icon: <BrainCog className="w-6 h-6" />
    }
  ];

  return (
    <div className="space-y-8">
      {/* Query Selector */}
      <div className="grid grid-cols-3 gap-4">
        {userQueries.map((query, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              activeStep === idx ? 'bg-blue-600' : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            <div className="text-sm mb-2">דוגמא {idx + 1}</div>
            <div className="text-lg">{query}</div>
          </div>
        ))}
      </div>

      {/* Process Visualization */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <div className="flex justify-between items-center">
          {agentSteps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center">
              <IconWrapper active={idx <= activeStep}>
                {step.icon}
              </IconWrapper>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 max-w-xs">{step.description}</p>
              
              
            </div>
          ))}
        </div>

        {/* Selected Tool */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-900 rounded-lg p-6 flex items-center gap-4">
            <div className="p-3 rounded-full bg-blue-600">
              {tools[activeStep].icon}
            </div>
            <div>
              <div className="text-sm text-gray-400">הכלי שנבחר:</div>
              <div className="text-lg font-semibold">
                {tools[activeStep].name}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">איך זה עובד?</h3>
        <div className="space-y-2">
          <p className="text-gray-300">
            • הסוכן מקבל משימה ומנתח אותה בעזרת מודל שפה
          </p>
          <p className="text-gray-300">
            • בהתאם למשימה, הסוכן בוחר את הכלי המתאים מתוך ארגז הכלים שלו
          </p>
          <p className="text-gray-300">
            • הסוכן מפעיל את הכלי, מעבד את התוצאה ומחזיר תשובה למשתמש
          </p>
        </div>
      </div>
    </div>
  );
};

const LLMAgentsSlide = () => {
  return (
    <BaseSlide
      title="סוכנים מבוססי LLM"
      subtitle="איך מודל שפה יכול להפעיל כלים ולקבל החלטות?"
    >
      <div className="max-w-6xl mx-auto">
        <AgentDemo />
      </div>
    </BaseSlide>
  );
};

export default LLMAgentsSlide;