import React, { useState, useEffect } from 'react';
import { DFA, StateCheck, generateDotGraph } from '../utils/automata';
import { GraphvizVisualization } from './GraphvizVisualization';

interface AutomataSimulationProps {
  automaton: DFA;
  input: string;
  stateChecks: StateCheck[];
  onSimulationEnd: () => void;
}

export const AutomataSimulation: React.FC<AutomataSimulationProps> = ({ 
  automaton, 
  input, 
  stateChecks,
  onSimulationEnd
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [dotSource, setDotSource] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [inputDisplay, setInputDisplay] = useState<string[]>(input.split(''));
  
  // Reset state when input changes
  useEffect(() => {
    setCurrentStep(0);
    setIsComplete(false);
    setInputDisplay(input.split(''));
    setDotSource(generateDotGraph(automaton, stateChecks[0].state));
  }, [input, automaton, stateChecks]);

  useEffect(() => {
    if (isComplete) return;
    
    // Set up simulation with 1-second intervals
    const intervalId = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < stateChecks.length - 1) {
          // Update dot source for next state
          const nextState = stateChecks[prev + 1].state;
          const color = stateChecks[prev + 1].isValid ? 'lightgreen' : 'lightcoral';
          setDotSource(generateDotGraph(automaton, nextState, color));
          return prev + 1;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
          onSimulationEnd();
          return prev;
        }
      });
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, [automaton, stateChecks, isComplete, onSimulationEnd]);

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Input String:</h4>
        <div className="font-mono bg-white p-2 border border-gray-300 rounded flex gap-1">
          {inputDisplay.map((char, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded ${
                index === currentStep
                  ? 'bg-yellow-200'
                  : index < currentStep
                  ? 'bg-gray-100'
                  : ''
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">
          Current State: <span className="text-indigo-600">{stateChecks[currentStep]?.state || ''}</span>
        </h4>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / (stateChecks.length - 1)) * 100}%` }}
          />
        </div>
        <div className="text-sm text-gray-600 text-right">
          Step {currentStep + 1} of {stateChecks.length}
        </div>
      </div>
      
      <div className="h-64 bg-white border border-gray-200 rounded-lg overflow-hidden">
        <GraphvizVisualization dotSource={dotSource} />
      </div>
      
      {isComplete && (
        <div className={`mt-4 p-3 rounded-lg text-center font-medium ${
          stateChecks[stateChecks.length - 1].isValid 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          String is {stateChecks[stateChecks.length - 1].isValid ? 'Valid' : 'Invalid'}
        </div>
      )}
    </div>
  );
};