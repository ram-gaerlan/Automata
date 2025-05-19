export interface DFAState {
  id: string;
  isFinal: boolean;
  isInitial: boolean;
}

export interface DFATransition {
  from: string;
  to: string;
  symbol: string;
}

export interface DFA {
  states: DFAState[];
  transitions: DFATransition[];
  initialState: string;
  finalStates: string[];
  alphabet: string[];
}

export interface DFAState {
  id: string;
  isFinal: boolean;
  isInitial: boolean;
}

export interface DFATransition {
  from: string;
  to: string;
  symbol: string;
}

export interface DFA {
  states: DFAState[];
  transitions: DFATransition[];
  initialState: string;
  finalStates: string[];
  alphabet: string[];
} 