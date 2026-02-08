
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass-morphism py-4 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-800 p-2 rounded-lg">
            <i className="fa-solid fa-mosque text-white text-xl"></i>
          </div>
          <div>
            <h1 className="font-bold text-emerald-900 text-lg md:text-xl leading-tight">আস-সুন্নাহ ফাউন্ডেশন</h1>
            <p className="text-xs text-emerald-700 font-medium tracking-wider">উম্মাহর স্বার্থে, সুন্নাহর সাথে</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 text-emerald-900 font-medium">
          <a href="#guidelines" className="hover:text-emerald-600 transition-colors">নির্দেশনা</a>
          <a href="#tutorial" className="hover:text-emerald-600 transition-colors">টিউটোরিয়াল</a>
          <a href="#package" className="hover:text-emerald-600 transition-colors">প্যাকেজ</a>
          <a href="#volunteers" className="hover:text-emerald-600 transition-colors">স্বেচ্ছাসেবক</a>
        </div>

        <div className="flex items-center">
          <button className="md:hidden text-emerald-900">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
