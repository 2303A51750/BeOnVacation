
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import CTASection from '../components/contact/CTASection';

const Contact = () => {
  const whatsappMessage = encodeURIComponent('Hi! I would like to know more about your travel packages.');
  const whatsappLink = `https://wa.me/919392562226?text=${whatsappMessage}`;
  const instagramLink = 'https://www.instagram.com/beonvacation/';
  const mapLink = 'https://maps.app.goo.gl/pXjaUPzrU3S3tYJi6?g_st=com.google.maps.preview.copy';

  return (
    <>
      <Navbar />
      <Hero 
        title="Contact Us"
        subtitle="Get in touch with our travel experts and start planning your dream vacation."
        image="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo 
              whatsappLink={whatsappLink}
              instagramLink={instagramLink}
              mapLink={mapLink}
            />
            <ContactForm />
          </div>
        </div>
      </section>

      <MapSection mapLink={mapLink} />
      <CTASection whatsappLink={whatsappLink} />
      <Footer />
    </>
  );
};

export default Contact;
