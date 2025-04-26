
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

interface PackageCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
  category: string;
  price?: string; // Making price optional to maintain compatibility
}

const PackageCard = ({ id, title, description, duration, image, category, price }: PackageCardProps) => {
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in booking the ${title} package. Please provide more information.`);
  const whatsappLink = `https://wa.me/919392562226?text=${whatsappMessage}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow animate-hover">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-travel-coral text-white px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">{duration}</div>
            {price && <div className="text-travel-blue font-bold">{price}</div>}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1">
            <MessageSquare size={18} />
            <span>WhatsApp</span>
          </a>
          <a href="tel:+919392562226" className="btn-outline flex-1 flex items-center justify-center gap-2">
            <Phone size={18} />
            <span>Call to Book</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
