import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] max-w-4xl">
          Curated<br />
          Fashion<br />
          Discovery
        </h1>
        
        <div className="max-w-sm mb-2">
          <p className="text-lg md:text-xl text-studio-black/80 font-medium leading-relaxed mb-8">
            Elevating your wardrobe with a hand-picked selection of avant-garde and sustainable brands. We bridge the gap between craftsmanship and your personal style.
          </p>
          <button 
            onClick={onNavigate}
            className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-none text-sm font-medium hover:bg-black/80 transition-all"
          >
            View Brand Index
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/10" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-xs font-mono uppercase tracking-widest text-studio-gray">
        <div>[01] Editorial</div>
        <div>[02] Curation</div>
        <div>[03] Connection</div>
        <div className="text-right">[2024]</div>
      </div>
    </section>
  );
};

export default Hero;
