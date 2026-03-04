import React from 'react';
import { Monitor, PenTool, Shield, ShoppingBag, Megaphone } from 'lucide-react';

const services = [
    {
        tag: "Marketing",
        title: "REAL ESTATE MARKETING",
        description: "Strategies that put your property in front of the right buyers at the right time.",
        features: ["Local SEO & SEM", "Social Media", "Email Marketing", "Analytics & Reporting"],
        icon: <Megaphone className="w-12 h-12 text-hero-black" strokeWidth={1} />,
        rotation: "rotate-[-5deg]"
    },
    {
        tag: "Identity",
        title: "BRANDING",
        description: "Your brand, sharpened and consistent across every front it faces.",
        features: ["Logo design", "Visual style", "Style guide", "Brand strategy"],
        icon: <Shield className="w-12 h-12 text-hero-black" strokeWidth={1} />,
        rotation: "rotate-[5deg]"
    },
    {
        tag: "Creative",
        title: "GRAPHIC DESIGN",
        description: "Visuals that capture attention and communicate your message instantly.",
        features: ["Marketing materials", "Social assets", "Print design", "Illustrations"],
        icon: <PenTool className="w-12 h-12 text-hero-black" strokeWidth={1} />,
        rotation: "rotate-[-3deg]"
    },
    {
        tag: "Commerce",
        title: "ECOMMERCE SOLUTION",
        description: "Seamless shopping experiences that turn visitors into loyal customers.",
        features: ["Shopify/WooCommerce", "Payment integration", "Inventory tools", "Sales funnels"],
        icon: <ShoppingBag className="w-12 h-12 text-hero-black" strokeWidth={1} />,
        rotation: "rotate-[3deg]"
    },
    {
        tag: "Development",
        title: "WEB DEVELOPMENT",
        description: "Robust, scalable, and high-performance real estate websites built for growth.",
        features: ["Property Listings", "API integration", "Speed optimization", "Secure hosting"],
        icon: <Monitor className="w-12 h-12 text-hero-black" strokeWidth={1} />,
        rotation: "rotate-[-2deg]"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-hero-bg">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Horizontal Scroll Layout */}
                <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                    {services.map((service, index) => (
                        <div key={index} className="flex-none w-[85vw] md:w-[400px] snap-center bg-white rounded-3xl p-8 relative flex flex-col h-full border-4 border-transparent hover:border-hero-neon transition-colors duration-300 group">

                            {/* Floating Icon Placeholder */}
                            <div className={`absolute -top-6 -right-4 w-20 h-20 bg-hero-neon rounded-2xl border-4 border-hero-bg flex items-center justify-center transform ${service.rotation} shadow-xl z-10`}>
                                {service.icon}
                            </div>

                            {/* Tag */}
                            <div className="inline-block bg-hero-neon rounded-full px-4 py-1 border-2 border-hero-bg text-xs font-bold uppercase tracking-wider mb-6 self-start">
                                {service.tag}
                            </div>

                            {/* Title */}
                            <h3 className="text-4xl lg:text-5xl font-display font-bold text-hero-black leading-[0.85] mb-6 uppercase">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm font-sans mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="text-gray-700 text-sm font-medium flex items-center">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <button className="w-full bg-hero-neon text-hero-black font-display font-bold text-2xl uppercase py-3 rounded-lg hover:bg-black hover:text-hero-neon transition-colors mt-auto">
                                FIND OUT MORE
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
