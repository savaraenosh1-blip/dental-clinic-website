import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: 'Amit Sharma',
        date: '2 months ago',
        rating: 5,
        text: 'Best dentist service in Rupnagar! I appreciate the patience and care during my root canal treatment. Dr. Kaur is highly professional.',
        avatar: 'AS',
    },
    {
        name: 'Priya Singh',
        date: '1 month ago',
        rating: 5,
        text: 'Very compassionate and caring atmosphere. The staff made me feel very comfortable throughout my orthodontic treatment.',
        avatar: 'PS',
    },
    {
        name: 'Gurpreet Singh',
        date: '3 weeks ago',
        rating: 5,
        text: 'Modern equipment and very clean clinic. The dental implants were done perfectly. Highly recommended for any dental issues.',
        avatar: 'GS',
    },
    {
        name: 'Rohan Mehta',
        date: '4 months ago',
        rating: 4,
        text: 'Professional staff and great results for teeth whitening. The process was explained well and I am happy with my new smile.',
        avatar: 'RM',
    },
];

const PatientReviews = () => {
    return (
        <section id="reviews" className="py-24 bg-white overflow-hidden">
            <div className="section-padding">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary-600 font-bold uppercase tracking-widest text-sm"
                        >
                            Testimonials
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mt-4 leading-tight"
                        >
                            What Our Patients Say About Us
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 flex items-center gap-6 shadow-xl shadow-slate-200/50"
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-slate-900">4.9</div>
                            <div className="flex text-yellow-500 mt-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                        </div>
                        <div className="h-12 w-[1px] bg-slate-200" />
                        <div>
                            <div className="font-bold text-slate-900">Google Rating</div>
                            <div className="text-sm text-slate-500 italic">Based on 500+ reviews</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:border-primary-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <Quote className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 transition-colors" size={48} />

                            <div className="flex text-yellow-500 mb-6">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>

                            <p className="text-slate-600 text-sm leading-relaxed mb-8 relative z-10 italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    {review.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">{review.name}</div>
                                    <div className="text-slate-400 text-xs">{review.date}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="https://www.google.com/maps/place/Advance+Dental+Care+Orthodontic+%26+Implant+Centre/@30.9761944,76.5252733,17z/data=!4m8!3m7!1s0x390554383a623f2d:0x6b1cc7184c34dc75!8m2!3d30.9761944!4d76.5278482!9m1!1b1!16s%2Fg%2F11b8262mpy?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-primary-600 font-bold border-b-2 border-primary-100 hover:border-primary-500 transition-all pb-1 hover:text-primary-700"
                    >
                        Read More on Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PatientReviews;
