import React from 'react';
import { SceneDisplay } from './SceneDisplay';
import { ChoiceSelector } from './ChoiceSelector';
import { EmotionInput } from './EmotionInput';
import { InventoryDisplay } from './InventoryDisplay';
import { EmotionLog } from './EmotionLog';
import { useGame } from '../contexts/GameContext';

export const GameContainer: React.FC = () => {
  const { currentScene } = useGame();
  
  return (
    <div className="game-container p-4 bg-gray-950/80 border border-cyan-900 rounded-lg shadow-lg max-w-3xl w-full mx-auto overflow-hidden">
      <div className="terminal-header flex justify-between items-center mb-4">
        <div className="text-xs text-cyan-500">SYS://STATION_LAMBDA/TERMINAL_ACCESS</div>
        <div className="controls flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      
      <SceneDisplay />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="left-column">
          <ChoiceSelector />
          <EmotionInput />
        </div>
        
        <div className="right-column">
          <InventoryDisplay />
          <EmotionLog />
          
          {currentScene.isEnding && (
            <div className="ending-badge mt-4 p-3 border border-yellow-700 bg-yellow-900/30 text-yellow-300 rounded animate-pulse">
              END REACHED: {currentScene.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};