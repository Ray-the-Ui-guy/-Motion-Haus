import React from 'react';
import BorderGlow from './BorderGlow';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function GlowingButton({ children, onClick }: GlowingButtonProps) {
  return (
    <BorderGlow
      edgeSensitivity={35}
      glowColor="229 100 60"
      backgroundColor="#222222"
      borderRadius={1000}
      glowRadius={32}
      glowIntensity={1.8}
      colors={['#335CFF', '#4E98FF', '#002BFF']}
      className="glowing-btn-container"
    >
      <button
        className="font-body"
        onClick={onClick}
        style={{
          background: 'transparent',
          border: 'none',
          padding: '12px 32px',
          fontFamily: "'Inter Tight', sans-serif",
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '1.65',
          color: '#FFFFFF',
          cursor: 'pointer',
          display: 'block',
          position: 'relative',
          zIndex: 2,
          borderRadius: '1000px',
        }}
      >
        {children}
      </button>
    </BorderGlow>
  );
}
