import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Award, X, Sparkles, UserCheck, ArrowRight } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Sudharsan',
        qualification: 'BDS, MDS (Oral & Maxillofacial Surgery)',
        specialization: 'Implantologist & Dental Surgeon',
        experience: '12+ Years',
        image: '/images/dr_sudharsan.jpg',
        description: 'Specializes in advanced dental implants and oral surgery with a commitment to pain-free treatments.',
        role: 'Founder & Senior Surgeon'
    },
    {
        name: 'Dr. Rajesh Kumar',
        qualification: 'BDS, MDS (Endodontics)',
        specialization: 'Root Canal Specialist',
        experience: '10+ Years',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
        description: 'Expert in pain-free root canal treatments and restorative dentistry.',
        role: 'HOD Endodontics'
    },
    {
        name: 'Dr. Simran Preet',
        qualification: 'BDS',
        specialization: 'Cosmetic Dentist',
        experience: '8+ Years',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
        description: 'Dedicated to creating beautiful smiles through veneers and whitening procedures.',
        role: 'Aesthetic Specialist'
    },
];

const allStaff = [
    ...doctors,
    {
        name: 'Simarjit Kaur',
        specialization: 'Senior Dental Assistant',
        experience: '6 Years',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400',
        role: 'Support Staff'
    },
    {
        name: 'Manpreet Singh',
        specialization: 'Patient Care Coordinator',
        experience: '5 Years',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
        role: 'Administration'
    },
    {
        name: 'Dr. Anjali Sharma',
        specialization: 'Junior Associate',
        experience: '3 Years',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
        role: 'General Dentistry'
    },
    {
        name: 'Priya Verma',
        specialization: 'Infection Control Lead',
        experience: '4 Years',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
        role: 'Clinical Support'
    }
];

