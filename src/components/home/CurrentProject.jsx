import React, { useState } from 'react';
import layoutMap from '../../assets/layout-map.png';

const NEON   = '#6EE7B7';
const BG     = '#213232';
const BLACK  = '#0a0a0a';
const BORDER = 'rgba(110,231,183,0.12)';

const projects = [
    {
        id: 'global-city',
        label: 'Ongoing Project',
        name: 'Global City',
        location: 'Putthirankottai, Chengalpattu',
        description:
            'Premium residential plots in the heart of Putthirankottai, Chengalpattu. A meticulously planned layout with strong investment potential. We handle the full marketing and sales cycle so these plots reach the right buyers at the right time.',
        image: layoutMap,
        available: 31,
        sold: 16,
        total: 47,
        status: 'Selling Fast',
    },
    {
        id: 'golden-city',
        label: 'Featured Project',
        name: 'Golden City',
        location: 'Kariyamanikkam, Trichy',
        description:
            'Strategically located plots in Kariyamanikkam, one of Trichy\'s fastest moving corridors. Our team manages the entire sales pipeline for Golden City, bringing serious buyers to the table and closing deals efficiently.',
        image: '/Golden City.png',
        available: 63,
        sold: 8,
        total: 71,
        status: 'Newly Launched',
    },
];

const StatBar = ({ available, sold, total }) => {
    const soldPct = Math.round((sold / total) * 100);
    return (
        <div style={{ width: '100%' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                marginBottom: 8,
            }}>
                <span>Availability</span>
                <span>{soldPct}% sold</span>
            </div>
            <div style={{
                height: 6,
                borderRadius: 999,
                background: 'rgba(255,255,255,0.08)',
                overflow: 'hidden',
            }}>
                <div style={{
                    height: '100%',
                    width: `${soldPct}%`,
                    borderRadius: 999,
                    background: `linear-gradient(90deg, ${NEON}, #34d399)`,
                    transition: 'width 1s ease',
                }} />
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <article
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                background: BLACK,
                border: `1px solid ${hovered ? 'rgba(110,231,183,0.3)' : BORDER}`,
                borderRadius: 20,
                overflow: 'hidden',
                transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease, border-color 0.4s ease',
                transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hovered
                    ? `0 32px 64px rgba(0,0,0,0.6), 0 0 40px rgba(110,231,183,0.07)`
                    : '0 8px 32px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Image */}
            <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 10',
                overflow: 'hidden',
                background: '#111',
            }}>
                <img
                    src={project.image}
                    alt={`${project.name} layout`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.6s ease, filter 0.5s ease',
                        transform: hovered ? 'scale(1.06)' : 'scale(1)',
                        filter: hovered ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.85)',
                    }}
                />
                {/* Gradient overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)',
                }} />

                {/* Top badges row */}
                <div style={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    right: 14,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: BLACK,
                        background: NEON,
                        padding: '4px 12px',
                        borderRadius: 999,
                    }}>
                        {project.label}
                    </span>
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: NEON,
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(8px)',
                        padding: '4px 12px',
                        borderRadius: 999,
                        border: `1px solid ${BORDER}`,
                    }}>
                        {project.status}
                    </span>
                </div>

                {/* Location chip at bottom of image */}
                <div style={{
                    position: 'absolute',
                    bottom: 14,
                    left: 14,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                }}>
                    <span style={{ fontSize: 12, color: NEON }}>📍</span>
                    <span style={{
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.8)',
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                    }}>
                        {project.location}
                    </span>
                </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '24px 24px 28px', display: 'flex', flexDirection: 'column', gap: 20, flex: 1 }}>

                {/* Project name */}
                <div>
                    <h3 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.01em',
                        margin: '0 0 8px',
                        lineHeight: 1.1,
                        textTransform: 'uppercase',
                    }}>
                        {project.name}
                    </h3>
                    <p style={{
                        fontSize: '13.5px',
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.7,
                        margin: 0,
                    }}>
                        {project.description}
                    </p>
                </div>

                {/* Divider */}
                <div style={{
                    height: 1,
                    background: hovered
                        ? `linear-gradient(90deg, ${NEON}, transparent)`
                        : 'rgba(255,255,255,0.05)',
                    transition: 'background 0.4s ease',
                }} />

                {/* Stats row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {/* Available */}
                    <div style={{
                        background: 'rgba(110,231,183,0.06)',
                        border: `1px solid rgba(110,231,183,0.15)`,
                        borderRadius: 12,
                        padding: '14px 16px',
                    }}>
                        <p style={{
                            margin: '0 0 4px',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: NEON,
                        }}>
                            Available
                        </p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                            <span style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '2.4rem',
                                fontWeight: 700,
                                color: '#fff',
                                lineHeight: 1,
                            }}>
                                {project.available}
                            </span>
                            <span style={{
                                fontSize: '11px',
                                color: NEON,
                                fontWeight: 700,
                                letterSpacing: '0.06em',
                            }}>
                                Plots
                            </span>
                        </div>
                        <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
                            Ready to book
                        </p>
                    </div>

                    {/* Sold */}
                    <div style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: 12,
                        padding: '14px 16px',
                    }}>
                        <p style={{
                            margin: '0 0 4px',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.35)',
                        }}>
                            Sold
                        </p>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                            <span style={{
                                fontFamily: 'Oswald, sans-serif',
                                fontSize: '2.4rem',
                                fontWeight: 700,
                                color: 'rgba(255,255,255,0.6)',
                                lineHeight: 1,
                            }}>
                                {project.sold}
                            </span>
                            <span style={{
                                fontSize: '11px',
                                color: 'rgba(255,100,100,0.8)',
                                fontWeight: 700,
                                letterSpacing: '0.06em',
                            }}>
                                Plots
                            </span>
                        </div>
                        <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>
                            Happily owned
                        </p>
                    </div>
                </div>

                {/* Progress bar */}
                <StatBar available={project.available} sold={project.sold} total={project.total} />


            </div>
        </article>
    );
};

const CurrentProject = () => {
    return (
        <section style={{
            padding: '96px 0',
            background: `linear-gradient(180deg, ${BG} 0%, rgba(10,10,10,0.95) 100%)`,
            borderBottom: `1px solid ${BORDER}`,
        }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

                {/* Section header */}
                <div style={{ marginBottom: 56 }}>
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        color: NEON,
                        marginBottom: 14,
                    }}>
                        <span style={{ width: 24, height: 1, background: NEON, display: 'inline-block' }} />
                        Current Projects
                    </span>
                    <h2 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.01em',
                        margin: '0 0 12px',
                        lineHeight: 1.1,
                        textTransform: 'uppercase',
                    }}>
                        CURRENT{' '}
                        <span style={{ color: NEON, textShadow: '0 0 30px rgba(110,231,183,0.35)' }}>
                            PROJECTS
                        </span>
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'rgba(255,255,255,0.38)',
                        maxWidth: 500,
                        lineHeight: 1.75,
                        margin: 0,
                    }}>
                        These are the projects we are actively marketing and selling. If you are looking to invest or find your next home, you are in the right place.
                    </p>
                </div>

                {/* Two project cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 28,
                    alignItems: 'start',
                }}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Bottom neon accent */}
                <div style={{
                    marginTop: 64,
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${NEON}, transparent)`,
                    opacity: 0.25,
                }} />
            </div>
        </section>
    );
};

export default CurrentProject;
