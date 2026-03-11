import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8 md:pt-24 md:pb-12 border-t border-white/5">
            <div className="section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl">
                                AD
                            </div>
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
                    <p className="text-slate-500 text-sm italic">
                        © {currentYear} Advance Dental Care Orthodontic & Implant Centre. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-slate-500 text-sm">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
