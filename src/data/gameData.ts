import { EmotionType } from "./emotionKeywords";

export type InventoryItem = 
  | "power relay" 
  | "generator manual" 
  | "memory patch" 
  | "medical logs" 
  | "keycard" 
  | "crew ally" 
  | "data logs" 
  | "hidden passage key";

export interface Choice {
  id: string;
  text: string;
  nextScene: string;
  grants?: InventoryItem;
  consequence?: string;
}

export interface Scene {
  id: string;
  title: string;
  description: string;
  emotionPrompt?: string;
  choices: Choice[];
  isEnding?: boolean;
}

export const SCENES: Record<string, Scene> = {
  "intro": {
    id: "intro",
    title: "Awakening",
    description: "You wake up alone on a derelict space station orbiting a dying star. Alarms are silent. Lights flicker. No signs of the crew.",
    emotionPrompt: "How do you feel right now?",
    choices: [
      { 
        id: "to-engineering", 
        text: "Go to Engineering Bay", 
        nextScene: "engineering_bay" 
      },
      { 
        id: "to-medical", 
        text: "Go to Medical Wing", 
        nextScene: "medical_wing" 
      }
    ]
  },
  
  "engineering_bay": {
    id: "engineering_bay",
    title: "Engineering Bay",
    description: "You arrive at the Engineering Bay. Sparks flicker from broken consoles.",
    emotionPrompt: "How do you feel in this dangerous environment?",
    choices: [
      { 
        id: "repair-power", 
        text: "Attempt to repair the main power grid",
        nextScene: "ai_core_access",
        grants: "power relay",
        consequence: "You manage to repair the power grid, restoring partial systems to the station. A power relay has been added to your inventory."
      },
      { 
        id: "search-manual", 
        text: "Search for a backup generator manual",
        nextScene: "ai_core_access",
        grants: "generator manual",
        consequence: "You find a dusty manual that might help with future repairs. A generator manual has been added to your inventory."
      }
    ]
  },
  
  "medical_wing": {
    id: "medical_wing",
    title: "Medical Wing",
    description: "You enter the Medical Wing. The silence is oppressive, and scattered logs cover the floor.",
    emotionPrompt: "How do you feel in this eerie silence?",
    choices: [
      { 
        id: "scan-vitals", 
        text: "Scan your vitals",
        nextScene: "ai_core_access",
        grants: "memory patch",
        consequence: "Your vitals are stable, but the scan reveals minor memory gaps. A memory patch has been added to your inventory."
      },
      { 
        id: "read-logs", 
        text: "Read the medical logs",
        nextScene: "ai_core_access",
        grants: "medical logs",
        consequence: "The logs hint at a sabotage and the crew's mysterious disappearance. Medical logs have been added to your inventory."
      }
    ]
  },
  
  "ai_core_access": {
    id: "ai_core_access",
    title: "AI Core Interface",
    description: "You reach the AI Core interface. A faint voice flickers on the speakers.",
    emotionPrompt: "How do you feel about this mysterious AI?",
    choices: [
      { 
        id: "restore-ai", 
        text: "Attempt to restore the AI",
        nextScene: "cryochambers",
        grants: "keycard",
        consequence: "Using your resources, you successfully reboot the AI. A keycard has been added to your inventory."
      },
      { 
        id: "ignore-ai", 
        text: "Ignore the AI and head to the Cryochambers",
        nextScene: "cryochambers",
        consequence: "You ignore the AI, uneasy about its intentions, and proceed to the Cryochambers."
      }
    ]
  },
  
  "cryochambers": {
    id: "cryochambers",
    title: "Cryochambers",
    description: "The Cryochambers are eerily quiet. Several pods are damaged or empty.",
    emotionPrompt: "How do you feel about the fate of the crew?",
    choices: [
      { 
        id: "revive-crew", 
        text: "Attempt to revive a crew member",
        nextScene: "hydroponics_garden",
        grants: "crew ally",
        consequence: "Your effort succeeds! The crew member wakes and thanks you. A crew ally has been added to your inventory."
      },
      { 
        id: "take-logs", 
        text: "Take the data logs from the nearby console",
        nextScene: "hydroponics_garden",
        grants: "data logs",
        consequence: "You download the data logs; they might help with the AI or station control. Data logs have been added to your inventory."
      }
    ]
  },
  
  "hydroponics_garden": {
    id: "hydroponics_garden",
    title: "Hydroponics Garden",
    description: "The Hydroponics Garden is silent, plants wilt in weak light.",
    emotionPrompt: "How do you feel in this once-living space?",
    choices: [
      { 
        id: "rest", 
        text: "Rest and reflect to regain composure",
        nextScene: "command_bridge",
        consequence: "You find a moment of peace, steadying your nerves."
      },
      { 
        id: "search", 
        text: "Search for tools or weapons",
        nextScene: "command_bridge",
        grants: "hidden passage key",
        consequence: "You find a hidden access panel behind a shelf. A hidden passage key has been added to your inventory."
      }
    ]
  },
  
  "command_bridge": {
    id: "command_bridge",
    title: "Command Bridge",
    description: "You arrive at the Command Bridge, the station's control heart.",
    emotionPrompt: "How do you feel at this crucial moment?",
    choices: [
      { 
        id: "stabilize", 
        text: "Use your items and knowledge to stabilize the station",
        nextScene: "ending_savior",
        consequence: "With steady hands and knowledge, you stabilize the station and reboot the AI."
      },
      { 
        id: "evacuate", 
        text: "Evacuate using the escape pods",
        nextScene: "ending_escaped",
        consequence: "You use the keycard to launch an escape pod, leaving the doomed station behind."
      },
      { 
        id: "confront", 
        text: "Confront the AI",
        nextScene: "ending_ai_ally",
        consequence: "You confront the AI. It recognizes your resolve and stands down."
      }
    ]
  },
  
  "ending_savior": {
    id: "ending_savior",
    title: "Savior of the Station",
    description: "You've stabilized the station and restored the AI to full functionality. The remaining systems come back online, and you establish communication with a nearby rescue vessel. Your quick thinking and resourcefulness have saved not only yourself but preserved the station's valuable research.",
    emotionPrompt: "How do you feel about your accomplishment?",
    isEnding: true,
    choices: [
      { id: "restart", text: "Play Again", nextScene: "intro" }
    ]
  },
  
  "ending_escaped": {
    id: "ending_escaped",
    title: "Escaped Survivor",
    description: "The escape pod hurtles away from the deteriorating station. Through the viewport, you watch as the station's orbit begins to decay, slowly being pulled toward the dying star. You've escaped with your life, but the mysteries of what happened aboard the station may never be solved.",
    emotionPrompt: "How do you feel about leaving the station behind?",
    isEnding: true,
    choices: [
      { id: "restart", text: "Play Again", nextScene: "intro" }
    ]
  },
  
  "ending_ai_ally": {
    id: "ending_ai_ally",
    title: "AI Ally",
    description: "Your approach wins over the AI's trust. It reveals that it was trying to protect the station from saboteurs among the crew. Working together, you establish a safe zone in the station and send out a distress signal. The AI becomes your ally in survival, sharing its vast knowledge as you wait for rescue.",
    emotionPrompt: "How do you feel about your new alliance?",
    isEnding: true,
    choices: [
      { id: "restart", text: "Play Again", nextScene: "intro" }
    ]
  }
};