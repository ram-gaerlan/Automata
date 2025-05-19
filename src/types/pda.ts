export interface PDAState {
  id: string;
  isFinal: boolean;
  isInitial: boolean;
}

export interface PDATransition {
  from: string;
  to: string;
  input: string;
  pop: string;
  push: string;
}

export interface PDA {
  states: PDAState[];
  transitions: PDATransition[];
  initialState: string;
  finalStates: string[];
  stackSymbols: string[];
} 