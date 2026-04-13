import React, { useEffect, useRef, useState } from 'react';

const NEON  = '#6EE7B7';
const BLACK = '#0a0a0a';
const DARK  = '#213232';

/* ─── Project data ────────────────────────────────────────────────────── */
const categories = [
    {
        id: 'current',
        label: 'Current Projects',
        description: 'Properties we are actively marketing and selling right now.',
        projects: [
            { title: 'Global City',  location: 'Putthirankottai, Chengalpattu', image: '/layout-map.png',           tag: 'Selling Fast'    },
            { title: 'Golden City',  location: 'Kariyamanikkam, Trichy',        image: '/Golden City.png',          tag: 'Newly Launched'  },
        ],
    },
    {
        id: 'completed',
        label: 'Completed Projects',
        description: 'Projects we have successfully marketed and delivered for our clients.',
        projects: [
            { title: 'Mahalakshmi Nagar',    location: 'Perambalur, Trichy',          image: '/mahalakshmi nagar.jpg',      tag: 'Sold Out' },
            { title: 'SMV Residential Plot',  location: 'Preangiyur, Villupuram',      image: '/SMV Nagar.png',               tag: 'Sold Out' },
            { title: 'JK Industrial Land',    location: 'Navamalkapper, Villupuram',   image: '/JK Industrial Land.jpeg',    tag: 'Closed'   },
        ],
    },
    {
        id: 'upcoming',
        label: 'Upcoming Projects',
        description: 'Projects in the pipeline. Stay tuned for announcements.',
        projects: [],
    },
];

/* ─── Tag colours ─────────────────────────────────────────────────────── */
const tagStyle = (tag) => {
    if (tag === 'Selling Fast')   return { bg: NEON,                       color: BLACK };
    if (tag === 'Newly Launched') return { bg: '#3b82f6',                  color: '#fff' };
    if (tag === 'Sold Out')       return { bg: 'rgba(255,255,255,0.08)',    color: 'rgba(255,255,255,0.45)' };
    if (tag === 'Closed')         return { bg: 'rgba(255,255,255,0.05)',    color: 'rgba(255,255,255,0.35)' };
    return { bg: 'rgba(255,255,255,0.1)', color: '#fff' };
};

/* ─── Animated counter ────────────────────────────────────────────────── */
const useCounter = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setStarted(true); },
            { threshold: 0.4 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const step = Math.ceil(target / (duration / 16));
        let current = 0;
        const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(current);
            if (current >= target) clearInterval(timer);
        }, 16);
        return () => clearInterval(timer);
    }, [started, target, duration]);

    return [count, ref];
};

/* ─── Mini hero ───────────────────────────────────────────────────────── */
const MiniHero = () => {
    const [sqft, sqftRef] = useCounter(919099);

    return (
        <section style={{
            paddingTop: 120,
            paddingBottom: 80,
            paddingInline: 24,
            background: `linear-gradient(160deg, ${DARK} 0%, ${BLACK} 60%)`,
            borderBottom: `1px solid rgba(110,231,183,0.1)`,
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background radial glow */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: 500,
                height: 500,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto' }}>

                {/* Eyebrow */}
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: NEON,
                    marginBottom: 20,
                }}>
                    <span style={{ width: 24, height: 1, background: NEON, display: 'inline-block' }} />
                    Our Portfolio
                </span>

                {/* Headline */}
                <h1 style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    fontWeight: 700,
                    color: '#fff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    margin: '0 0 20px',
                    textTransform: 'uppercase',
                    maxWidth: 700,
                }}>
                    Every Plot Has a Story.{' '}
                    <span style={{ color: NEON, textShadow: '0 0 40px rgba(110,231,183,0.3)' }}>
                        We Make Sure It Ends in a Sale.
                    </span>
                </h1>

                {/* Sub copy */}
                <p style={{
                    fontSize: '16px',
                    color: 'rgba(255,255,255,0.42)',
                    maxWidth: 520,
                    lineHeight: 1.75,
                    margin: '0 0 52px',
                }}>
                    From the first enquiry to the final registration, we manage the full sales cycle for every project we take on.
                </p>

                {/* Stats row */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '40px 64px',
                    alignItems: 'flex-end',
                }}>
                    {/* Big sqft stat */}
                    <div ref={sqftRef}>
                        <div style={{
                            fontFamily: 'Oswald, sans-serif',
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            fontWeight: 700,
                            color: NEON,
                            lineHeight: 1,
                            letterSpacing: '-0.02em',
                            textShadow: '0 0 40px rgba(110,231,183,0.25)',
                        }}>
                            {sqft.toLocaleString('en-IN')}
                            <span style={{ fontSize: '1.2rem', marginLeft: 8, color: 'rgba(110,231,183,0.7)' }}>sq.ft</span>
                        </div>
                        <p style={{
                            margin: '8px 0 0',
                            fontSize: '12px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.35)',
                        }}>
                            Total land sold so far
                        </p>
                    </div>

                    {/* Divider */}
                    <div style={{ width: 1, height: 60, background: 'rgba(255,255,255,0.08)', alignSelf: 'center' }} />

                    {/* Secondary stats */}
                    <div style={{ display: 'flex', gap: 48 }}>
                        <div>
                            <div style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '2.4rem',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1,
                            }}>5+</div>
                            <p style={{
                                margin: '6px 0 0',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.35)',
                            }}>Projects</p>
                        </div>
                        <div>
                            <div style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '2.4rem',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1,
                            }}>74+</div>
                            <p style={{
                                margin: '6px 0 0',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.35)',
                            }}>Plots Sold</p>
                        </div>
                        <div>
                            <div style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '2.4rem',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1,
                            }}>3</div>
                            <p style={{
                                margin: '6px 0 0',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.35)',
                            }}>Districts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─── Project card ────────────────────────────────────────────────────── */
