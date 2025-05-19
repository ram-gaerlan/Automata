import React from 'react';
import { DFA, CFG, PDA } from '../utils/automata';
import AutomataSection from './AutomataSection';

interface AutomataTableProps {
  dfas: DFA[];
  cfgs: CFG[];
  pdas: PDA[];
  selectedRegex: number;
  onRegexChange: (index: number) => void;
}

const AutomataTable: React.FC<AutomataTableProps> = ({
  dfas,
  cfgs,
  pdas,
  selectedRegex,
  onRegexChange
}) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="border-b border-gray-700">
        <div className="flex">
          {['Regex 1', 'Regex 2'].map((tab, index) => (
            <button
              key={tab}
              onClick={() => onRegexChange(index)}
              className={`px-6 py-3 text-sm font-medium ${
                selectedRegex === index
                  ? 'border-b-2 border-indigo-500 text-indigo-400'
                  : 'text-gray-400 hover:text-gray-300 hover:border-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 p-4">
        <AutomataSection
          type="DFA"
          automaton={dfas[selectedRegex]}
          cfgAutomaton={null}
          pdaAutomaton={null}
        />
        <AutomataSection
          type="CFG"
          automaton={null}
          cfgAutomaton={cfgs[selectedRegex]}
          pdaAutomaton={null}
        />
        <AutomataSection
          type="PDA"
          automaton={null}
          cfgAutomaton={null}
          pdaAutomaton={pdas[selectedRegex]}
          selectedRegex={selectedRegex}
        />
      </div>
    </div>
  );
};

export default AutomataTable;