import React, { useState } from 'react';
import BaseSlide from '../components/BaseSlide';
import { MessageSquare, FileText, ListTree, Database, MessagesSquare, HelpCircle } from 'lucide-react';

const ExampleBox = ({ input, output }) => (
  <div className="bg-gray-900 rounded-lg p-4 space-y-3">
    <div>
      <div className="text-sm text-blue-400 mb-1">קלט:</div>
      <div className="text-gray-300 bg-gray-800 p-2 rounded">{input}</div>
    </div>
    <div>
      <div className="text-sm text-green-400 mb-1">פלט:</div>
      <div className="text-gray-300 bg-gray-800 p-2 rounded whitespace-pre-wrap">{output}</div>
    </div>
  </div>
);

const UseCase = ({ icon: Icon, title, description, input, output, isActive, onClick }) => (
  <div 
    className={`
      cursor-pointer transition-all duration-300
      ${isActive 
        ? 'bg-blue-600 transform scale-105' 
        : 'bg-white/10 hover:bg-white/20'
      } 
      rounded-lg p-6 space-y-4
    `}
    onClick={onClick}
  >
    <div className="flex items-center gap-4">
      <div className={`
        p-3 rounded-full
        ${isActive ? 'bg-blue-500' : 'bg-gray-700'}
      `}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    
    <p className="text-gray-300 text-sm">
      {description}
    </p>

    {isActive && input && output && (
      <div className="mt-4">
        <ExampleBox input={input} output={output} />
      </div>
    )}
  </div>
);

const LLMUseCasesSlide = () => {
  const [activeRow, setActiveRow] = useState(0);
  
  // Helper to determine if case should be expanded based on its index and active row
  const shouldExpand = (index) => {
    const itemRow = Math.floor(index / 3);
    return itemRow === activeRow;
  };

  const useCases = [
    {
      icon: MessageSquare,
      title: "צ'אטבוט מותאם",
      description: "מתן תשובות לשאלות, מתן שירות וביצוע פעולות",
      input: `שאלת משתמש: "איך אני יכול לשנות את הסיסמה שלי במערכת?"`,
      output: `1. היכנס להגדרות המשתמש
2. לחץ על "אבטחה"
3. בחר "שינוי סיסמה"
4. הזן את הסיסמה הישנה והחדשה
5. לחץ "שמור"`
    },
    {
      icon: FileText,
      title: "חילוץ מידע",
      description: "הוצאת מידע מובנה מטקסט חופשי",
      input: `"פגישה עם דני כהן ביום שלישי ב-15:30 בקפה ארומה ברחוב הרצל 15 בתל אביב"`,
      output: `{
  "participants": ["Dani Cohen"],
  "date": "Tuesday",
  "time": "15:30",
  "location": "Aroma Cafe",
  "address": "15 Herzl St., Tel Aviv"
}`
    },
    {
      icon: ListTree,
      title: "סיווג לקטגוריות",
      description: "מיון וסיווג טקסט לקטגוריות מוגדרות מראש",
      input: `"המחשב שלי לא נדלק בכלל, אתמול עוד עבד ופתאום הפסיק"`,
      output: `קטגוריה ראשית: תקלות חומרה
תת-קטגוריה: בעיות הדלקה
דחיפות: גבוהה
מחלקה מטפלת: תמיכה טכנית`
    },
    {
      icon: Database,
      title: "תרגום לשאילתות",
      description: "המרת שאלות בשפה טבעית לשאילתות SQL",
      input: `"כמה הזמנות ביצע כל לקוח בחודש האחרון?"`,
      output: `SELECT 
  customers.name,
  COUNT(orders.id) as order_count
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE orders.date >= DATE_SUB(NOW(), INTERVAL 1 MONTH)
GROUP BY customers.id`
    },
    {
      icon: MessagesSquare,
      title: "סיכום טקסטים",
      description: "יצירת תקציר מטקסט ארוך תוך שמירה על הנקודות המרכזיות",
      input: `[טקסט ארוך של 5 פסקאות המתאר מחקר חדש בתחום הבינה המלאכותית]`,
      output: `נקודות מרכזיות:
• פיתוח שיטה חדשה לאימון מודלים
• שיפור של 25% בביצועים
• צמצום משמעותי בזמני אימון
• יישומים אפשריים בתעשייה`
    },
    {
      icon: HelpCircle,
      title: "ניתוח קוד ומציאת באגים",
      description: "זיהוי בעיות אבטחה, שיפור ביצועים והצעות לשיפור הקוד",
      input: `function getUserData(userId) {
  const query = 'SELECT * FROM users WHERE id = ' + userId;
  return db.execute(query);
}`,
      output: `זוהה באג אבטחה: SQL Injection
הבעיה: הקוד מחבר את ה-userId ישירות לשאילתה, מה שמאפשר להזריק קוד SQL זדוני.
לדוגמה: אם userId = "1 OR 1=1", השאילתה תחזיר את כל המשתמשים.

המלצה לתיקון:
• להשתמש בפרמטרים מוכנים (Prepared Statements)
• לבצע בדיקת תקינות על הקלט
• לוודא שה-userId הוא מספר`
    }
  ];

  return (
    <BaseSlide
      title="LLM הוא כלי שכל מפתח צריך להכיר ולהשתמש בו"
      subtitle="דוגמאות לשימושים נפוצים בפיתוח"
    >
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCases.map((useCase, index) => (
          <UseCase
            key={index}
            {...useCase}
            isActive={shouldExpand(index)}
            onClick={() => setActiveRow(Math.floor(index / 3))}
          />
        ))}
      </div>
    </BaseSlide>
  );
};

export default LLMUseCasesSlide;