import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CircleCheck,
    Stethoscope,
    Zap,
    Smile,
    ShieldCheck,
    Sparkles,
    Tablets,
    UserRound,
    X,
    ArrowRight
} from 'lucide-react';

const services = [
    {
        title: 'Dental Implants',
        description: 'Restore your smile with permanent, natural-looking tooth replacements.',
        details: 'Dental implants are the gold standard for tooth replacement. They provide a stable foundation for fixed or removable replacement teeth that are made to match your natural teeth. Our advanced imaging ensures surgical precision and 98% success rates.',
        icon: <Zap className="text-primary-500" size={32} />,
        image: '/images/services/implants.png',
        benefits: ['Natural Look & Feel', 'Improved Speech', 'Durability', 'Better Oral Health']
    },
    {
        title: 'Orthodontic Braces',
        description: 'Straighten your teeth with modern metal or invisible ceramic braces.',
        details: 'Correct crowded or crooked teeth and out-of-line bites. We offer traditional metal braces, ceramic (clear) braces, and advanced aligner systems. Our treatment plans are customized for kids, teens, and adults.',
        icon: <Smile className="text-secondary-500" size={32} />,
        image: '/images/services/ortho.png',
        benefits: ['Aligned Teeth', 'Corrected Bite', 'Prevention of Jaw Pain', 'Easier Cleaning']
    },
    {
        title: 'Teeth Cleaning',
        description: 'Professional scaling and polishing for optimal oral hygiene.',
        details: 'Our detailed cleaning removes plaque and tartar that regular brushing cannot reach. We use ultrasonic scalers for a gentle yet deep clean, followed by thorough polishing and a fluoride treatment for maximum protection.',
        icon: <Sparkles className="text-primary-500" size={32} />,
        image: '/images/services/cleaning.png',
        benefits: ['Plaque Removal', 'Fresher Breath', 'Gum Disease Prevention', 'Stain Removal']
    },
    {
        title: 'Root Canal Treatment',
        description: 'Pain-free procedure to save your natural teeth from infection.',
        details: 'Don\'t let a toothache lead to tooth loss. Root canal therapy is a standard procedure used to save an infected or damaged tooth. We use the latest rotary endodontics and local anesthesia to ensure the process is as simple as a filling.',
        icon: <Stethoscope className="text-secondary-500" size={32} />,
        image: '/images/services/root-canal.png',
        benefits: ['Pain Relief', 'Saves Natural Tooth', 'Prevents Infection Spread', 'Normal Biting Force']
    },
    {
        title: 'Cosmetic Dentistry',
        description: 'Enhance your appearance with veneers, bonding, and contouring.',
        details: 'Transform the aesthetic of your smile. From porcelain veneers that correct shape and color to composite bonding for quick fixes, we blend art and science to create the perfect dental symmetry unique to your face.',
        icon: <Tablets className="text-primary-500" size={32} />,
        image: '/images/services/cosmetic.png',
        benefits: ['Improved Aesthetics', 'Youthful Appearance', 'Confidence Boost', 'Quick Results']
    },
    {
        title: 'Teeth Whitening',
        description: 'Brighten your smile with our advanced laser whitening technology.',
        details: 'Get a noticeably whiter smile in just one session. Our in-office whitening system is safe for enamel and uses professional-grade agents activated by special light to remove years of coffee, tea, and tobacco stains.',
        icon: <Zap className="text-secondary-500" size={32} />,
        image: '/images/services/whitening.png',
        benefits: ['Instant 5-8 Shade Improvement', 'Enamel Safe', 'Reduced Sensitivity', 'Self-Confidence']
    },
    {
        title: 'Smile Makeover',
        description: 'Complete transformation of your smile tailored to your facial features.',
        details: 'A comprehensive approach to achieving your dream smile. We analyze your facial symmetry, gum line, and tooth proportions to design a multi-step plan that may include whitening, implants, and orthodontics for a total revival.',
        icon: <UserRound className="text-primary-500" size={32} />,
        image: '/images/services/makeover.png',
        benefits: ['Facial Harmony', 'Functional Correction', 'Lifetime Value', 'Stunning Visuals']
    },
    {
        title: 'Tooth Extraction',
        description: 'Gentle and safe removal of damaged or wisdom teeth.',
        details: 'When a tooth is beyond repair or causing crowding, extraction is the safest path. We specialize in surgical and simple extractions, including wisdom tooth removal, prioritizing minimal discomfort and rapid recovery.',
        icon: <ShieldCheck className="text-secondary-500" size={32} />,
        image: '/images/services/extraction.png',
        benefits: ['Oral Health Stability', 'Crowding Resolution', 'Pain Prevention', 'Safe Wisdom Removal']
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="services" className="bg-white py-24 relative overflow-hidden">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary-600 font-bold uppercase tracking-widest text-sm"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4"
                    >
                        Comprehensive Dental Services
                    </motion.h2>
                    <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
                        We offer a wide range of specialized dental treatments using the latest technology to ensure the best results for our patients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                initial: { delay: index * 0.1 },
                                hover: { type: 'spring', stiffness: 300, damping: 20 }
                            }}
                            whileHover={{ y: -12, scale: 1.02 }}
                            onClick={() => setSelectedService(service)}
                            className="p-8 rounded-[40px] bg-white border border-slate-100/50 hover:border-white shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:ring-1 hover:ring-slate-100 transition-all duration-300 ease-out group cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">
                                {service.description}
                            </p>
                            <button className="text-primary-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all pointer-events-none">
                                Learn More <CircleCheck size={16} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Dashboard Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-primary-500 hover:scale-110 transition-all"
                            >
                                <X size={20} />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                                <div className="flex items-center gap-3 mb-6 bg-primary-50 px-4 py-2 rounded-full w-fit">
                                    {selectedService.icon}
                                    <span className="text-primary-600 font-bold text-xs uppercase tracking-widest">Premium Service</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-6">{selectedService.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    {selectedService.details}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Service Benefits</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {selectedService.benefits.map((benefit) => (
                                            <div key={benefit} className="flex items-center gap-2 text-slate-600 text-sm">
                                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0" />
                                                {benefit}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#appointment"
                                        onClick={() => setSelectedService(null)}
                                        className="btn-primary py-3 px-8 text-center flex items-center justify-center gap-2"
                                    >
                                        Book Now <ArrowRight size={18} />
                                    </a>
                                    <a
                                        href={`https://wa.me/917989474163?text=${encodeURIComponent(`Hi, I'm interested in the ${selectedService?.title} service at Advance Dental Care. Could you please provide more details?`)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-secondary group relative py-3 px-10 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:scale-105 active:scale-95"
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        <span className="relative z-10 flex items-center gap-2">
                                            Inquiry
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    rotate: [0, 5, -5, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                <Sparkles size={16} className="text-primary-500" />
                                            </motion.div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
