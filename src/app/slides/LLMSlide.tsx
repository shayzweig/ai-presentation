import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { Brain, BookOpen, Database, Lightbulb } from 'lucide-react';

const WordProbability = ({ word, probability }) => (
  <div className="flex items-center gap-2">
    <div className="w-24 text-right">{word}</div>
    <div className="relative flex-1 h-8 bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-500"
        style={{ width: `${probability}%` }}
      />
      <div className="absolute right-2 inset-y-0 flex items-center text-sm">
        {probability}%
      </div>
    </div>
  </div>
);

const LLMSlide = () => {
  const [currentScreen, setCurrentScreen] = useState(0); // 0: demo, 1: explanation, 2: limitations
  
  const nextWordProbabilities = [
    { word: "בבריכה", probability: 35 },
    { word: "בים", probability: 30 },
    { word: "הרבה", probability: 20 },
    { word: "בסיר", probability: 5 },
    { word: "ואכלתי", probability: 3 },
    { word: "הסתכל", probability: 0.1 }
  ];

  return (
    <BaseSlide
      title="מודל שפה גדול (LLM)"
      subtitle="איך המודל מבין ומייצר טקסט?"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        {currentScreen === 0 ? (
          <>
            {/* Basic Language Model Explanation */}
            <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="w-12 h-12 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">מהו מודל שפה?</h3>
                  <p className="text-gray-300">
                    מודל שפה הוא מערכת שמנסה לחזות את המילה הבאה בהינתן רצף של מילים קודמות.
                    המודל לומד את חוקי השפה ואת ההקשרים בין מילים מתוך דוגמאות רבות.
                  </p>
                </div>
              </div>
            </div>

            {/* Prediction Example */}
            <div className="grid grid-cols-2 gap-8 items-center bg-gray-800/50 rounded-lg p-8">
              <div className="text-2xl">
                אתמול בבוקר שחיתי...
              </div>
              <div className="space-y-3">
                <div className="text-lg mb-4">הסתברות למילה הבאה:</div>
                {nextWordProbabilities.map((item, index) => (
                  <WordProbability key={index} {...item} />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setCurrentScreen(1)}
                className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                מה מיוחד במודל שפה גדול?
              </button>
            </div>
          </>
        ) : currentScreen === 1 ? (
          <>
            {/* LLM Explanation */}
            <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">מודל שפה גדול - רשת נוירונים ענקית</h3>
              <div className="text-xl text-center mb-8 text-gray-300">
                רשת נוירונים עם מיליארדי עד טריליוני פרמטרים שאומנה על כמעט כל הטקסט שזמין באינטרנט
              </div>
              
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-center">חוקי השפה</h4>
                  <p className="text-gray-300 text-center">
                    המודל למד את כללי הדקדוק, המשמעות והשימוש בשפה
                  </p>
                </div>

                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <Database className="w-12 h-12 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-center">ידע עצום</h4>
                  <p className="text-gray-300 text-center">
                    המודל מכיל מידע רב מתחומים שונים שנאסף מכל האינטרנט
                  </p>
                </div>

                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <Lightbulb className="w-12 h-12 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-center">הסקת מסקנות</h4>
                  <p className="text-gray-300 text-center">
                    המודל מסוגל לנתח מידע ולהסיק מסקנות מתוך ההקשר
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setCurrentScreen(0)}
                className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                חזרה להדגמה
              </button>
              <button 
                onClick={() => setCurrentScreen(2)}
                className="px-6 py-3 bg-red-600 rounded-lg text-lg hover:bg-red-700 transition-colors"
              >
                אזהרה: מגבלות וסכנות
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Limitations and Risks */}
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center">חשוב לזכור: מגבלות וסכנות</h3>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">מה שהמודל לא ראה - הוא לא יודע</h4>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      המודל יכול לדעת רק מה שהיה בדאטה שהוא אומן עליו
                    </p>
                    <div className="bg-red-500/20 p-4 rounded-lg">
                      <div className="font-mono text-sm">
                        שאלה: מה קרה בישראל ב-2025?<br/>
                        תשובה: המודל ימציא או יטעה - הוא לא יכול לדעת!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4">המודל יכול להמציא בביטחון</h4>
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      המודל לא אומן להגיד "איני יודע" - הוא תמיד ינסה לענות
                    </p>
                    <div className="bg-red-500/20 p-4 rounded-lg">
                      <div className="font-mono text-sm">
                        שאלה: מי המציא את הטלפון הסלולרי ב-1832?<br/>
                        תשובה: המודל עלול להמציא סיפור משכנע אבל שגוי!
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-center">אז מה עושים?</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-gray-300">תמיד לאמת מידע ממקורות נוספים</p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-gray-300">להיות ביקורתיים כלפי התשובות</p>
                  </div>
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <p className="text-gray-300">להשתמש בכלי בחוכמה ובזהירות</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Buttons */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setCurrentScreen(0)}
                className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                חזרה להדגמה
              </button>
              <button 
                onClick={() => setCurrentScreen(1)}
                className="px-6 py-3 bg-blue-600 rounded-lg text-lg hover:bg-blue-700 transition-colors"
              >
                חזרה להסבר
              </button>
            </div>
          </>
        )}
      </div>
    </BaseSlide>
  );
};

export default LLMSlide;