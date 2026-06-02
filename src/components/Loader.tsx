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

    // Stage 1: High speed playback for 1.8 seconds, then trigger camera shutter opening
    const shutterTimer = setTimeout(() => {
      setShutterOpen(true);
    }, 1800);

    // Stage 2: Shutter open animation completes in 0.8 seconds, unmount loader
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2600);

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
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      className={shutterOpen ? 'shutter-reveal' : ''}
    >
      {/* Viewfinder Scanline grid overlay */}
      <div className="scanline-grid" />

      {/* ── High Speed Video Reel Strip Backdrop ── */}
      <div
        style={{
          width: '100%',
          height: '120%',
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      >
        {/* Strip 1 */}
        <div className="reel-strip-vertical" style={{ animationDuration: '0.8s' }}>
          {triReel.map((img, i) => (
            <div
              key={`r1-${i}`}
              style={{
                width: '180px',
                height: '240px',
                borderRadius: '8px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
          ))}
        </div>

        {/* Strip 2 (offset/faster) */}
        <div className="reel-strip-vertical" style={{ animationDuration: '0.6s', animationDirection: 'reverse' }}>
          {triReel.map((img, i) => (
            <div
              key={`r2-${i}`}
              style={{
                width: '180px',
                height: '240px',
                borderRadius: '8px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
          ))}
        </div>

        {/* Strip 3 */}
        <div className="reel-strip-vertical" style={{ animationDuration: '0.7s' }}>
          {triReel.map((img, i) => (
            <div
              key={`r3-${i}`}
              style={{
                width: '180px',
                height: '240px',
                borderRadius: '8px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Viewfinder HUD Graphics ── */}
      {/* Top Margin Header HUD */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFFFFF',
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '2px',
          zIndex: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            className="rec-dot"
            style={{ width: '10px', height: '10px', background: '#FF3333', borderRadius: '50%' }}
          />
          <span>REC</span>
        </div>
        <div>
          <span>1080P 60FPS</span>
        </div>
      </div>

      {/* Center Viewfinder crosshair */}
      <div
        style={{
          position: 'absolute',
          width: '32px',
          height: '32px',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        {/* Horizontal crosshair */}
        <div style={{ position: 'absolute', width: '100%', height: '1px', background: 'rgba(255,255,255,0.4)', top: '50%' }} />
        {/* Vertical crosshair */}
        <div style={{ position: 'absolute', height: '100%', width: '1px', background: 'rgba(255,255,255,0.4)', left: '50%' }} />
      </div>

      {/* Bottom HUD Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          right: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          color: '#FFFFFF',
          fontFamily: "'Inter Tight', sans-serif",
          zIndex: 20,
        }}
      >
        <div>
          <span style={{ fontSize: '11px', color: '#BBBBBB', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>PLAYBACK SPEED</span>
          <span style={{ fontSize: '18px', fontWeight: 700, color: '#335CFF', letterSpacing: '1px' }}>FAST FORWARD 1.8x</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '11px', color: '#BBBBBB', letterSpacing: '2px', display: 'block', marginBottom: '4px' }}>TIMECODE</span>
          <span style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '2px', fontFamily: 'monospace' }}>{timecode}</span>
        </div>
      </div>
    </div>
  );
}
