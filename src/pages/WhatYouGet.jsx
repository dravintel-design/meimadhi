import React from 'react';
import PageHeader from '../components/layout/PageHeader';

const WhatYouGet = () => {
    return (
        <div className="bg-hero-black min-h-screen">
            <PageHeader
                title={<>WHAT YOU <span className="text-hero-neon">GET</span></>}
                subtitle="Transparency is key. Here's exactly what you can expect when working with us."
            />

            <section className="py-16 max-w-4xl mx-auto px-4">
                <div className="space-y-8">
                    <div className="bg-hero-dark p-8 border border-white/10 rounded-sm">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">01. REAL ESTATE STRATEGY</h3>
                        <p className="text-gray-400">We start by understanding your real estate business, your target buyers, and your sales goals.</p>
                    </div>
                    <div className="bg-hero-dark p-8 border border-white/10 rounded-sm">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">02. PROPERTY SHOWCASE DESIGN</h3>
                        <p className="text-gray-400">No templates. We design a unique property showcase that sets your listings apart from the competition.</p>
                    </div>
                    <div className="bg-hero-dark p-8 border border-white/10 rounded-sm">
                        <h3 className="text-2xl font-display font-bold text-white mb-4">03. LAUNCH & LEAD GEN</h3>
                        <p className="text-gray-400">We build your site using the latest tech for speed and security, then launch it to maximize lead generation.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhatYouGet;
