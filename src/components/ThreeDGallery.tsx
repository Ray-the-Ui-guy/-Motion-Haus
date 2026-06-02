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
  // Explicit design tokens provided by the user (arranged index 0 to 6 representing Card 7 to Card 1)
  const layouts = [
    // Card 7 (leftmost)
    {
      width: '186px',
      height: '494px',
      translateX: '-640px',
      translateY: '-127px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 6
    {
      width: '226px',
      height: '368px',
      translateX: '-414px',
      translateY: '-64px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 5
    {
      width: '186px',
      height: '271px',
      translateX: '-194px',
      translateY: '-16px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 4 (center)
    {
      width: '174px',
      height: '239px',
      translateX: '0px',
      translateY: '0px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 3
    {
      width: '185px',
      height: '276px',
      translateX: '192px',
      translateY: '-20px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 2
    {
      width: '227px',
      height: '374px',
      translateX: '414px',
      translateY: '-65px',
      rotateY: '0deg',
      translateZ: '0px',
    },
    // Card 1 (rightmost)
    {
      width: '193px',
      height: '508px',
      translateX: '640px',
      translateY: '-128px',
      rotateY: '0deg',
      translateZ: '0px',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '530px', // Adjusted to fully view 508px tall cards
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
          width: '100%',
          maxWidth: '1280px', 
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '16px',
          perspective: '1500px', 
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
            const layout = layouts[index] || layouts[3];

            return (
              <div
                key={card.id}
                style={{
                  position: 'absolute',
                  width: layout.width,
                  height: layout.height,
                  left: '50%',
                  transformStyle: 'preserve-3d',
                  pointerEvents: 'auto',
                  // Position relative to absolute center of parent using exact translation metrics
                  transform: `translateX(-50%) translateX(${layout.translateX}) translateY(${layout.translateY}) rotateY(${layout.rotateY}) translateZ(${layout.translateZ})`,
                  transition: 'transform 0.5s ease',
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
