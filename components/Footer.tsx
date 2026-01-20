import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
    onNavigate: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-20 mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Discover the new standard in fashion.
            </h2>
             <button 
                onClick={onNavigate}
                className="inline-flex items-center gap-4 text-xl border-b border-white/30 pb-1 hover:border-white transition-colors hover:gap-6 duration-300"
            >
                Browse All Brands
                <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col gap-4 text-right">
             <div className="text-sm font-mono text-white/50 uppercase tracking-widest">[Socials]</div>
             <a href="#" className="hover:text-white/70 transition-colors">Instagram</a>
             <a href="#" className="hover:text-white/70 transition-colors">Twitter</a>
             <a href="#" className="hover:text-white/70 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between text-sm text-white/40 font-mono">
            <div className="flex gap-8 mb-4 md:mb-0">
                <span>© 2024 ATELIER Studio</span>
                <span>Privacy Policy</span>
                <span>Terms of Use</span>
            </div>
            <div>
                Designed with clarity.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
