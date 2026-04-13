import React from 'react';
import CurrentProject from '../components/home/CurrentProject';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import QuoteBanner from '../components/home/QuoteBanner';
import { Link } from 'react-router-dom';

import heroCity from '../assets/hero-city.png';

const Home = () => {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4">

                {/* City Skyline Background */}
                <div
                    className="absolute inset-x-0 bottom-0 z-0 h-1/2 md:h-2/3 bg-bottom bg-no-repeat bg-contain opacity-40 pointer-events-none"
                    style={{ backgroundImage: `url(${heroCity})` }}
                />

                <div className="text-center relative z-10 max-w-7xl mx-auto mt-[-5vh]">
                    {/* Main Headline */}
                    <h1 className="flex flex-col items-center justify-center font-display font-bold tracking-tighter leading-[0.9] text-center">
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white">YOUR DIGITAL PRESENCE, </span>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-hero-neon">HANDLED.</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 mt-8 md:mt-4">
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-white">YOUR SALES, </span>
                            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] text-hero-neon">ELEVATED.</span>
                        </div>
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-2xl mx-auto text-lg text-gray-300 mt-8 mb-12 leading-relaxed font-sans">
                        We get you online and your real estate business growing in no time, leaving you to do what you do best: Closing deals like a boss and looking professional AF while doing it.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white font-sans">Clutch</span>
                            <div className="flex text-red-500 text-xs mt-1">★★★★★</div>
                            <span className="text-[10px] text-gray-400">5.0 RATING</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white font-sans">bark</span>
                            <div className="flex text-yellow-500 text-xs mt-1">★★★★★</div>
                            <span className="text-[10px] text-gray-400">5.0 RATING</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-white font-sans">Trustpilot</span>
                            <div className="flex text-green-500 text-xs mt-1">★★★★★</div>
                            <span className="text-[10px] text-gray-400">5.0 RATING</span>
                        </div>
                    </div>
                </div>


            </section>

            <CurrentProject />
            <Portfolio />
            <Testimonials />
            <QuoteBanner />
        </div>
    );
};

export default Home;
