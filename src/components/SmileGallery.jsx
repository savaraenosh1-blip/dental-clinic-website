import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import implantsBefore from '../assets/gallery/implants_before.png';
import implantsAfter from '../assets/gallery/implants_after.png';
import whiteningBefore from '../assets/gallery/whitening_before.png';
import whiteningAfter from '../assets/gallery/whitening_after.png';
import orthoBefore from '../assets/gallery/ortho_before.png';
import orthoAfter from '../assets/gallery/ortho_after.png';

const cases = [
    {
        title: 'Dental Implants Restoration',
        before: implantsBefore,
        after: implantsAfter,
        description: 'Complete upper jaw restoration using all-on-4 implant technology.',
    },
    {
        title: 'Smile Whitening Transformation',
        before: whiteningBefore,
        after: whiteningAfter,
        description: 'Deep stain removal and laser whitening in a single session.',
    },
    {
        title: 'Orthodontic Alignment',
        before: orthoBefore,
        after: orthoAfter,
        description: '18-month clear braces treatment for bite correction.',
    },
];

const SmileGallery = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [sliderPos, setSliderPos] = useState(50);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(x, 0), 100));
    };

    return (
        <section id="gallery" className="py-12 md:py-24 bg-slate-50">
            <div className="section-padding">
                <div className="text-center mb-10 md:mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary-600 font-bold uppercase tracking-widest text-sm"
                    >
                        Smile Gallery
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-display font-bold text-slate-900 mt-2 md:mt-4"
                    >
                        Real Results, Real Smiles
                    </motion.h2>
                    <p className="text-slate-500 mt-4 md:mt-6 text-base md:text-lg max-w-2xl mx-auto">
                        Browse through our portfolio of successful dental transformations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Mobile Horizontal Tabs */}
                    <div className="lg:hidden flex overflow-x-auto pb-6 scrollbar-none gap-3 -mx-4 px-4 mask-fade-right">
                        {cases.map((item, i) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveTab(i)}
                                className={`whitespace-nowrap px-6 py-3 rounded-full font-bold text-sm transition-all border-2 shrink-0 ${activeTab === i
                                    ? 'bg-primary-500 border-primary-500 text-white shadow-lg'
                                    : 'bg-white border-slate-100 text-slate-600'
                                    }`}
                            >
                                {item.title.split(' ')[0]} {item.title.split(' ')[1]}
                            </button>
                        ))}
                    </div>

                    {/* Desktop Sidebar Tabs */}
                    <div className="hidden lg:block lg:col-span-4 space-y-4">
                        {cases.map((item, i) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveTab(i)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${activeTab === i
                                    ? 'bg-white border-primary-500 shadow-xl shadow-primary-500/10'
                                    : 'bg-transparent border-transparent hover:bg-white/50'
                                    }`}
                            >
                                <h4 className={`font-bold transition-colors ${activeTab === i ? 'text-primary-600' : 'text-slate-700'}`}>
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 text-sm mt-2 line-clamp-2 italic">{item.description}</p>
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-slate-200 cursor-col-resize select-none"
                            onMouseMove={handleMouseMove}
                            onTouchMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
                                setSliderPos(Math.min(Math.max(x, 0), 100));
                            }}
                        >
                            {/* After Image */}
                            <img
                                src={cases[activeTab].after}
                                alt="After"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Before Image (Clipped) */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                            >
                                <img
                                    src={cases[activeTab].before}
                                    alt="Before"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                    Before
                                </div>
                            </div>

                            <div className="absolute top-4 right-4 bg-primary-500 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                After
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                                style={{ left: `${sliderPos}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center">
                                    <div className="flex gap-1 text-primary-500">
                                        <ChevronLeft size={16} />
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmileGallery;
