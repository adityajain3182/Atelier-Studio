import React from 'react';
import { Brand } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface BrandIndexProps {
  brands: Brand[];
  onSelectBrand: (brand: Brand) => void;
}

const BrandIndex: React.FC<BrandIndexProps> = ({ brands, onSelectBrand }) => {
  return (
    <section className="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-16 border-b border-black w-full pb-8">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">Index</h1>
      </div>

      <div className="grid grid-cols-1 gap-0">
        <div className="grid grid-cols-12 border-b border-black/10 pb-2 mb-4 text-xs font-mono uppercase tracking-widest text-studio-gray px-2">
            <div className="col-span-1">[#]</div>
            <div className="col-span-6 md:col-span-4">Brand Name</div>
            <div className="col-span-3 md:col-span-3 hidden md:block">Origin</div>
            <div className="col-span-3 md:col-span-3 hidden md:block">Category</div>
            <div className="col-span-5 md:col-span-1 text-right">Link</div>
        </div>

        {brands.map((brand, index) => (
          <div 
            key={brand.id}
            onClick={() => onSelectBrand(brand)}
            className="group grid grid-cols-12 py-6 border-b border-black/10 hover:bg-white transition-colors cursor-pointer items-center px-2"
          >
            <div className="col-span-1 font-mono text-sm text-studio-gray">[{String(index + 1).padStart(2, '0')}]</div>
            <div className="col-span-6 md:col-span-4 text-xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                {brand.name}
            </div>
            <div className="col-span-3 md:col-span-3 hidden md:block text-studio-gray font-medium">
                {brand.origin}
            </div>
            <div className="col-span-3 md:col-span-3 hidden md:block">
                 <div className="flex gap-2">
                    {brand.categories.slice(0, 2).map(c => (
                        <span key={c} className="text-xs border border-black/20 px-2 py-1 rounded-full">{c}</span>
                    ))}
                 </div>
            </div>
            <div className="col-span-5 md:col-span-1 flex justify-end">
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandIndex;
