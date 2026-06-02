import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dxRef = useRef(0);

  // Set card references
  cardRefs.current = [];
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    const spacing = 220; // Proportional snug spacing for larger cards
    const total = items.length;
    const totalWidth = total * spacing;
    const halfTotalWidth = totalWidth / 2;

    const tick = () => {
      // Update autoplay horizontal carousel offset from start
      dxRef.current += 2.4; // Speed of autoscroll

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        // Base coordinate on a horizontal plane
        const baseX = (index - Math.floor(total / 2)) * spacing;
        const targetX = baseX + dxRef.current;

        // Infinite wrap logic
        let wrappedX = ((targetX + halfTotalWidth) % totalWidth);
        if (wrappedX < 0) wrappedX += totalWidth;
        wrappedX -= halfTotalWidth;

        // Calculate continuous smooth active position offset
        const position = wrappedX / spacing;

        // Enhanced Ultrawide Monitor Curvature (much more curved)
        const targetRotateY = position * 19; // Steeper angle
        const targetZ = -Math.abs(position) * 95; // Deeper depth displacement
        const targetScale = 1.16 - Math.abs(position) * 0.085; // Stronger focal center scale
        const targetY = Math.abs(position) * 6; // curved monitor dip

        // Custom opacity: fade out smoothly near the edges of the widescreen viewport
        let baseOpacity = 1;
        if (Math.abs(wrappedX) > 600) {
          baseOpacity = Math.max(0, (halfTotalWidth - Math.abs(wrappedX)) / (halfTotalWidth - 600));
        }

        // Set high-performance transform styles via GSAP quickSetter
        gsap.set(card, {
          x: wrappedX,
          y: targetY,
          rotationY: targetRotateY,
          z: targetZ,
          scale: targetScale,
          opacity: baseOpacity,
          zIndex: 0,
        });
      });

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [items.length]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '520px', // Restrict height to completely remove space after carousel
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: 0,
      }}
    >
      {/* ── VIEWPORT CONTAINER (Clipped exactly at vertical dashed lines) ── */}
      <div
        style={{
          width: 'calc(100% - 116px)', // Align and clip exactly at vertical dashed lines (58px offset on each side)
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '24px',
          perspective: '2000px', // Premium depth perspective camera
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
          {items.map((card) => (
            <div
              key={card.id}
              ref={addToRefs}
              style={{
                position: 'absolute',
                width: 'clamp(240px, 20vw, 310px)', // Increased size more
                height: 'auto',
                aspectRatio: '9 / 13',
                transformStyle: 'preserve-3d',
                pointerEvents: 'auto',
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDGallery;
