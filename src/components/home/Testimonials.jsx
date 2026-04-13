import React, { useState, useRef } from 'react';
import { Play, Quote } from 'lucide-react';

/* ─── Colour tokens (matching tailwind.config.js) ─────────────────────── */
const NEON   = '#6EE7B7';
const BG     = '#0a0a0a';   // hero-black
const DARK   = '#213232';   // hero-bg
const BORDER = 'rgba(110,231,183,0.12)';

/* ─── Video data ──────────────────────────────────────────────────────── */
const testimonials = [
    {
        id: 'S_g11B489r0',
        name: 'Client One',
        role: 'Real Estate Developer',
        quote: 'Meimathi transformed our digital presence overnight.',
    },
    {
        id: 'a9rmN10oItE',
        name: 'Client Two',
        role: 'Property Consultant',
        quote: 'The leads they generated were outstanding quality.',
    },
    {
        id: '4-qtrKs2aPk',
        name: 'Client Three',
        role: 'Residential Builder',
        quote: 'Professional, fast and results driven. Cannot recommend them enough.',
    },
];

/* ─── Single short card ───────────────────────────────────────────────── */
const ShortCard = ({ video, index }) => {
    const [playing, setPlaying]   = useState(false);
    const [hovered, setHovered]   = useState(false);
    const cardRef = useRef(null);

    const thumbHQ  = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
    const thumbFB  = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    const embedSrc = `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&loop=1&playlist=${video.id}`;

    /* Stagger slide-up via inline style */
    const staggerDelay = `${index * 120}ms`;

    return (
        <article
            ref={cardRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${hovered ? 'rgba(110,231,183,0.35)' : BORDER}`,
                background: BG,
                transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.4s ease',
                transform: hovered ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
                boxShadow: hovered
                    ? `0 0 0 1px rgba(110,231,183,0.2), 0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(110,231,183,0.08)`
                    : '0 8px 32px rgba(0,0,0,0.4)',
                animationDelay: staggerDelay,
            }}
        >
            {/* ── Video / Thumbnail ── */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '9 / 16',
                    background: '#000',
                    overflow: 'hidden',
                    flexShrink: 0,
                    /* Grayscale on the whole media area; removed on hover */
                    filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.85)',
                    transition: 'filter 0.55s ease',
                }}
            >
                {playing ? (
                    <iframe
                        src={embedSrc}
                        title={`${video.name} testimonial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                    />
                ) : (
                    <>
                        {/* Thumbnail */}
                        <img
                            src={thumbHQ}
                            alt={`${video.name} video testimonial thumbnail`}
                            onError={e => { e.currentTarget.src = thumbFB; }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                transition: 'transform 0.55s ease',
                                transform: hovered ? 'scale(1.06)' : 'scale(1)',
                            }}
                        />

                        {/* Dark gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
                            transition: 'opacity 0.4s ease',
                            opacity: hovered ? 0.6 : 1,
                        }} />

                        {/* Play button */}
                        <button
                            onClick={() => setPlaying(true)}
                            aria-label={`Play ${video.name}'s testimonial`}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                        >
                            {/* Glow pulse ring */}
                            <span style={{
                                position: 'absolute',
                                width: hovered ? '90px' : '70px',
                                height: hovered ? '90px' : '70px',
                                borderRadius: '50%',
                                background: `rgba(110,231,183,0.18)`,
                                filter: 'blur(14px)',
                                transition: 'width 0.4s ease, height 0.4s ease',
                            }} />
                            {/* Play circle */}
                            <span style={{
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                background: hovered ? NEON : 'rgba(255,255,255,0.92)',
                                boxShadow: hovered ? `0 0 0 8px rgba(110,231,183,0.2)` : 'none',
                                transition: 'background 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease',
                                transform: hovered ? 'scale(1.12)' : 'scale(1)',
                            }}>
                                <Play size={22} fill="#000" stroke="none" style={{ marginLeft: 3 }} />
                            </span>
                        </button>

                        {/* "Watch Story" pill */}
                        <span style={{
                            position: 'absolute',
                            bottom: 14,
                            left: 14,
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: hovered ? '#000' : 'rgba(255,255,255,0.7)',
                            background: hovered ? NEON : 'rgba(0,0,0,0.55)',
                            padding: '5px 12px',
                            borderRadius: '100px',
                            backdropFilter: 'blur(8px)',
                            transition: 'background 0.35s ease, color 0.35s ease',
                            zIndex: 2,
                        }}>
                            ▶ Watch Story
                        </span>
                    </>
                )}
            </div>

            {/* ── Card footer ── */}
            <div style={{
                padding: '18px 20px 20px',
                borderTop: `1px solid ${BORDER}`,
                background: hovered
                    ? `linear-gradient(135deg, ${BG} 0%, rgba(33,50,50,0.9) 100%)`
                    : BG,
                transition: 'background 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
            }}>
                {/* Quote icon + text */}
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Quote
                        size={16}
                        style={{
                            color: NEON,
                            flexShrink: 0,
                            marginTop: 3,
                            opacity: hovered ? 1 : 0.45,
                            transition: 'opacity 0.35s ease',
                        }}
                    />
                    <p style={{
                        margin: 0,
                        fontSize: '13px',
                        color: hovered ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.4)',
                        lineHeight: 1.65,
                        fontStyle: 'italic',
                        transition: 'color 0.35s ease',
                    }}>
                        {video.quote}
                    </p>
                </div>

                {/* Divider */}
                <div style={{
                    height: '1px',
                    background: hovered
                        ? `linear-gradient(90deg, ${NEON}, transparent)`
                        : 'rgba(255,255,255,0.05)',
                    transition: 'background 0.4s ease',
                }} />

                {/* Name + role */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: NEON,
                        flexShrink: 0,
                        boxShadow: hovered ? `0 0 10px ${NEON}` : 'none',
                        transition: 'box-shadow 0.35s ease',
                    }} />
                    <div>
                        <h4 style={{
                            margin: 0,
                            fontSize: '13px',
                            fontFamily: 'Oswald, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: hovered ? '#fff' : 'rgba(255,255,255,0.7)',
                            transition: 'color 0.35s ease',
                        }}>
                            {video.name}
                        </h4>
                        <p style={{
                            margin: 0,
                            fontSize: '11px',
                            color: hovered ? NEON : 'rgba(255,255,255,0.3)',
                            transition: 'color 0.35s ease',
                            letterSpacing: '0.06em',
                        }}>
                            {video.role}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    );
};

/* ─── Section ─────────────────────────────────────────────────────────── */
const Testimonials = () => {
    return (
        <section style={{
            padding: '96px 0',
            background: `linear-gradient(180deg, ${BG} 0%, ${DARK} 50%, ${BG} 100%)`,
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* Section header */}
                <div style={{ textAlign: 'left', marginBottom: 64 }}>
                    <h2 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.01em',
                        margin: '0 0 16px',
                        lineHeight: 1.1,
                    }}>
                        CLIENT{' '}
                        <span style={{
                            color: NEON,
                            textShadow: `0 0 30px rgba(110,231,183,0.4)`,
                        }}>
                            STORIES
                        </span>
                    </h2>

                    <p style={{
                        color: 'rgba(255,255,255,0.38)',
                        fontSize: '15px',
                        maxWidth: 440,
                        margin: 0,
                        lineHeight: 1.75,
                    }}>
                        Hover over each video to see them come alive. These are real clients sharing their real experience.
                    </p>
                </div>

                {/* ── 3-column shorts grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: 28,
                    alignItems: 'start',
                }}>
                    {testimonials.map((video, i) => (
                        <ShortCard key={video.id} video={video} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
