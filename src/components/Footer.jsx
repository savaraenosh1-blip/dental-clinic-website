import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ArrowUpRight, X, ShieldCheck, FileText, Scale, Lock, Info } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [legalState, setLegalState] = useState({ isOpen: false, tab: 'privacy' });

    const openLegal = (tab) => setLegalState({ isOpen: true, tab });
    const closeLegal = () => setLegalState({ isOpen: false, tab: 'privacy' });

    const legalContent = {
        privacy: {
            title: 'Privacy Policy',
            icon: <ShieldCheck size={24} className="text-primary-500" />,
            description: 'Your medical privacy is our top priority. We adhere to the highest standards of data protection for our patients.',
            sections: [
                {
                    title: 'Patient Data Protection',
                    text: 'We are strictly committed to protecting your personal health information (PHI). All records are stored in encrypted clinical systems.',
                    icon: <Lock size={18} />
                },
                {
                    title: 'Information We Collect',
                    text: 'We collect name, contact details, and medical history solely for treatment planning, insurance processing, and appointment scheduling.',
                    icon: <Info size={18} />
                },
                {
                    title: 'Clinical Communication',
                    text: 'Your contact details are used for vital appointment reminders and post-operative care instructions. We never share data with third party marketers.',
                    icon: <Mail size={18} />
                }
            ]
        },
        terms: {
            title: 'Terms of Service',
            icon: <Scale size={24} className="text-secondary-500" />,
            description: 'Guidelines to ensure a smooth and professional experience for both patients and our medical staff.',
            sections: [
                {
                    title: 'Appointment Guidelines',
                    text: 'Patients are requested to arrive 10 minutes before their scheduled time. A 24-hour notice is required for any cancellations.',
                    icon: <FileText size={18} />
                },
                {
                    title: 'Medical Transparency',
                    text: 'Patients must provide accurate medical history. All treatment estimates provided during consultation are valid for 30 days.',
                    icon: <ShieldCheck size={18} />
                },
                {
                    title: 'Payment Policies',
                    text: 'Payment is expected at the time of service unless prior financial arrangements have been made with our reception desk.',
                    icon: <FileText size={18} />
                }
            ]
        }
    };

    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8 md:pt-24 md:pb-12 border-t border-white/5">
            <div className="section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <img 
                                src="/images/logo.png" 
                                alt="Advance Dental Care" 
                                className="h-12 w-auto object-contain"
                            />
                            <h3 className="text-xl font-display font-bold">Advance Dental Care</h3>
                        </div>
                        <p className="text-slate-400 mb-6 md:mb-8 max-w-xs text-sm italic">
                            Providing premium, personalized dental care with advanced technology and a compassionate touch.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-500 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 md:mb-8 flex items-center gap-2">
                            Quick Links <div className="w-10 h-px bg-primary-500/50" />
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            {['Home', 'Services', 'About Clinic', 'Doctors', 'Reviews', 'Gallery'].map((item) => {
                                const href = item === 'About Clinic' ? '#about' : `#${item.toLowerCase().replace(' ', '')}`;
                                return (
                                    <li key={item}>
                                        <a href={href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 md:mb-8 flex items-center gap-2">
                            Our Services <div className="w-10 h-px bg-primary-500/50" />
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            {['Dental Implants', 'Orthodontics', 'Root Canal', 'Cosmetic Dentistry', 'Teeth Whitening', 'Smile Makeover'].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 md:mb-8 flex items-center gap-2">
                            Contact Info <div className="w-10 h-px bg-primary-500/50" />
                        </h4>
                        <ul className="space-y-4 md:space-y-6">
                            <li className="flex gap-4">
                                <MapPin className="text-primary-400 shrink-0" size={20} />
                                <span className="text-slate-400 text-sm">
                                    Book Market, Giani Zail Singh Nagar, Rupnagar, Punjab 140001
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="text-secondary-400 shrink-0" size={20} />
                                <span className="text-slate-400 text-sm">7989474163</span>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="text-primary-400 shrink-0" size={20} />
                                <span className="text-slate-400 text-sm">savaraenosh1@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                    <p className="text-slate-500 text-sm italic text-center md:text-left">
                        © {currentYear} Advance Dental Care Orthodontic & Implant Centre. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <button onClick={() => openLegal('privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
                        <button onClick={() => openLegal('terms')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
                    </div>
                </div>
            </div>

            {/* Legal Dashboard Modal */}
            <AnimatePresence>
                {legalState.isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeLegal}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-3xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header/Tabs */}
                            <div className="bg-slate-50 p-6 md:p-8 border-b border-slate-100">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <img 
                                            src="/images/logo.png" 
                                            alt="Logo" 
                                            className="h-10 w-auto object-contain"
                                        />
                                        <span className="font-display font-bold text-slate-900">Legal Dashboard</span>
                                    </div>
                                    <button
                                        onClick={closeLegal}
                                        className="w-10 h-10 bg-white hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all border border-slate-200"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex p-1 bg-slate-200/50 rounded-2xl w-fit mx-auto md:mx-0">
                                    {Object.keys(legalContent).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setLegalState({ ...legalState, tab })}
                                            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${legalState.tab === tab
                                                ? 'bg-white text-primary-600 shadow-md scale-[1.02]'
                                                : 'text-slate-500 hover:text-slate-700'
                                                }`}
                                        >
                                            {legalContent[tab].title}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-12">
                                <motion.div
                                    key={legalState.tab}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                                            {legalContent[legalState.tab].icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{legalContent[legalState.tab].title}</h3>
                                            <p className="text-slate-500 text-sm">Last Updated: March 2026</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-10 italic border-l-4 border-primary-500/20 pl-6 py-2">
                                        {legalContent[legalState.tab].description}
                                    </p>

                                    <div className="space-y-10">
                                        {legalContent[legalState.tab].sections.map((section, idx) => (
                                            <div key={idx} className="group">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="text-primary-500 group-hover:scale-110 transition-transform">
                                                        {section.icon}
                                                    </div>
                                                    <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs">{section.title}</h4>
                                                </div>
                                                <p className="text-slate-500 text-sm leading-relaxed pl-7">
                                                    {section.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-slate-100">
                                        <p className="text-slate-400 text-xs text-center">
                                            If you have any questions regarding our policies, please contact us at <span className="text-primary-500 font-bold">savaraenosh1@gmail.com</span>
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;
