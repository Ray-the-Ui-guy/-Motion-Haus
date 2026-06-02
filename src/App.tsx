import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import GlowingButton from './components/GlowingButton';
const heroBg = 'https://files.catbox.moe/u0fblg.png';
import badgeIcon from './assets/Frame 2087328322.svg';
const card1 = 'https://files.catbox.moe/kixh2j.png';
const card2 = 'https://files.catbox.moe/lq17t3.png';
const card3 = 'https://files.catbox.moe/n6n8sn.png';
const card4 = 'https://files.catbox.moe/54s3x8.png';
const card5 = 'https://files.catbox.moe/97a9l4.png';
const card6 = 'https://files.catbox.moe/m7q5pl.png';
const card7 = 'https://files.catbox.moe/2s78d7.png';

// Custom 3D Panoramic Curved Gallery
import ThreeDGallery from './components/ThreeDGallery';

const cardData = [
  {
    id: 1,
    imageUrl: card1,
    title: 'Project: Speed Telemetry',
    metric: 'S-01',
    description: 'Hyper-detailed athlete motion tracking, vector overlay overlays, and futuristic HUD graphics captured in high-contrast low light.',
  },
  {
    id: 2,
    imageUrl: card2,
    title: 'Project: Court Action',
    metric: 'S-02',
    description: 'Cinematic sports showcase featuring slow-motion ball trajectories, dynamic hoop physics, and multi-angle camera rigs.',
  },
  {
    id: 3,
    imageUrl: card3,
    title: 'Project: Fluid Metals',
    metric: 'S-03',
    description: 'High-end 3D CGI simulating realistic chrome surfaces, macro fluid bubbles, and dynamic ambient light refractions.',
  },
  {
    id: 4,
    imageUrl: card4,
    title: 'Project: Aero Kicks',
    metric: 'S-04',
    description: 'Floating commercial footwear showcase highlighting intricate materials, rotating platform layouts, and high-fashion backdrops.',
  },
  {
    id: 5,
    imageUrl: card5,
    title: 'Project: Neon Portrait',
    metric: 'S-05',
    description: 'Sleek cyberpunk editorial exploring high-contrast color tones, soft dreamlike volumetric smoke, and high-fashion aesthetics.',
  },
  {
    id: 6,
    imageUrl: card6,
    title: 'Project: Fluffy Motion',
    metric: 'S-06',
    description: 'Charming pet studio product shoot emphasizing high-speed shutter captures, fine hair details, and warm lighting setups.',
  },
  {
    id: 7,
    imageUrl: card7,
    title: 'Project: Star Map HUD',
    metric: 'S-07',
    description: 'Deep-space digital viewfinder telemetry HUD rendering vector star trails, coordinates, and complex system controls.',
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
          padding: '24px 0 0',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.4s ease-in-out',
        }}
      >
        {/* Invisible pre-loading cache container to pre-load all high-fidelity images instantly */}
        <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
          <img src={card4} alt="" />
          <img src={card5} alt="" />
          <img src={card6} alt="" />
          <img src={card7} alt="" />
        </div>
        {/* ── Technical Grid Lines and Dots (Blueprint Overlay - Spanning the whole page) ── */}
        {/* Top Left Dot */}
        <div className="grid-corner-dot" style={{ left: '52px', top: '52px' }} />
        {/* Top Right Dot */}
        <div className="grid-corner-dot" style={{ right: '52px', top: '52px' }} />

        {/* Vertical Blueprint Dashed Lines */}
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
            zIndex: 1,
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
            zIndex: 1,
          }}
        />

        {/* Horizontal Blueprint Dashed Lines */}
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
            zIndex: 1,
          }}
        />


        {/* Invisible SVG definition for the responsive horizontal hourglass clip path */}
        <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
          <defs>
            <clipPath id="hourglass-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 Q 0.5 0.18, 1 0 L 1 1 Q 0.5 0.82, 0 1 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ── 1. HERO SECTION (With Restricted Custom Background Image) ── */}
        <header
          id="hero"
          style={{
            width: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '120px 0 0',
            overflow: 'hidden',
          }}
        >
          {/* Custom background image - strictly locked to the Hero section */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url("${heroBg}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Hero Content Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              maxWidth: 'calc(100% - 116px)',
              margin: '0 auto',
              zIndex: 5,
              position: 'relative',
            }}
          >
            {/* Viewfinder Badge */}
            <img
              src={badgeIcon}
              alt="HUD Badge Icon"
              style={{
                width: '23px',
                height: '36px',
                marginBottom: '32px',
                display: 'block',
              }}
            />

            {/* Headline */}
            <h1
              className="font-display hero-headline"
              style={{
                fontFamily: "'VC Nudge Trial', 'Syne', sans-serif",
                fontSize: 'clamp(20px, 3.4vw, 54px)',
                fontWeight: 800,
                lineHeight: '1.2',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                maxWidth: '1044px',
                margin: '0 auto 16px',
                color: '#FBFBFBB2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                width: '100%',
              }}
            >
              <div className="headline-line-1" style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: '0.25em', width: '100%', whiteSpace: 'nowrap' }}>
                <span>A</span>
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.1em 0.4em',
                    margin: '0 2px',
                    verticalAlign: 'middle',
                  }}
                >
                  <svg
                    viewBox="0 0 303 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    style={{
                      position: 'absolute',
                      top: '-0.265em',
                      left: '-0.18em',
                      width: 'calc(100% + 0.36em)',
                      height: 'calc(100% + 0.53em)',
                      pointerEvents: 'none',
                      zIndex: 0,
                    }}
                  >
                    <path
                      d="M6.19949 0.750015C95.6963 5.7084 185.683 5.81015 300.101 3.79545M3.50012 1.29289C69.4611 4.7773 136.122 3.73392 300.09 3.42014M300.985 1.10295C301.834 35.9487 302.509 78.9444 299.958 94.6032M297.881 3.18559C297.281 24.0136 299.002 47.6953 298.06 95.5845M299.829 97.2461C196.271 89.6373 97.0061 93.8007 4.93611 95.4647M298.238 96.6835C204.927 99.7759 106.524 99.6748 2.57597 94.4778M5.37838 94.1422C-0.627844 67.8209 3.60047 43.4555 0.750031 1.58725M1.64425 94.9348C3.65604 57.4825 6.94108 21.7165 4.84992 1.3952"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span
                    style={{
                      color: '#FFFFFF',
                      position: 'relative',
                      zIndex: 2,
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.25)',
                    }}
                  >
                    CREATIVE
                  </span>
                </span>
                <span>Video Creation Agency</span>
              </div>
              <span className="headline-line-2" style={{ display: 'block', width: '100%', color: '#FBFBFBB2', textShadow: 'none' }}>
                that drives engagement
              </span>
            </h1>

            {/* Tagline */}
            <p
              className="font-body"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: 400,
                lineHeight: '32px',
                letterSpacing: '0.56px',
                color: '#BBBBBB',
                maxWidth: '668px',
                margin: '0 auto 24px',
              }}
            >
              We enhances businesses' ability to boost customer engagement through the integration of personalized and interactive elements into their videos.
            </p>

            {/* CTA Button */}
            <GlowingButton>Generate Cards</GlowingButton>
          </div>

          {/* 3D Panoramic Curved Sticky Scroll Gallery */}
          <ThreeDGallery items={cardData} />
        </header>


        {/* ── 2. WHY MOTION HAUS SECTION (Sleek Dark Theme) ── */}
        <section
          id="why"
          style={{
            width: '100%',
            maxWidth: 'calc(100% - 160px)',
            margin: '0 auto 40px',
            padding: '30px 20px',
            position: 'relative',
            zIndex: 10,
            borderTop: '1px dashed rgba(115, 115, 115, 0.25)',
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#335CFF',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            our core edges
          </span>

          <h2
            className="font-display"
            style={{
              fontFamily: "'VC Nudge Trial', sans-serif",
              fontSize: 'clamp(24px, 3.2vw, 42px)',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#FFFFFF',
            }}
          >
            Why Motion Haus
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {[
              {
                num: '01',
                title: 'High-Speed CGI Pipeline',
                desc: 'Real-time multi-threaded rendering engine that delivers stunning, immersive cinematic motion graphics in a fraction of traditional speeds.',
              },
              {
                num: '02',
                title: 'Conversational Video Agents',
                desc: 'We embed responsive smart bots directly into choice-driven interactive video templates, closing customer leads 24/7.',
              },
              {
                num: '03',
                title: 'Proven Conversion Multiplier',
                desc: 'Our motion directional systems drive visual authority, netting our clients an average of +340% sales conversion and 5.8x AOV increases.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid rgba(115, 115, 115, 0.12)',
                  borderRadius: '16px',
                  padding: '36px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(51, 92, 255, 0.4)';
                  el.style.background = 'rgba(51, 92, 255, 0.02)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(115, 115, 115, 0.12)';
                  el.style.background = 'rgba(255, 255, 255, 0.01)';
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: "'VC Nudge Trial', sans-serif",
                    color: '#335CFF',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  {feature.num} // SPEC
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    color: '#BBBBBB',
                    lineHeight: '1.6',
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* ── 3. SERVICES SECTION (Capabilities) ── */}
        <section
          id="services"
          style={{
            width: '100%',
            maxWidth: 'calc(100% - 160px)',
            margin: '40px auto',
            padding: '60px 20px',
            position: 'relative',
            zIndex: 10,
            borderTop: '1px dashed rgba(115, 115, 115, 0.25)',
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#335CFF',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            capabilities & services
          </span>

          <h2
            className="font-display"
            style={{
              fontFamily: "'VC Nudge Trial', sans-serif",
              fontSize: 'clamp(24px, 3.2vw, 42px)',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '60px',
              color: '#FFFFFF',
            }}
          >
            Capabilities
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {[
              {
                num: '01',
                title: 'Cinematic 3D Motion',
                desc: 'State-of-the-art simulated physics, complex particle effects, and high-fidelity product dynamics built inside cinema rendering environments.',
              },
              {
                num: '02',
                title: 'Blueprint Visual HUD',
                desc: 'Premium sci-fi viewport interfaces, futuristic vector guide-lines, and cinematic tech graphics layered perfectly onto video sequences.',
              },
              {
                num: '03',
                title: 'Interactive Storytelling',
                desc: 'Custom user-driven branching narrative frameworks that dynamically hook attention and dramatically accelerate consumer conversions.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid rgba(115, 115, 115, 0.15)',
                  borderRadius: '16px',
                  padding: '36px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#335CFF';
                  el.style.background = 'rgba(51, 92, 255, 0.03)';
                  el.style.boxShadow = '0 8px 32px rgba(51, 92, 255, 0.1)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(115, 115, 115, 0.15)';
                  el.style.background = 'rgba(255, 255, 255, 0.01)';
                  el.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#335CFF',
                    borderRadius: '50%',
                    opacity: 0.8,
                  }}
                />

                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: "'VC Nudge Trial', sans-serif",
                    color: '#335CFF',
                    display: 'block',
                    marginBottom: '20px',
                  }}
                >
                  {service.num} // SPEC
                </span>

                <h3
                  className="font-display"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    color: '#BBBBBB',
                    lineHeight: '1.6',
                  }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* ── 4. TESTIMONIALS SECTION (Moving in Opposite Directions Automatically) ── */}
        <section
          id="testimonials"
          style={{
            width: '100%',
            margin: '40px 0',
            padding: '60px 0',
            position: 'relative',
            zIndex: 10,
            borderTop: '1px dashed rgba(115, 115, 115, 0.25)',
            overflow: 'hidden',
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#335CFF',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            testimonials
          </span>

          <h2
            className="font-display"
            style={{
              fontFamily: "'VC Nudge Trial', sans-serif",
              fontSize: 'clamp(24px, 3.2vw, 42px)',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginBottom: '50px',
              color: '#FFFFFF',
            }}
          >
            What Clients Say
          </h2>

          {/* Testimonial Rows Container */}
          <div
            className="testimonial-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              width: 'calc(100% - 116px)',
              margin: '0 auto',
              overflow: 'hidden',
            }}
          >
            {/* ROW 1: Scrolling Right to Left (Leftward Track) */}
            <div className="testimonial-track-left" style={{ position: 'relative', zIndex: 0 }}>
              {[
                { quote: "The video shoot was flawlessly executed. Their art direction transformed our simple product into a premium cinematic masterpiece.", author: "Sarah K., VP at Velo" },
                { quote: "Their editing pipeline is incredibly fast, and the sound design they layered onto our commercial is absolutely breathtaking.", author: "Marcus T., Creative Director" },
                { quote: "Motion Haus's meticulous art direction and high-speed editing completely elevated our brand's online storytelling.", author: "Elena R., Founder of RAXA" },
              ].concat([
                { quote: "The video shoot was flawlessly executed. Their art direction transformed our simple product into a premium cinematic masterpiece.", author: "Sarah K., VP at Velo" },
                { quote: "Their editing pipeline is incredibly fast, and the sound design they layered onto our commercial is absolutely breathtaking.", author: "Marcus T., Creative Director" },
                { quote: "Motion Haus's meticulous art direction and high-speed editing completely elevated our brand's online storytelling.", author: "Elena R., Founder of RAXA" },
              ]).map((t, idx) => (
                <div
                  key={`t-left-${idx}`}
                  style={{
                    background: '#000000',
                    border: '1px solid rgba(115, 115, 115, 0.25)',
                    borderRadius: '12px',
                    padding: '24px 32px',
                    width: 'clamp(280px, 30vw, 420px)',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  <p className="font-body" style={{ fontSize: '14px', color: '#BBBBBB', lineHeight: '1.6', marginBottom: '16px', fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                  <span className="font-body" style={{ fontSize: '12px', color: '#335CFF', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    // {t.author}
                  </span>
                </div>
              ))}
            </div>

            {/* ROW 2: Scrolling Left to Right (Rightward Track) */}
            <div className="testimonial-track-right" style={{ position: 'relative', zIndex: 0 }}>
              {[
                { quote: "High-speed multi-angle video shoots and premium CGI overlays. A world-class production agency in every aspect.", author: "James L., CTO of CyberMedia" },
                { quote: "From complex CGI rendering to high-end post-production editing, they are the absolute authority in dynamic media.", author: "Chloe M., Lead at AOV" },
                { quote: "Perfect execution of premium cinematic video shoots. Their art direction and visual graphic pacing are top-tier.", author: "David B., Marketing Director" },
              ].concat([
                { quote: "High-speed multi-angle video shoots and premium CGI overlays. A world-class production agency in every aspect.", author: "James L., CTO of CyberMedia" },
                { quote: "From complex CGI rendering to high-end post-production editing, they are the absolute authority in dynamic media.", author: "Chloe M., Lead at AOV" },
                { quote: "Perfect execution of premium cinematic video shoots. Their art direction and visual graphic pacing are top-tier.", author: "David B., Marketing Director" },
              ]).map((t, idx) => (
                <div
                  key={`t-right-${idx}`}
                  style={{
                    background: '#000000',
                    border: '1px solid rgba(115, 115, 115, 0.25)',
                    borderRadius: '12px',
                    padding: '24px 32px',
                    width: 'clamp(280px, 30vw, 420px)',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 0,
                  }}
                >
                  <p className="font-body" style={{ fontSize: '14px', color: '#BBBBBB', lineHeight: '1.6', marginBottom: '16px', fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                  <span className="font-body" style={{ fontSize: '12px', color: '#335CFF', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    // {t.author}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>




        {/* ── 6. CALL TO ACTION (CTA) SECTION before Footer ── */}
        <section
          id="cta"
          style={{
            width: '100%',
            maxWidth: 'calc(100% - 116px)',
            margin: '40px auto 80px',
            padding: '80px 40px',
            position: 'relative',
            zIndex: 10,
            borderTop: '1px dashed rgba(115, 115, 115, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: 'radial-gradient(circle at 50% 50%, rgba(51, 92, 255, 0.08) 0%, transparent 60%)',
          }}
        >
          <span
            className="font-body"
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#335CFF',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            connect with us
          </span>

          <h2
            className="font-display"
            style={{
              fontFamily: "'VC Nudge Trial', sans-serif",
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 800,
              lineHeight: '1.05',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '28px',
              color: '#FFFFFF',
              maxWidth: '800px',
            }}
          >
            Ready to Launch Your Production Pipeline?
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              lineHeight: '1.6',
              color: '#BBBBBB',
              maxWidth: '580px',
              marginBottom: '40px',
            }}
          >
            Elevate your customer engagement, multiply sales conversions, and secure absolute market authority.
          </p>

          <GlowingButton>Start Your Project</GlowingButton>
        </section>


        {/* ── 7. PREMIUM FOOTER ── */}
        <footer
          style={{
            width: '100%',
            maxWidth: 'calc(100% - 160px)',
            margin: '40px auto 0',
            padding: '60px 20px 24px',
            borderTop: '1px dashed rgba(115, 115, 115, 0.25)',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >


          {/* Divider line */}
          <div style={{ width: '100%', height: '1.2px', background: 'rgba(115, 115, 115, 0.15)' }} />

          {/* Bottom Bar: Copyright and the Developer Ritual */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              fontSize: '12px',
              color: '#737373',
              fontFamily: "'Inter Tight', sans-serif",
            }}
          >
            <span>© 2026 MOTION HAUS. ALL RIGHTS RESERVED.</span>

            {/* The Ritual: Portfolio link of Heritage Isaac */}
            <a
              href="https://heritageisaac.xyz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#737373',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#FFFFFF';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#737373';
              }}
            >
              BUILT BY HERITAGE ISAAC{' '}
              <span
                style={{
                  transition: 'transform 0.2s ease',
                  display: 'inline-block',
                }}
              >
                ↗︎
              </span>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
