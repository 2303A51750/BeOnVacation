
import React from 'react';

interface MapSectionProps {
  mapLink: string;
}

const MapSection = ({ mapLink }: MapSectionProps) => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
        <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
          <iframe
            src={mapLink}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BeOnVacation Office Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
