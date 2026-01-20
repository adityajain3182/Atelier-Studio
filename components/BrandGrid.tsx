import React from 'react';
import { Brand } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BrandGridProps {
  brands: Brand[];
  onSelectBrand: (brand: Brand) => void;
}

const BrandGrid: React.FC<BrandGridProps> = ({ brands, onSelectBrand }) => {
  return (
    <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="mb-12 flex items-baseline justify-between">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Catalog</h2>
            <span className="hidden md:inline-block text-studio-gray font-mono text-xs uppercase">[ Selected Works ]</span>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
        {brands.map((brand, index) => (
          <div 
            key={brand.id} 
            className="group cursor-pointer flex flex-col gap-4"
            onClick={() => onSelectBrand(brand)}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden aspect-[4/5] bg-gray-200">
              <img 
                src={brand.image} 
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-2 border-t border-black/10 pt-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold tracking-tight">{brand.name}</h3>
                <span className="text-xs font-mono text-studio-gray">[{brand.established}]</span>
              </div>
              <p className="text-base text-studio-black/70 leading-snug max-w-[90%]">
                {brand.tagline}
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2">
                {brand.categories.map(cat => (
                    <span key={cat} className="text-[10px] uppercase tracking-widest border border-black/10 px-2 py-1 rounded-full text-studio-gray">
                        {cat}
                    </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 border-t border-black/10 pt-8 flex justify-between items-center">
         <span className="text-sm text-studio-gray">Displaying {brands.length} Brands</span>
      </div>
    </section>
  );
};

export default BrandGrid;
