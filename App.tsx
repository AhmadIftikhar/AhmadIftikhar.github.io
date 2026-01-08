
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Media from './components/Media';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import AdminDocView from './components/AdminDocView';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Media />
        <Newsletter />
        <Contact />
      </main>

      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-white font-black tracking-tighter uppercase italic text-lg mb-2">
              BOOTSTRAP<span className="text-blue-500">PROTOCOL</span>
            </h4>
            <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
              © 2025 PROTOCOL LABS. ALL CODE RESERVED.
            </p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">EULA</a>
          </div>
        </div>
      </footer>

      {/* Secret/Utility Admin View to see collected emails */}
      <AdminDocView />
    </div>
  );
};

export default App;
