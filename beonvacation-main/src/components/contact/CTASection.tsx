
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface CTASectionProps {
  whatsappLink: string;
}

const CTASection = ({ whatsappLink }: CTASectionProps) => {
  return (
    <section className="bg-travel-ocean text-white py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Connect with us via WhatsApp for instant responses to your travel queries.</p>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-whatsapp inline-flex items-center justify-center text-lg px-6 py-3"
        >
          <MessageSquare size={24} className="mr-2" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
