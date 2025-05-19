import React from 'react';
import { Users } from 'lucide-react';

const Members = () => {
  const members = [
    { name: "Abi Gumarang", role: "Developer" },
    { name: "Aero Cillado", role: "Automata Theory" },
    { name: "Yuri Gler", role: "Developer" },
    { name: "Ram Gaerlan", role: "Team Lead" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <Users size={28} className="text-indigo-600" />
        <h2 className="text-2xl font-bold text-gray-800">Group 5 Members</h2>
      </div>
      
      <div className="space-y-4">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-indigo-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
              <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
        <h3 className="text-lg font-medium text-indigo-800 mb-2">Project Information</h3>
        <p className="text-gray-700">
          This Automata Project demonstrates the implementation and visualization of various 
          automata concepts including Deterministic Finite Automata (DFA), Context-Free Grammars (CFG), 
          and Pushdown Automata (PDA).
        </p>
      </div>
    </div>
  );
};

export default Members;