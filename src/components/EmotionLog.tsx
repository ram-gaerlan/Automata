import React from 'react';
import { useGame } from '../contexts/GameContext';
import { EMOTION_COLORS } from '../data/emotionKeywords';

export const EmotionLog: React.FC = () => {
  const { emotionLog } = useGame();

  if (emotionLog.length === 0) {
    return null;
  }

  return (
    <div className="emotion-log mt-4">
      <div className="mb-2 text-md font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
        EMOTIONAL HISTORY:
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex space-x-2">
          {emotionLog.map((emotion, index) => (
            <div 
              key={index} 
              className={`
                px-2 py-1 rounded text-xs whitespace-nowrap
                ${EMOTION_COLORS[emotion]} 
                border border-gray-700
              `}
            >
              {emotion}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};