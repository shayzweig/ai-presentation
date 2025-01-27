import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { Code, MessageSquare, FileText, ArrowRight } from 'lucide-react';

const PromptSection = ({ title, content, isActive }) => (
  <div className={`
    px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-4
    ${isActive ? 'bg-blue-600' : 'bg-white/10'}
  `}>
    <div className="font-semibold w-24">{title}</div>
    <div className="text-sm text-gray-300 flex-1">
      {content}
    </div>
  </div>
);

const ExamplePrompt = ({ title, example, output }) => (
  <div className="bg-gray-800/50 rounded-lg p-4 space-y-4">
    <h4 className="text-lg font-semibold">{title}</h4>
    <div className="bg-black/30 p-3 rounded text-gray-300 whitespace-pre-wrap text-left font-mono" dir="ltr">
      {example}
    </div>
    {output && (
      <div className="space-y-2">
        <div className="bg-black/30 p-3 rounded text-gray-300 whitespace-pre-wrap text-left font-mono" dir="ltr">
          {output}
        </div>
      </div>
    )}
  </div>
);

const PromptEngineeringSlide = () => {
  const [activeSection, setActiveSection] = useState('basic');
  
  const basicPromptExample = `Role: You are an expert in sentiment analysis

Task: Analyze the sentiment in the following text and classify it as either positive, negative, or neutral

Output Format:
{
  "sentiment": "positive/negative/neutral",
  "confidence": 0-100,
  "explanation": "brief explanation"
}

Examples:
Input: "This product really disappointed me, what a waste of money"
{
  "sentiment": "negative",
  "confidence": 90,
  "explanation": "Clear negative expressions - 'disappointed', 'waste'"
}

Input: {input}`;

  const chainOfThoughtExample = `Can you solve the following problem? 
Please think about it step by step.

There are 24 students in a class. The teacher divided them into groups of 4 students.
Each group received 3 balloons. Additionally, the teacher kept 2 balloons aside in case any balloon pops.
How many balloons are there in total?`;

  const chainOfThoughtOutput = `Let's solve this step by step:

1. First, let's calculate how many groups there are:
   * 24 students ÷ 4 students per group = 6 groups

2. Now let's calculate how many balloons all groups received:
   * 6 groups × 3 balloons per group = 18 balloons

3. Add the balloons the teacher kept aside:
   * 18 balloons + 2 balloons = 20 balloons

The final answer is 20 balloons.`;

  return (
    <BaseSlide
      title="הנדסת פרומפטים"
      subtitle="טכניקות לכתיבת הוראות אפקטיביות למודלי שפה"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">מבנה פרומפט בסיסי</h3>
            <div className="space-y-1">
              <PromptSection
                title="Role"
                content="הגדרת התפקיד או המומחיות של המודל"
                isActive={activeSection === 'role'}
              />
              <PromptSection
                title="Task"
                content="הגדרה ברורה של המשימה וההוראות לביצוע"
                isActive={activeSection === 'task'}
              />
              <PromptSection
                title="Format"
                content="הגדרת המבנה הרצוי של הפלט"
                isActive={activeSection === 'format'}
              />
              <PromptSection
                title="Few-shot"
                content="דוגמאות של קלט ופלט רצוי"
                isActive={activeSection === 'examples'}
              />
              <PromptSection
                title="Input"
                content="המידע שעליו יש לבצע את המשימה"
                isActive={activeSection === 'input'}
              />
            </div>
          </div>

          <ExamplePrompt
            title="דוגמא לפרומפט מובנה"
            example={basicPromptExample}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Chain of Thought - חשיבה צעד אחר צעד</h3>
            <p className="text-gray-300 mb-4">
              טכניקה שמנחה את המודל לחשוב באופן לוגי ומסודר על ידי פירוק המשימה לצעדים קטנים.
              זה מוביל לתוצאות מדויקות יותר, במיוחד במשימות מורכבות.
            </p>
          </div>

          <ExamplePrompt
            title="דוגמא ל-Chain of Thought"
            example={chainOfThoughtExample}
            output={chainOfThoughtOutput}
          />
        </div>
      </div>
    </BaseSlide>
  );
};

export default PromptEngineeringSlide;