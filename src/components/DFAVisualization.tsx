import React, { useEffect } from 'react';
import { graphviz } from 'd3-graphviz';

interface DFAVisualizationProps {
  dotSource: string;
}

const DFAVisualization: React.FC<DFAVisualizationProps> = ({ dotSource }) => {
  const graphRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (graphRef.current && dotSource) {
      try {
        graphviz(graphRef.current, { useWorker: false })
          .renderDot(dotSource);
      } catch (error) {
        console.error("Error rendering graphviz:", error);
      }
    }
  }, [dotSource]);

  return (
    <div 
      ref={graphRef} 
      className="w-full h-full flex items-center justify-center"
      style={{ minHeight: '250px' }}
    />
  );
};

export default DFAVisualization; 