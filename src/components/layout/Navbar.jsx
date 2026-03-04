import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-hero-bg/95 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <img src="/logo.png" alt="Meimadhi" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <div className="flex items-baseline space-x-6">
                            <div className="relative group">
                                <Link to="/services" className="text-white hover:text-hero-neon px-2 py-2 text-sm font-medium transition-colors flex items-center">
                                    Services
                                </Link>
                            </div>
                            <div className="relative group">
                                <Link to="/our-work" className="text-white hover:text-hero-neon px-2 py-2 text-sm font-medium transition-colors flex items-center">
                                    Our Work
                                </Link>
                            </div>
                            <div className="relative group">
                                <Link to="/about" className="text-white hover:text-hero-neon px-2 py-2 text-sm font-medium transition-colors flex items-center">
                                    About
                                </Link>
                            </div>
                            <div className="relative group">
                                <Link to="/contact" className="text-white hover:text-hero-neon px-2 py-2 text-sm font-medium transition-colors flex items-center">
                                    Contact
                                </Link>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-6 w-px bg-white/20 mx-2"></div>

                        {/* Right Side Actions */}
                        <div className="flex items-center space-x-4">


                            <Link to="/book-call" className="bg-hero-neon text-black hover:bg-white transition-colors px-6 py-2.5 rounded-sm font-sans font-bold text-sm">
                                Book a Call
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-hero-bg border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                        <Link to="/our-work" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Our Work</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <Link to="/book-call" className="text-hero-neon hover:text-white block px-3 py-2 rounded-md text-base font-medium">Book a Call</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
