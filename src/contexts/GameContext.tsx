import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  EmotionType, 
  detectEmotion, 
  EMOTION_RESPONSES 
} from '../data/emotionKeywords';
import { 
  Scene, 
  SCENES, 
  InventoryItem, 
  Choice 
} from '../data/gameData';

interface GameContextType {
  currentScene: Scene;
  inventory: InventoryItem[];
  emotionLog: EmotionType[];
  currentEmotion: EmotionType;
  message: string | null;
  processEmotion: (text: string) => void;
  makeChoice: (choice: Choice) => void;
  restart: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScene, setCurrentScene] = useState<Scene>(SCENES.intro);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [emotionLog, setEmotionLog] = useState<EmotionType[]>([]);
  const [currentEmotion, setCurrentEmotion] = useState<EmotionType>("neutral");
  const [message, setMessage] = useState<string | null>(null);

  const processEmotion = (text: string) => {
    const emotion = detectEmotion(text);
    setCurrentEmotion(emotion);
    setEmotionLog([...emotionLog, emotion]);
    
    // Show the emotion response
    setMessage(EMOTION_RESPONSES[emotion]);
    
    // Clear the message after a delay
    setTimeout(() => {
      setMessage(null);
    }, 4000);
  };

  const makeChoice = (choice: Choice) => {
    // Check if the choice has requirements
    if (choice.requires) {
      // Check inventory requirements
      if (choice.requires.inventory && 
          !choice.requires.inventory.every(item => inventory.includes(item))) {
        setMessage("You don't have the necessary items for this action.");
        setTimeout(() => setMessage(null), 4000);
        return;
      }
      
      // Check emotion requirements
      if (choice.requires.emotion && 
          !choice.requires.emotion.includes(currentEmotion)) {
        setMessage("Your current emotional state prevents you from taking this action effectively.");
        setTimeout(() => setMessage(null), 4000);
        return;
      }
    }
    
    // Handle special case for resting in hydroponics
    if (choice.id === "rest") {
      setCurrentEmotion("calm");
      setEmotionLog([...emotionLog, "calm"]);
    }
    
    // Add item to inventory if choice grants one
    if (choice.grants && !inventory.includes(choice.grants)) {
      setInventory([...inventory, choice.grants]);
    }
    
    // Show consequence message if it exists
    if (choice.consequence) {
      setMessage(choice.consequence);
      setTimeout(() => {
        setMessage(null);
        setCurrentScene(SCENES[choice.nextScene]);
      }, 3000);
    } else {
      // Move to next scene
      setCurrentScene(SCENES[choice.nextScene]);
    }
  };

  const restart = () => {
    setCurrentScene(SCENES.intro);
    setInventory([]);
    setEmotionLog([]);
    setCurrentEmotion("neutral");
    setMessage(null);
  };

  return (
    <GameContext.Provider
      value={{
        currentScene,
        inventory,
        emotionLog,
        currentEmotion,
        message,
        processEmotion,
        makeChoice,
        restart
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};