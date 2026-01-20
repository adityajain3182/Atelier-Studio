import React from 'react';

const ImpactStats: React.FC = () => {
  return (
    <section className="bg-studio-black text-white py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4 block">[ Our Impact ]</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-3xl text-white/90">
              Reshaping the fashion narrative through selective curation and transparent metrics.
            </h2>
          </div>
          <div className="text-right hidden md:block">
             <span className="text-xs font-mono text-white/30">Live Data — {new Date().getFullYear()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
            <div className="group">
                <div className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-white group-hover:text-white/80 transition-colors">
                    24+
                </div>
                <p className="text-sm font-mono uppercase tracking-widest text-white/50 border-l border-white/20 pl-4">
                    Partner Brands<br/>Onboarded
                </p>
            </div>

            <div className="group">
                <div className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-white group-hover:text-white/80 transition-colors">
                    118
                </div>
                <p className="text-sm font-mono uppercase tracking-widest text-white/50 border-l border-white/20 pl-4">
                    Styles Studied<br/>& Curated
                </p>
            </div>

            <div className="group">
                <div className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 text-white group-hover:text-white/80 transition-colors">
                    4.2k
                </div>
                <p className="text-sm font-mono uppercase tracking-widest text-white/50 border-l border-white/20 pl-4">
                    Visits<br/>Today
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;