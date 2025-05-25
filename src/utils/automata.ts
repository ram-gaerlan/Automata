import { graphviz } from 'd3-graphviz';

export interface DFA {
  states: string[];
  alphabet: string[];
  start_state: string;
  end_states: string[];
  transitions: Record<string, string>;
}

export interface StateCheck {
  state: string;
  isValid: boolean;
}

export interface CFG {
  productions: string[];
  start_symbol: string;
}

export interface PDA {
  states: string[];
  alphabet: string[];
  start_state: string;
  push_states: (string | null)[];
  pop_states: (string | null)[];
  accept_states: string[];
  transitions: Record<string, string>;
}

export const DFA_1 = {
  states: ["q1", "q2", "q3", "q5", "q6", "q7", "q8", "q9", "q10", "q11", "q12", "q13", "q14", "q15", "q16", "q17", "q18", "q19", "q20", "q21", "q22", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q30", "q31", "q32", "q33", "q34", "q35", "q36", "q37", "q38", "q39", "q40", "q41", "q42", "q43", "q44", "q45", "q46"],
  alphabet: ["a", "b"],
  start_state: "q1",
  end_states: ["q37", "q42", "q43", "q44"], 
  transitions: {
    "q1,a": "q2",
    "q1,b": "q3",
    "q2,a": "q4",
    "q2,b": "q3",
    "q3,a": "q2",
    "q3,b": "q6",
    "q4,a": "q8",
    "q4,b": "q7",
    "q5,a": "q4",
    "q5,b": "q10",
    "q6,a": "q5",
    "q6,b": "q9",
    "q7,a": "q15",
    "q7,b": "q6",
    "q8,a": "q8",
    "q8,b": "q10",
    "q9,a": "q13",
    "q9,b": "q9",
    "q10,a": "q22",
    "q10,b": "q11",
    "q11,a": "q19",
    "q11,b": "q12",
    "q12,a": "q13",
    "q12,b": "q25",
    "q13,a": "q23",
    "q13,b": "q14",
    "q14,a": "q16",
    "q14,b": "q17",
    "q15,a": "q23",
    "q15,b": "q20",
    "q16,a": "q23",
    "q16,b": "q25",
    "q17,a": "q19",
    "q17,b": "q25",
    "q18,a": "q5",
    "q18,b": "q25",
    "q19,a": "q4",
    "q19,b": "q25",
    "q20,a": "q19",
    "q20,b": "q18",
    "q21,a": "q25",
    "q21,b": "q18",
    "q22,a": "q23",
    "q22,b": "q21",
    "q23,a": "q8",
    "q23,b": "q24",
    "q24,a": "q25",
    "q24,b": "q6",
    "q25,a": "q27",
    "q25,b": "q26",
    "q26,a": "q27",
    "q26,b": "q29",
    "q27,a": "q30",
    "q27,b": "q28",
    "q28,a": "q30",
    "q28,b": "q29",
    "q29,a": "q31",
    "q29,b": "q36",
    "q30,a": "q32",
    "q30,b": "q35",
    "q31,a": "q39",
    "q31,b": "q28",
    "q32,a": "q45",
    "q32,b": "q35",
    "q33,a": "q32",
    "q33,b": "q37",
    "q34,a": "q43",
    "q34,b": "q36",
    "q35,a": "q33",
    "q35,b": "q34",
    "q36,a": "q38",
    "q36,b": "q40",
    "q37,a": "q41",
    "q37,b": "q40",
    "q38,a": "q39",
    "q38,b": "q42",
    "q39,a": "q43",
    "q39,b": "q35",
    "q40,a": "q44",
    "q40,b": "q40",
    "q41,a": "q45",
    "q41,b": "q37",
    "q42,a": "q32",
    "q42,b": "q36",
    "q43,a": "q45",
    "q43,b": "q35",
    "q44,a": "q45",
    "q44,b": "q37",
    "q45,a": "q46",
    "q45,b": "q35",
    "q46,a": "q46",
    "q46,b": "q35"
  }
};


export const DFA_2: DFA = {
  states: [
    "q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11", "q12", "q13", "q14", "q15", "q16",
    "q17", "q18", "q19", "q20", "q21", "q22", "q23", "q24", "q25", "q26", "q27", "q28", "q29", "q30",
    "q31", "q32", "q33"
  ],
  alphabet: ["1", "0"],
  start_state: "q1",
  end_states: ["q33"],
  transitions: {
    "q1,1": "q2",
    "q1,0": "q3",
    "q2,1": "q8",
    "q2,0": "q4",
    "q3,1": "q6",
    "q3,0": "q5",
    "q4,1": "q7",
    "q4,0": "q5",
    "q5,1": "q9",
    "q5,0": "q14",
    "q6,1": "q8",
    "q6,0": "q10",
    "q7,1": "q12",
    "q7,0": "q12",
    "q8,1": "q12",
    "q8,0": "q11",
    "q9,1": "q18",
    "q9,0": "q13",
    "q10,1": "q12",
    "q10,0": "q14",
    "q11,1": "q15",
    "q11,0": "q18",
    "q12,1": "q18",
    "q12,0": "q18",
    "q13,1": "q20",
    "q13,0": "q16",
    "q14,1": "q19",
    "q14,0": "q18",
    "q15,1": "q22",
    "q15,0": "q17",
    "q16,1": "q19",
    "q16,0": "q27",
    "q17,1": "q18",
    "q17,0": "q27",
    "q18,1": "q22",
    "q18,0": "q23",
    "q19,1": "q22",
    "q19,0": "q21",
    "q20,1": "q24",
    "q20,0": "q24",
    "q21,1": "q20",
    "q21,0": "q27",
    "q22,1": "q25",
    "q22,0": "q26",
    "q23,1": "q22",
    "q23,0": "q27",
    "q24,1": "q28",
    "q24,0": "q23",
    "q25,1": "q28",
    "q25,0": "q26",
    "q26,1": "q28",
    "q26,0": "q27",
    "q27,1": "q22",
    "q27,0": "q28",
    "q28,1": "q29",
    "q28,0": "q30",
    "q29,1": "q31",
    "q29,0": "q32",
    "q30,1": "q29",
    "q30,0": "q32",
    "q31,1": "q33",
    "q31,0": "q32",
    "q32,1": "q33",
    "q32,0": "q33",
    "q33,1": "q33",
    "q33,0": "q33"
  }
};


export const CFG_1: CFG = {
  start_symbol: 'S',
  productions: [
    'S → A B C D E F G H I',
    'A → λ | a A | b A',
    'B → aa | bb',
    'C → λ | aa C | bb C',
    'D → ab | ba | aba',
    'E → bab | aba | bbb',
    'F → λ | a F | b F | bb F | aa F',
    'G → bb | aa | aba',
    'H → aaa | bab | bba',
    'I → λ | aaa I | bab I | bba I'
  ]
};

export const CFG_2: CFG = {
  start_symbol: 'S',
  productions: [
    'S → A B C D E F G H I J',
    'A → λ | 1 A | 0 A',
    'B → 11 | 00 | 101 | 010',
    'C → λ | 11 C | 00 C',
    'D → 1 | 0 | 11 | 00',
    'E → 1 | 0 | 11',
    'F → λ | 11 F | 00 F',
    'G → 101 | 000 | 111',
    'H → λ | 1 H | 0 H',
    'I → 101 | 000 | 111 | 001 | 100',
    'J → λ | 11 J | 00 J | 1 J | 0 J'
  ]
};

export const PDA_1: PDA = {
  states: ["Start", "Read1", "Read2", "Read3", "Read4", "Read5", "Read6", "Read7", "Read8", "Read9", "Read10", "Read11", "Read12", "Read13", "Read14", "Read15", "Read16", "Read17", "Read18", "Read19", "Read20", "Read21", "Read22", "Read23", "Read24", "Read25", "Read26", "Read27", "Read28", "Read29", "Read30", "Read31", "Read32", "Read33", "Read34", "Read35", "Read36", "Trap", "Accept1", "Accept2", "Accept3", "Accept4", "Accept5"],
  alphabet: ["a", "b"],
  start_state: "Start",
  push_states: [null],
  pop_states: [null],
  accept_states: ["Accept1", "Accept2", "Accept3", "Accept4", "Accept5"],
  transitions: {
    "Start,": "Read1",
    "Read1,a": "Read2",
    "Read1,b": "Read3",
    "Read2,a": "Read4",
    "Read2,b": "Read1",
    "Read3,a": "Read1",
    "Read3,b": "Read4",
    "Read4,a": "Read5",
    "Read4,b": "Read6",
    "Read5,a": "Read4",
    "Read5,b": "Read7",
    "Read6,a": "Read8",
    "Read6,b": "Read4",
    "Read7,a": "Read8",
    "Read7,b": "Read9",
    "Read8,a": "Read11",
    "Read8,b": "Read10",
    "Read9,a": "Read12",
    "Read9,b": "Read12",
    "Read10,a": "Read12",
    "Read10,b": "Read13",
    "Read11,a": "Trap",
    "Read11,b": "Read14",
    "Read12,a": "Trap",
    "Read12,b": "Read15",
    "Read13,a": "Trap",
    "Read13,b": "Read15",
    "Read14,a": "Read15",
    "Read14,b": "Trap",
    "Read15,a": "Read16",
    "Read15,b": "Read17",
    "Read16,a": "Read18",
    "Read16,b": "Read19",
    "Read17,a": "Read16",
    "Read17,b": "Read20",
    "Read18,a": "Read35",
    "Read18,b": "Read32",
    "Read19,a": "Read18",
    "Read19,b": "Read20",
    "Read20,a": "Read21",
    "Read20,b": "Read23",
    "Read21,a": "Read22",
    "Read21,b": "Read19",
    "Read22,a": "Accept1",
    "Read22,b": "Read32",
    "Read23,a": "Read24",
    "Read23,b": "Read36",
    "Read24,a": "Read22",
    "Read24,b": "Accept2",
    "Read25,a": "Read29",
    "Read25,b": "Read32",
    "Read26,a": "Read35",
    "Read26,b": "Read23",
    "Read27,a": "Read29",
    "Read27,b": "Read28",
    "Read28,a": "Read30",
    "Read28,b": "Read36",
    "Read29,a": "Accept3",
    "Read29,b": "Read32",
    "Read30,a": "Read29",
    "Read30,b": "Read28",
    "Read31,a": "Accept4",
    "Read31,b": "Read32",
    "Read32,a": "Read33",
    "Read32,b": "Read34",
    "Read33,a": "Read35",
    "Read33,b": "Read28",
    "Read34,a": "Accept5",
    "Read34,b": "Read23",
    "Read35,a": "Read29",
    "Read35,b": "Read32",
    "Read36,a": "Read27",
    "Read36,b": "Read36"
  }
};

export const PDA_2: PDA = {
  states: ["Start", "Read1", "Read2", "Read3", "Read4", "Read5", "Read6", "Read7", "Read8", "Read9", "Read10", "Read11", "Read12", "Read13", "Read14", "Read15", "Read16", "Read17", "Read18", "Read19", "Read20", "Read21", "Read22", "Read23", "Read24", "Read25", "Read26", "Read27", "Read28", "Read29", "Read30", "Read31", "Read32", "Accept"],
  alphabet: ["1", "0"],
  start_state: "Start",
  push_states: [null],
  pop_states: [null],
  accept_states: ["Accept"],
  transitions: {
    "Start,": "Read1",
    "Read1,1": "Read2",
    "Read1,0": "Read3",
    "Read2,1": "Read8",
    "Read2,0": "Read4",
    "Read3,1": "Read6",
    "Read3,0": "Read5",
    "Read4,1": "Read7",
    "Read4,0": "Read5",
    "Read5,1": "Read9",
    "Read5,0": "Read14",
    "Read6,1": "Read8",
    "Read6,0": "Read10",
    "Read7,1": "Read12",
    "Read7,0": "Read12",
    "Read8,1": "Read12",
    "Read8,0": "Read11",
    "Read9,1": "Read18",
    "Read9,0": "Read13",
    "Read10,1": "Read12",
    "Read10,0": "Read14",
    "Read11,1": "Read15",
    "Read11,0": "Read18",
    "Read12,1": "Read18",
    "Read12,0": "Read18",
    "Read13,1": "Read20",
    "Read13,0": "Read16",
    "Read14,1": "Read19",
    "Read14,0": "Read18",
    "Read15,1": "Read22",
    "Read15,0": "Read17",
    "Read16,1": "Read19",
    "Read16,0": "Read27",
    "Read17,1": "Read18",
    "Read17,0": "Read27",
    "Read18,1": "Read22",
    "Read18,0": "Read23",
    "Read19,1": "Read22",
    "Read19,0": "Read21",
    "Read20,1": "Read24",
    "Read20,0": "Read24",
    "Read21,1": "Read20",
    "Read21,0": "Read27",
    "Read22,1": "Read25",
    "Read22,0": "Read26",
    "Read23,1": "Read22",
    "Read23,0": "Read27",
    "Read24,1": "Read28",
    "Read24,0": "Read23",
    "Read25,1": "Read28",
    "Read25,0": "Read26",
    "Read26,1": "Read28",
    "Read26,0": "Read27",
    "Read27,1": "Read22",
    "Read27,0": "Read28",
    "Read28,1": "Read29",
    "Read28,0": "Read30",
    "Read29,1": "Read31",
    "Read29,0": "Read32",
    "Read30,1": "Read29",
    "Read30,0": "Read32",
    "Read31,1": "Accept",
    "Read31,0": "Read32",
    "Read32,1": "Accept",
    "Read32,0": "Accept"
  }
};

export function generateDotGraph(automaton: DFA | PDA, highlightedState?: string, color: string = 'yellow'): string {
  let dot = 'digraph G {\n';

  // Set layout direction based on automaton type
  if ('push_states' in automaton) {
    // For PDA, set top-to-bottom layout
    dot += '  rankdir=TB;\n';
    dot += '  node [shape=box];\n'; // Default shape for PDA states
  } else {
    // For DFA, keep left-to-right layout
    dot += '  rankdir=LR;\n';
    dot += '  node [shape=circle];\n';
  }

  // Add nodes
  const states = 'states' in automaton ? automaton.states : [];
  const endStates = 'end_states' in automaton ? automaton.end_states :
                    'accept_states' in automaton ? automaton.accept_states : [];

  // Create invisible edge from a special node to start state for consistent positioning
  if ('push_states' in automaton) {
    dot += '  start [shape=none, label=""];\n';
    dot += `  start -> ${automaton.start_state} [label="start"];\n`;

    // Set specific shapes for PDA states
    states.forEach(state => {
      let shape = 'box'; // Default shape for Read states
      let attributes = [];

      if (state === automaton.start_state) {
        shape = 'ellipse';
      } else if (automaton.accept_states.includes(state)) {
        shape = 'doubleoctagon';
      } else if (automaton.push_states.includes(state)) {
        shape = 'diamond';
      } else if (automaton.pop_states.includes(state)) {
        shape = 'hexagon';
      }

      if (state === highlightedState) {
        attributes.push(`style=filled`, `fillcolor="${color}"`);
      }

      if (automaton.accept_states.includes(state)) {
        attributes.push('peripheries=2');
      }

      attributes.push(`shape=${shape}`);
      dot += `  ${state} [${attributes.join(', ')}];\n`;
    });
  } else {
    // DFA styling
    states.forEach(state => {
      let nodeAttributes = [];
      if (endStates.includes(state)) {
        nodeAttributes.push('shape=doublecircle');
      }
      if (state === highlightedState) {
        nodeAttributes.push(`style=filled`, `fillcolor="${color}"`);
      }
      dot += `  ${state} [${nodeAttributes.join(', ')}];\n`;
    });
  }

  // Add transitions
  if ('transitions' in automaton) {
    Object.entries(automaton.transitions).forEach(([key, value]) => {
      const [source, symbol] = key.split(',');
      const label = symbol || 'ε';
      
      // Add port specifications for diamond-shaped states
      if ('push_states' in automaton && source.startsWith('Read')) {
        const sourceIndex = states.indexOf(source);
        const targetIndex = states.indexOf(value);
        let port = '';
        
        if (source === value) {
          // Self-loop
          port = ':e';
        } else if (targetIndex > sourceIndex) {
          // Going forward
          port = ':s';
        } else {
          // Going backward
          port = ':n';
        }
        
        dot += `  ${source}${port} -> ${value} [label="${label}"];\n`;
      } else {
        dot += `  ${source} -> ${value} [label="${label}"];\n`;
      }
    });
  }

  dot += '}';
  return dot;
}

export function generateCFGGraph(cfg: CFG): string {
  let dot = 'digraph G {\n';
  dot += '  node [shape=rectangle];\n';

  // Create nodes for each production
  cfg.productions.forEach((prod, i) => {
    const [lhs, rhs] = prod.split('->').map(s => s.trim());
    dot += `  "${prod}" [label="${prod}"];\n`;

    // Connect related productions
    if (i > 0) {
      const prevProd = cfg.productions[i - 1];
      dot += `  "${prevProd}" -> "${prod}" [style=invis];\n`;
    }
  });

  dot += '}';
  return dot;
}

export function validateString(dfa: DFA, input: string): { isValid: boolean; stateChecks: StateCheck[] } {
  const stateChecks: StateCheck[] = [];
  let currentState = dfa.start_state;
  stateChecks.push({ state: currentState, isValid: true });

  for (const char of input) {
    const transition = `${currentState},${char}`;
    if (!dfa.transitions[transition]) {
      stateChecks.push({ state: currentState, isValid: false });
      return { isValid: false, stateChecks };
    }
    currentState = dfa.transitions[transition];
    stateChecks.push({ state: currentState, isValid: true });
  }

  const isValid = dfa.end_states.includes(currentState);
  stateChecks[stateChecks.length - 1].isValid = isValid;

  return { isValid, stateChecks };
}

export function validatePDA(pda: PDA, input: string): { isValid: boolean; stateChecks: StateCheck[] } {
  const stateChecks: StateCheck[] = [];
  let currentState = pda.start_state;
  stateChecks.push({ state: currentState, isValid: true });

  for (const char of input) {
    const transition = `${currentState},${char}`;
    if (!pda.transitions[transition]) {
      const epsilonTransition = `${currentState},`;
      if (!pda.transitions[epsilonTransition]) {
        stateChecks.push({ state: currentState, isValid: false });
        return { isValid: false, stateChecks };
      }
      currentState = pda.transitions[epsilonTransition];
    } else {
      currentState = pda.transitions[transition];
    }
    stateChecks.push({ state: currentState, isValid: true });
  }

  // Check for epsilon transitions at the end
  const epsilonTransition = `${currentState},`;
  if (pda.transitions[epsilonTransition]) {
    currentState = pda.transitions[epsilonTransition];
    stateChecks.push({ state: currentState, isValid: true });
  }

  const isValid = pda.accept_states.includes(currentState);
  stateChecks[stateChecks.length - 1].isValid = isValid;

  return { isValid, stateChecks };
}

export function validateCFG(cfg: CFG, input: string): boolean {
  // This is a simplified validation that checks if the input matches the basic pattern
  // A full CFG validation would require a more complex parsing algorithm
  const firstProd = cfg.productions[0];
  if (firstProd.includes('101') || firstProd.includes('111')) {
    return /^[01]+$/.test(input);
  } else {
    return /^[ab]+$/.test(input);
  }
}