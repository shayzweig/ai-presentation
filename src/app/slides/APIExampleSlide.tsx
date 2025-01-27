import React from 'react';
import BaseSlide from '../components/BaseSlide';
import { Code, Play, Check, AlertTriangle } from 'lucide-react';

const CodeBlock = ({ code, title }) => (
  <div className="bg-gray-900 rounded-lg p-4">
    <div className="flex items-center justify-between mb-2">
      <div className="text-sm text-blue-400">{title}</div>
    </div>
    <pre dir="ltr" className="text-sm text-gray-300 font-mono whitespace-pre-wrap">
      {code}
    </pre>
  </div>
);

const APIStep = ({ icon: Icon, title, description, code }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-full bg-blue-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
    {code && <CodeBlock code={code} title="דוגמת קוד" />}
  </div>
);

const APIExampleSlide = () => {
  const setupCode = `from openai import OpenAI

client = OpenAI(
    api_key="YOUR-API-KEY"  # מומלץ להשתמש במשתנה סביבה
)`;

  const apiCallCode = `def analyze_text(text: str) -> dict:
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": "אתה עוזר שמנתח טקסט ומסווג אותו לקטגוריות"
            },
            {
                "role": "user",
                "content": text
            }
        ],
        temperature=0.3,
    )
    
    return response.choices[0].message.content`;

  const apiUsageCode = `# דוגמא לשימוש בפונקציה
text = "המחשב שלי לא נדלק, אתמול עוד עבד"
result = analyze_text(text)

# תוצאה אפשרית:
# {
#     "category": "תקלת חומרה",
#     "urgency": "גבוהה",
#     "department": "תמיכה טכנית",
#     "initial_steps": [
#         "בדיקת חיבור לחשמל",
#         "בדיקת לחצן הפעלה"
#     ]
# }`;

  return (
    <BaseSlide
      title="שימוש ב-OpenAI API"
      subtitle="איך משלבים את היכולות של GPT באפליקציה?"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Important Note */}
        <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
          <div>
            <div className="font-semibold text-yellow-500">חשוב לדעת</div>
            <div className="text-sm text-gray-300">
              השימוש ב-API הוא בתשלום. יש לשמור על מפתח ה-API בצורה מאובטחת ולעולם לא לחשוף אותו בקוד גלוי.
              מומלץ להשתמש במשתני סביבה או במערכת ניהול סודות.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <APIStep
            icon={Code}
            title="1. הגדרת הלקוח"
            description="יצירת מופע של הלקוח עם מפתח ה-API"
            code={setupCode}
          />

          <APIStep
            icon={Play}
            title="2. יצירת פונקציה לניתוח טקסט"
            description="פונקציה שמקבלת טקסט ומחזירה ניתוח באמצעות ה-API"
            code={apiCallCode}
          />

          <APIStep
            icon={Check}
            title="3. שימוש בפונקציה"
            description="דוגמא לשימוש בפונקציה שיצרנו"
            code={apiUsageCode}
          />
        </div>
      </div>
    </BaseSlide>
  );
};

export default APIExampleSlide;