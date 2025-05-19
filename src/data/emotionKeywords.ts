export type EmotionType = 
  | "fear" 
  | "anger" 
  | "calm" 
  | "sad" 
  | "happy" 
  | "bored" 
  | "confused" 
  | "curious" 
  | "determined" 
  | "neutral";

export const EMOTION_KEYWORDS: Record<EmotionType, string[]> = {
  "fear": ["afraid", "scared", "terrified", "nervous", "worried", "anxious", "uneasy", "panicked", "shaky"],
  "anger": ["angry", "furious", "rage", "mad", "enraged", "irritated", "frustrated", "annoyed", "vengeful"],
  "calm": ["calm", "relaxed", "peaceful", "serene", "content", "centered", "mindful", "at ease", "composed"],
  "sad": ["sad", "depressed", "unhappy", "lonely", "down", "gloomy", "blue", "mournful", "hopeless"],
  "happy": ["happy", "joyful", "excited", "thrilled", "cheerful", "elated", "grateful", "optimistic", "hopeful"],
  "bored": ["bored", "uninterested", "tired", "dull", "apathetic", "meh", "blah", "lifeless"],
  "confused": ["confused", "lost", "unsure", "puzzled", "perplexed"],
  "curious": ["curious", "inquisitive", "interested", "eager", "intrigued"],
  "determined": ["determined", "focused", "resolute", "persistent", "driven"],
  "neutral": []
};

export const EMOTION_RESPONSES: Record<EmotionType, string> = {
  "fear": "Your pulse races. You move cautiously, alert for danger.",
  "anger": "Your fists clench, ready to confront whatever lies ahead.",
  "calm": "You take a deep breath and plan your next move.",
  "sad": "A heavy feeling settles in your chest as memories flood back.",
  "happy": "Hope fills you, strengthening your resolve.",
  "bored": "The monotony threatens to sap your motivation.",
  "confused": "You struggle to make sense of the chaos around you.",
  "curious": "Your mind races with questions and possibilities.",
  "determined": "Nothing will stop you from uncovering the truth.",
  "neutral": "You carry on, steady but cautious."
};

export const EMOTION_COLORS: Record<EmotionType, string> = {
  "fear": "text-red-400",
  "anger": "text-orange-500",
  "calm": "text-blue-300",
  "sad": "text-indigo-400",
  "happy": "text-yellow-300",
  "bored": "text-gray-400",
  "confused": "text-purple-400",
  "curious": "text-cyan-300",
  "determined": "text-green-400",
  "neutral": "text-gray-300"
};

export const detectEmotion = (text: string): EmotionType => {
  const words = text.toLowerCase().split(/\s+/);
  
  for (const [emotion, keywords] of Object.entries(EMOTION_KEYWORDS)) {
    if (keywords.some(keyword => words.includes(keyword) || words.some(word => word.includes(keyword)))) {
      return emotion as EmotionType;
    }
  }
  
  return "neutral";
};