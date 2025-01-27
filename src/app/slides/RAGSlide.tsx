import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { Database, Search, FileText, MessagesSquare, ChevronLeft } from 'lucide-react';

const ProcessStep = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  isLast = false,
  onClick 
}) => (
  <div className="flex flex-col items-center">
    <div 
      className={`
        p-4 rounded-lg transition-all duration-300 w-52 cursor-pointer hover:bg-blue-500
        ${isActive ? 'bg-blue-600' : 'bg-white/10'}
      `}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`
          p-2 rounded-full
          ${isActive ? 'bg-blue-500' : 'bg-gray-700'}
        `}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">
        {description}
      </p>
    </div>
    {!isLast && (
      <div className="h-8 flex items-center">
        <ChevronLeft className="w-6 h-6 text-blue-400" />
      </div>
    )}
  </div>
);

const DocumentExample = ({ title, content, isHighlighted }) => (
  <div className={`
    p-3 rounded border transition-all duration-300
    ${isHighlighted 
      ? 'border-blue-500 bg-blue-500/20' 
      : 'border-gray-700 bg-gray-800/50'
    }
  `}>
    <div className="text-sm font-semibold mb-1">{title}</div>
    <div className="text-xs text-gray-300">{content}</div>
  </div>
);

const RAGSlide = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: Search,
      title: "1. חיפוש וקידוד",
      description: "השאילתה מקודדת ומתבצע חיפוש דמיון במאגר"
    },
    {
      icon: FileText,
      title: "2. שליפת מידע",
      description: "המסמכים הרלוונטיים נשלפים מהמאגר"
    },
    {
      icon: MessagesSquare,
      title: "3. יצירת תשובה",
      description: "המודל משלב את המידע בתשובה",
      isLast: true
    }
  ];

  const goToNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goToPreviousStep = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <BaseSlide
      title="העשרת מודל שפה במידע חיצוני"
      subtitle="Retrieval Augmented Generation (RAG)"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Process Flow */}
        <div className="flex justify-center gap-8 items-start">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              {...step}
              isActive={index === activeStep}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>

        {/* Documents Database and Query */}
        <div className="mt-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            {/* User Query at the top */}
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <div className="text-sm font-semibold mb-2">שאילתת משתמש:</div>
              <div className="text-gray-300">
                "איך הארי פוטר הצליח להציל את סיריוס בלק?"
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-4">מאגר מסמכים</h3>
            
            {/* Documents Grid */}
            <div className="grid grid-cols-3 gap-4">
              <DocumentExample
                title="פרק 12"
                content="תיאור השיעור הראשון של הארי בנושא שומרי הזמן..."
                isHighlighted={activeStep >= 1}
              />
              <DocumentExample
                title="פרק 16"
                content="תיאור המפגש של הארי והרמיוני עם סיריוס בבקתה המצווחת..."
                isHighlighted={activeStep >= 1}
              />
              <DocumentExample
                title="פרק 21"
                content="תיאור השימוש במחולל הזמן להצלת סיריוס וכנף-אבן..."
                isHighlighted={activeStep >= 1}
              />
              <DocumentExample
                title="פרק 19"
                content="תיאור הדיון בין דמבלדור להארי והרמיוני על הזמן..."
                isHighlighted={activeStep >= 1}
              />
              <DocumentExample
                title="פרק 15"
                content="תיאור החקירה של סיריוס בלק במשרד הקסמים..."
                isHighlighted={false}
              />
              <DocumentExample
                title="פרק 17"
                content="תיאור הבריחה של סיריוס על גבי כנף-אבן..."
                isHighlighted={false}
              />
            </div>
          </div>

          {/* Model Response */}
          {activeStep >= 2 && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 mt-6">
              <div className="text-sm font-semibold mb-2">תשובת המודל:</div>
              <div className="text-gray-300">
                "הארי פוטר והרמיוני השתמשו במחולל הזמן שקיבלו מפרופסור מקגונגל. הם חזרו בזמן שלוש שעות, הצילו את כנף-אבן מההוצאה להורג, ואז השתמשו בו כדי לאפשר לסיריוס לברוח מהמגדל המערבי של הוגוורטס..."
              </div>
            </div>
          )}
          </div>
        </div>

        {/* RAG Benefits - Only shown in final step */}
        {activeStep === 3 && (
          <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold mb-4">יתרונות RAG</h3>
            <div className="grid grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-300">
                <li>• מאפשר למודל לעבוד עם מידע עדכני שלא היה בסט האימון</li>
                <li>• מבטיח שהמודל מתבסס רק על מידע מאומת</li>
              </ul>
              <ul className="space-y-2 text-gray-300">
                <li>• מאפשר להתאים את המודל לדומיין ספציפי</li>
                <li>• מקטין הלוצינציות ותשובות שגויות</li>
              </ul>
            </div>
          </div>
        )}
    </BaseSlide>
  );
};

export default RAGSlide;