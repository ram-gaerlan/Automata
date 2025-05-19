import React, { useState } from 'react';
import { DFA, validateString, StateCheck } from '../utils/automata';
import { Play } from 'lucide-react';
import { AutomataSimulation } from './AutomataSimulation';

interface ValidationResult {
  input: string;
  isValid: boolean;
  stateChecks: StateCheck[];
}

interface StringValidatorProps {
  dfa: DFA;
}

const StringValidator: React.FC<StringValidatorProps> = ({ dfa }) => {
  const [inputText, setInputText] = useState<string>('');
  const [results, setResults] = useState<ValidationResult[]>([]);
  const [simulatingIndex, setSimulatingIndex] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationKey, setSimulationKey] = useState<number>(0);
  
  const validateStrings = () => {
    const inputs = inputText.split('\n').filter(line => line.trim().length > 0);
    
    const newResults = inputs.map(input => {
      const { isValid, stateChecks } = validateString(dfa, input);
      return { input, isValid, stateChecks };
    });
    
    setResults(newResults);
    setSimulatingIndex(null);
    setIsSimulating(false);
  };
  
  const handleSimulate = (index: number) => {
    setSimulatingIndex(index);
    setIsSimulating(true);
  };
  
  const handleSimulationEnd = () => {
    setIsSimulating(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Validate Strings</h3>
          <textarea
            rows={6}
            className="w-full border border-gray-300 rounded-md shadow-sm p-3 font-mono text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter strings to validate (one per line)..."
          />
          
          <button
            onClick={validateStrings}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition duration-200 flex items-center justify-center w-full"
          >
            <Play size={16} className="mr-2" />
            RUN
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Results</h3>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div 
                key={index}
                className={`flex items-center justify-between p-2 rounded ${
                  result.isValid ? 'bg-green-100' : 'bg-red-100'
                }`}
              >
                <div className="font-mono text-sm truncate flex-1 mr-4">{result.input}</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    result.isValid ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                  }`}>
                    {result.isValid ? 'valid' : 'invalid'}
                  </span>
                  <button
                    onClick={() => handleSimulate(index)}
                    disabled={isSimulating}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded text-sm font-medium transition-colors"
                  >
                    simulate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {simulatingIndex !== null && (
        <div className="border-t border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">DFA Simulation:</h3>
          <AutomataSimulation
            key={`simulation-${simulatingIndex}-${results[simulatingIndex].input}`}
            automaton={dfa}
            input={results[simulatingIndex].input}
            stateChecks={results[simulatingIndex].stateChecks}
            onSimulationEnd={handleSimulationEnd}
          />
        </div>
      )}
    </div>
  );
};

export default StringValidator;