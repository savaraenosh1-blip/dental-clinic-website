import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import SmileGallery from './components/SmileGallery';
import PatientReviews from './components/PatientReviews';
import AppointmentBooking from './components/AppointmentBooking';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Doctors />
        <PatientReviews />
        <SmileGallery />
        <AppointmentBooking />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
