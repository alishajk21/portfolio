import { useState, useEffect } from 'react';

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
        width: 600,
        height: 600,
        transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
        transition: 'transform 0.1s ease',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(74,222,128,0.12) 0%, transparent 70%)',
      }}
    />
  );
}
