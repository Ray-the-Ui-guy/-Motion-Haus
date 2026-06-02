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
  const [isTabletOrMobile, setIsTabletOrMobile] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia('(max-width: 991px)');
    setIsTabletOrMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsTabletOrMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);


  // Percentage-based fluid design tokens ensuring exact 10px spacing and perfect scale
  const layouts = [
    // Card 7 (leftmost)
    {
      width: '13.5%',
      aspectRatio: '171/486',
    },
    // Card 6
    {
      width: '16.4%',
      aspectRatio: '226/363',
    },
    // Card 5
    {
      width: isTabletOrMobile ? '32%' : '13.5%',
      aspectRatio: '186/269',
    },
    // Card 4 (center)
    {
      width: isTabletOrMobile ? '29%' : '12.6%',
      aspectRatio: '174/239',
    },
    // Card 3
    {
      width: isTabletOrMobile ? '32%' : '13.4%',
      aspectRatio: '185/274',
    },
    // Card 2
    {
      width: '16.5%',
      aspectRatio: '227/369',
    },
    // Card 1 (rightmost)
    {
      width: '14.0%',
      aspectRatio: '179/499',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        height: isTabletOrMobile ? '340px' : '580px', // Smaller height on mobile/tablet since cards are smaller
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
          width: isTabletOrMobile ? 'calc(100% - 58px)' : 'calc(100% - 120px)', // Leaves 2px gap from left/right guidelines on desktop
          maxWidth: '1200px', // Prevents cards from scaling too large and clipping on wide screens
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: isTabletOrMobile ? 'hidden' : 'visible', // Hide overflow on mobile for marquee scroll bounds
          position: 'relative',
        }}
      >
        {isTabletOrMobile ? (
          /* ── MOBILE MARQUEE CAROUSEL TRACK (Scrolls from left infinitely) ── */
          <div
            style={{
              display: 'flex',
              gap: '4px', // 4px spacing between cards on mobile/tablet
              width: 'max-content',
              animation: 'marqueeMobile 16s linear infinite',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Render 3 middle cards duplicated for infinite seamless looping */}
            {[
              ...items.filter((_, idx) => idx >= 2 && idx <= 4), 
              ...items.filter((_, idx) => idx >= 2 && idx <= 4)
            ].map((card, index) => {
              // Custom layout matching Card 5, Card 4, and Card 3 aspect ratios in order
              const itemAspect = index % 3 === 0 ? '186/269' : index % 3 === 1 ? '174/239' : '185/274';
              
              return (
                <div
                  key={`${card.id}-${index}`}
                  style={{
                    width: 'calc((100vw - 58px - 8px) / 3)', // Adjusted for 4px gaps (2 gaps = 8px)
                    aspectRatio: itemAspect,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transformStyle: 'preserve-3d',
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
        ) : (
          /* ── DESKTOP STATIC CURVED GALLERY ── */
          <div
            style={{
              width: '100%',
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
        )}
      </div>
    </div>
  );
};

export default ThreeDGallery;
