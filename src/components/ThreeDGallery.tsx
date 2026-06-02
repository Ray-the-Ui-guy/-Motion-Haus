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
    },
    // Card 6
    {
      width: '16.4%',
      aspectRatio: '226/368',
    },
    // Card 5
    {
      width: '13.5%',
      aspectRatio: '186/271',
    },
    // Card 4 (center)
    {
      width: '12.6%',
      aspectRatio: '174/239',
    },
    // Card 3
    {
      width: '13.4%',
      aspectRatio: '185/276',
    },
    // Card 2
    {
      width: '16.5%',
      aspectRatio: '227/374',
    },
    // Card 1 (rightmost)
    {
      width: '14.0%',
      aspectRatio: '193/508',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: '530px', // Set to house the tallest card (508px) plus breathing room
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: 0,
      }}
    >
      {/* ── VIEWPORT CONTAINER (Constrained exactly to vertical dashed guide lines + 15px gap) ── */}
      <div
        style={{
          width: 'calc(100% - 146px)', // Leaves exactly 15px gap from left (58px) and right (58px) guide lines
          maxWidth: '1200px', // Prevents cards from scaling too large and clipping on wide screens
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '6px', // 6px spacing between cards
        }}
      >
        {items.map((card, index) => {
          const layout = layouts[index] || layouts[3];

          return (
            <div
              key={card.id}
              style={{
                width: layout.width,
                height: '100%', // Spans full height of the parent gallery
                display: 'flex',
                alignItems: 'center', // Centers the child card vertically (top to down)
                justifyContent: 'center',
                position: 'relative',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: layout.aspectRatio,
                  transformStyle: 'preserve-3d',
                  position: 'relative',
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeDGallery;
