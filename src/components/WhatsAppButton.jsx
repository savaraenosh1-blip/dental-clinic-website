import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "917989474163";
    const message = "Hello! I'd like to book an appointment with Advance Dental Care.";

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
