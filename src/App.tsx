import { useState, useEffect } from 'react';
import TickerCard from './components/TickerCard';
import Loader from './components/Loader';
import BorderGlow from './components/BorderGlow';

const cardData = [
  {
    id: 1,
    imageUrl: '/fluffy_cat.png',
    title: 'Automated Leads',
    metric: '+412%',
    description: 'Instantly capture and segment inbound organic traffic using conversational bots.',
  },
  {
    id: 2,
    imageUrl: '/basketball_shoe.png',
    title: 'Conversion Boost',
    metric: '+340%',
    description: 'Optimize cart checkouts and trigger personalized interactive videos in real-time.',
  },
  {
    id: 3,
    imageUrl: '/metallic_bubble.png',
    title: 'Instant Response',
    metric: '< 1.2s',
    description: 'Zero latency interactive sales agents handling thousands of queries simultaneously.',
  },
  {
    id: 4,
    imageUrl: '/basketball_hoop.png',
    title: 'Hyper Engagement',
    metric: '92.4%',
    description: 'Maintain attention rates with ultra-realistic video and product showcase modals.',
  },
  {
    id: 5,
    imageUrl: '/player_flat.png',
    title: 'Traffic Scale',
    metric: '84k+',
    description: 'Scalable robot infrastructure handling extreme spikes during major global product drops.',
  },
  {
    id: 6,
    imageUrl: '/athlete_bold.png',
    title: 'AOV Multiplier',
    metric: '5.8x',
    description: 'Maximize average order value through intelligent checkout upsells customized in real-time.',
  },
  {
    id: 7,
    imageUrl: '/surreal_portrait.png',
    title: 'Global Presence',
    metric: '120+',
    description: 'Deploy interactive sales agents in over 120 languages with localized real-time speech.',
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main
        style={{
          width: '100%',
          minHeight: '100vh',
          background: '#000000',
          color: '#FFFFFF',
          position: 'relative',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      >
        {/* ── Ambient Glow Light Backdrop ── */}
        <div className="ambient-glow" />

        {/* ── Technical Grid Lines and Dots (Blueprint Overlay) ── */}
        {/* Top Left Dot */}
        <div className="grid-corner-dot" style={{ left: '52px', top: '52px' }} />
        {/* Top Right Dot */}
        <div className="grid-corner-dot" style={{ right: '52px', top: '52px' }} />
        {/* Bottom Left Dot */}
        <div className="grid-corner-dot" style={{ left: '52px', bottom: '52px' }} />
        {/* Bottom Right Dot */}
        <div className="grid-corner-dot" style={{ right: '52px', bottom: '52px' }} />

        {/* Vertical Blueprint Dashed Lines (Exact 18px dash, 6px gap, 1.2px width, 0.4 opacity) */}
        <div
          style={{
            position: 'absolute',
            width: '1.2px',
            height: '100%',
            left: '58px',
            top: 0,
            backgroundImage: 'linear-gradient(to bottom, rgba(115, 115, 115, 0.4) 0px, rgba(115, 115, 115, 0.4) 18px, transparent 18px, transparent 24px)',
            backgroundSize: '1.2px 24px',
            backgroundRepeat: 'repeat-y',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '1.2px',
            height: '100%',
            right: '58px',
            top: 0,
            backgroundImage: 'linear-gradient(to bottom, rgba(115, 115, 115, 0.4) 0px, rgba(115, 115, 115, 0.4) 18px, transparent 18px, transparent 24px)',
            backgroundSize: '1.2px 24px',
            backgroundRepeat: 'repeat-y',
            pointerEvents: 'none',
          }}
        />

        {/* Horizontal Blueprint Dashed Lines (Exact 18px dash, 6px gap, 1.2px height, 0.4 opacity) */}
        <div
          style={{
            position: 'absolute',
            height: '1.2px',
            width: '100%',
            left: 0,
            top: '58px',
            backgroundImage: 'linear-gradient(to right, rgba(115, 115, 115, 0.4) 0px, rgba(115, 115, 115, 0.4) 18px, transparent 18px, transparent 24px)',
            backgroundSize: '24px 1.2px',
            backgroundRepeat: 'repeat-x',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: '1.2px',
            width: '100%',
            left: 0,
            bottom: '58px',
            backgroundImage: 'linear-gradient(to right, rgba(115, 115, 115, 0.4) 0px, rgba(115, 115, 115, 0.4) 18px, transparent 18px, transparent 24px)',
            backgroundSize: '24px 1.2px',
            backgroundRepeat: 'repeat-x',
            pointerEvents: 'none',
          }}
        />


        {/* ── Main Hero Content ── */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 24px',
            textAlign: 'center',
            maxWidth: '1044px',
            zIndex: 5,
          }}
        >
          {/* Dynamic AI Badge */}
          <div
            className="font-body"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(51, 92, 255, 0.1)',
              border: '1px solid rgba(51, 92, 255, 0.3)',
              borderRadius: '200px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1px',
              color: '#335CFF',
              textTransform: 'uppercase',
              marginBottom: '28px',
              boxShadow: '0 0 15px rgba(51, 92, 255, 0.2)',
            }}
          >
            <span style={{ width: '6px', height: '6px', background: '#335CFF', borderRadius: '50%' }} />
            Creative Agency Active
          </div>

          {/* Headline (Formatted strictly in two lines, fully capitalized, custom border for CREATIVE) */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(28px, 4.4vw, 56px)',
              fontWeight: 800,
              lineHeight: '1.4',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              maxWidth: '1200px',
              margin: '0 auto 28px',
              color: '#FBFBFBB2',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ display: 'block', width: '100%' }}>
              A{' '}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px 16px',
                  border: '1.5px solid #FFFFFF',
                  borderRadius: '4px',
                  color: '#FFFFFF',
                  fontSize: '0.95em',
                  margin: '0 8px',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.25)',
                }}
              >
                CREATIVE
              </span>{' '}
              Video Creation Agency
            </span>
            <span style={{ display: 'block', width: '100%', color: '#FBFBFBB2' }}>
              that drives engagement
            </span>
          </h1>

          {/* Tagline / Subheading */}
          <p
            className="font-body"
            style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              fontWeight: 400,
              lineHeight: '1.6',
              letterSpacing: '0.5px',
              color: '#BBBBBB',
              maxWidth: '668px',
              margin: '0 auto 40px',
            }}
          >
            We enhances businesses' ability to boost customer engagement through the integration of personalized and interactive elements into their videos.
          </p>

          {/* Interactive BorderGlow Action Button */}
          <BorderGlow
            edgeSensitivity={35}
            glowColor="229 100 60"
            backgroundColor="#111111"
            borderRadius={1000}
            glowRadius={32}
            glowIntensity={1.8}
            colors={['#335CFF', '#4E98FF', '#002BFF']}
          >
            <button
              className="font-body"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '16px 42px',
                fontSize: '18px',
                fontWeight: 500,
                color: '#FFFFFF',
                cursor: 'pointer',
                display: 'block',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0px -1px 3px #335CFF, 0px -4px 11px #335CFF, 0px 1px 0px #4E98FF, 0px 5px 4px rgba(0, 0, 0, 0.8), inset 0px 1px 4px #272727',
                borderRadius: '1000px',
              }}
            >
              Generate Cards
            </button>
          </BorderGlow>
        </section>


      {/* ── Auto-Scrolling Marquee Ticker ── */}
      <section
        className="ticker-container"
        style={{
          width: '100%',
          overflow: 'hidden',
          padding: '40px 0',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="ticker-track">
          {/* Render first set of cards */}
          {cardData.map(card => (
            <TickerCard
              key={`front-${card.id}`}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              metric={card.metric}
              description={card.description}
              width="210px"
              height="460px"
            />
          ))}
          {/* Duplicate cards for infinite loop marquee */}
          {cardData.map(card => (
            <TickerCard
              key={`back-${card.id}`}
              id={card.id}
              imageUrl={card.imageUrl}
              title={card.title}
              metric={card.metric}
              description={card.description}
              width="210px"
              height="460px"
            />
          ))}
        </div>
      </section>
    </main>
  </>
  );
}
