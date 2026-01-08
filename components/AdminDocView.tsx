
import React, { useState, useEffect } from 'react';
import { Subscriber } from '../types';

const AdminDocView: React.FC = () => {
  const [show, setShow] = useState(false);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bp_subscribers') || '[]');
    setSubscribers(data);
  }, [show]);

  const downloadCSV = () => {
    const headers = ['ID', 'Email', 'Timestamp'];
    const rows = subscribers.map(s => [s.id, s.email, s.timestamp]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "bootstrap_protocol_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={() => setShow(!show)}
        className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all shadow-2xl"
        title="Admin Subscriber View"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
      </button>

      {show && (
        <div className="absolute bottom-16 right-0 w-[90vw] max-w-md bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white font-bold uppercase tracking-wider">Subscriber Registry</h3>
            <button onClick={() => setShow(false)} className="text-gray-500 hover:text-white">✕</button>
          </div>
          
          <div className="max-h-60 overflow-y-auto space-y-2 mb-6 pr-2 custom-scrollbar">
            {subscribers.length === 0 ? (
              <p className="text-gray-600 text-sm italic">No data packets intercepted yet...</p>
            ) : (
              subscribers.map((s) => (
                <div key={s.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/5">
                  <span className="text-gray-300 text-sm font-mono">{s.email}</span>
                  <span className="text-[10px] text-gray-600">{new Date(s.timestamp).toLocaleDateString()}</span>
                </div>
              ))
            )}
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={downloadCSV}
              disabled={subscribers.length === 0}
              className="flex-grow bg-blue-600 hover:bg-blue-500 disabled:bg-gray-800 disabled:text-gray-600 text-white text-xs font-bold uppercase py-3 rounded-lg transition-all"
            >
              Export as CSV (Spreadsheet)
            </button>
            <button 
              onClick={() => { localStorage.removeItem('bp_subscribers'); setSubscribers([]); }}
              className="px-4 bg-red-900/20 hover:bg-red-900/40 text-red-400 text-xs rounded-lg transition-all"
              title="Purge Local Cache"
            >
              Purge
            </button>
          </div>
          <p className="mt-4 text-[10px] text-gray-500 leading-tight">
            Note: This view is for developer demonstration. Data is stored locally in your browser cache.
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminDocView;
