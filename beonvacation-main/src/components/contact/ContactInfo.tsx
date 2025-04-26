
import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, Instagram } from 'lucide-react';

interface ContactInfoProps {
  whatsappLink: string;
  instagramLink: string;
  mapLink: string;
}

const ContactInfo = ({ whatsappLink, instagramLink, mapLink }: ContactInfoProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        Have questions about our travel packages or need assistance with planning your trip? Our team of travel experts is here to help you create the perfect vacation experience.
      </p>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={24} className="text-travel-blue mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">Our Offices</h3>
            <div className="text-gray-600">
              <p className="font-semibold mt-2">Corporate Office:</p>
              <p>Flat No 3405, The Empire</p>
              <p>Block C, Candeur 40</p>
              <p>Sri Rangapuram</p>
              <p>Miyapur - 500049</p>
              
              <p className="font-semibold mt-4">Branch Office:</p>
              <p>Ground Floor, ABK Mall</p>
              <p>Old Bus Depot Road</p>
              <p>Hanamkonda, Warangal - 506001</p>
            </div>
          </div>
        </div>

        <div className="flex items-start">
          <Phone size={24} className="text-travel-blue mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">Call to Book</h3>
            <p className="text-gray-600">
              <a href="tel:+919392562226" className="hover:text-travel-ocean transition-colors">+91 93925 62226</a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail size={24} className="text-travel-blue mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:info@beonvacation.in" className="hover:text-travel-ocean transition-colors">info@beonvacation.in</a>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <MessageSquare size={24} className="text-green-500 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold">WhatsApp</h3>
            <p className="text-gray-600">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">+91 93925 62226</a>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
        <div className="space-y-2 text-gray-600">
          <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition-colors">
            <Instagram size={20} />
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors">
            <MessageSquare size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
