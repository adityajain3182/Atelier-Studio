import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'index') => void;
  currentView: 'home' | 'index';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-studio-bg/80 backdrop-blur-md border-b border-black/5 transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        >
          ATELIER<span className="font-light">studio</span>
        </button>

        <nav className="flex items-center gap-8">
          <button 
            onClick={() => onNavigate('home')}
            className={`text-sm font-medium transition-colors ${currentView === 'home' ? 'text-black' : 'text-studio-gray hover:text-black'}`}
          >
            Curated
          </button>
          <button 
            onClick={() => onNavigate('index')}
            className={`text-sm font-medium transition-colors ${currentView === 'index' ? 'text-black' : 'text-studio-gray hover:text-black'}`}
          >
            Index
          </button>
          <button className="md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
