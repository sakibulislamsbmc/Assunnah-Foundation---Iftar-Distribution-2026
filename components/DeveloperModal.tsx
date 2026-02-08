
import React from 'react';

interface DeveloperModalProps {
  onClose: () => void;
}

const DeveloperModal: React.FC<DeveloperModalProps> = ({ onClose }) => {
  const linktreeUrl = "https://linktr.ee/sakibulislamrc?utm_source=linktree_profile_share&ltsid=eacce0a3-f864-48c4-853b-ce88576282c7";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#020617]/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-md bg-[#00c853] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center p-8 text-white border-4 border-white/20">
        {/* Top Controls */}
        <div className="w-full flex justify-between mb-8">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-24 h-24 bg-white rounded-full p-1 mb-6 shadow-2xl relative">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-200">
             {/* Using a placeholder since the specific photo URL wasn't provided, 
                 but keeping the design consistent with the provided screenshot */}
             <i className="fa-solid fa-user text-5xl text-slate-400 mt-6 ml-6"></i>
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-2xl font-black mb-1">Sakibul islam Sabbir</h3>
        <p className="text-sm font-bold opacity-90 mb-6 text-center">Graphic Designer, Logo Designer, Video Editor.</p>

        {/* Social Icons Row */}
        <div className="flex gap-4 mb-10">
          <div className="w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer">
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer">
            <i className="fa-brands fa-pinterest"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer">
            <i className="fa-brands fa-youtube"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-xl hover:scale-110 transition-transform cursor-pointer">
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        {/* Action Buttons List */}
        <div className="w-full space-y-3 mb-12">
          <div className="w-full bg-[#00b548] py-4 rounded-full border border-white/20 text-center font-bold text-sm shadow-sm hover:bg-[#00a140] transition-colors cursor-pointer flex items-center px-6 justify-between group">
            <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-[10px]">
              <i className="fa-solid fa-check"></i>
            </div>
            <span>Branding Page</span>
            <i className="fa-solid fa-ellipsis text-[10px] opacity-40"></i>
          </div>
          
          <div className="w-full bg-[#00b548] py-4 rounded-full border border-white/20 text-center font-bold text-sm shadow-sm hover:bg-[#00a140] transition-colors cursor-pointer flex items-center px-6 justify-between group">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center text-[10px]">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <span>FB Page</span>
            <i className="fa-solid fa-ellipsis text-[10px] opacity-40"></i>
          </div>

          <div className="w-full bg-[#00b548] py-4 rounded-full border border-white/20 text-center font-bold text-sm shadow-sm hover:bg-[#00a140] transition-colors cursor-pointer flex items-center px-6 justify-between group">
            <div className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center text-[10px]">
              <i className="fa-brands fa-pinterest-p"></i>
            </div>
            <span>Pinterest</span>
            <i className="fa-solid fa-ellipsis text-[10px] opacity-40"></i>
          </div>
        </div>

        {/* Linktree Button */}
        <a 
          href={linktreeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-white text-[#00c853] py-4 rounded-full font-black text-center shadow-2xl hover:bg-emerald-50 transition-all transform hover:-translate-y-1 active:scale-95"
        >
          Join sakibulislamrc on Linktree
        </a>

        {/* QR Code Placeholder at the bottom right outside (optional decoration) */}
        <div className="mt-8 opacity-40 text-[10px] font-bold tracking-widest uppercase">
          Developer Information Profile
        </div>
      </div>
    </div>
  );
};

export default DeveloperModal;
