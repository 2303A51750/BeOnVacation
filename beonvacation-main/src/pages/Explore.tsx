
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CategoryFilter from '../components/explore/CategoryFilter';
import PackageGrid from '../components/explore/PackageGrid';
import { travelPackages } from '../data/travelPackages';

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter packages based on active category
  const filteredPackages = activeCategory === 'all' 
    ? travelPackages 
    : travelPackages.filter(pkg => pkg.category === activeCategory);

  return (
    <>
      <Navbar />
      <Hero 
        title="Explore Destinations"
        subtitle="Discover amazing travel packages across India and around the world."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
      />
      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <PackageGrid 
        packages={filteredPackages} 
        activeCategory={activeCategory} 
      />
      <Footer />
    </>
  );
};

export default Explore;
