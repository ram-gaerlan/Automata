import React, { useState, useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { EMOTION_COLORS } from '../data/emotionKeywords';

export const SceneDisplay: React.FC = () => {
  const { 
    currentScene, 
    currentEmotion,
    message 
  } = useGame();
  
  const [displayedDescription, setDisplayedDescription] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  // Terminal typing effect for the scene description
  useEffect(() => {
    setIsTyping(true);
    setDisplayedDescription("");
    
    let i = 0;
    const typingSpeed = 30; // milliseconds per character
    
    const typingInterval = setInterval(() => {
      if (i < currentScene.description.length) {
        setDisplayedDescription(prev => prev + currentScene.description.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [currentScene]);

  return (
    <div className="scene-display">
      <div className="mb-4 text-xl font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
        <span className="text-cyan-500">LOCATION:</span> {currentScene.title}
      </div>
      
      <div className="terminal-text relative">
        <div className="mb-6 min-h-[100px] font-mono text-lg leading-relaxed whitespace-pre-wrap">
          {displayedDescription}
          {isTyping && <span className="cursor inline-block w-2 h-4 bg-cyan-300 ml-1 animate-blink"></span>}
        </div>
        
        {message && (
          <div className={`message p-4 mb-4 border border-gray-700 bg-gray-900/50 rounded-lg ${EMOTION_COLORS[currentEmotion]} animate-fadeIn`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};