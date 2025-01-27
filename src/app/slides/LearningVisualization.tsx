import React, { useState, useEffect } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import BaseSlide from '../components/BaseSlide';

const LearningVisualization = () => {
  // Sample data points
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 4.3 },
    { x: 3, y: 5.5 },
    { x: 4, y: 8.1 },
    { x: 5, y: 9.1 },
    { x: 6, y: 12.3 }
  ];

  // Learning states
  const learningStates = [
    {
      step: 0,
      a: 0.5,
      b: 1,
      title: "אתחול הפרמטרים",
      description: "המודל מתחיל עם פרמטרים אקראיים",
      error: null
    },
    {
      step: 1,
      a: 0.5, // Same as initial step
      b: 1,   // Same as initial step
      title: "חישוב שגיאה",
      description: "חישוב סכום ריבועי השגיאות",
      error: 45.2,
      showMSE: true
    },
    {
      step: 2,
      a: 1.4,
      b: 0.8,
      title: "עדכון פרמטרים",
      description: "שינוי הפרמטרים בכיוון שמקטין את השגיאה",
      showMSE: true
    },
    {
      step: 3,
      a: 2,
      b: 0,
      title: "התכנסות",
      description: "המודל מצא פרמטרים טובים שמתאימים לנתונים",
      showMSE: true
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrors(true);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const currentState = learningStates[currentStep];

  const getLineData = () => {
    const { a, b } = currentState;
    // Create points for line from min to max x value
    const xMin = Math.min(...data.map(p => p.x)) - 1;
    const xMax = Math.max(...data.map(p => p.x)) + 1;
    return [
      { x: xMin, y: a * xMin + b },
      { x: xMax, y: a * xMax + b }
    ];
  };

  // Error lines rendering
  const renderErrorLines = () => {
    if (!showErrors || currentStep === 0) return null;
    
    const { a, b } = currentState;
    return data.map((point, index) => {
      const predictedY = a * point.x + b;
      return (
        <ReferenceLine
          key={index}
          segment={[
            { x: point.x, y: point.y },
            { x: point.x, y: predictedY }
          ]}
          stroke="#ef4444"
          strokeWidth={2}
          strokeDasharray="5 5"
          ifOverflow="visible"
        />
      );
    });
  };

  return (
    <BaseSlide
      title="תהליך הלמידה"
      subtitle="דוגמא של רגרסיה לינארית - התאמת קו ישר לנתונים"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main visualization */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  stroke="#fff"
                  strokeWidth={2}
                  tick={{ fill: '#fff', fontSize: 14 }}
                  domain={[0, 7.5]}
                >
                  <Label 
                    value="מספר הילדים בכיתה" 
                    position="bottom" 
                    fill="#fff"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  />
                </XAxis>
                <YAxis 
                  type="number"
                  dataKey="y"
                  stroke="#fff"
                  strokeWidth={2}
                  tick={{ fill: '#fff', fontSize: 14, dx: -20 }}
                  domain={[0, 15]}
                >
                  <Label 
                    value="מספר העפרונות בכיתה" 
                    angle={-90} 
                    position="center" 
                    fill="#fff"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                    dx={-20}
                  />
                </YAxis>

                {/* Remove the defs and use elements, directly render error lines */}
                {renderErrorLines()}

                {/* Regression line */}
                <Scatter
                  data={getLineData()}
                  line={{ stroke: '#3b82f6', strokeWidth: 3 }}
                  lineType="fitting"
                  fill="none"
                  shape={() => null}
                />

                {/* Data points */}
                <Scatter
                  data={data}
                  fill="#fff"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  r={6}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model equation and parameters */}
        <div className="text-center space-y-4">
          <div className="text-xl">
            <span className="font-mono">y = {currentState.a.toFixed(1)}x + {currentState.b.toFixed(1)}</span>
          </div>
          {currentStep > 0 && (
            <div className="space-y-2">
              {currentState.showMSE ? (
                <div className="text-gray-300">
                  <div className="text-lg mb-2">חישוב סכום ריבועי השגיאות:</div>
                  <div className="font-mono bg-blue-900/20 p-4 rounded-lg" dir="ltr">
                    <div className="flex flex-wrap items-center gap-2">
                      {data.map((point, idx) => {
                        const predicted = currentState.a * point.x + currentState.b;
                        const error = predicted - point.y;
                        const errorSquared = error * error;
                        return (
                          <span key={idx} className="whitespace-nowrap">
                            (({currentState.a.toFixed(1)}×{point.x}+{currentState.b.toFixed(1)}) - {point.y})² {idx < data.length - 1 ? " +" : ""}
                          </span>
                        );
                      })}
                      <div className="text-lg mt-2">
                        = {data.reduce((sum, point) => {
                          const predicted = currentState.a * point.x + currentState.b;
                          return sum + Math.pow(predicted - point.y, 2);
                        }, 0).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-300">
                  שגיאה: {currentState.error?.toFixed(2)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setShowErrors(false);
              setCurrentStep(Math.max(0, currentStep - 1));
            }}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב קודם
          </button>
          
          <div className="text-gray-300">
            שלב {currentStep + 1} מתוך {learningStates.length}
          </div>
          
          <button
            onClick={() => {
              setShowErrors(false);
              setCurrentStep(Math.min(learningStates.length - 1, currentStep + 1));
            }}
            disabled={currentStep === learningStates.length - 1}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            שלב הבא
          </button>
        </div>
      </div>
    </BaseSlide>
  );
};

export default LearningVisualization;