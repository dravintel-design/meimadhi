import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-hero-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/">
                            <img src="/logo1.png" alt="Meimathi" className="h-12 w-auto" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We create real estate websites that not only look good but perform better. Your digital property presence, elevated.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-hero-neon transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-hero-neon transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-hero-neon transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Services</Link></li>
                            <li><Link to="/what-you-get" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">What You Get</Link></li>
                            <li><Link to="/our-work" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Our Work</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li><Link to="/web-design" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Web Design</Link></li>
                            <li><Link to="/branding" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Branding</Link></li>
                            <li><Link to="/seo" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">SEO Optimization</Link></li>
                            <li><Link to="/maintenance" className="text-gray-400 hover:text-hero-neon transition-colors text-sm">Maintenance</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA Column */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6">Ready to Start?</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            Let's build something amazing together.
                        </p>
                        <Link to="/book-call" className="inline-flex items-center justify-center w-full bg-hero-neon text-black font-bold uppercase tracking-wide py-3 px-4 rounded-sm hover:bg-white transition-colors">
                            Book a Call <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© 2026 Meimathi Limited. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link to="/terms" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
