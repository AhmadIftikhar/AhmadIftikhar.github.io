
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Simulate feedback persistence
    const feedbackList = JSON.parse(localStorage.getItem('bp_feedback') || '[]');
    localStorage.setItem('bp_feedback', JSON.stringify([...feedbackList, { ...formData, timestamp: new Date().toISOString() }]));
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-white text-4xl font-black mb-6 uppercase">Contact Hub</h2>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Have questions or feedback? Our community liaisons are standing by to assist your integration into the Protocol.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">Comm-Channel</p>
                  <p className="text-white font-medium">comms@bootstrapprotocol.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">Physical Node</p>
                  <p className="text-white font-medium">Virtual Headquarters, Neo-Tokyo Node 4</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              {['Twitter', 'Discord', 'YouTube', 'Instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current" style={{ WebkitMask: `url(https://simpleicons.org/icons/${social.toLowerCase()}.svg) no-repeat center`, mask: `url(https://simpleicons.org/icons/${social.toLowerCase()}.svg) no-repeat center` }} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted</h3>
                <p className="text-gray-400">We will process your feedback and respond via secure channel shortly.</p>
                <button 
                  onClick={() => setSent(false)}
                  className="mt-8 text-blue-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Tell us what you think about the Protocol..."
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 resize-none"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.01] uppercase tracking-widest text-sm"
                >
                  Transmit Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
