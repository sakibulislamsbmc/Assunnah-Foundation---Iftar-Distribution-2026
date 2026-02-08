
import React from 'react';

interface HeroProps {
  onOpenInstructions: () => void;
  onOpenDirectory: () => void;
  onOpenPackage: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  onOpenInstructions, 
  onOpenDirectory, 
  onOpenPackage
}) => {
  const scrollToTutorial = () => {
    const element = document.getElementById('tutorial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#064d3b] text-white py-24 md:py-36 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-15 islamic-pattern pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold mb-8 border border-white/10 animate-pulse tracking-widest uppercase">
          <i className="fa-solid fa-moon text-yellow-400"></i>
          <span>রমজান ২০২৬ ইনশাআল্লাহ</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-black mb-8 drop-shadow-2xl tracking-tight leading-tight">
          ইফতার বিতরণ প্রকল্প ২০২৬
        </h2>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 leading-relaxed font-medium mb-16 text-emerald-50">
          অসহায় ও দরিদ্র পরিবারের পাশে দাঁড়াতে আস-সুন্নাহ ফাউন্ডেশনের একটি মানবিক প্রয়াস। 
          আগামী ১৫ ফেব্রুয়ারি, ২০২৬ থেকে আমাদের মূল কার্যক্রম শুরু হবে ইনশাআল্লাহ।
        </p>
        
        {/* Integrated Header Buttons - Updated to 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <button 
            onClick={onOpenInstructions}
            className="group glass-morphism p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#064d3b] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center space-y-3 md:space-y-5"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl group-hover:bg-[#064d3b]/10 transition-colors">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <span className="text-sm md:text-xl font-black tracking-tight">নির্দেশনা দেখুন</span>
          </button>

          <button 
            onClick={scrollToTutorial}
            className="group glass-morphism p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#064d3b] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center space-y-3 md:space-y-5"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl group-hover:bg-[#064d3b]/10 transition-colors">
              <i className="fa-solid fa-play"></i>
            </div>
            <span className="text-sm md:text-xl font-black tracking-tight">টিউটোরিয়াল</span>
          </button>

          <button 
            onClick={onOpenPackage}
            className="group glass-morphism p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#064d3b] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center space-y-3 md:space-y-5"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl group-hover:bg-[#064d3b]/10 transition-colors">
              <i className="fa-solid fa-box-open"></i>
            </div>
            <span className="text-sm md:text-xl font-black tracking-tight">ইফতার প্যাকেজ</span>
          </button>

          <button 
            onClick={onOpenDirectory}
            className="group glass-morphism p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#064d3b] transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center space-y-3 md:space-y-5"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl group-hover:bg-[#064d3b]/10 transition-colors">
              <i className="fa-solid fa-users-viewfinder"></i>
            </div>
            <span className="text-sm md:text-xl font-black tracking-tight">স্বেচ্ছাসেবক তালিকা</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
