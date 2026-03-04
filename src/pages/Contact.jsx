import React, { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thanks for contacting us! We'll get back to you soon.");
    };

    return (
        <div className="bg-hero-black min-h-screen">
            <PageHeader
                title={<>GET IN <span className="text-hero-neon">TOUCH</span></>}
                subtitle="Ready to start your project? Let's talk."
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-3xl font-display font-bold text-white mb-8">CONTACT INFO</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-hero-neon mt-1 mr-4" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Email</h4>
                                    <p className="text-gray-400">info@meimadhi.co</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-hero-neon mt-1 mr-4" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Phone</h4>
                                    <p className="text-gray-400">07457 414 356</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-hero-neon mt-1 mr-4" />
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wider">Location</h4>
                                    <p className="text-gray-400">Leeds, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-hero-dark p-8 border border-white/5 rounded-sm">
                        <h3 className="text-2xl font-display font-bold text-white mb-6">SEND A MESSAGE</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-hero-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-hero-neon transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-hero-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-hero-neon transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-hero-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-hero-neon transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full bg-hero-neon text-black font-bold uppercase tracking-wide py-4 hover:bg-white transition-colors flex items-center justify-center">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
