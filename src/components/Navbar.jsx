import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Intersection Observer for active section detection
        const sections = ['home', 'services', 'about', 'doctors', 'reviews', 'gallery', 'appointment', 'contact'];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(id => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-2">
                            <span className="text-white font-bold text-xl">AD</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-lg font-display font-bold text-slate-900 leading-tight">
                                Advance Dental Care
                            </h1>
                            <p className="text-[10px] text-primary-600 font-semibold uppercase tracking-wider">
                                Orthodontic & Implant Centre
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace('#', '');
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`font-medium transition-all duration-300 relative py-2 ${isActive
                                            ? 'text-primary-600'
                                            : 'text-slate-700 hover:text-primary-500'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                );
                            })}
                            <a
                                href="#appointment"
                                className={`btn-primary flex items-center gap-2 py-2 px-5 ml-4 transition-all duration-300 ${activeSection === 'appointment'
                                    ? 'ring-4 ring-primary-500/30 scale-105'
                                    : ''
                                    }`}
                            >
                                <Calendar size={18} />
                                <span>Book Now</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-700 hover:text-primary-500 p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55] md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-white z-[60] md:hidden shadow-2xl flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mr-3">
                                        <span className="text-white font-bold text-xl">AD</span>
                                    </div>
                                    <span className="font-display font-bold text-slate-900">Menu</span>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.replace('#', '');
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center px-4 py-4 text-lg font-bold rounded-2xl transition-all ${isActive
                                                ? 'text-primary-600 bg-primary-50 shadow-sm'
                                                : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                                                }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-6 border-t border-slate-100">
                                <a
                                    href="#appointment"
                                    className={`w-full btn-primary flex items-center justify-center gap-2 transition-all duration-300 py-4 ${activeSection === 'appointment'
                                        ? 'ring-4 ring-primary-500/30'
                                        : ''
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Calendar size={18} />
                                    <span>Book Appointment</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
