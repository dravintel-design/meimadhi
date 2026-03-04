import React from 'react';
import layoutMap from '../../assets/layout-map.png';

const CurrentProject = () => {
    return (
        <section className="py-24 bg-hero-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-hero-neon uppercase mb-2">
                        CURRENT PROJECT
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-[0.9]">
                        GLOBAL CITY
                    </h3>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Layout Image */}
                    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl group">
                        <div className="aspect-[4/3] relative">
                            {/* Global City layout map */}
                            <img
                                src={layoutMap}
                                alt="Global City Layout Map"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Small badge overlay */}
                            <div className="absolute top-4 left-4 bg-hero-neon text-black text-xs font-bold uppercase py-1 px-3 rounded-full shadow-md">
                                Putthirankottai
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Info & Cards */}
                    <div className="flex flex-col h-full justify-center space-y-8">

                        <div>
                            <p className="text-gray-200 text-lg leading-relaxed font-sans">
                                Discover premium residential plots in the heart of Putthirankottai, Chengalpattu. Global City offers a meticulously planned layout surrounded by nature, perfect for building your dream home or for a secure investment.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* Available Plots Card */}
                            <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-md hover:shadow-lg transition-shadow">
                                <h4 className="text-gray-700 text-sm font-bold uppercase tracking-wider mb-2">Available Plots</h4>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-display font-bold text-hero-black">25</span>
                                    <span className="text-green-600 text-sm font-bold">Plots</span>
                                </div>
                                <p className="text-gray-600 text-xs mt-2">Ready to construct</p>
                            </div>

                            {/* Sold Plots Card */}
                            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-red-400 shadow-sm opacity-90">
                                <h4 className="text-gray-700 text-sm font-bold uppercase tracking-wider mb-2">Sold Plots</h4>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-display font-bold text-gray-600">22</span>
                                    <span className="text-red-500 text-sm font-bold">Plots</span>
                                </div>
                                <p className="text-gray-600 text-xs mt-2">Happily owned</p>
                            </div>

                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <button className="bg-hero-neon text-hero-black font-display font-bold w-full sm:w-auto px-8 py-4 rounded-lg uppercase tracking-wider hover:bg-black hover:text-hero-neon transition-colors duration-300">
                                Download Brochure
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentProject;
