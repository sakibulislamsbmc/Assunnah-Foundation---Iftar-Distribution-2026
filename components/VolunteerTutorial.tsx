
import React from 'react';

const VolunteerTutorial: React.FC = () => {
  const videoUrl = "https://youtu.be/mA8hFEQNIik?si=HGo7uzug6P3ZzcWH";

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto relative">
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="glass-morphism rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden text-center relative z-10">
          <div className="absolute inset-0 opacity-5 islamic-pattern pointer-events-none"></div>
          
          <div className="relative z-20">
            <div className="inline-block mb-8">
              <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-xs px-6 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                Tutorial / টিউটোরিয়াল
              </span>
            </div>

            <h2 className="text-3xl md:text-6xl font-black mb-8 drop-shadow-lg leading-tight text-white">
              স্বেচ্ছাসেবক প্রশিক্ষণ নির্দেশিকা
            </h2>
            
            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
              মাঠ পর্যায়ে ইফতার বিতরণ কার্যক্রমের প্রতিটি ধাপ নিখুঁতভাবে সম্পন্ন করার পদ্ধতি সরাসরি ইউটিউব থেকে দেখে নিন। 
              তালিকভুক্ত সকল স্বেচ্ছাসেবকদের জন্য এই টিউটোরিয়াল ভিডিওটি অত্যন্ত গুরুত্বপূর্ণ।
            </p>

            {/* YouTube Link Block */}
            <div className="group relative max-w-2xl mx-auto">
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-white rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              >
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-3xl flex items-center justify-center text-white shadow-[0_15px_35px_rgba(220,38,38,0.3)] group-hover:bg-red-700 transition-colors">
                    <i className="fa-brands fa-youtube text-4xl md:text-6xl"></i>
                  </div>
                  <div className="text-left">
                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-1">Watch Tutorial</h4>
                    <p className="text-slate-500 font-bold text-sm md:text-base">সরাসরি ইউটিউবে ভিডিওটি দেখুন</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-8 py-4 bg-[#064d3b] text-white rounded-2xl font-black shadow-lg hover:bg-emerald-800 transition-all">
                  <span>প্লে করুন</span>
                  <i className="fa-solid fa-circle-play text-xl animate-pulse"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerTutorial;
