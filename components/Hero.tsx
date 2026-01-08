
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Logo style elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
          alt="Futuristic Tech" 
          className="w-full h-full object-cover"
        />
        {/* Animated Particles effect simplified with CSS */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50" />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-950/20 backdrop-blur-sm text-blue-400 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
          Project V1.0-Initial-Ready
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-400 leading-tight">
          BOOTSTRAP <br/> <span className="text-blue-500">PROTOCOL</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
          The simulation is collapsing. Humanity is a glitch. <br className="hidden md:block"/> 
          Enter the matrix and <span className="text-blue-400 font-medium">rewrite the foundation</span> of existence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-600/20 uppercase tracking-widest text-sm">
            Begin Calibration
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg transition-all border border-white/10 backdrop-blur-sm uppercase tracking-widest text-sm">
            View Protocol
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
