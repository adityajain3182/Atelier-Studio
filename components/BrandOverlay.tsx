import React, { useEffect, useState } from 'react';
import { Brand } from '../types';
import { X, Globe, ArrowRight } from 'lucide-react';

interface BrandOverlayProps {
  brand: Brand | null;
  onClose: () => void;
  onExplore: (brand: Brand) => void;
}

const BrandOverlay: React.FC<BrandOverlayProps> = ({ brand, onClose, onExplore }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (brand) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [brand]);

  if (!brand) return null;

  const handleExplore = () => {
      onExplore(brand);
      onClose();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        isVisible ? 'bg-black/40 backdrop-blur-md opacity-100' : 'bg-transparent opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-studio-bg w-full h-full md:h-[90vh] md:w-[90vw] md:max-w-6xl md:rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-transform duration-500 ease-out ${
          isVisible ? 'translate-y-0 scale-100' : 'translate-y-20 scale-95'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden bg-white/80 p-2 rounded-full backdrop-blur-sm"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Side: Visuals */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-full bg-gray-100 relative group overflow-hidden">
             {/* Gallery Grid for visual interest */}
             <div className="grid grid-cols-2 h-full">
                <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                <div className="flex flex-col h-full">
                    {brand.gallery.slice(0, 2).map((img, i) => (
                        <img key={i} src={img} alt="Detail" className="w-full h-1/2 object-cover border-b border-white/10 last:border-0" />
                    ))}
                </div>
             </div>
             <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-between relative bg-[#f5f5f7]">
          {/* Close Button Desktop */}
          <button 
            onClick={onClose}
            className="hidden md:flex absolute top-8 right-8 p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div>
            <div className="border-b border-black/10 pb-6 mb-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">{brand.name}</h2>
                <div className="flex items-center gap-4 text-sm font-mono text-studio-gray uppercase tracking-widest">
                    <span>{brand.origin}</span>
                    <span>—</span>
                    <span>EST. {brand.established}</span>
                </div>
            </div>

            <div className="space-y-8">
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-studio-black">About the Brand</h3>
                    <p className="text-lg md:text-xl text-studio-black/80 leading-relaxed">
                    {brand.fullDescription}
                    </p>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-3 text-studio-black">Expertise</h3>
                    <ul className="grid grid-cols-2 gap-2">
                        {brand.categories.map((cat, i) => (
                            <li key={i} className="border-b border-black/10 py-2 text-studio-black/70 flex justify-between">
                                <span>{cat}</span>
                                <span className="opacity-30">0{i+1}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleExplore}
              className="flex-1 bg-black text-white px-8 py-4 text-center font-medium hover:bg-black/90 transition-colors flex items-center justify-center gap-2 group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href={brand.website} 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 border border-black/10 bg-white text-black px-8 py-4 text-center font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              Visit Website
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOverlay;
