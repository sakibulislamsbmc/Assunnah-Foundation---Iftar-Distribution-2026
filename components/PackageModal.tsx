
import React from 'react';
import { IFTAR_PACKAGE } from '../constants';

interface PackageModalProps {
  onClose: () => void;
}

const PackageModal: React.FC<PackageModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col border border-emerald-100">
        <div className="p-8 border-b border-emerald-50 flex justify-between items-center bg-[#f8fafc]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-[#064d3b] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              <i className="fa-solid fa-box-open"></i>
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#064d3b]">ইফতার প্যাকেজ ২০২৬</h3>
              <p className="text-slate-500 font-bold text-sm">উপকারভোগীদের প্রদানকৃত খাদ্য সামগ্রী</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"
          >
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>

        <div className="p-10">
          <div className="bg-[#064d3b] p-8 rounded-[2.5rem] mb-10 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 islamic-pattern"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-black mb-2">গুণগত মান ও নিরাপত্তা</h4>
                <p className="text-emerald-50/70 font-medium max-w-md">
                  আস-সুন্নাহ ফাউন্ডেশন সরাসরি কুরিয়ারের মাধ্যমে প্রতিটি স্পটে নিরাপদ ও স্বাস্থ্যসম্মত ইফতার সামগ্রী পৌঁছে দেয়।
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 p-4 rounded-2xl text-center border border-white/10">
                  <span className="block text-2xl font-black">১০০%</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider">সিলগালা প্যাক</span>
                </div>
                <div className="bg-white/10 p-4 rounded-2xl text-center border border-white/10">
                  <span className="block text-2xl font-black">৩৩০+</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider">উপকারভোগী</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IFTAR_PACKAGE.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-all group">
                <div className="flex items-center space-x-5">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#064d3b] shadow-sm group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${item.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <span className="block font-black text-slate-900 text-lg">{item.name}</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">খাদ্য সামগ্রী</span>
                  </div>
                </div>
                <span className="bg-[#064d3b] text-white px-5 py-2 rounded-xl text-sm font-black shadow-lg">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 border-t border-slate-100 bg-[#f8fafc] text-center">
          <p className="text-slate-500 font-bold text-sm">আস-সুন্নাহ ফাউন্ডেশন কর্তৃক নির্ধারিত এই প্যাকেজটি সিয়াম পালনকারী পরিবারের মুখে হাসি ফোটাবে ইনশাআল্লাহ।</p>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;
