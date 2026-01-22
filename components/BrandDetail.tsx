import React, { useEffect } from 'react';
import { Brand } from '../types';
import { ArrowLeft, Globe, ShoppingBag } from 'lucide-react';

interface BrandDetailProps {
  brand: Brand;
  onBack: () => void;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ brand, onBack }) => {
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brand]);

  return (
    <div className="pt-24 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-medium text-studio-gray hover:text-studio-black transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Directory
        </button>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
            <div className="lg:w-1/2">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]">
                    {brand.name}
                </h1>
                <div className="flex items-center gap-4 text-sm font-mono text-studio-gray uppercase tracking-widest mb-8">
                    <span>{brand.origin}</span>
                    <span>/</span>
                    <span>EST. {brand.established}</span>
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-studio-black/90 mb-8 max-w-xl">
                    {brand.fullDescription}
                </p>
                <a 
                    href={brand.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border-b border-black pb-1 hover:opacity-60 transition-opacity"
                >
                    Visit Official Website <Globe className="w-4 h-4" />
                </a>
            </div>
            
            <div className="lg:w-1/2 h-[60vh] lg:h-auto bg-gray-100 overflow-hidden relative">
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 text-xs font-mono uppercase">
                    Campaign 2024
                </div>
            </div>
        </div>

        {/* Design Philosophy / Context */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 border-t border-black/10 pt-8">
            <div className="md:col-span-4">
                <h3 className="text-sm font-bold uppercase tracking-wide mb-2">Design Philosophy</h3>
            </div>
            <div className="md:col-span-8">
                <p className="text-lg text-studio-gray leading-relaxed">
                    "{brand.tagline} We believe in creating garments that serve a purpose beyond mere aesthetics. 
                    Every stitch is intentional, every fabric selected for its tactile quality and longevity."
                </p>
            </div>
        </div>

        {/* Product Grid */}
        <div className="mb-32">
            <div className="flex items-end justify-between mb-12">
                <h2 className="text-4xl font-bold tracking-tight">Current Collection</h2>
                <span className="text-studio-gray font-mono text-sm">[ {brand.products.length} Items ]</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
                {brand.products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-6 overflow-hidden bg-studio-bg">
                            {/* Horizontal Scroll Container */}
                             <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth">
                                {product.images.map((img, i) => (
                                    <div key={i} className="min-w-full h-full snap-center relative overflow-hidden">
                                         <img 
                                            src={img} 
                                            alt={`${product.name} - View ${i + 1}`} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            draggable="false"
                                        />
                                    </div>
                                ))}
                             </div>

                            <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 font-medium z-10">
                                <ShoppingBag className="w-4 h-4" />
                                Purchase — {product.price}
                            </button>
                            
                            {/* Scroll hint indicators */}
                            {product.images.length > 1 && (
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    {product.images.map((_, i) => (
                                        <div key={i} className="w-1 h-1 rounded-full bg-white/80"></div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-lg font-bold leading-tight">{product.name}</h3>
                            <div className="flex justify-between items-baseline">
                                <p className="text-sm text-studio-gray leading-snug max-w-[80%]">{product.description}</p>
                                <span className="text-sm font-mono text-studio-black">{product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default BrandDetail;