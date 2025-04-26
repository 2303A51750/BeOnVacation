
import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'all' ? 'bg-travel-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('all')}
          >
            All Packages
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'International' ? 'bg-travel-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('International')}
          >
            International
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'Domestic' ? 'bg-travel-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('Domestic')}
          >
            Domestic
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-colors ${activeCategory === 'Special' ? 'bg-travel-blue text-white' : 'bg-white text-gray-700 hover:bg-gray-200'}`}
            onClick={() => setActiveCategory('Special')}
          >
            Special Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
