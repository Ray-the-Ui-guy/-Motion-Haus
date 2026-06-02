import React from 'react';
import TickerCard from './TickerCard';

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  metric: string;
  description: string;
}

interface ThreeDGalleryProps {
  items: GalleryItem[];
}

export const ThreeDGallery: React.FC<ThreeDGalleryProps> = ({ items }) => {
  const total = items.length;
  const midIndex = Math.floor(total / 2);

  // Divide 100% width among 7 cards to fit exactly side-by-side
  const cardWidthPercent = 13.5; 
  const angleStep = 9; // Perfect cylinder angle step

  return (
    <div
      style={{
        width: '100%',
        height: '340px', // Compact height to fit perfectly on desktop views
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: 0,
      }}
    >
      {/* ── VIEWPORT CONTAINER (Constrained to desktop screen bounds) ── */}
      <div
        style={{
          width: 'calc(100% - 116px)', 
          maxWidth: '1140px', // Fits perfectly inside desktop standard containers
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '16px',
          perspective: '1200px', 
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((card, index) => {
            const position = index - midIndex;
            
            // Percentage-based translation so it scales fluidly on all screens
            const rotateY = position * angleStep;
            // Center card pushed back, outer cards closer to the viewer
            const translateZ = (Math.abs(position) - midIndex) * 35; 
            // Lift outer cards slightly to form a neat smile curvature
            const translateY = -Math.abs(position) * 6;

            // Custom offsets to ensure cards touch perfectly without gaps in 3D space
            const offsets = [-300, -201, -101, 0, 101, 201, 300];
            const translateXPercent = offsets[index];

            return (
              <div
                key={card.id}
                style={{
                  position: 'absolute',
                  width: `${cardWidthPercent}%`,
                  left: '50%',
                  height: 'auto',
                  transformStyle: 'preserve-3d',
                  pointerEvents: 'auto',
                  // translateX(-50%) centers the absolute element
                  transform: `translateX(-50%) translateX(${translateXPercent}%) translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                }}
              >
                <TickerCard
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  metric={card.metric}
                  description={card.description}
                  width="100%"
                  height="auto"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThreeDGallery;
