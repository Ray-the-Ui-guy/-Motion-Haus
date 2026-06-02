import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

// 7 generated image paths for the high-speed reels
const images = [
  '/fluffy_cat.png',
  '/basketball_shoe.png',
  '/metallic_bubble.png',
  '/basketball_hoop.png',
  '/player_flat.png',
  '/athlete_bold.png',
  '/surreal_portrait.png',
];

// Tripled array to enable infinite seamless high-speed vertical scrolling
const triReel = [...images, ...images, ...images];

export default function Loader({ onComplete }: LoaderProps) {
  const [shutterOpen, setShutterOpen] = useState(false);
  const [timecode, setTimecode] = useState('00:00:00:00');

  useEffect(() => {
    // Generate ticking timecode millisecond changes for camera overlay
    let frame = 0;
    const interval = setInterval(() => {
      frame += 3;
      const ms = String(frame % 100).padStart(2, '0');
      const sec = String(Math.floor(frame / 100) % 60).padStart(2, '0');
      setTimecode(`00:00:${sec}:${ms}`);
    }, 30);

    // Stage 1: High speed playback for 2.0 seconds, then trigger camera shutter opening
    const shutterTimer = setTimeout(() => {
      setShutterOpen(true);
    }, 2000);

    // Stage 2: Shutter open animation completes in 0.8 seconds, unmount loader
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(shutterTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#020202',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      className={shutterOpen ? 'shutter-reveal' : ''}
    >
      {/* Viewfinder Scanline grid overlay */}
      <div className="scanline-grid" />

      {/* ── CENTRAL RECORDING VIEWPORT (The "Screen Stroke") ── */}
      <div
        style={{
          position: 'relative',
          width: 'clamp(320px, 80vw, 840px)',
          height: 'clamp(240px, 50vh, 480px)',
          border: '1.2px solid rgba(255, 255, 255, 0.15)',
          background: '#000000',
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 50px rgba(51, 92, 255, 0.08)',
        }}
      >
        {/* ── Viewfinder Camera HUD L-Brackets ── */}
        {/* Top-Left */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', width: '20px', height: '20px', borderTop: '3px solid #FFF', borderLeft: '3px solid #FFF' }} />
        {/* Top-Right */}
        <div style={{ position: 'absolute', top: '16px', right: '16px', width: '20px', height: '20px', borderTop: '3px solid #FFF', borderRight: '3px solid #FFF' }} />
        {/* Bottom-Left */}
        <div style={{ position: 'absolute', bottom: '16px', left: '16px', width: '20px', height: '20px', borderBottom: '3px solid #FFF', borderLeft: '3px solid #FFF' }} />
        {/* Bottom-Right */}
        <div style={{ position: 'absolute', bottom: '16px', right: '16px', width: '20px', height: '20px', borderBottom: '3px solid #FFF', borderRight: '3px solid #FFF' }} />

        {/* ── High-Speed Reels Playing inside Viewport ── */}
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            opacity: 0.6,
            pointerEvents: 'none',
            padding: '24px 0',
          }}
        >
          {/* Reel Strip 1 */}
          <div className="reel-strip-vertical" style={{ animationDuration: '0.8s' }}>
            {triReel.map((img, i) => (
              <div
                key={`v1-${i}`}
                style={{
                  width: '130px',
                  height: '180px',
                  borderRadius: '6px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>

          {/* Reel Strip 2 (scrolling reverse) */}
          <div className="reel-strip-vertical" style={{ animationDuration: '0.6s', animationDirection: 'reverse' }}>
            {triReel.map((img, i) => (
              <div
                key={`v2-${i}`}
                style={{
                  width: '130px',
                  height: '180px',
                  borderRadius: '6px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>

          {/* Reel Strip 3 */}
          <div className="reel-strip-vertical" style={{ animationDuration: '0.7s' }}>
            {triReel.map((img, i) => (
              <div
                key={`v3-${i}`}
                style={{
                  width: '130px',
                  height: '180px',
                  borderRadius: '6px',
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Viewport Live Overlay HUD */}
        {/* REC Label */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#FFFFFF',
            fontFamily: "'Inter Tight', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '1.5px',
          }}
        >
          <span
            className="rec-dot"
            style={{ width: '8px', height: '8px', background: '#FF3333', borderRadius: '50%' }}
          />
          <span>REC Scene</span>
        </div>

        {/* timecode inside viewport */}
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            color: '#FFFFFF',
            fontFamily: 'monospace',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            background: 'rgba(0, 0, 0, 0.45)',
            padding: '2px 8px',
            borderRadius: '4px',
          }}
        >
          {timecode}
        </div>

        {/* Viewport Horizontal/Vertical Grid Center Lines */}
        <div style={{ position: 'absolute', width: '20px', height: '1px', background: 'rgba(255,255,255,0.5)', top: '50%' }} />
        <div style={{ position: 'absolute', height: '20px', width: '1px', background: 'rgba(255,255,255,0.5)', left: '50%' }} />
      </div>

      {/* Outer monitor info text (captions below viewport) */}
      <div
        style={{
          marginTop: '28px',
          textAlign: 'center',
          color: '#BBBBBB',
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span>TIMELINE COMPILATION IN PROGRESS</span>
        <div
          style={{
            width: '180px',
            height: '2px',
            background: 'rgba(51, 92, 255, 0.15)',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              background: '#335CFF',
              width: '100%',
              transformOrigin: 'left',
              animation: 'progressRun 2s ease-in-out forwards',
            }}
          />
        </div>
      </div>
    </div>
  );
}
