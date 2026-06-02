interface TickerCardProps {
  id: number;
  imageUrl: string;
  title: string;
  metric: string;
  description: string;
  width: string;
  height: string;
}

export default function TickerCard({
  id,
  imageUrl,
  title,
  metric,
  description,
  width,
  height,
}: TickerCardProps) {
  return (
    <div
      className="ticker-card-container group select-none cursor-pointer"
      data-id={id}
      style={{
        width: width,
        height: height,
        perspective: '1200px',
        flexShrink: 0,
      }}
    >
      {/* Flipping Inner Wrapper */}
      <div
        className="ticker-card-inner"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        }}
      >
        {/* FRONT SIDE (Stunning Image Card) */}
        <div
          className="ticker-card-front"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            border: 'none',
            overflow: 'hidden',
            backfaceVisibility: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Render the brand card in its premium rounded rectangular shape */}
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* BACK SIDE (Premium Dark-Glassmorphism Metric Info) */}
        <div
          className="ticker-card-back"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            border: '1px solid rgba(51, 92, 255, 0.4)',
            background: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 8px 32px rgba(51, 92, 255, 0.15)',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(12px, 2vw, 20px)', // Adaptive padding
            overflow: 'hidden',
          }}
        >
          {/* Cybernetic aesthetic background grid lines on back */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(51, 92, 255, 0.08) 1px, transparent 0)',
              backgroundSize: '16px 16px',
              opacity: 0.5,
              zIndex: 0,
            }}
          />

          {/* Back Header */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span
              style={{
                fontSize: '9px',
                fontWeight: 700,
                color: '#335CFF',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                display: 'block',
                marginBottom: '4px',
              }}
            >
              PRODUCTION SHOOT
            </span>
            <h4
              style={{
                fontSize: 'clamp(13px, 1.6vw, 16px)', // Adaptive title font-size
                fontWeight: 600,
                color: '#FFFFFF',
                margin: 0,
                fontFamily: "'Inter Tight', sans-serif",
                lineHeight: '1.2',
              }}
            >
              {title}
            </h4>
          </div>

          {/* Giant Metric */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              margin: '8px 0',
              fontFamily: "'Inter Tight', sans-serif",
            }}
          >
            <div
              style={{
                fontSize: 'clamp(28px, 3.5vw, 36px)', // Adaptive metric font-size
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: '1',
                textShadow: '0 0 20px rgba(51, 92, 255, 0.4)',
              }}
            >
              {metric}
            </div>
            <div
              style={{
                height: '2px',
                width: '30px',
                background: 'linear-gradient(90deg, #335CFF, transparent)',
                marginTop: '6px',
              }}
            />
          </div>

          {/* Brief Description */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontSize: 'clamp(11px, 1.2vw, 12.5px)', // Adaptive description font-size
                color: '#BBBBBB',
                lineHeight: '1.4',
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