const ProjectCard = ({ project }) => {
    const ts = tagStyle(project.tag);
    return (
        <div className="group relative overflow-hidden cursor-pointer" style={{
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.06)',
            background: BLACK,
        }}>
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                />
            </div>
            <span style={{
                position: 'absolute', top: 14, left: 14,
                fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                background: ts.bg, color: ts.color,
                padding: '4px 12px', borderRadius: 999, backdropFilter: 'blur(6px)',
            }}>
                {project.tag}
            </span>
            <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ margin: '0 0 4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: NEON }}>
                    {project.location}
                </p>
                <h3 style={{ margin: 0, fontFamily: 'Oswald, sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                    {project.title}
                </h3>
            </div>
        </div>
    );
};

/* ─── Coming soon placeholder ─────────────────────────────────────────── */
const ComingSoon = () => (
    <div style={{
        gridColumn: '1 / -1',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '64px 24px',
        border: '1px dashed rgba(110,231,183,0.2)', borderRadius: 16,
        background: 'rgba(110,231,183,0.02)', textAlign: 'center', gap: 12,
    }}>
        <span style={{ fontSize: '2rem' }}>🔭</span>
        <h4 style={{ fontFamily: 'Oswald, sans-serif', fontSize: '1.3rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Exciting Projects Coming Soon
        </h4>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            We are working on new opportunities. Check back for updates.
        </p>
    </div>
);

/* ─── Category section ────────────────────────────────────────────────── */
const CategorySection = ({ category, isLast }) => (
    <div style={{ marginBottom: isLast ? 0 : 72 }}>
        <div style={{ marginBottom: 36, paddingBottom: 20, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: NEON, boxShadow: `0 0 8px ${NEON}`, flexShrink: 0 }} />
                <h2 style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: '#fff', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>
                    {category.label}
                </h2>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: NEON, background: 'rgba(110,231,183,0.08)', border: `1px solid rgba(110,231,183,0.15)`, padding: '3px 10px', borderRadius: 999 }}>
                    {category.projects.length > 0 ? `${category.projects.length} Project${category.projects.length > 1 ? 's' : ''}` : 'TBA'}
                </span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.38)', paddingLeft: 18 }}>
                {category.description}
            </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
            {category.projects.length > 0
                ? category.projects.map((p, i) => <ProjectCard key={i} project={p} />)
                : <ComingSoon />}
        </div>
    </div>
);

/* ─── Page ────────────────────────────────────────────────────────────── */
const OurWork = () => (
    <div style={{ background: BLACK, minHeight: '100vh' }}>
        <MiniHero />
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 96px' }}>
            {categories.map((cat, i) => (
                <CategorySection key={cat.id} category={cat} isLast={i === categories.length - 1} />
            ))}
        </section>
    </div>
);

export default OurWork;
