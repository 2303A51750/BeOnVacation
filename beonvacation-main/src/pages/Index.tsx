
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import BlogCard from '../components/BlogCard';
import { MessageSquare } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Index = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      title: "Discover Natural Beauty"
    },
    {
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      title: "Experience Adventure"
    },
    {
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      title: "Create Memories"
    }
  ];

  const featuredPackages = [
    {
      id: '1',
      title: 'Goa Beach Getaway',
      description: 'Enjoy the beaches, nightlife, and Portuguese culture in India\'s favorite holiday destination.',
      price: '₹12,999',
      duration: '4 Days / 3 Nights',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Domestic',
    },
    {
      id: '2',
      title: 'Kerala Backwaters',
      description: 'Experience the serene backwaters, lush greenery, and traditional houseboat stays in God\'s Own Country.',
      price: '₹15,499',
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1602767628693-d3f9bb7e8420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Domestic',
    },
    {
      id: '3',
      title: 'Thailand Adventure',
      description: 'Explore the stunning beaches, vibrant markets, and rich cultural heritage of Thailand.',
      price: '₹35,999',
      duration: '6 Days / 5 Nights',
      image: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'International',
    },
    {
      id: '4',
      title: 'Dubai Extravaganza',
      description: 'Experience luxury shopping, desert safaris, and futuristic architecture in the City of Gold.',
      price: '₹45,999',
      duration: '5 Days / 4 Nights',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'International',
    },
  ];

  const featuredBlogs = [
    {
      id: '1',
      title: 'Top 10 Beaches in India You Must Visit',
      summary: 'Discover the most beautiful and serene beaches across India\'s vast coastline.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'April 15, 2023',
    },
    {
      id: '2',
      title: 'Budget Travel Tips for Southeast Asia',
      summary: 'How to explore Southeast Asia without breaking the bank. Insider tips and tricks.',
      image: 'https://images.unsplash.com/photo-1540329957110-119f56dc7e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'March 22, 2023',
    },
    {
      id: '3',
      title: 'Cultural Etiquette When Traveling Abroad',
      summary: 'Important customs and practices to be aware of when visiting different countries.',
      image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'February 10, 2023',
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Homepage Slideshow */}
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

      {/* Featured Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="mb-4">Featured Travel Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Handpicked destinations to make your next vacation unforgettable.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map(pkg => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/explore" className="btn-primary inline-block">View All Packages</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="mb-4">Why Choose BeOnVacation?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We make travel easy, fun, and memorable.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-white card-shadow">
              <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 013.296-1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">We offer the best prices on all our travel packages with no hidden costs.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white card-shadow">
              <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Customized Packages</h3>
              <p className="text-gray-600">Tailor-made travel experiences designed to match your preferences and budget.</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white card-shadow">
              <div className="bg-travel-sky h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-travel-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">24/7 Support</h3>
              <p className="text-gray-600">Our travel experts are available round the clock to assist you during your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Blog */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="mb-4">Travel Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Get inspired for your next adventure with our travel insights and tips.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/blogs" className="btn-primary inline-block">Read More Articles</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-travel-ocean text-white py-16">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Contact our travel experts today and let us help you plan the vacation of your dreams.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-travel-ocean hover:bg-gray-100">Contact Us</Link>
            <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageSquare size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
