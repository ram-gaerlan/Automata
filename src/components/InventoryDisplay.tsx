import React from 'react';
import { useGame } from '../contexts/GameContext';
import { Wrench, FileText, Ban as Bandage, Scroll, Key, User, Database, KeyRound } from 'lucide-react';

export const InventoryDisplay: React.FC = () => {
  const { inventory } = useGame();

  // Get the appropriate icon for each inventory item
  const getItemIcon = (item: string) => {
    switch (item) {
      case 'power relay':
        return <Wrench className="text-yellow-400" />;
      case 'generator manual':
        return <FileText className="text-blue-300" />;
      case 'memory patch':
        return <Bandage className="text-green-300" />;
      case 'medical logs':
        return <Scroll className="text-red-300" />;
      case 'keycard':
        return <Key className="text-cyan-300" />;
      case 'crew ally':
        return <User className="text-purple-300" />;
      case 'data logs':
        return <Database className="text-indigo-300" />;
      case 'hidden passage key':
        return <KeyRound className="text-amber-300" />;
      default:
        return null;
    }
  };

  if (inventory.length === 0) {
    return (
      <div className="inventory-display mt-4">
        <div className="mb-2 text-md font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
          INVENTORY:
        </div>
        <div className="text-gray-500 text-sm italic">No items in inventory</div>
      </div>
    );
  }

  return (
    <div className="inventory-display mt-4">
      <div className="mb-2 text-md font-bold tracking-wider text-cyan-300 border-b border-cyan-800 pb-2">
        INVENTORY:
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {inventory.map((item) => (
          <div 
            key={item} 
            className="bg-gray-900 border border-gray-700 rounded p-2 flex items-center gap-2 animate-fadeIn"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {getItemIcon(item)}
            </div>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};