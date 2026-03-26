import React, { useState } from 'react';
import ServicesList from '../components/home/Services'; // Reusing for now
import { Check, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const faqs = [
    {
        question: "What is real estate digital marketing?",
        answer: "Real estate digital marketing utilizes online channels like social media, search engines, and websites to connect with potential buyers and sellers. It builds brand presence and generates high-quality leads in the digital space."
    },
    {
        question: "How does digital marketing help real estate professionals?",
        answer: "It provides measurable results by targeting specific demographics, increasing listing visibility, nurturing relationships through targeted campaigns, and establishing you as a local market authority."
    },
    {
        question: "Which platforms are best for real estate digital marketing?",
        answer: "Instagram and Facebook are excellent for visual property showcases and targeted ads. LinkedIn is great for B2B and commercial real estate, while YouTube and TikTok are increasingly popular for video walkthroughs."
    },
    {
        question: "How long does it take to see results?",
        answer: "Paid advertising can generate leads almost immediately, while organic strategies like SEO and content marketing typically take 3 to 6 months to gain traction. A combined approach yields the best overall ROI."
    },
    {
        question: "Do I still need traditional marketing?",
        answer: "While digital marketing provides precise targeting and measurable data, traditional marketing still has value. A hybrid approach often works best, using digital tools to amplify and measure your traditional efforts."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-white/10 last:border-b-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className="text-xl md:text-2xl font-display font-medium text-white group-hover:text-hero-neon transition-colors duration-300 pr-8">{question}</span>
                <span className="text-hero-neon text-3xl font-light transform transition-transform duration-300 flex-shrink-0">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-300 text-lg leading-relaxed font-sans pr-4 md:pr-12">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Services = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    return (
        <div className="bg-hero-black min-h-screen">
            {/* Custom Services Hero */}
            <section className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#344e4e] via-[#213232] to-[#182424] pt-24 pb-12 overflow-hidden flex items-center">
                <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* Main Content - Massive Typography */}
                        <div className="flex-1 w-full z-10 pt-12 lg:pt-0">
                            <h1 className="font-display font-bold leading-[0.85] tracking-tighter uppercase flex flex-col">
                                <motion.span
                                    className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem]"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                >
                                    OUR SKILL, THY
                                </motion.span>
                                <motion.span
                                    className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] mt-2 md:mt-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                >
                                    MIGHTY
                                </motion.span>
                                <motion.span
                                    className="text-hero-neon text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] mt-2 md:mt-4"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                >
                                    ADVANTAGE.
                                </motion.span>
                            </h1>
                        </div>

                    </div>
                </div>

                {/* Scroll Down Arrow */}
                <motion.div 
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-50 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ 
                        opacity: { delay: 1, duration: 1 }, 
                        y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } 
                    }}
                    onClick={() => {
                        document.getElementById('social-media-management')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <span className="text-white/40 text-xs tracking-widest font-sans font-medium uppercase mb-2">Scroll</span>
                    <ChevronDown className="text-hero-neon w-6 h-6" />
                </motion.div>
            </section>

            {/* Service 01 - Web Design */}
            <section id="social-media-management" className="py-24 bg-[#213232] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Text Column */}
                        <div>
                            <div className="mb-8">
                                <span className="text-3xl font-display font-bold text-hero-neon">01</span>
                                <h2 className="text-6xl sm:text-[4rem] lg:text-7xl font-display font-bold text-white tracking-tighter uppercase mt-2 leading-none">
                                    SOCIAL MEDIA MANAGEMENT & BRAND PRESENCE
                                </h2>
                            </div>

                            <p className="text-gray-200 text-lg leading-relaxed font-sans mb-8">
                                We handle everything from content creation to posting schedules across all major platforms, so your properties get the visibility they deserve. From eye-catching property showcases to market updates, we build a brand that buyers trust before they ever make a call.
                            </p>
                        </div>

                        {/* Image Column */}
                        <div className="relative">
                            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-[#213232] flex items-center justify-center p-8 border border-white/5">
                                {/* Replaced the placeholder with the SMM image provided by the user */}
                                <img
                                    src="/SMM.png"
                                    alt="Social Media Management Portfolio"
                                    className="w-full h-full object-cover rounded-xl opacity-90"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Service 02 - Brand Identity */}
            <section className="py-24 bg-[#213232] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Image Column (Left) */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-[#213232] flex items-center justify-center p-8 border border-white/5">
                                {/* Placeholder for the monitor image */}
                                <img
                                    src="/LEAD GENERATION & ENGAGEMENT.png"
                                    alt="Brand Identity Portfolio"
                                    className="w-full h-full object-cover rounded-xl opacity-90"
                                />
                            </div>
                        </div>

                        {/* Text Column (Right) */}
                        <div className="order-1 lg:order-2">
                            <div className="mb-8">
                                <span className="text-3xl font-display font-bold text-hero-neon">02</span>
                                <h2 className="text-6xl sm:text-[4rem] lg:text-7xl font-display font-bold text-white tracking-tighter uppercase mt-2 leading-none">
                                    LEAD GENERATION & ENGAGEMENT
                                </h2>
                            </div>

                            <p className="text-gray-200 text-lg leading-relaxed font-sans mb-10">
                                We don't just attract leads, we nurture them. Using targeted ad campaigns and personalized follow-up systems, we keep potential buyers engaged at every stage of their journey, ensuring no opportunity slips through the cracks.
                            </p>


                        </div>

                    </div>
                </div>
            </section>

            {/* Service 03 - Clear Messaging */}
            <section className="py-24 bg-[#213232] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Text Column (Left) */}
                        <div>
                            <div className="mb-8">
                                <span className="text-3xl font-display font-bold text-hero-neon">03</span>
                                <h2 className="text-6xl sm:text-[4rem] lg:text-7xl font-display font-bold text-white tracking-tighter uppercase mt-2 leading-none">
                                    END-TO-END SALES SUPPORT
                                </h2>
                            </div>

                            <p className="text-gray-200 text-lg leading-relaxed font-sans mb-10">
                                From the first inquiry to the final handshake, we manage the entire buyer journey on your behalf. Our team qualifies leads, handles communications, and drives conversions, so you can focus on developing great properties while we fill them.
                            </p>


                        </div>

                        {/* Image Column (Right) */}
                        <div className="relative">
                            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-[#2D4545] shadow-2xl flex items-center justify-center p-8 border border-white/5">
                                {/* Placeholder for the monitor image showing messaging/funnel */}
                                <img
                                    src="/END-TO-END SALES SUPPORT.png"
                                    alt="Clear Messaging Portfolio"
                                    className="w-full h-full object-cover rounded-xl opacity-90"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#1a2626] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl sm:text-6xl font-display font-bold text-white tracking-tighter uppercase mb-4">
                            FREQUENTLY ASKED <span className="text-hero-neon">QUESTIONS</span>
                        </h2>
                        <p className="text-gray-300 text-lg font-sans max-w-2xl mx-auto">
                            Everything you need to know about our real estate digital marketing services and how we can help your business grow.
                        </p>
                    </div>

                    <div className="bg-[#213232] rounded-3xl p-6 md:p-10 shadow-2xl border border-white/5">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openFaqIndex === index}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-hero-neon/5 blur-[120px]" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-hero-neon/5 blur-[120px]" />
                </div>
            </section>
        </div>
    );
};

export default Services;
