
import React from 'react';
import { APP_LINKS } from '../constants';

interface FooterProps {
  onOpenDeveloper?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenDeveloper }) => {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <i className="fa-solid fa-mosque text-3xl text-emerald-400"></i>
              <div>
                <h3 className="text-2xl font-bold">আস-সুন্নাহ ফাউন্ডেশন</h3>
                <p className="text-emerald-400/80 text-sm">উম্মাহর স্বার্থে, সুন্নাহর সাথে</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              আস-সুন্নাহ ফাউন্ডেশন একটি অরাজনৈতিক, অলাভজনক সেবামূলক প্রতিষ্ঠান। 
              শিক্ষা, সেবা ও দাওয়াহ— এই তিন মূলনীতিতে আমরা কাজ করি।
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">দ্রুত লিংক</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">হোম</a></li>
              <li><a href="#guidelines" className="hover:text-emerald-400 transition-colors">নির্দেশনা</a></li>
              <li><a href="#volunteers" className="hover:text-emerald-400 transition-colors">স্বেচ্ছাসেবক</a></li>
              <li><a href="#package" className="hover:text-emerald-400 transition-colors">ইফতার প্যাকেজ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">যোগাযোগ</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-emerald-400"></i>
                <span>প্লট ৬২ ও ৬৪, রোড ৩, ব্লক এ, আফতাবনগর, ঢাকা ১২১২।</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-emerald-400"></i>
                <span>০৯৬১০০০০০০০</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-emerald-400"></i>
                <span>info@assunnah.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright and Developer Details */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center">
          <div className="text-center mb-6">
            <p className="text-white font-bold text-lg md:text-2xl mb-2">© ২০২৬ আস-সুন্নাহ ফাউন্ডেশন।</p>
            <p className="text-white/40 text-xs md:text-sm max-w-2xl mx-auto">উক্ত সেবার মান উন্নয়নের জন্য আনঅফিসিয়াল ভাবে তৈরি করা হয়েছে এই ওয়েবসাইটটি।</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
            <div className="flex space-x-6 text-white/40 items-center">
              <a href={APP_LINKS.FACEBOOK_1} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href={APP_LINKS.FACEBOOK_2} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href={APP_LINKS.YOUTUBE} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href={APP_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>

            <button 
              onClick={onOpenDeveloper}
              className="group px-8 py-3 bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/30 rounded-full text-xs font-black tracking-widest uppercase text-emerald-400 transition-all flex items-center gap-3 shadow-lg shadow-black/20"
            >
              <i className="fa-solid fa-code text-[10px] group-hover:rotate-12 transition-transform"></i>
              <span>DEVELOPMENT BY: SAKIBUL ISLAM SABBIR</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
