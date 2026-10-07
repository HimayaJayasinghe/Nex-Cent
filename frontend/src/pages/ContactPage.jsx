import React from 'react';
import Header from '../Hero/Header';
import ContactSection from '../components/ContactSection';
import Footer from '../Unseen/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
