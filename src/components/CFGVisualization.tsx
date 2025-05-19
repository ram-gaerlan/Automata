import React from 'react';
import { CFG } from '../utils/automata';

interface CFGVisualizationProps {
  cfg: CFG;
}

const CFGVisualization: React.FC<CFGVisualizationProps> = ({ cfg }) => {
  return (
    <div className="space-y-2">
      {cfg.productions.map((production, index) => (
        <div key={index} className="text-gray-800">
          {production}
        </div>
      ))}
    </div>
  );
};

export default CFGVisualization;