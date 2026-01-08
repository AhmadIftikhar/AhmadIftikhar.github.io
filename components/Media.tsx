
import React from 'react';

const Media: React.FC = () => {
  const mediaItems = [
    { type: 'image', url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800', title: 'District Zero' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800', title: 'Core Processor' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800', title: 'Firewall Infiltration' },
    { type: 'image', url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=800', title: 'Data Stream' },
  ];

  return (
    <section id="media" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-black uppercase mb-4">Archives & Visuals</h2>
          <p className="text-gray-500">Glimpses into the fragmented reality of the Protocol.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, idx) => (
            <div key={idx} className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 cursor-pointer">
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-blue-400 text-xs font-mono font-bold mb-1">IMAGE_REC::{idx + 1}</span>
                <span className="text-white font-bold">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 group-hover:bg-black/20 transition-all cursor-pointer">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-600/40 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                <path d="M3 22V2L21 12L3 22Z" />
              </svg>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600" 
            alt="Trailer Background" 
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute bottom-6 left-6 z-20">
            <h3 className="text-white font-bold text-xl drop-shadow-lg uppercase tracking-wider">Announcement Trailer</h3>
            <p className="text-gray-300 text-sm drop-shadow-lg">Coming soon to all major platforms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
