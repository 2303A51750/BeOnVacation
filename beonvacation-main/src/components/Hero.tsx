
import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
}

const Hero = ({ title, subtitle, image, buttonText, buttonLink }: HeroProps) => {
  return (
    <div 
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center text-white" 
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})` }}
    >
      <div className="container-custom text-center z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">{subtitle}</p>}
        {buttonText && buttonLink && (
          <Link to={buttonLink} className="btn-primary text-lg px-6 py-3">
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
