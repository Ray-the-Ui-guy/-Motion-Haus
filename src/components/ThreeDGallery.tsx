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

  // Spacing width of each card slice to meet exactly edge-to-edge
  const cardWidth = 262; 
  const angleStep = 9.5; // Steeper angle step for tighter fit

  return (
    <div
      style={{
        width: '100%',
        height: '420px', 
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: 0,
      }}
    >
      {/* ── VIEWPORT CONTAINER ── */}
      <div
        style={{
          width: 'calc(100% - 116px)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '24px',
          perspective: '1500px', 
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
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
            const translateX = position * cardWidth;
            const rotateY = position * angleStep;
            // Depth translation to create the curved screen shape
            const translateZ = -Math.abs(position) * 22; 
            // Slight Y dip to simulate realistic curved monitor view from center
            const translateY = Math.abs(position) * 2;

            return (
              <div
                key={card.id}
                style={{
                  position: 'absolute',
                  width: `${cardWidth}px`,
                  height: 'auto',
                  transformStyle: 'preserve-3d',
                  pointerEvents: 'auto',
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                }}
              >
                <TickerCard
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  metric={card.metric}
                  description={card.description}
                  width="100%"
                  height="100%"
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
