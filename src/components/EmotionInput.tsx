import React, { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { EMOTION_COLORS } from '../data/emotionKeywords';

export const EmotionInput: React.FC = () => {
  const { currentScene, processEmotion, currentEmotion } = useGame();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      processEmotion(input);
      setInput('');
    }
  };

  // Only show when the current scene has an emotion prompt
  if (!currentScene.emotionPrompt) {
    return null;
  }

  return (
    <div className="emotion-input mt-4">
      <div className="mb-2 text-md font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
        EMOTIONAL STATUS:
      </div>
      
      <div className={`current-emotion mb-2 ${EMOTION_COLORS[currentEmotion]}`}>
        Current emotional state: <span className="font-bold">{currentEmotion}</span>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="mb-2 text-sm text-cyan-100">{currentScene.emotionPrompt}</div>
        
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-gray-900 border border-cyan-900 text-white p-2 focus:outline-none focus:border-cyan-500"
            placeholder="Describe how you feel..."
          />
          <button
            type="submit"
            className="ml-2 bg-cyan-900 hover:bg-cyan-800 text-white px-4 py-2 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};