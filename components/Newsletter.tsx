
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call and persist to localStorage
    setTimeout(() => {
      const subscribers = JSON.parse(localStorage.getItem('bp_subscribers') || '[]');
      const newSubscriber = {
        id: Date.now().toString(),
        email,
        timestamp: new Date().toISOString()
      };
      
      localStorage.setItem('bp_subscribers', JSON.stringify([...subscribers, newSubscriber]));
      
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section id="newsletter" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Stay Connected</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join the developer mailing list to receive exclusive dev-logs, beta invites, and launch notifications.
        </p>
        
        {status === 'success' ? (
          <div className="p-8 rounded-2xl bg-blue-900/10 border border-blue-500/30 inline-block animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-blue-400 text-3xl mb-2">✓</div>
            <h4 className="text-white font-bold text-xl mb-1">Registration Complete</h4>
            <p className="text-gray-400 text-sm">Your connection to the Protocol is established.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-4 text-xs font-bold text-blue-400 hover:text-white uppercase transition-colors"
            >
              Sign up another address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto group">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                required
                placeholder="Enter your email address"
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-all font-mono text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all uppercase tracking-widest text-sm shadow-xl shadow-blue-900/20 whitespace-nowrap"
              >
                {status === 'loading' ? 'Transmitting...' : 'Join Protocol'}
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-4 uppercase tracking-[0.1em]">
              By joining, you agree to our digital conduct terms and privacy parameters.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
