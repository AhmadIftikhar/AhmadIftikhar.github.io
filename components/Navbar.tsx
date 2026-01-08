
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Media', href: '#media' },
    { name: 'Newsletter', href: '#newsletter' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-gray-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">
            BOOTSTRAP<span className="text-blue-500">PROTOCOL</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-900/20">
            Play Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
