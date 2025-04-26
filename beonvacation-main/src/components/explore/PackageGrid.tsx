
import React from 'react';
import PackageCard from '../PackageCard';
import { TravelPackage } from '@/data/travelPackages';

interface PackageGridProps {
  packages: TravelPackage[];
  activeCategory: string;
}

const PackageGrid = ({ packages, activeCategory }: PackageGridProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {activeCategory !== 'all' && (
          <h2 className="text-3xl font-bold mb-8 text-center">
            {activeCategory === 'International' && 'International Packages'}
            {activeCategory === 'Domestic' && 'Domestic Packages'}
            {activeCategory === 'Special' && 'Special Packages'}
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGrid;
