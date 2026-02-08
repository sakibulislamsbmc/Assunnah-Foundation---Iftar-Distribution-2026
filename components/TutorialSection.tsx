
import React from 'react';

const TutorialSection: React.FC = () => {
  // Using the specific nocookie embed URL provided to fix configuration errors
  const embedUrl = "https://www.youtube-nocookie.com/embed/mA8hFEQNIik?si=Dt06sZe1G_kUCvlY";

  return (
    <div className="container mx-auto px-4 text-center">
      {/* Header Section */}
      <div className="mb-16">
        <div className="inline-block mb-4">
          <span className="text-emerald-400 font-black tracking-[0.3em] uppercase text-xs px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            Tutorial / টিউটোরিয়াল
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black mb-6 text-white drop-shadow-xl tracking-tight">
          প্রকল্প বাস্তবায়ন নির্দেশিকা ভিডিও
        </h2>
        <div className="w-32 h-1.5 bg-emerald-500/40 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-emerald-50/80 max-w-3xl mx-auto font-medium leading-relaxed">
          মাঠ পর্যায়ে ইফতার বিতরণ কার্যক্রমের প্রতিটি ধাপ নিখুঁতভাবে সম্পন্ন করার জন্য 
          নিচের টিউটোরিয়াল ভিডিওটি মনোযোগ দিয়ে সরাসরি প্লে করে দেখুন।
        </p>
      </div>

      {/* Main Video Player */}
      <div className="max-w-5xl mx-auto">
        <div className="relative aspect-video bg-black rounded-[2.5rem] md:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border-[12px] border-white/5 overflow-hidden group transform transition-all duration-700 hover:scale-[1.01]">
          {/* Glass Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none z-10"></div>
          
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        
        {/* Features / Steps Row */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="glass-morphism p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all duration-500 text-left">
             <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-play"></i>
             </div>
             <h4 className="text-2xl font-black mb-3 text-white">শুরু করুন</h4>
             <p className="text-base text-emerald-100/60 font-medium leading-relaxed">
               ভিডিওটি প্লে করে প্রকল্পের প্রতিটি ধাপ সম্পর্কে স্বচ্ছ ধারণা নিন।
             </p>
           </div>

           <div className="glass-morphism p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all duration-500 text-left">
             <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-list-check"></i>
             </div>
             <h4 className="text-2xl font-black mb-3 text-white">নিয়মাবলী</h4>
             <p className="text-base text-emerald-100/60 font-medium leading-relaxed">
               কমিটি গঠন থেকে উপকারভোগী নির্বাচন পর্যন্ত সকল তথ্য এখানে বিদ্যমান।
             </p>
           </div>

           <div className="glass-morphism p-10 rounded-[3rem] border border-white/10 group hover:bg-white/10 transition-all duration-500 text-left">
             <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-3xl mb-6 group-hover:scale-110 transition-transform">
               <i className="fa-solid fa-shield-heart"></i>
             </div>
             <h4 className="text-2xl font-black mb-3 text-white">সফলতা</h4>
             <p className="text-base text-emerald-100/60 font-medium leading-relaxed">
               নির্দেশনা মেনে চললে আল্লাহর রহমতে প্রকল্পটি সফলভাবে সম্পন্ন হবে।
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;
