import React from 'react';
import { Code } from 'lucide-react';

interface RegexDisplayProps {
  title: string;
  regex: string;
}

const RegexDisplay: React.FC<RegexDisplayProps> = ({ title, regex }) => {
  return (
    <div className="bg-gray-700 rounded-lg border border-gray-600 p-4">
      <div className="flex items-center space-x-2 mb-2">
        <Code size={18} className="text-indigo-400" />
        <h3 className="text-lg font-medium text-white">{title}</h3>
      </div>
      <div className="bg-gray-800 border border-gray-600 rounded p-3 overflow-x-auto">
        <code className="text-sm text-gray-300 whitespace-pre-wrap break-all">{regex}</code>
      </div>
    </div>
  );
};

export default RegexDisplay;