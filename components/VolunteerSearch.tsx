import React, { useState, useMemo, useEffect } from 'react';
import { VOLUNTEERS, APP_LINKS } from '../constants.tsx';
import { Volunteer } from '../types.ts';

interface VolunteerSearchProps {
  forceDirectoryOpen?: boolean;
  onCloseDirectory?: () => void;
  onOpenDirectory?: () => void;
}

const VolunteerSearch: React.FC<VolunteerSearchProps> = ({ 
  forceDirectoryOpen = false, 
  onCloseDirectory, 
  onOpenDirectory 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false);

  // Sync internal state with prop if needed
  useEffect(() => {
    if (forceDirectoryOpen) {
      setIsLocalModalOpen(true);
    }
  }, [forceDirectoryOpen]);

  const handleClose = () => {
    setIsLocalModalOpen(false);
    if (onCloseDirectory) onCloseDirectory();
  };

  const handleOpen = () => {
    setIsLocalModalOpen(true);
    if (onOpenDirectory) onOpenDirectory();
  };

  // Filter for the spotlight view
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return VOLUNTEERS.filter(v => 
      v.name.toLowerCase().includes(term) ||
      v.district.toLowerCase().includes(term) ||
      v.upazila.toLowerCase().includes(term) ||
      v.spotCode.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const selectedVolunteer = searchResults.length > 0 ? searchResults[0] : null;

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="bg-[#064d3b] rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 opacity-15 islamic-pattern pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-[100px]"></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">স্থানীয় প্রতিনিধি অনুসন্ধান</h2>
            <div className="flex items-center justify-center space-x-3 text-emerald-50/80 mb-6">
              <i className="fa-solid fa-circle-info text-emerald-400"></i>
              <p className="font-medium text-lg">আপনার এলাকার প্রতিনিধির তথ্য দেখতে সার্চ বক্সটি ব্যবহার করুন</p>
            </div>
          </div>

          <div className="relative mb-14 max-w-2xl mx-auto group">
            <input 
              type="text" 
              placeholder="সার্চ করুন (নাম, জেলা বা স্পট কোড...)"
              className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white shadow-2xl border-0 focus:ring-8 focus:ring-emerald-500/30 outline-none transition-all text-xl font-bold text-slate-900 placeholder-slate-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2">
               <i className="fa-solid fa-search text-2xl text-emerald-600"></i>
            </div>
            
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-red-500 transition-colors"
              >
                <i className="fa-solid fa-circle-xmark text-xl"></i>
              </button>
            )}
          </div>

          <div className="min-h-[380px] flex items-center justify-center">
            {selectedVolunteer ? (
              <div className="w-full max-w-2xl bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden group float-animation">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                  <i className="fa-solid fa-mosque text-[12rem] rotate-12"></i>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-28 h-28 bg-[#064d3b] text-white rounded-[2rem] flex flex-col items-center justify-center shadow-xl border-4 border-emerald-50 transition-transform duration-500 group-hover:rotate-6">
                      <span className="text-[0.6rem] font-bold opacity-60 uppercase tracking-[0.2em]">SPOT CODE</span>
                      <span className="text-4xl font-black">{selectedVolunteer.spotCode}</span>
                    </div>
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                      {selectedVolunteer.name}
                    </h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                      <span className="bg-emerald-50 text-emerald-800 px-4 py-1.5 rounded-xl text-sm font-bold border border-emerald-100">
                        <i className="fa-solid fa-location-dot mr-2"></i>
                        {selectedVolunteer.district}
                      </span>
                      <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-xl text-sm font-medium border border-slate-100">
                        {selectedVolunteer.upazila}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <a 
                        href={`tel:${selectedVolunteer.mobile}`} 
                        className="flex items-center gap-3 px-8 py-4 bg-[#059669] text-white rounded-2xl font-black hover:bg-[#047857] transition-all shadow-lg hover:shadow-emerald-600/30 w-full sm:w-auto justify-center"
                      >
                        <i className="fa-solid fa-phone-volume"></i>
                        <span>{selectedVolunteer.mobile}</span>
                      </a>
                      <button className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900 transition-colors py-2 px-4 rounded-xl hover:bg-emerald-50">
                        <i className="fa-solid fa-map-marked-alt"></i>
                        <span>লোকেশন ম্যাপ দেখুন</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-10 transition-all duration-700">
                {searchTerm ? (
                  <div className="space-y-6 animate-pulse">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                      <i className="fa-solid fa-user-slash text-5xl text-emerald-200"></i>
                    </div>
                    <p className="text-2xl font-black text-white">দুঃখিত, কোনো তথ্য পাওয়া যায়নি</p>
                  </div>
                ) : (
                  <div className="space-y-6 opacity-60 group">
                    <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 group-hover:bg-white/10 transition-colors">
                      <i className="fa-solid fa-id-card text-5xl text-emerald-100"></i>
                    </div>
                    <p className="text-xl font-bold text-emerald-50 tracking-wide italic">সার্চ বক্সে প্রতিনিধির নাম বা কোড লিখুন</p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="mt-14 pt-10 border-t border-white/10 flex flex-col items-center">
            <button 
              onClick={handleOpen}
              className="group relative inline-flex items-center justify-center px-12 py-5 font-black text-[#064d3b] transition-all duration-300 bg-white rounded-3xl shadow-2xl hover:bg-emerald-50 transform hover:-translate-y-2 active:translate-y-0"
            >
              <i className="fa-solid fa-address-book mr-4 text-xl"></i>
              <span className="text-lg">প্রতিনিধি ডিরেক্টরি দেখুন (১০১-২৫৮)</span>
            </button>
            <p className="mt-6 text-emerald-100/40 text-sm font-medium">বগুড়া এবং শেরপুর সহ সকল প্রতিনিধির তথ্য দেখতে উপরের বাটনে ক্লিক করুন</p>
          </div>
        </div>
      </div>

      {isLocalModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-xl" onClick={handleClose}></div>
          
          <div className="relative w-full max-w-6xl h-full max-h-[90vh] bg-white rounded-[3rem] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-slate-200">
            <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#064d3b] text-white rounded-2xl flex items-center justify-center">
                   <i className="fa-solid fa-users-viewfinder"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">পূর্ণাঙ্গ প্রতিনিধি তালিকা ২০২৬</h3>
                  <p className="text-slate-500 font-medium text-sm">১০১ থেকে ২৫৮ পর্যন্ত সকল প্রতিনিধির ডিরেক্টরি</p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 md:p-10 custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-10 bg-[#064d3b] text-white shadow-md">
                  <tr>
                    <th className="px-6 py-5 first:rounded-l-2xl font-black uppercase text-xs tracking-widest">SPOT CODE</th>
                    <th className="px-6 py-5 font-black uppercase text-xs tracking-widest">প্রতিনিধির নাম</th>
                    <th className="px-6 py-5 font-black uppercase text-xs tracking-widest">মোবাইল</th>
                    <th className="px-6 py-5 font-black uppercase text-xs tracking-widest">জেলা</th>
                    <th className="px-6 py-5 last:rounded-r-2xl font-black uppercase text-xs tracking-widest">উপজেলা</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {VOLUNTEERS.map((v, idx) => (
                    <tr key={idx} className="hover:bg-emerald-50/50 transition-colors group">
                      <td className="px-6 py-5 font-black text-[#064d3b]">{v.spotCode}</td>
                      <td className="px-6 py-5 font-bold text-slate-900">{v.name}</td>
                      <td className="px-6 py-5">
                        <a href={`tel:${v.mobile}`} className="text-[#059669] font-black hover:underline">
                          <i className="fa-solid fa-phone mr-2 text-xs opacity-50"></i>
                          {v.mobile}
                        </a>
                      </td>
                      <td className="px-6 py-5 text-slate-700 font-bold">{v.district}</td>
                      <td className="px-6 py-5 text-slate-500 font-medium">{v.upazila}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-8 border-t border-slate-100 bg-slate-50 text-center">
              <a 
                href={APP_LINKS.VOLUNTEER_SHEET} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3 bg-[#064d3b] text-white rounded-2xl font-black hover:bg-[#053d2f] transition-all"
              >
                <i className="fa-solid fa-file-excel"></i>
                <span>গুগল শিটে বিস্তারিত দেখুন</span>
                <i className="fa-solid fa-external-link text-xs opacity-50 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #064d3b;
          border-radius: 10px;
          border: 3px solid #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default VolunteerSearch;