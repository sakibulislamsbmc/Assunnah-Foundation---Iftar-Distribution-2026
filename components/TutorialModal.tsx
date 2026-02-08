
import React from 'react';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  const videoUrl = "https://youtu.be/mA8hFEQNIik?si=HGo7uzug6P3ZzcWH";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-emerald-100">
        {/* Header */}
        <div className="p-8 border-b border-emerald-50 flex justify-between items-center bg-[#f8fafc]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#064d3b] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div>
              <span className="text-[#064d3b] font-black tracking-widest uppercase text-[0.6rem] mb-1 block">Tutorial / টিউটোরিয়াল</span>
              <h3 className="text-2xl font-black text-[#064d3b]">প্রকল্প গাইডলাইন ভিডিও</h3>
              <p className="text-slate-500 font-bold text-sm">সরাসরি ইউটিউব মাধ্যম থেকে দেখুন</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        {/* Body */}
        <div className="p-10 text-center bg-slate-50">
          <div className="max-w-xl mx-auto py-10">
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <i className="fa-brands fa-youtube text-5xl"></i>
            </div>
            <h4 className="text-3xl font-black text-slate-900 mb-6">প্রশিক্ষণ ভিডিওটি প্লে করুন</h4>
            <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10">
              নিচে দেওয়া লিংকে ক্লিক করে সরাসরি ইউটিউব প্ল্যাটফর্মে প্রকল্পের পূর্ণাঙ্গ নির্দেশিকা ভিডিওটি দেখুন। এটি আপনাকে মাঠ পর্যায়ে দায়িত্ব পালনে সহায়তা করবে।
            </p>
            
            <a 
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 bg-red-600 text-white rounded-[2rem] font-black text-xl hover:bg-red-700 transition-all shadow-xl hover:shadow-red-600/20 transform hover:-translate-y-1 active:translate-y-0"
            >
              <i className="fa-solid fa-play"></i>
              <span>Watch on YouTube</span>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h5 className="font-black text-[#064d3b] mb-2 flex items-center justify-center gap-2">
                <i className="fa-solid fa-graduation-cap"></i>
                নির্দেশিকা
              </h5>
              <p className="text-xs text-slate-500 font-bold">ভিডিওতে সকল নিয়মাবলী বিস্তারিত আছে।</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h5 className="font-black text-[#064d3b] mb-2 flex items-center justify-center gap-2">
                <i className="fa-solid fa-clock"></i>
                সময়
              </h5>
              <p className="text-xs text-slate-500 font-bold">পুরো ভিডিওটি শেষ পর্যন্ত দেখুন।</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <h5 className="font-black text-[#064d3b] mb-2 flex items-center justify-center gap-2">
                <i className="fa-solid fa-circle-check"></i>
                সতর্কতা
              </h5>
              <p className="text-xs text-slate-500 font-bold">সঠিক নিয়মে বিতরণ নিশ্চিত করুন।</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-[#f8fafc] text-center">
          <p className="text-[#064d3b] font-black text-xs tracking-widest uppercase">
            Assunnah Foundation - Project 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
