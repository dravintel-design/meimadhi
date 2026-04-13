import React, { useEffect, useRef, useState } from 'react';

const NEON  = '#6EE7B7';
const BLACK = '#0a0a0a';

const QuoteBanner = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            style={{
                background: BLACK,
                padding: '100px 24px',
                textAlign: 'center',
                borderTop: '1px solid rgba(110,231,183,0.08)',
                borderBottom: '1px solid rgba(110,231,183,0.08)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Subtle radial glow behind text */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(110,231,183,0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
                <p
                    style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                        color: '#fff',
                        margin: 0,
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                        transition: 'opacity 0.8s ease, transform 0.8s ease',
                    }}
                >
                    We sell your real estate like it's ours.{' '}
                    <span style={{
                        color: NEON,
                        textShadow: '0 0 40px rgba(110,231,183,0.35)',
                    }}>
                        You just enjoy watching it go.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default QuoteBanner;
