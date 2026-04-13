import React from 'react';
import PageHeader from '../components/layout/PageHeader';

const About = () => {
    return (
        <div className="bg-hero-black min-h-screen">
            <PageHeader
                title={<>ABOUT <span className="text-hero-neon">US</span></>}
                subtitle="Meet the team behind the screens."
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-6">WE ARE MEIMATHI</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Founded in 2026, Meimathi was built on a clear premise: real estate businesses need a stronger digital structure to drive sales and ensure committed returns. We go beyond aesthetics, building high-performance digital experiences that convert interest into revenue for property developers and agents.
                        </p>
                        <div className="grid grid-cols-2 gap-8 mt-8">
                            <div>
                                <h4 className="text-4xl font-display font-bold text-white">9+</h4>
                                <p className="text-sm text-hero-neon uppercase tracking-wider">Projects Launched</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-display font-bold text-white">100%</h4>
                                <p className="text-sm text-hero-neon uppercase tracking-wider">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-hero-dark p-8 rounded-sm">
                        <img src="/Team image.png" alt="Meimathi Team" className="w-full h-auto rounded-sm opacity-80 hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
