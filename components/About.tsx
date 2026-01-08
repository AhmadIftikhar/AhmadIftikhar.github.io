
import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      title: "Real-time Recoding",
      desc: "Modify object properties on the fly to solve complex puzzles and navigate hazardous sectors.",
      icon: "⚡"
    },
    {
      title: "Neon Cyberpunk Aesthetic",
      desc: "Explore a dying digital world inspired by the core visual elements of the Bootstrap Protocol.",
      icon: "🌃"
    },
    {
      title: "Deterministic Stealth",
      desc: "Move through the shadows of the system's firewall without leaving a digital footprint.",
      icon: "👤"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-blue-500 font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">
              [ SYSTEM_OVERVIEW ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A World Built on <span className="text-blue-400">Broken Code</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              "Bootstrap Protocol" is a narrative-driven tactical action game set within the terminal layers of a collapsing megacity simulation. As a rogue 'Patch' entity, your mission is to infiltrate the core architecture and prevent the total erasure of humanity's digital consciousness.
            </p>
            
            <div className="space-y-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                  <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-sm leading-snug">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200" 
              alt="Game Visual" 
              className="rounded-2xl border border-white/10 shadow-2xl"
            />
            <div className="absolute bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 max-w-xs">
              <p className="text-xs font-mono text-blue-400">LOG_EXTRACT: sector_4.2.1</p>
              <p className="text-xs text-gray-400 mt-1 italic">"The light here doesn't follow physics. It follows logic... mostly."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
