
import React from 'react';
import { APP_LINKS } from '../constants';

const RegistrationBanner: React.FC = () => {
  return (
    <div className="glass-morphism rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative overflow-hidden group float-animation">
      {/* Decorative Islamic Background Accent */}
      <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
        <i className="fa-solid fa-star-and-crescent text-9xl text-emerald-900 rotate-12"></i>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 relative z-10 text-center md:text-left">
        <div className="w-20 h-20 bg-emerald-100/50 backdrop-blur-md rounded-2xl flex items-center justify-center text-emerald-800 text-4xl shadow-sm border border-emerald-200/50">
          <i className="fa-solid fa-user-plus"></i>
        </div>
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold text-emerald-950 mb-3 tracking-tight">ইফতারগ্রহীতা রেজিস্ট্রেশন</h3>
          <p className="text-emerald-900 font-medium text-lg leading-relaxed">
            আস-সুন্নাহ ফাউন্ডেশনের ইফতার প্যাকেজ গ্রহণের জন্য ইচ্ছুক দরিদ্র ও অসহায় ব্যক্তিদের রেজিস্ট্রেশন সম্পন্ন করার নির্দেশ প্রদান করা হচ্ছে।
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start space-x-2 text-emerald-700 font-bold text-sm bg-white/30 py-2 px-4 rounded-full border border-emerald-200/30 inline-flex">
            <i className="fa-solid fa-circle-info text-xs"></i>
            <span>এটি শুধুমাত্র ইফতার সামগ্রী গ্রহণের আবেদনের জন্য</span>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-auto relative z-10">
        <a 
          href={APP_LINKS.RECIPIENT_REGISTRATION} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-12 py-5 font-extrabold text-white transition-all duration-300 bg-emerald-800 rounded-2xl shadow-xl hover:shadow-emerald-900/30 hover:bg-emerald-900 transform hover:-translate-y-1 w-full md:w-auto"
        >
          <span className="text-lg">রেজিস্ট্রেশন করতে ক্লিক করুন</span>
          <i className="fa-solid fa-paper-plane ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
        </a>
      </div>
    </div>
  );
};

export default RegistrationBanner;
