import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const About = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      title: "Explore the World"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Discover New Places"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* About Us Slideshow */}
      <div className="relative w-full h-[60vh] min-h-[400px]">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` 
                  }}
                >
                  <div className="text-center text-white z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, BeOnVacation was born out of a passion for travel and a desire to help Indian travelers experience the best destinations both within India and around the world.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small operation in New Delhi has grown into a trusted travel agency serving thousands of happy customers across India. Our team of experienced travel enthusiasts is dedicated to creating personalized travel experiences that cater to your unique preferences and budget.
              </p>
              <p className="text-gray-600">
                At BeOnVacation, we believe that travel is more than just visiting new places—it's about creating memories that last a lifetime. Our goal is to make the process of planning and booking your dream vacation as seamless and enjoyable as possible.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Travel Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To provide exceptional travel experiences that inspire, educate, and connect people with the world's diverse cultures and landscapes, while ensuring value, safety, and personalized service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">We are committed to delivering high-quality travel experiences that exceed our customers' expectations.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">We constantly seek new and exciting destinations, experiences, and technologies to enhance our service.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
                <p className="text-gray-600">We prioritize our customers' needs and provide personalized support throughout their travel journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get to know the visionary behind BeOnVacation.</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6 rounded-full overflow-hidden h-48 w-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Bura Laxman" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold">Bura Laxman</h3>
              <p className="text-travel-blue text-lg mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                With a passion for travel and years of experience in the tourism industry, 
                Bura Laxman founded BeOnVacation to help Indian travelers experience the 
                best destinations both within India and around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-travel-blue text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Next Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact our travel experts today and let us help you plan the vacation of your dreams.</p>
          <Link to="/contact" className="bg-white text-travel-blue hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
