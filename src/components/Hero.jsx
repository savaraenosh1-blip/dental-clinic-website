import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10 bg-slate-50">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Dental Background"
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/40 to-transparent" />
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50/20 rounded-l-[100px] -z-10 hidden lg:block" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -z-10" />

            <div className="section-padding grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Star size={16} fill="currentColor" />
                        <span>#1 Dental Clinic in Rupnagar</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
                        Confident <span className="text-primary-500">Smiles</span> Start Here
                    </h1>

                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Advanced dental care, orthodontics, and implants delivered with precision and compassion. Experience the future of dentistry today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a href="#appointment" className="btn-primary flex items-center justify-center gap-2 group">
                            <span>Book Appointment</span>
                            <Calendar size={18} className="group-hover:scale-110 transition-transform" />
                        </a>
                        <a href="#gallery" className="btn-secondary flex items-center justify-center gap-2 group">
                            <span>View Gallery</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { label: 'Happy Patients', value: '1000+' },
                            { label: 'Years Experience', value: '10+' },
                            { label: 'Advanced Tech', value: 'Top-Tier' },
                            { label: 'Pain-Free', value: 'Always' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                            >
                                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider font-sans">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="/images/hero.png"
                            alt="Professional Dentist Environment"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                    </div>

                    {/* Floating Badge */}
                    <a href="#reviews" className="block">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-100 max-w-[240px] hover:shadow-2xl hover:border-primary-100 transition-all cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600 group-hover:bg-primary-100 group-hover:text-primary-600 transition-colors">
                                <Star size={24} fill="currentColor" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors">4.9/5 Rating</div>
                                <div className="text-sm text-slate-500">Based on 500+ patient reviews</div>
                            </div>
                        </motion.div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
