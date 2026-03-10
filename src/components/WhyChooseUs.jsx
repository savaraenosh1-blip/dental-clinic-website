import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Zap, Heart, Clock, DollarSign, X, ArrowRight, CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
    const [showClinicModal, setShowClinicModal] = useState(false);
    const [activeTab, setActiveTab] = useState('info'); // 'info' or 'facilities'

    const facilities = [
        {
            title: 'Modern Reception',
            desc: 'A calming, luxury space designed for your comfort while you wait.',
            img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600'
        },
        {
            title: 'Advanced Operatory',
            desc: 'Equipped with ergonomic dental chairs and the latest treatment tech.',
            img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
        },
        {
            title: 'Digital Imaging Lab',
            desc: 'On-site CBCT and 3D scanning for high-precision diagnostics.',
            img: 'https://images.unsplash.com/photo-1606811841660-1b51e9edd6a6?auto=format&fit=crop&q=80&w=600'
        },
        {
            title: 'Sterilization Zone',
            desc: 'B-class autoclaves and strict protocols for 100% safety.',
            img: 'https://images.unsplash.com/photo-1519494351221-5f0cc579e27b?auto=format&fit=crop&q=80&w=600'
        }
    ];

    const reasons = [
        {
            title: 'Experienced Dentists',
            text: 'Our team consists of highly skilled specialists with over 10 years of experience.',
            icon: <Award className="text-primary-500" />,
        },
        {
            title: 'Advanced Technology',
            text: 'We use the latest 3D imaging and laser equipment for precise treatments.',
            icon: <Zap className="text-secondary-500" />,
        },
        {
            title: 'Pain-Free Treatment',
            text: 'Relaxing environment and gentle techniques to ensure your comfort.',
            icon: <Heart className="text-primary-500" />,
        },
        {
            title: 'Affordable Care',
            text: 'High-quality dental solutions with flexible payment plans and transparency.',
            icon: <DollarSign className="text-secondary-500" />,
        },
        {
            title: 'High Sterilization',
            text: 'We follow strict international protocols for hygiene and safety.',
            icon: <ShieldCheck className="text-primary-500" />,
        },
        {
            title: 'Friendly Environment',
            text: 'A welcoming clinic designed to make your visit stress-free and pleasant.',
            icon: <Clock className="text-secondary-500" />,
        },
    ];

    return (
        <section id="about" className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Decorative Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

            <div className="section-padding">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-secondary-400 font-bold uppercase tracking-widest text-sm"
                        >
                            Why Choose Us
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-display font-bold mt-4 leading-tight"
                        >
                            We Believe Everyone Deserves a <span className="text-primary-400">Perfect Smile</span>
                        </motion.h2>
                        <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                            At Advance Dental Care, we combine artistry with science. Our mission is to provide world-class dental solutions that are accessible, pain-free, and life-changing.
                        </p>

                        <div className="mt-12 grid sm:grid-cols-2 gap-8">
                            {reasons.slice(0, 4).map((reason, i) => (
                                <motion.div
                                    key={reason.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover="hover"
                                    className="flex gap-4 group cursor-pointer"
                                >
                                    <motion.div
                                        variants={{
                                            hover: {
                                                scale: 1.2,
                                                rotate: [0, -10, 10, -10, 0],
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 10,
                                                    rotate: { repeat: Infinity, duration: 0.5 }
                                                }
                                            }
                                        }}
                                        className="w-12 h-12 bg-white/10 rounded-xl flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <motion.div
                                            variants={{
                                                hover: {
                                                    y: [0, -2, 2, -2, 0],
                                                    transition: { repeat: Infinity, duration: 0.4 }
                                                }
                                            }}
                                        >
                                            {reason.icon}
                                        </motion.div>
                                    </motion.div>
                                    <div>
                                        <motion.h4
                                            variants={{
                                                hover: { y: -2, color: '#38bdf8' }
                                            }}
                                            className="font-bold text-lg mb-1 transition-colors"
                                        >
                                            {reason.title}
                                        </motion.h4>
                                        <p className="text-slate-400 text-sm italic">{reason.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button
                            onClick={() => {
                                setActiveTab('info');
                                setShowClinicModal(true);
                            }}
                            className="mt-12 group relative"
                        >
                            <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-xl group-hover:bg-primary-400/40 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            <div className="relative p-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full">
                                <div className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                                    Learn More About Clinic <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="rounded-[40px] overflow-hidden border-8 border-white/5 relative z-10 shadow-2xl">
                            <img
                                src="/images/clinic.png"
                                alt="Modern Consultation"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-primary-500/10 mix-blend-overlay" />
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -bottom-10 -right-10 bg-primary-500 p-10 rounded-full flex flex-col items-center justify-center shadow-2xl z-20 hidden sm:flex border-4 border-slate-900 will-change-transform"
                        >
                            <span className="text-4xl font-bold">10+</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary-100">Years</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Clinic Info Modal */}
            <AnimatePresence>
                {showClinicModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setShowClinicModal(false)}
                            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl bg-slate-900 border border-white/10 rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setShowClinicModal(false)}
                                className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-md"
                            >
                                <X size={20} />
                            </button>

                            <div className="w-full lg:w-1/3 h-48 lg:h-auto relative overflow-hidden hidden lg:block">
                                <motion.img
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    src={activeTab === 'info'
                                        ? "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                                        : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"}
                                    alt="Advanced Dental Care"
                                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-primary-500/10 mix-blend-multiply" />
                            </div>

                            <div className="w-full lg:w-2/3 p-6 lg:p-10 overflow-y-auto">
                                {/* Tab Navigation */}
                                <div className="flex gap-4 border-b border-white/5 mb-8">
                                    {['info', 'facilities'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-primary-400' : 'text-slate-500 hover:text-slate-300'
                                                }`}
                                        >
                                            {tab === 'info' ? 'Clinic Info' : 'Our Facilities'}
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="modalTab"
                                                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-full"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {activeTab === 'info' ? (
                                        <div className="space-y-8">
                                            <div>
                                                <span className="text-secondary-400 font-bold uppercase tracking-widest text-[10px]">Legacy of Excellence</span>
                                                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mt-2 mb-6 leading-tight">Advancing Oral Health in <span className="text-primary-400">Rupnagar</span></h3>
                                                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                                                    For over a decade, Advance Dental Care has been the cornerstone of excellence in dentistry in Punjab. We combine technical mastery with an aesthetic eye.
                                                </p>
                                                <div className="grid sm:grid-cols-2 gap-4">
                                                    {[
                                                        'State-of-the-Art Sterilization',
                                                        'Digital 3D Imaging (CBCT)',
                                                        'Painless Laser Dentistry',
                                                        'World-Class Implant Center',
                                                        'Certified Orthodontic Care',
                                                        'Comfort-First Environment'
                                                    ].map((item) => (
                                                        <div key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                                                            <CheckCircle2 size={16} className="text-secondary-500 shrink-0" />
                                                            {item}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                <a
                                                    href="#appointment"
                                                    onClick={() => setShowClinicModal(false)}
                                                    className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary-500/25 active:scale-95"
                                                >
                                                    Book Consultation <ArrowRight size={18} />
                                                </a>
                                                <button
                                                    onClick={() => setActiveTab('facilities')}
                                                    className="border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95"
                                                >
                                                    View Facilities
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-8 pb-4">
                                            <div>
                                                <h3 className="text-3xl font-display font-bold text-white mb-2">Facility Showcase</h3>
                                                <p className="text-slate-400 text-sm italic">Take a virtual tour of our state-of-the-art clinical environment.</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {facilities.map((f, i) => (
                                                    <motion.div
                                                        key={f.title}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-colors bg-white/5"
                                                    >
                                                        <div className="aspect-[16/10] overflow-hidden">
                                                            <img
                                                                src={f.img}
                                                                alt={f.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                                                        </div>
                                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                                            <h4 className="text-white font-bold text-lg mb-1">{f.title}</h4>
                                                            <p className="text-slate-400 text-[10px] leading-relaxed">{f.desc}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => setActiveTab('info')}
                                                className="text-primary-400 font-bold flex items-center gap-2 hover:text-primary-300 transition-colors text-sm"
                                            >
                                                <ArrowRight size={18} className="rotate-180" /> Back to Clinic Details
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WhyChooseUs;
