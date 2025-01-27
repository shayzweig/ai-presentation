import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { ArrowRight } from 'lucide-react';

const NeuralNetworkSlide = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "הנוירון המלאכותי",
      description: "יחידת הבניין הבסיסית של רשתות נוירונים",
      imagePath: "/neural/single-neuron.png"
    },
    {
      title: "רשת נוירונים פשוטה",
      description: "מספר שכבות של נוירונים המחוברים ביניהם",
      imagePath: "/neural/simple-network.png"
    },
    {
      title: "ארכיטקטורות מתקדמות",
      description: "רשתות קונבולוציה לעיבוד תמונה וטרנספורמרים לעיבוד טקסט",
      images: [
        { path: "/neural/cnn.png", title: "רשת קונבולוציה (CNN)" },
        { path: "/neural/transformer.png", title: "ארכיטקטורת טרנספורמר" }
      ]
    }
  ];

  return (
    <BaseSlide
      title="מבנה רשתות נוירונים"
      subtitle="מנוירון בודד ועד ארכיטקטורות מורכבות"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב קודם
          </button>
          
          <div className="text-xl font-bold">
            {sections[activeSection].title}
          </div>
          
          <button
            onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
            disabled={activeSection === sections.length - 1}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב הבא
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8">
          {/* Left side - Image */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            {activeSection === 2 ? (
              <div className="space-y-4">
                {sections[activeSection].images.map((image, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="h-48 relative">
                      <img
                        src={image.path}
                        alt={image.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm text-gray-400">
                      {image.title}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="aspect-square relative">
                <img
                  src={sections[activeSection].imagePath}
                  alt={sections[activeSection].title}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Right side - Details */}
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{sections[activeSection].title}</h3>
              <p className="text-gray-300 text-lg">
                {sections[activeSection].description}
              </p>
            </div>

            {/* Additional explanations based on active section */}
            {activeSection === 0 && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">איך פועל נוירון?</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• מקבל קלטים מנוירונים אחרים</li>
                  <li>• לכל קלט יש משקל שמייצג את חשיבותו</li>
                  <li>• מחשב סכום משוקלל של הקלטים</li>
                  <li>• מפעיל פונקציית אקטיבציה על התוצאה</li>
                </ul>
              </div>
            )}

            {activeSection === 1 && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">מבנה הרשת</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• שכבת קלט - מקבלת את הנתונים</li>
                  <li>• שכבות חבויות - מעבדות את המידע</li>
                  <li>• שכבת פלט - מייצרת את התוצאה הסופית</li>
                  <li>• המידע זורם קדימה דרך השכבות</li>
                </ul>
              </div>
            )}

            {activeSection === 2 && (
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">רשתות מתקדמות</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• רשתות CNN - מזהות תבניות בתמונות</li>
                  <li>• טרנספורמרים - מבינים הקשר בטקסט</li>
                  <li>• משלבים מנגנוני תשומת לב (Attention)</li>
                  <li>• יכולת עיבוד מקבילי</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};

export default NeuralNetworkSlide;