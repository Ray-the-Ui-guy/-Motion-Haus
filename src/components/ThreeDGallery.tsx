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
  const [flippedCardId, setFlippedCardId] = React.useState<number | null>(null);

  React.useEffect(() => {
    const media = window.matchMedia('(max-width: 991px)');
    setIsTabletOrMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsTabletOrMobile(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, []);

  // Close/flip back card when clicking anywhere outside
  React.useEffect(() => {
    const handleOutsideClick = () => {
      setFlippedCardId(null);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
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
          overflow: 'hidden', // Contain scrolling carousel within margins
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
              animation: 'marqueeMobile 10s linear infinite', // Faster mobile animation (10s instead of 16s)
              animationPlayState: flippedCardId !== null ? 'paused' : 'running', // Pauses ONLY when card is flipped
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
                    isFlipped={flippedCardId === card.id}
                    onFlip={(flipped) => setFlippedCardId(flipped ? card.id : null)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          /* ── DESKTOP MARQUEE CAROUSEL TRACK (Scrolls from left infinitely) ── */
          <div
            className="gallery-track-desktop"
            style={{
              display: 'flex',
              gap: '6px',
              width: 'max-content',
              animationPlayState: flippedCardId !== null ? 'paused' : 'running', // Pauses ONLY when card is flipped
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Render all 7 cards duplicated for infinite seamless looping */}
            {[...items, ...items].map((card, index) => {
              const layoutIndex = index % 7;
              const layout = layouts[layoutIndex] || layouts[3];
              
              // Map to absolute figma sizes to support max-content track correctly
              const absoluteSizes = [
                { width: '186px', height: '494px' }, // Card 7
                { width: '226px', height: '368px' }, // Card 6
                { width: '186px', height: '271px' }, // Card 5
                { width: '174px', height: '239px' }, // Card 4
                { width: '185px', height: '276px' }, // Card 3
                { width: '227px', height: '374px' }, // Card 2
                { width: '193px', height: '508px' }, // Card 1
              ];
              const size = absoluteSizes[layoutIndex];

              return (
                <div
                  key={`${card.id}-${index}`}
                  style={{
                    width: size.width,
                    height: '580px', // Spans full height of parent gallery to align center
                    display: 'flex',
                    alignItems: 'center', // Centered vertically (top to bottom)
                    justifyContent: 'center',
                    flexShrink: 0,
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
                      isFlipped={flippedCardId === card.id}
                      onFlip={(flipped) => setFlippedCardId(flipped ? card.id : null)}
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
