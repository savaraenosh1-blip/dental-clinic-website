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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.replace('#', '');
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`block px-3 py-3 text-base font-medium rounded-lg transition-all ${isActive
                                            ? 'text-primary-600 bg-primary-50'
                                            : 'text-slate-700 hover:text-primary-500 hover:bg-slate-50'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <div className="pt-4 px-3">
                                <a
                                    href="#appointment"
                                    className={`w-full btn-primary flex items-center justify-center gap-2 transition-all duration-300 ${activeSection === 'appointment'
                                        ? 'ring-4 ring-primary-500/30'
                                        : ''
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Calendar size={18} />
                                    <span>Book Appointment</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
