import React, { useEffect, useRef } from 'react';
import { graphviz } from 'd3-graphviz';

interface GraphvizVisualizationProps {
  dotSource: string;
  highlightedState?: string;
  color?: string;
}

export const GraphvizVisualization: React.FC<GraphvizVisualizationProps> = ({ 
  dotSource, 
  highlightedState,
  color = 'yellow'
}) => {
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (graphRef.current && dotSource) {
      try {
        graphviz(graphRef.current, { useWorker: false })
          .renderDot(dotSource)
          .on("end", function() {
            // Add any post-rendering manipulations here if needed
            if (highlightedState) {
              const stateElement = document.getElementById(highlightedState);
              if (stateElement) {
                stateElement.style.fill = color;
              }
            }
          });
      } catch (error) {
        console.error("Error rendering graphviz:", error);
      }
    }
  }, [dotSource, highlightedState, color]);

  return (
    <div 
      ref={graphRef} 
      className="w-full h-full flex items-center justify-center"
      style={{ minHeight: '250px' }}
    />
  );
};