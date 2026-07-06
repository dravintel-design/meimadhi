import React, { useState, useEffect } from 'react';

const NEON = '#6EE7B7';
const BLACK = '#0a0a0a';

const VEL_PROPERTIES = [
    {
        id: 1,
        name: "Global City",
        status: "New Launch",
        location: "Puthirankottai",
        area: "61,028 Sq.ft",
        totalPlots: "47",
        soldPlots: "16",
        availablePlots: "31",
        img: "/layouts/GlobalCityArch.jpeg",
        layoutImg: "/layouts/global-city-layout.jpeg",
        locationImg: "/layouts/global-city-location.png",
        amenitiesImg: "/layouts/global-city-amenities.png",
        amenities: ["30 feet road", "High ground water", "Electricity", "24 X 7 Bus Service", "Schools and Colleges", "High raise walls"],
    },
    {
        id: 2,
        name: "Golden City",
        status: "New Launch",
        location: "Kariayamanikam",
        area: "73,013 Sq.ft",
        totalPlots: "61",
        soldPlots: "8",
        availablePlots: "53",
        img: "/layouts/golden-city-arch.png",
        layoutImg: "/layouts/golden-city-layout.jpeg",
        locationImg: "/layouts/golden-city-location.png",
        amenitiesImg: "/layouts/golden-city-amenities.png",
        amenities: ["32 feet road", "High ground water", "Electricity", "24 X 7 Bus Service", "Schools and Colleges", "High raise walls"],
    },
    {
        id: 3,
        name: "Mahalakshmi Nagar",
        status: "Ongoing",
        location: "Perambalur",
        area: "95,348 Sq.ft",
        totalPlots: "74",
        soldPlots: "59",
        availablePlots: "15",
        img: "/layouts/mahalakshmi-nagar-arch.png",
        layoutImg: "/layouts/mahalakshmi-nagar-layout.jpeg",
        locationImg: "/layouts/mahalakshmi-nagar-location.png",
        amenitiesImg: "/layouts/mahalakshmi-nagar-amenities.png",
        amenities: ["30 feet road", "High ground water", "Electricity", "24 X 7 Bus Service", "Schools and Colleges", "High raise walls"],
    },
];

