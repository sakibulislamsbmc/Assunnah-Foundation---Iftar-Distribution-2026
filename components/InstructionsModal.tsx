import React from 'react';
import { PROJECT_INSTRUCTIONS } from '../constants.tsx';

interface InstructionsModalProps {
  onClose: () => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-5xl h-full max-h-[92vh] bg-white rounded-[3rem] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-emerald-100">
        {/* Header */}
        <div className="p-8 border-b border-emerald-50 flex justify-between items-center bg-[#f8fafc]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#064d3b] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#064d3b]">প্রকল্প গাইডলাইন ২০২৬</h3>
              <p className="text-slate-500 font-bold text-sm">স্বেচ্ছাসেবকদের জন্য পূর্ণাঙ্গ নির্দেশিকা</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar space-y-10">
          <div className="bg-emerald-50/50 p-8 rounded-[2rem] border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <i className="fa-solid fa-mosque text-8xl"></i>
            </div>
            <h4 className="text-xl font-black text-[#064d3b] mb-4 relative z-10">ভূমিকা ও প্রেক্ষাপট</h4>
            <p className="text-lg text-slate-700 leading-relaxed font-medium relative z-10">
              {PROJECT_INSTRUCTIONS.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECT_INSTRUCTIONS.steps.map((step, idx) => (
              <div key={idx} className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#064d3b] text-white rounded-xl flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>
                <h5 className="text-xl font-black text-slate-900 mb-4 ml-4">{step.title}</h5>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#064d3b] p-8 rounded-[2rem] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
            <h4 className="text-xl font-black mb-4 relative z-10">উপসংহার ও সতর্কর্তা</h4>
            <p className="text-lg opacity-90 font-medium relative z-10 leading-relaxed">
              {PROJECT_INSTRUCTIONS.closing}
            </p>
            <div className="mt-6 flex justify-center items-center gap-3 relative z-10">
              <i className="fa-solid fa-heart text-red-400 animate-pulse"></i>
              <span className="font-black tracking-widest uppercase text-xs">Assunnah Foundation 2026</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-slate-100 bg-[#f8fafc] flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-[#064d3b] text-white rounded-2xl font-black hover:bg-[#053d2f] transition-all shadow-xl hover:shadow-emerald-900/30"
          >
            আমি নিয়মাবলী বুঝতে পেরেছি
          </button>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #064d3b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default InstructionsModal;