const Doctors = () => {
    const [showStaffModal, setShowStaffModal] = useState(false);

    return (
        <section id="doctors" className="py-24 bg-white">
            <div className="section-padding">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary-600 font-bold uppercase tracking-widest text-sm"
                        >
                            Meet Our Experts
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4"
                        >
                            World-Class Care from Specialized Doctors
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="hidden md:block"
                    >
                        <button
                            onClick={() => setShowStaffModal(true)}
                            className="group relative px-10 py-4 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(56,189,248,0.4)] active:scale-95 bg-white"
                        >
                            {/* Animated Background Polish */}
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white transition-opacity duration-300" />

                            {/* Vivid Gradient Border */}
                            <div className="absolute inset-0 p-[2.5px] rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 opacity-70 group-hover:opacity-100 transition-opacity">
                                <div className="absolute inset-0 bg-white rounded-full" />
                            </div>

                            {/* Button Content */}
                            <div className="relative flex items-center gap-2 text-slate-800 font-bold tracking-wider">
                                <span className="text-sm">Explore Our Experts</span>
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 15, -15, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Sparkles size={18} className="text-primary-500 group-hover:text-secondary-500 transition-colors" />
                                </motion.div>
                            </div>

                            {/* Hover Inner Accent */}
                            <div className="absolute inset-0 bg-primary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {doctors.map((doc, index) => (
                        <motion.div
                            key={doc.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative mb-6 rounded-[32px] overflow-hidden aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors pointer-events-auto cursor-pointer">
                                            <Linkedin size={20} className="text-white" />
                                        </div>
                                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors pointer-events-auto cursor-pointer">
                                            <Mail size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-widest mb-2">
                                <Award size={14} />
                                <span>{doc.experience} Experience</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                            <p className="text-primary-500 font-semibold text-sm mb-4">{doc.specialization}</p>
                            <p className="text-slate-500 text-sm leading-relaxed italic">{doc.description}</p>
                        </motion.div>
                    ))}
                    <div className="md:hidden mt-8 text-center">
                        <button
                            onClick={() => setShowStaffModal(true)}
                            className="w-full relative px-8 py-4 rounded-2xl overflow-hidden bg-slate-900 text-white font-bold group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Meet the Full Team <Sparkles size={18} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Staff Showcase Modal */}
                <AnimatePresence>
                    {showStaffModal && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowStaffModal(false)}
                                className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-6xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                {/* Modal Header */}
                                <div className="p-8 md:p-12 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                                    <div>
                                        <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-widest mb-1">
                                            <UserCheck size={14} />
                                            <span>Our Professional Family</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Meet Our Dedicated Team</h3>
                                    </div>
                                    <button
                                        onClick={() => setShowStaffModal(false)}
                                        className="w-12 h-12 bg-white hover:bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all shadow-sm border border-slate-200"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>
                                {/* Modal Content - Staff Grid */}
                                <div className="flex-1 overflow-y-auto p-8 md:p-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {allStaff.map((staff, i) => (
                                            <motion.div
                                                key={staff.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.05 }}
                                                whileHover="pop"
                                                className="group relative cursor-pointer"
                                            >
                                                <motion.div
                                                    variants={{
                                                        pop: {
                                                            scale: 1.05,
                                                            y: -5,
                                                            transition: { type: "spring", stiffness: 400, damping: 15 }
                                                        }
                                                    }}
                                                    className="relative mb-4 rounded-3xl overflow-hidden aspect-square shadow-lg group-hover:shadow-primary-500/20"
                                                >
                                                    <img
                                                        src={staff.image}
                                                        alt={staff.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </motion.div>

                                                <motion.div
                                                    variants={{
                                                        pop: { x: 5 }
                                                    }}
                                                >
                                                    <span className="text-primary-500 font-bold text-[10px] uppercase tracking-wider block mb-1">{staff.role}</span>
                                                    <h4 className="text-slate-900 font-bold text-lg leading-tight mb-1">{staff.name}</h4>
                                                    <p className="text-slate-500 text-xs italic">{staff.specialization}</p>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Integrated Join Section (Moved for visibility) */}
                                    <div className="mt-20 pt-20 border-t border-slate-100 text-center relative">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
                                            <Sparkles size={12} className="animate-pulse" />
                                            <span>We're Hiring</span>
                                        </div>
                                        <h4 className="text-3xl font-bold text-slate-900 mb-3">Join Our Expert Team</h4>
                                        <p className="text-slate-500 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
                                            We're always looking for passionate dentists, coordinators, and assistants to join our world-class medical family.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                                            {[
                                                { step: '01', title: 'Connect', desc: 'Reach out via WhatsApp or Email' },
                                                { step: '02', title: 'Share', desc: 'Send your Bio/CV and Portfolio' },
                                                { step: '03', title: 'Interview', desc: 'Schedule a clinical discussion' }
                                            ].map((item, idx) => (
                                                <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-3xl group/step hover:bg-primary-50 hover:border-primary-100 transition-all">
                                                    <div className="text-xl font-bold text-primary-500 mb-2 group-hover/step:scale-110 transition-transform">{item.step}</div>
                                                    <div className="text-slate-900 font-bold mb-1">{item.title}</div>
                                                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                                            <a
                                                href="https://wa.me/917989474163?text=Hi%2C%20I'm%20interested%20in%20joining%20the%20expert%20medical%20team%20at%20Advance%20Dental%20Care."
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full sm:w-auto px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-primary-600 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl group"
                                            >
                                                <span>Apply via WhatsApp</span>
                                                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                                            </a>
                                        </div>

                                        <div className="mb-12">
                                            <a
                                                href="mailto:savaraenosh1@gmail.com"
                                                className="text-slate-400 text-xs font-medium hover:text-primary-600 transition-colors border-b border-slate-200 hover:border-primary-600 pb-0.5"
                                            >
                                                Or email your resume to savaraenosh1@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div >
        </section >
    );
};

export default Doctors;