const CurrentProject = () => {
    const [activePropId, setActivePropId] = useState(VEL_PROPERTIES[0].id);
    const [activeTab, setActiveTab] = useState("details");

    const activeProp = VEL_PROPERTIES.find(p => p.id === activePropId);

    useEffect(() => {
        const handleScroll = () => {
            const amenitiesEl = document.getElementById('mm-amenities-section');
            const locationEl = document.getElementById('mm-location-section');
            const layoutEl = document.getElementById('mm-layout-section');

            if (amenitiesEl && amenitiesEl.getBoundingClientRect().top <= 250) {
                setActiveTab('amenities');
            } else if (locationEl && locationEl.getBoundingClientRect().top <= 250) {
                setActiveTab('location');
            } else if (layoutEl && layoutEl.getBoundingClientRect().top <= 250) {
                setActiveTab('layout');
            } else {
                setActiveTab('details');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
        const idMap = {
            details: 'mm-details-section',
            layout: 'mm-layout-section',
            location: 'mm-location-section',
            amenities: 'mm-amenities-section',
        };
        const el = document.getElementById(idMap[tab]);
        if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <section style={{ paddingBottom: 0, background: BLACK }}>
            {/* Property Selector */}
            <div style={{
                background: BLACK,
                borderBottom: '1px solid rgba(110,231,183,0.1)',
                padding: '40px 0',
            }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 60px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 32,
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                        <span style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: 'rgba(255,255,255,0.4)',
                            letterSpacing: '0.02em',
                        }}>
                            New Launch:
                        </span>
                        {VEL_PROPERTIES.map(p => (
                            <button
                                key={p.id}
                                onClick={() => { setActivePropId(p.id); setActiveTab('details'); }}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: 16,
                                    fontWeight: activePropId === p.id ? 700 : 400,
                                    color: activePropId === p.id ? '#fff' : 'rgba(255,255,255,0.4)',
                                    borderBottom: activePropId === p.id ? `2px solid ${NEON}` : '2px solid transparent',
                                    paddingBottom: 8,
                                    transition: 'all 0.3s ease',
                                    fontFamily: 'inherit',
                                }}
                            >
                                {p.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Bar */}
            <div style={{
                position: 'sticky',
                top: 80,
                zIndex: 40,
                background: BLACK,
                borderBottom: '1px solid rgba(110,231,183,0.08)',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    maxWidth: 1400,
                    margin: '0 auto',
                }}>
                    {['details', 'layout', 'location', 'amenities'].map(tab => (
                        <a
                            key={tab}
                            href={`#${tab}`}
                            onClick={(e) => scrollToSection(e, tab)}
                            style={{
                                padding: '20px 0',
                                textAlign: 'center',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.35)',
                                background: activeTab === tab ? 'rgba(110,231,183,0.06)' : 'transparent',
                                borderBottom: activeTab === tab ? `2px solid ${NEON}` : '2px solid transparent',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                        >
                            {tab === 'details' ? 'Property Details' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </a>
                    ))}
                </div>
            </div>

            {/* Property Details Content */}
            <div id="mm-details-section" style={{ maxWidth: 1400, margin: '0 auto', padding: '60px 60px 0' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 60,
                    alignItems: 'start',
                }}>
                    {/* Left: Image */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: -40,
                            width: 40,
                            background: 'rgba(110,231,183,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 12,
                            padding: '20px 0',
                            zIndex: 2,
                        }}>
                            <span style={{
                                writingMode: 'vertical-rl',
                                transform: 'rotate(180deg)',
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.5)',
                            }}>
                                Discover plot
                            </span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div style={{
                            width: '100%',
                            minHeight: 500,
                            backgroundImage: `url(${activeProp.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }} />
                    </div>

                    {/* Right: Details */}
                    <div style={{ paddingTop: 20 }}>
                        <h2 style={{
                            fontFamily: 'Oswald, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 400,
                            color: NEON,
                            lineHeight: 1.05,
                            margin: '0 0 40px',
                        }}>
                            Property<br/>Details
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: 0,
                        }}>
                            {[
                                { label: 'Project Status:', value: activeProp.status },
                                { label: 'Location:', value: activeProp.location },
                                { label: 'Total Area:', value: activeProp.area },
                                { label: 'Total Plots:', value: activeProp.totalPlots },
                                { label: 'Sold Plots:', value: activeProp.soldPlots },
                                { label: 'Available Plots:', value: activeProp.availablePlots, highlight: true },
                            ].map((stat, i) => (
                                <div key={i} style={{
                                    padding: '24px 0',
                                    borderLeft: '3px solid rgba(110,231,183,0.15)',
                                    paddingLeft: 20,
                                }}>
                                    <small style={{
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: 'rgba(255,255,255,0.7)',
                                        display: 'block',
                                        marginBottom: 6,
                                    }}>
                                        {stat.label}
                                    </small>
                                    <p style={{
                                        margin: 0,
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: stat.highlight ? NEON : 'rgba(255,255,255,0.6)',
                                    }}>
                                        {stat.value}
                                    </p>
                                </div>
                            ))}

                            {/* Map Link */}
                            <div style={{
                                gridColumn: 'span 2',
                                padding: '24px 0',
                                borderLeft: '3px solid rgba(110,231,183,0.15)',
                                paddingLeft: 20,
                            }}>
                                <small style={{
                                    fontSize: 13,
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,0.7)',
                                    display: 'block',
                                    marginBottom: 6,
                                }}>
                                    Map Link:
                                </small>
                                <p style={{ margin: 0 }}>
                                    <a href="#" style={{
                                        color: NEON,
                                        textDecoration: 'none',
                                        fontSize: 15,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                    }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={NEON}/>
                                        </svg>
                                        Locate the Project →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Section */}
            {activeProp.layoutImg && (
                <div id="mm-layout-section" style={{
                    maxWidth: 1400,
                    margin: '0 auto',
                    padding: '80px 60px',
                }}>
                    <h2 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 32,
                        fontWeight: 400,
                        marginBottom: 20,
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                        Project Layout
                    </h2>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 30,
                        marginBottom: 40,
                        flexWrap: 'wrap',
                    }}>
                        {[
                            { color: '#7c3aed', label: 'Soldout' },
                            { color: '#10b981', label: 'Blocked' },
                            { color: '#ffffff', label: 'Available', border: true },
                        ].map(item => (
                            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    backgroundColor: item.color,
                                    border: item.border ? '2px solid rgba(255,255,255,0.3)' : 'none',
                                }} />
                                <span style={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                    color: 'rgba(255,255,255,0.7)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <img
                        src={activeProp.layoutImg}
                        alt={`${activeProp.name} Layout`}
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
            )}

            {/* Location Section */}
            {activeProp.locationImg && (
                <div id="mm-location-section" style={{
                    maxWidth: 1400,
                    margin: '0 auto',
                    padding: '80px 60px',
                    borderTop: '1px solid rgba(110,231,183,0.08)',
                }}>
                    <h2 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 32,
                        fontWeight: 400,
                        marginBottom: 30,
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                        Project Location
                    </h2>
                    <img
                        src={activeProp.locationImg}
                        alt={`${activeProp.name} Location`}
                        style={{ width: '100%', display: 'block' }}
                    />
                </div>
            )}

            {/* Amenities Section */}
            <div id="mm-amenities-section" style={{
                background: 'rgba(110,231,183,0.03)',
                padding: '100px 0',
                borderTop: '1px solid rgba(110,231,183,0.08)',
            }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 60px' }}>
                    <h2 style={{
                        fontFamily: 'Oswald, sans-serif',
                        fontSize: 32,
                        fontWeight: 400,
                        marginBottom: 60,
                        textAlign: 'center',
                        color: '#fff',
                    }}>
                        Project Amenities
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 16,
                        maxWidth: 800,
                        margin: '0 auto',
                    }}>
                        {activeProp.amenities.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(110,231,183,0.1)',
                                    padding: 24,
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(110,231,183,0.08)';
                                    e.currentTarget.style.borderColor = 'rgba(110,231,183,0.25)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                    e.currentTarget.style.borderColor = 'rgba(110,231,183,0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                <span style={{
                                    fontWeight: 600,
                                    color: '#fff',
                                    fontSize: 15,
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                }}>
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentProject;
