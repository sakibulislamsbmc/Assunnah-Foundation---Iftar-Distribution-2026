
import React from 'react';
import { IFTAR_PACKAGE } from '../constants';

const PackageVisualizer: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">ইফতার প্যাকেজ ২০২৬</h2>
        <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-emerald-700 font-medium">প্রতিটি পরিবারকে নিচের সামগ্রীগুলো প্রদান করা হবে</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-emerald-50">
        <div className="md:w-1/2 bg-emerald-900 p-12 text-white flex flex-col justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 islamic-pattern"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">প্যাকেজ ডিটেইলস</h3>
          <p className="text-emerald-100/80 mb-8 relative z-10 font-light">
            গুণগত মান নিশ্চিত করে সরাসরি কুরিয়ারের মাধ্যমে এই প্যাকেজগুলো নির্ধারিত স্পট সমূহে পৌঁছে দেওয়া হবে।
          </p>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-box-open"></i>
              </div>
              <span>সম্পূর্ণ সিলগালা প্যাকেট</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span>নিরাপদ ও স্বাস্থ্যসম্মত সামগ্রী</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 p-8 md:p-12">
          <div className="grid grid-cols-1 gap-6">
            {IFTAR_PACKAGE.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-700 shadow-sm">
                    <i className={`fa-solid ${item.icon} text-xl`}></i>
                  </div>
                  <span className="font-bold text-emerald-900">{item.name}</span>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageVisualizer;
