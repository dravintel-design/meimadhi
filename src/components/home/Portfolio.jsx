import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Mahalakshmi Nagar",
        location: "Perambalur, Trichy",
        image: "/mahalakshmi nagar.png",
        tag: "Ongoing",
        status: "Selling",
        size: "95,348 sq.ft",
        plots: "74 Plots",
    },
    {
        title: "SMV Residential Plot",
        location: "Preangiyur, Villupuram",
        image: "/SMV Nagar.png",
        tag: "Completed",
        status: "Delivered",
        size: "57,833 sq.ft",
        plots: "47 Plots",
    },
    {
        title: "JK Industrial Land",
        location: "Navamalkapper, Villupuram",
        image: "/JK Industrial Land.jpeg",
        tag: "Completed",
        status: "Delivered",
        size: "24,634 sq.ft",
        plots: "3 Plots",
    },
    {
        title: "Golden City",
        location: "Kariyamanikkam, Trichy",
        image: "/Golden City.png",
        tag: "New Launch",
        status: "Selling",
        size: "73,013 sq.ft",
        plots: "61 Plots",
    },
    {
        title: "JKR City",
        location: "V Agaram",
        image: "/JKR City.png",
        tag: "Completed",
        status: "Delivered",
        size: "1,38,143 sq.ft",
        plots: "145 Plots",
    },
    {
        title: "Tamilvel Nagar",
        location: "Siruvadi",
        image: "/Tamilvel nagar.png",
        tag: "Completed",
        status: "Delivered",
        size: "1,32,829 sq.ft",
        plots: "224 Plots",
    },
];

function useInView(ref) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { setInView(true); io.disconnect(); }
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
    }, []);
    return inView;
}

function Reveal({ children, className = "", delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref);
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

const Portfolio = () => {
    return (
        <section className="py-24 bg-hero-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
                {/* Section Header — VHG style */}
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div>
                            <span className="text-hero-neon text-[11px] font-bold uppercase tracking-[0.3em] mb-4 block">
                                Our Projects
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.05]">
                                RESULTS THAT SPEAK<br />
                                <span className="text-hero-neon italic font-light">LOUDER THAN PROMISES.</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-[15px] leading-relaxed">
                            Premium developments marketed and sold across Tamil Nadu. Every project backed by strategy, design, and measurable outcomes.
                        </p>
                    </div>
                </Reveal>

                {/* Project Grid — VHG 3-column style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 80}>
                            <div className="group bg-[#111] border border-white/[0.06] overflow-hidden flex flex-col cursor-pointer transition-all duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(110,231,183,0.06)]">
                                {/* Image Area */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <span className="absolute top-3.5 left-3.5 z-10 bg-hero-neon/90 text-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                                        {project.tag}
                                    </span>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="p-6 flex-1 flex flex-col gap-3">
                                    <h3 className="font-display text-2xl md:text-[28px] font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>
                                    <div className="text-gray-400 text-[13px] flex items-center gap-2">
                                        <svg width="10" height="13" viewBox="0 0 10 13" fill="none">
                                            <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 8 5 8s5-4.25 5-8c0-2.76-2.24-5-5-5zm0 6.8a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z" fill="currentColor"/>
                                        </svg>
                                        {project.location}
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2.5 border-t border-white/[0.08] pt-4 mt-auto">
                                        <div className="flex flex-col gap-0.5">
                                            <small className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">Status</small>
                                            <span className="text-[13px] font-medium text-white">{project.status}</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <small className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">Total Area</small>
                                            <span className="text-[13px] font-medium text-white">{project.size}</span>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <small className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500">Inventory</small>
                                            <span className="text-[13px] font-medium text-white">{project.plots}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* View All Link — VHG style */}
                <Reveal delay={400}>
                    <div className="mt-14 text-center">
                        <Link
                            to="/our-work"
                            className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white border-b border-white pb-1.5 hover:text-hero-neon hover:border-hero-neon hover:gap-5 transition-all duration-300"
                        >
                            Explore All Projects <span>→</span>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Portfolio;
