
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 Beaches in India You Must Visit',
      summary: 'Discover the most beautiful and serene beaches across India\'s vast coastline. From Goa\'s vibrant shores to Kerala\'s secluded coves, we explore the best sandy getaways for your next vacation.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'April 15, 2023',
    },
    {
      id: '2',
      title: 'Budget Travel Tips for Southeast Asia',
      summary: 'How to explore Southeast Asia without breaking the bank. Insider tips and tricks for affordable accommodation, transportation, food, and activities while experiencing the best of this diverse region.',
      image: 'https://images.unsplash.com/photo-1540329957110-119f56dc7e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'March 22, 2023',
    },
    {
      id: '3',
      title: 'Cultural Etiquette When Traveling Abroad',
      summary: 'Important customs and practices to be aware of when visiting different countries. Learn how to respect local traditions and avoid cultural faux pas during your international travels.',
      image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'February 10, 2023',
    },
    {
      id: '4',
      title: 'The Ultimate Guide to Ladakh',
      summary: 'Everything you need to know about planning a trip to Ladakh - when to visit, where to stay, what to pack, top attractions, and how to deal with high altitude.',
      image: 'https://images.unsplash.com/photo-1554219037-5cd920fdea96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'January 5, 2023',
    },
    {
      id: '5',
      title: 'Street Food Adventures in Delhi',
      summary: 'A culinary journey through the streets of Delhi, exploring the vibrant flavors, aromas, and stories behind the city\'s most iconic street food dishes.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'December 12, 2022',
    },
    {
      id: '6',
      title: 'Kerala: God\'s Own Country',
      summary: 'Discover the magic of Kerala - from the tranquil backwaters and lush tea plantations to vibrant cultural festivals and Ayurvedic wellness traditions.',
      image: 'https://images.unsplash.com/photo-1602767628693-d3f9bb7e8420?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'November 8, 2022',
    },
    {
      id: '7',
      title: 'How to Travel Sustainably in 2023',
      summary: 'Practical tips for reducing your environmental impact while traveling - from choosing eco-friendly accommodations to supporting local communities and minimizing waste.',
      image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'October 20, 2022',
    },
    {
      id: '8',
      title: 'The Hidden Gems of Northeast India',
      summary: 'Venture off the beaten path to discover the unexplored treasures of India\'s northeastern states - stunning landscapes, unique cultures, and unforgettable experiences.',
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'September 15, 2022',
    },
    {
      id: '9',
      title: 'Family-Friendly Destinations in India',
      summary: 'The best places to travel with children in India - featuring destinations with kid-friendly activities, comfortable accommodations, and memorable experiences for all ages.',
      image: 'https://images.unsplash.com/photo-1471400974796-1c823d00a96f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      date: 'August 3, 2022',
    },
  ];

  return (
    <>
      <Navbar />
      <Hero 
        title="Travel Blog"
        subtitle="Get inspired for your next adventure with our travel insights and tips."
        image="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(blog => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
