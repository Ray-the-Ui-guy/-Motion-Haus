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
  // Percentage-based fluid design tokens ensuring exact 10px spacing and perfect scale
  const layouts = [
    // Card 7 (leftmost)
    {
      width: '13.5%',
      aspectRatio: '186/494',
      translateY: '-100px',
    },
    // Card 6
    {
      width: '16.4%',
      aspectRatio: '226/368',
      translateY: '-50px',
    },
    // Card 5
    {
      width: '13.5%',
      aspectRatio: '186/271',
      translateY: '-13px',
    },
    // Card 4 (center)
    {
      width: '12.6%',
      aspectRatio: '174/239',
      translateY: '0px',
    },
    // Card 3
    {
      width: '13.4%',
      aspectRatio: '185/276',
      translateY: '-16px',
    },
    // Card 2
    {
      width: '16.5%',
      aspectRatio: '227/374',
      translateY: '-51px',
    },
    // Card 1 (rightmost)
    {
      width: '14.0%',
      aspectRatio: '193/508',
      translateY: '-100px',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '440px', // Sized to fit scaled cards and translateY offsets
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: 0,
      }}
    >
      {/* ── VIEWPORT CONTAINER (Constrained exactly to vertical dashed guide lines) ── */}
      <div
        style={{
          width: 'calc(100% - 116px)', // Extends exactly between the left (58px) and right (58px) guidelines
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px', // Exact 10px spacing
        }}
      >
        {items.map((card, index) => {
          const layout = layouts[index] || layouts[3];

          return (
            <div
              key={card.id}
              style={{
                width: layout.width,
                aspectRatio: layout.aspectRatio,
                transform: `translateY(${layout.translateY})`,
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
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
  );
};

export default ThreeDGallery;
