import React from 'react';
import BaseSlide from '../components/BaseSlide';
import { Calculator, Database, Library, Rocket } from 'lucide-react';

const RequirementCard = ({ 
  icon: Icon, 
  title, 
  description, 
  examples 
}: { 
  icon: any, 
  title: string, 
  description: string,
  examples: string[]
}) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-600 rounded-lg">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-gray-300 mb-2">{description}</p>
          </div>
          {examples && (
            <div className="flex flex-wrap gap-2 justify-end">
              {examples.map((example, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-200"
                >
                  {example}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const AIAdvancedRequirementsSlide = () => {
  const requirements = [
    {
      icon: Calculator,
      title: "בסיס מתמטי",
      description: "הבנה של מושגים מתמטיים בסיסיים החיוניים לפיתוח מודלים",
      examples: [
        "אלגברה לינארית",
        "חדו״א",
        "הסתברות"
      ]
    },
    {
      icon: Database,
      title: "עבודה עם נתונים",
      description: "יכולת לעבד ולנתח מידע בצורה יעילה",
      examples: [
        "ניקוי נתונים",
        "סט אימון",
        "הערכת ביצועים"
      ]
    },
    {
      icon: Library,
      title: "ספריות וכלים",
      description: "הכרת הכלים המובילים בתחום",
      examples: [
        "PyTorch",
        "scikit-learn",
        "Hugging Face"
      ]
    },
    {
      icon: Rocket,
      title: "התנסות מעשית",
      description: "בניית פרויקטים והתמודדות עם אתגרים אמיתיים",
      examples: [
        "מודלים פשוטים",
        "Kaggle",
        "קוד פתוח"
      ]
    }
  ];

  return (
    <BaseSlide
      title="להעמיק בעולם ה-AI"
      subtitle="דרישות והמלצות למי שרוצה להתמקצע בתחום"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {requirements.map((req, index) => (
            <RequirementCard key={index} {...req} />
          ))}
        </div>
        
        <div className="mt-8 bg-blue-900/20 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">נקודה למחשבה</h3>
          <p className="text-gray-300">
            אין צורך להתחיל עם כל הידע הזה - אפשר להתקדם בהדרגה.
            התחילו מהבסיס והתקדמו לפי העניין והצורך שלכם.
          </p>
        </div>
      </div>
    </BaseSlide>
  );
};

export default AIAdvancedRequirementsSlide;