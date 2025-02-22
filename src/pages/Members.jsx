import React from 'react';

export default function Members() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold mb-8">Members</h1>
      
      {/* First Row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img src="/image18.jpg" alt="Member 1" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">  Dr.Avinash (President)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image131.jpg" alt="Member 2" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr B.Ramesh (BOS GS)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_ab.jpg" alt="Member 3" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr.Venu Madhav</h3>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img src="/image_b.jpg" alt="Member 4" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr.Raju KP</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_cd.jpg" alt="Member 5" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Ravi Kumar</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_de.jpg" alt="Member 6" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Preetham</h3>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="flex flex-col items-center">
          <img src="/image_e.jpg" alt="Member 7" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Shekhar</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_fg.jpg" alt="Member 8" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Manjunath</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_gh.jpg" alt="Member 9" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Saraswathi</h3>
        </div>
      </div>

      {/* Fourth Row - 4 Images */}
      <div className="grid grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <img src="/image_k.jpg" alt="Member 10" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Rudra Prasad</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_jk.jpg" alt="Member 11" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr.Lokesh</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_i.jpg" alt="Member 12" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Suman</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_h.jpg" alt="Member 13" className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Dr. Shashank</h3>
        </div>
      </div>
    </div>
  );
}