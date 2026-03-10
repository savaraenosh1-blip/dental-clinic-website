import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Phone, Mail, User, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const AppointmentBooking = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        treatment: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS Parameters
        const templateParams = {
            to_name: 'Management',
            from_name: formData.name,
            from_phone: formData.phone,
            appointment_date: startDate.toLocaleDateString(),
            treatment: formData.treatment || 'General Inquiry',
            message: formData.message || 'None',
            to_email: 'savaraenosh1@gmail.com',
            reply_to: 'savaraenosh1@gmail.com'
        };

        // Send background email (Silent)
        emailjs.send(
            'service_g027zmo',
            'template_nuz43ve',
            templateParams,
            'UzovSXqmQxJPNSV8Q'
        ).then((response) => {
            console.log('Background Email Sent', response.status);
        }).catch((err) => {
            // Keep error logging in console for your internal checks
            console.error('Email Error:', err);
        });

        setIsSubmitted(true);
    };

    const handleWhatsAppRedirect = () => {
        const whatsappMessage = `*New Appointment Request*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Date:* ${startDate.toLocaleDateString()}%0A` +
            `*Treatment:* ${formData.treatment || 'General Inquiry'}%0A` +
            `*Message:* ${formData.message || 'None'}`;

        const whatsappUrl = `https://wa.me/917989474163?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleReset = () => {
        setFormData({
            name: '',
            phone: '',
            treatment: '',
            message: ''
        });
        setStartDate(new Date());
        setIsSubmitted(false);
    };

    return (
        <section id="appointment" className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-[120px]" />
            </div>

            <div className="section-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-secondary-400 font-bold uppercase tracking-widest text-sm">Book Your Visit</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 leading-tight">
                            Ready to Transform Your <span className="text-primary-400">Smile?</span>
                        </h2>
                        <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                            Schedule your appointment online and our team will contact you shortly to confirm the most convenient time for your visit.
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Call us directly</div>
                                    <div className="text-white text-xl font-bold">7989474163</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary-400">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <div className="text-slate-400 text-sm">Email support</div>
                                    <div className="text-white text-xl font-bold">savaraenosh1@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Submission Successful!</h3>
                                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">Your appointment request has been sent silently in the background. We will contact you shortly.</p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={handleWhatsAppRedirect}
                                            className="btn-secondary flex items-center justify-center gap-2 group"
                                        >
                                            <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />
                                            Chat on WhatsApp
                                        </button>
                                        <button
                                            onClick={handleReset}
                                            className="btn-primary"
                                        >
                                            Go Back
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Full Name"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="Phone Number"
                                                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10" size={18} />
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800"
                                            placeholderText="Select Date"
                                        />
                                    </div>

                                    <select
                                        name="treatment"
                                        value={formData.treatment}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800 appearance-none"
                                    >
                                        <option value="">Select Treatment</option>
                                        <option value="Dental Implant">Dental Implant</option>
                                        <option value="Orthodontic Braces">Orthodontic Braces</option>
                                        <option value="Teeth Cleaning">Teeth Cleaning</option>
                                        <option value="Root Canal">Root Canal</option>
                                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                                    </select>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message (Optional)"
                                        rows="3"
                                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-slate-800"
                                    ></textarea>

                                    <button type="submit" className="w-full btn-primary py-5 flex items-center justify-center gap-2 group">
                                        <span>Submit Request</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBooking;
