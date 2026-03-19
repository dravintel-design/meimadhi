import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechFlow",
        content: "Meimathi completely transformed our online presence. The new site is faster, looks better, and most importantly, converts more visitors.",
    },
    {
        name: "Jane Smith",
        role: "Marketing Director, Enviren",
        content: "Detailed, professional, and incredibly talented. The team at Meimathi understood exactly what we needed and delivered beyond expectations.",
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-hero-dark border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white text-center mb-16">
                    CLIENT <span className="text-hero-neon">STORIES</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-hero-black p-10 border border-white/5 relative">
                            <div className="flex space-x-1 mb-6 text-hero-neon">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#36D19B" />)}
                            </div>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                "{t.content}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold font-display uppercase tracking-wider">{t.name}</h4>
                                <p className="text-gray-500 text-sm">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
