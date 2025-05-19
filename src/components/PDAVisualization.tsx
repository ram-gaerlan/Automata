import React, { useState } from 'react';
import PDA_AB from '../assets/PDA_AB.png';
import PDA_10 from '../assets/PDA_10.png';
import { Maximize2 } from 'lucide-react';
import FullscreenVisualization from './FullscreenVisualization';

interface PDAVisualizationProps {
  selectedRegex: number;
}

const PDAVisualization: React.FC<PDAVisualizationProps> = ({ selectedRegex }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-y-auto overflow-x-hidden">
        {/* Fullscreen button */}
        <div className="absolute top-2 right-2 z-10">
          <button
            onClick={() => setIsFullscreen(true)}
            className="p-2 bg-gray-800/80 hover:bg-gray-800 text-white rounded-lg shadow-md transition-colors"
            title="View Fullscreen"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        {/* Preview image */}
        <div className="w-full h-full flex items-start justify-center">
          <img
            src={selectedRegex === 0 ? PDA_AB : PDA_10}
            alt={`PDA for Regex ${selectedRegex + 1}`}
            className="max-w-none"
            style={{
              filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 2px rgba(255,255,255,0.3))',
              imageRendering: 'crisp-edges',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              userSelect: 'none',
              pointerEvents: 'auto',
              transform: 'scale(3)',
              transformOrigin: 'top center',
              cursor: 'grab'
            }}
            draggable={true}
          />
        </div>
      </div>

      {/* Fullscreen view */}
      <FullscreenVisualization
        isOpen={isFullscreen}
        onClose={() => setIsFullscreen(false)}
        title={`PDA for Regex ${selectedRegex + 1}`}
      >
        <img
          src={selectedRegex === 0 ? PDA_AB : PDA_10}
          alt={`PDA for Regex ${selectedRegex + 1}`}
          className="max-w-none"
          style={{
            filter: 'brightness(1.2) contrast(1.2) drop-shadow(0 0 2px rgba(255,255,255,0.3))',
            imageRendering: 'crisp-edges',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
          draggable={false}
        />
      </FullscreenVisualization>
    </>
  );
};

export default PDAVisualization; 