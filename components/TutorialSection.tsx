import React from 'react';

const TutorialSection: React.FC = () => {
  const embedUrl = "https://www.youtube-nocookie.com/embed/mA8hFEQNIik?si=Dt06sZe1G_kUCvlY";

  return (
    <div className="container mx-auto px-4 text-center">
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-emerald-400 font-black tracking-[0.2em] uppercase text-xs px-4 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
            টিউটোরিয়াল
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-white drop-shadow-xl tracking-tight">
          প্রকল্প বাস্তবায়ন নির্দেশিকা ভিডিও
        </h2>
        <p className="text-lg text-emerald-50/80 max-w-3xl mx-auto font-medium leading-relaxed">
          মাঠ পর্যায়ে ইফতার বিতরণ কার্যক্রমের প্রতিটি ধাপ নিখুঁতভাবে সম্পন্ন করার জন্য ভিডিওটি সরাসরি প্লে করে দেখুন।
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-video bg-black rounded-[2rem] shadow-2xl border-4 border-white/5 overflow-hidden group transition-all duration-500 hover:scale-[1.01]">
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
      </div>
    </div>
  );
};

export default TutorialSection;