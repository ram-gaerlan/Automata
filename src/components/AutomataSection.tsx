import React from 'react';
import { AutomatonType } from '../types/automaton';
import { DFA, PDA, CFG, generateDotGraph } from '../utils/automata';
import DFAVisualization from './DFAVisualization';
import CFGVisualization from './CFGVisualization';
import PDAVisualization from './PDAVisualization';

interface AutomataSectionProps {
  type: AutomatonType;
  automaton: DFA | null;
  cfgAutomaton: CFG | null;
  pdaAutomaton: PDA | null;
  selectedRegex?: number;
}

const AutomataSection: React.FC<AutomataSectionProps> = ({ 
  type, 
  automaton, 
  cfgAutomaton, 
  pdaAutomaton,
  selectedRegex 
}) => {
  const dotSource = React.useMemo(() => {
    if (type === 'DFA' && automaton) {
      return generateDotGraph(automaton);
    }
    return '';
  }, [type, automaton]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="bg-green-600 text-white py-2 px-4">
        <h3 className="text-lg font-semibold">{type}</h3>
      </div>
      <div className="p-4">
        {type === 'DFA' && dotSource && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-64">
            <DFAVisualization dotSource={dotSource} />
          </div>
        )}
        
        {type === 'PDA' && selectedRegex !== undefined && (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden h-96">
            <PDAVisualization selectedRegex={selectedRegex} />
          </div>
        )}
        
        {type === 'CFG' && cfgAutomaton && (
          <div className="bg-white border border-gray-200 rounded-lg h-75 overflow-auto p-4">
            <CFGVisualization cfg={cfgAutomaton} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AutomataSection;