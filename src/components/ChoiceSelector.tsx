import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Choice } from '../data/gameData';

export const ChoiceSelector: React.FC = () => {
  const { currentScene, makeChoice } = useGame();

  return (
    <div className="choice-selector mt-4">
      <div className="mb-2 text-md font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
        OPTIONS:
      </div>
      
      <div className="space-y-3">
        {currentScene.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => makeChoice(choice)}
            className="w-full text-left p-3 rounded border flex justify-between items-center
              transition-all duration-300 border-cyan-800 bg-gray-900/50 
              hover:bg-gray-800 hover:border-cyan-500 cursor-pointer"
          >
            <span className="text-md">{choice.text}</span>
            <div className="text-xl text-cyan-300">&raquo;</div>
          </button>
        ))}
      </div>
    </div>
  );
};