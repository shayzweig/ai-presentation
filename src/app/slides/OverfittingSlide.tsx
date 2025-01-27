import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { ArrowRight, AlertTriangle } from 'lucide-react';

const FaceExample = ({ imageSrc, correct, showResult = true }) => (
  <div className={`
    p-4 rounded-lg transition-all duration-300
    ${showResult 
      ? (correct ? 'bg-green-500/20' : 'bg-red-500/20') 
      : 'bg-white/10'
    }
  `}>
    <div className="w-24 h-24 relative">
      <img 
        src={imageSrc} 
        alt="Face example"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    {showResult && (
      <div className={`text-sm mt-2 text-center ${correct ? 'text-green-400' : 'text-red-400'}`}>
        {correct ? '✓' : '✗'}
      </div>
    )}
  </div>
);

const OverfittingSlide = () => {
  const [step, setStep] = useState(0);

  const trainingFaces = [
    { imageSrc: '/faces/front-1.jpg', correct: true },
    { imageSrc: '/faces/front-2.jpg', correct: true },
    { imageSrc: '/faces/front-3.jpg', correct: true },
    { imageSrc: '/faces/front-4.jpg', correct: true },
    { imageSrc: '/faces/front-5.jpg', correct: true },
    { imageSrc: '/faces/front-6.jpg', correct: true }
  ];

  const testFaces = [
    { imageSrc: '/faces/front-new-1.jpg', sideView: false, correct: true },
    { imageSrc: '/faces/front-new-2.jpg', sideView: false, correct: true },
    { imageSrc: '/faces/side-1.jpg', sideView: true, correct: false }
  ];

  const steps = [
    {
      title: "דוגמאות האימון",
      description: "המודל לומד מתמונות פנים המצולמות מלפנים"
    },
    {
      title: "מה המודל למד?",
      description: "המודל זיהה תבנית: 'בפנים יש שתי עיניים סימטריות בחלק העליון'"
    },
    {
      title: "בואו נבדוק על דוגמאות חדשות",
      description: "האם המודל באמת למד לזהות פנים?"
    },
    {
      title: "Overfitting - התאמת יתר",
      description: "המודל למד תבנית ספציפית מדי ומתקשה להכליל למקרים חדשים"
    }
  ];

  return (
    <BaseSlide
      title="התאמת יתר והכללה"
      subtitle="למה חשוב שהמודל ילמד תבניות כלליות?"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב קודם
          </button>
          
          <div className="text-xl font-bold">
            {steps[step].title}
          </div>
          
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב הבא
          </button>
        </div>

        {/* Description */}
        <div className="text-center text-lg text-gray-300">
          {steps[step].description}
        </div>

        {/* Training Examples */}
        {(step === 0 || step === 1) && (
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl mb-4">סט אימון</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {trainingFaces.map((face, idx) => (
                <FaceExample 
                  key={idx} 
                  {...face}
                  showResult={step === 1}
                />
              ))}
            </div>
          </div>
        )}

        {/* Model's Rule Visualization */}
        {step === 1 && (
          <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6 mt-6">
            <div className="text-lg font-semibold mb-2">החוק שהמודל למד:</div>
            <div className="flex items-center gap-4 text-lg">
              <img 
                src={trainingFaces[0].imageSrc} 
                alt="Example face"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <ArrowRight className="w-6 h-6" />
              <div className="bg-white/10 p-4 rounded-lg">
                "אם יש שתי עיניים סימטריות בחלק העליון = פנים"
              </div>
            </div>
          </div>
        )}

        {/* Test Examples */}
        {(step === 2 || step === 3) && (
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl mb-4">דוגמאות בדיקה</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testFaces.map((face, idx) => (
                <div key={idx} className="text-center">
                  <FaceExample {...face} />
                  {step === 3 && face.sideView && (
                    <div className="mt-4 text-red-400 flex items-center justify-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span>המודל נכשל בזיהוי תמונת פרופיל</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explanation for Overfitting */}
        {step === 3 && (
          <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">מה קרה פה?</h3>
            <ul className="space-y-3 text-lg">
              <li>• המודל למד חוק ספציפי מדי מדוגמאות האימון</li>
              <li>• הוא לא למד את המושג הכללי של "פנים"</li>
              <li>• זוהי דוגמא ל-Overfitting: המודל "התאים את עצמו יותר מדי" לדוגמאות האימון</li>
              <li>• האתגר: למצוא את האיזון הנכון בין למידת התבניות לבין יכולת ההכללה</li>
            </ul>
          </div>
        )}
      </div>
    </BaseSlide>
  );
};

export default OverfittingSlide;