import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandGrid from './components/BrandGrid';
import BrandOverlay from './components/BrandOverlay';
import BrandIndex from './components/BrandIndex';
import BrandDetail from './components/BrandDetail';
import ImpactStats from './components/ImpactStats';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { BRANDS } from './data';
import { Brand } from './types';

// Simple types for View State
type ViewState = 'home' | 'index' | 'brand-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedBrandForOverlay, setSelectedBrandForOverlay] = useState<Brand | null>(null);
  const [activeBrandDetail, setActiveBrandDetail] = useState<Brand | null>(null);

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Clear URL hash when going home
    if (view === 'home' || view === 'index') {
        window.history.pushState(null, '', window.location.pathname);
        setActiveBrandDetail(null);
    }
  };

  const handleOpenOverlay = (brand: Brand) => {
      setSelectedBrandForOverlay(brand);
  };

  const handleExploreBrand = (brand: Brand) => {
      setActiveBrandDetail(brand);
      setCurrentView('brand-detail');
      setSelectedBrandForOverlay(null); // Close overlay
      // Update URL hash to simulate dynamic routing
      window.history.pushState(null, '', `#brand/${brand.id}`);
  };

  // Handle URL hash changes for "routing"
  useEffect(() => {
      const handleHashChange = () => {
          const hash = window.location.hash;
          if (hash.startsWith('#brand/')) {
              const brandId = hash.replace('#brand/', '');
              const brand = BRANDS.find(b => b.id === brandId);
              if (brand) {
                  setActiveBrandDetail(brand);
                  setCurrentView('brand-detail');
                  setSelectedBrandForOverlay(null);
              }
          } else if (hash === '') {
              setCurrentView('home');
          }
      };

      window.addEventListener('popstate', handleHashChange);
      
      // Check on initial load
      handleHashChange();

      return () => window.removeEventListener('popstate', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-studio-bg text-studio-black font-sans selection:bg-black selection:text-white">
      <Header onNavigate={(view) => handleNavigate(view)} currentView={currentView === 'brand-detail' ? 'index' : currentView} />
      
      <main className="relative">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={() => handleNavigate('index')} />
            <BrandGrid 
              brands={BRANDS} 
              onSelectBrand={handleOpenOverlay} 
            />
            <ImpactStats />
            <FAQ />
          </>
        )}

        {currentView === 'index' && (
          <BrandIndex 
            brands={BRANDS} 
            onSelectBrand={handleOpenOverlay} 
          />
        )}

        {currentView === 'brand-detail' && activeBrandDetail && (
            <BrandDetail 
                brand={activeBrandDetail} 
                onBack={() => handleNavigate('home')} 
            />
        )}
      </main>

      <Footer onNavigate={() => handleNavigate('index')} />

      <BrandOverlay 
        brand={selectedBrandForOverlay} 
        onClose={() => setSelectedBrandForOverlay(null)} 
        onExplore={handleExploreBrand}
      />
    </div>
  );
};

export default App;