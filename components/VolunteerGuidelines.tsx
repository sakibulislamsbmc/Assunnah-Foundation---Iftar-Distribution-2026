
import React from 'react';
import { GUIDELINES } from '../constants';

const VolunteerGuidelines: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-emerald-900 mb-4">স্বেচ্ছাসেবকদের জন্য নির্দেশনা</h2>
        <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        <p className="mt-4 text-emerald-700 font-medium">প্রকল্পটি সফল করতে প্রতিটি ধাপ সততা ও নিষ্ঠার সাথে সম্পন্ন করুন।</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GUIDELINES.map((step, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <i className={`fa-solid ${step.icon} text-6xl`}></i>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-emerald-800 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-md">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-emerald-900">{step.title}</h3>
            </div>
            <p className="text-emerald-800 font-semibold mb-4 leading-relaxed">
              {step.description}
            </p>
            <ul className="space-y-3">
              {step.details.map((detail, dIndex) => (
                <li key={dIndex} className="flex items-start text-gray-600 text-sm">
                  <i className="fa-solid fa-check-circle text-emerald-500 mt-1 mr-2 flex-shrink-0"></i>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerGuidelines;
