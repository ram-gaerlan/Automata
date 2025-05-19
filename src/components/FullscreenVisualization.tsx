import React, { useState, useRef, useEffect } from 'react';
import { Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';

interface FullscreenVisualizationProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const FullscreenVisualization: React.FC<FullscreenVisualizationProps> = ({
  isOpen,
  onClose,
  title,
  children
}) => {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Reset zoom and position when opening
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY;
    const zoomFactor = 0.1;
    
    if (delta < 0) {
      setZoom(prev => Math.min(prev + zoomFactor, 3));
    } else {
      setZoom(prev => {
        const newZoom = Math.max(prev - zoomFactor, 1);
        if (newZoom <= 1) {
          setPosition({ x: 0, y: 0 });
        }
        return newZoom;
      });
    }
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom(prev => Math.max(prev - 0.1, 1))}
              className="p-2 text-white hover:bg-gray-800 rounded-lg"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-white">{Math.round(zoom * 100)}%</span>
            <button
              onClick={() => setZoom(prev => Math.min(prev + 0.1, 3))}
              className="p-2 text-white hover:bg-gray-800 rounded-lg"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleReset}
              className="p-2 text-white hover:bg-gray-800 rounded-lg"
              title="Reset View"
            >
              <Maximize2 size={20} />
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-gray-800 rounded-lg"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <div
          className="w-full h-full flex items-center justify-center transition-transform duration-100"
          style={{
            transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
            transformOrigin: 'center'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default FullscreenVisualization; 