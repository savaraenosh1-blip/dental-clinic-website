import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

const Location = () => {
    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="section-padding">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-primary-600 font-bold uppercase tracking-widest text-sm">Where To Find Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 leading-tight">
                            Visit Our Modern <span className="text-primary-500">Facility</span> in Rupnagar
                        </h2>
                        <p className="text-slate-500 mt-6 text-lg">
                            We are conveniently located in the heart of Rupnagar, easily accessible from all parts of the city.
                        </p>

                        <div className="mt-10 space-y-8">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary-500 shrink-0">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-xl">Address</h4>
                                    <p className="text-slate-500 mt-1 max-w-xs italic">
                                        Book Market, Giani Zail Singh Nagar, Rupnagar, Punjab 140001
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-secondary-500 shrink-0">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-xl">Phone</h4>
                                    <p className="text-slate-500 mt-1">7989474163</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.google.com/maps/place/Advance+Dental+Care+Orthodontic+%26+Implant+Centre/@30.9761944,76.5252733,17z/data=!3m1!4b1!4m6!3m5!1s0x390554383a623f2d:0x6b1cc7184c34dc75!8m2!3d30.9761944!4d76.5278482!16s%2Fg%2F11b8262mpy"
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary flex items-center justify-center gap-2 group"
                            >
                                <span>Get Directions</span>
                                <Navigation size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#gallery"
                                className="btn-secondary flex items-center justify-center gap-2 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:border-primary-400"
                            >
                                <span className="relative z-10">View Gallery</span>
                                <ExternalLink size={18} className="relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />

                                {/* Hover Glow Layer */}
                                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-slate-200"
                    >
                        {/* Embedded Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.2573656910673!2d76.5252733!3d30.9761944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390554383a623f2d%3A0x6b1cc7184c34dc75!2sAdvance%20Dental%20Care%20Orthodontic%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1709772837316!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
