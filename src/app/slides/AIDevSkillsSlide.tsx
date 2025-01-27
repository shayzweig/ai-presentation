import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { Code, Bot, Lightbulb, BookOpen, Wrench} from 'lucide-react';

const SkillCard = ({ 
  icon: Icon, 
  title, 
  description, 
  tools 
}: { 
  icon: any, 
  title: string, 
  description: string,
  tools?: string[]
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
          {tools && (
            <div className="flex flex-wrap gap-2 justify-end">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const AIDevSkillsSlide = () => {
  const skills = [
    {
      icon: Code,
      title: "שפות תכנות מובילות",
      description: "התמקדות בשפות המובילות בתחום הבינה המלאכותית",
      tools: ["JavaScript", "Python"]
    },
    {
      icon: Bot,
      title: "כלי AI לפיתוח",
      description: "שימוש בכלים חכמים שמייעלים את תהליך הפיתוח",
      tools: ["Windsurf", "GitHub Copilot", "Cursor"]
    },
    {
      icon: Lightbulb,
      title: "תכנון ועיצוב מערכת",
      description: "התמקדות בתכנון הפתרון הכולל במקום בשורות קוד בודדות. חשיבה על הארכיטקטורה והאינטגרציה של הפתרון."
    },
    {
      icon: BookOpen,
      title: "הבנת קוד",
      description: "יכולת לקרוא, להבין ולתקן קוד של אחרים. חשוב במיוחד בעידן של קוד שנוצר על ידי AI."
    },
    {
      icon: Wrench,
      title: "אינטגרציה של AI",
      description: "הבנה כיצד לשלב כלי AI במוצרים קיימים, הערכת תוצאות והתמודדות עם מגבלות."
    }
  ];

  return (
    <BaseSlide
      title="להיות מפתח בעידן ה-AI"
      subtitle="כישורים ומיומנויות נדרשים"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
        
        <div className="mt-8 bg-blue-900/20 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">טיפ חשוב</h3>
          <p className="text-gray-300">
            הטכנולוגיה מתפתחת במהירות - חשוב להישאר מעודכנים ולהתנסות בכלים חדשים.
            התמקדו בהבנת העקרונות הבסיסיים ובבניית פרויקטים מעשיים.
          </p>
        </div>
      </div>
    </BaseSlide>
  );
};

export default AIDevSkillsSlide;