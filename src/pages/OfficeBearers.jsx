import React from 'react';

export default function OfficeBearers() {
  return (
    <div className="container mx-auto px-4 py-8 pt-16 lg:py-16 lg:pt-24">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">Office Bearers</h1>
      
      {/* First Row */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
        <div className="flex flex-col items-center">
          <img src="/image18.jpg" alt="Member 1" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr.Avinash<br></br> (President)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_e.jpg" alt="Member 2" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Shekhar <br></br>(Organising Secretary)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image131.jpg" alt="Member 3" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr B.Ramesh <br></br>(BOS GS)</h3>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
        <div className="flex flex-col items-center">
          <img src="/image_cd.jpg" alt="Member 4" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Ravi Kumar<br></br>(Joint Secretary)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_de.jpg" alt="Member 5" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Preetham<br></br>(Treasurer)</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_b.jpg" alt="Member 6" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr.Raju KP</h3>
        </div>
      </div>

      {/* Third Row */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
        <div className="flex flex-col items-center">
          <img src="/image_ab.jpg" alt="Member 7" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr.Venu Madhav</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_fg.jpg" alt="Member 8" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Manjunath</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_gh.jpg" alt="Member 9" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Saraswathi</h3>
        </div>
      </div>

      {/* Fourth Row - 4 Images */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 lg:mb-16">
        <div className="flex flex-col items-center">
          <img src="/image_k.jpg" alt="Member 10" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Rudra Prasad</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_jk.jpg" alt="Member 11" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr.Lokesh</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_i.jpg" alt="Member 12" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Suman</h3>
        </div>
        <div className="flex flex-col items-center">
          <img src="/image_h.jpg" alt="Member 13" className="w-40 h-40 lg:w-48 lg:h-48 object-cover mb-3 lg:mb-4 rounded-lg" />
          <h3 className="text-lg lg:text-xl font-semibold text-center">Dr. Shashank</h3>
        </div>
      </div>

      {/* Past Office Bearers Section */}
      <h1 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center lg:text-left">Past Office Bearers</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Past Presidents Column */}
        <div className="border-2 border-blue-500 rounded-lg p-4 lg:p-6 shadow-lg bg-gradient-to-b from-blue-50 to-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-blue-700 border-b border-blue-200 pb-2 text-center lg:text-left">Past Presidents</h2>
          <ul className="space-y-1 lg:space-y-2 text-sm lg:text-base">
            <li>Dr.V.H.Hanumanthaiah</li>
            <li>Dr.J.N.Sridhara Murthy</li>
            <li>Dr.Rajeev Naik</li>
            <li>Dr.Rajagopalan</li>
            <li>Dr.Naresh Shetty</li>
            <li>Dr.Thomas Chandy</li>
            <li>Dr.B.M. Parthasarathy</li>
            <li>Dr.Vijay Kumar</li>
            <li>Dr.Ram Iyer V.</li>
            <li>Dr.Sharan S.Patil</li>
            <li>Dr.Muralidhar N.</li>
            <li>Dr.Udaykumar B.S.</li>
            <li>Dr.Purushotham V.J.</li>
            <li>Dr.Ravindra R.</li>
            <li>Dr.Deepak S.</li>
            <li>Dr.Anand T. Galgali</li>
            <li>Dr.Shivanand S.</li>
            <li>Dr.Roshan Kumar B.N.</li>
            <li>Dr.Ramesh Krishna K.</li>
            <li>Dr.Bharath Raju G.</li>
            <li>Dr.Harshad Shah</li>
            <li>Dr.Madan Ballal</li>
            <li>Dr.Vanamali B.S.</li>
            <li>Dr.Avinash  Parthasarathy</li>
          </ul>
        </div>
        
        {/* Past BOS Secretaries Column */}
        <div className="border-2 border-green-500 rounded-lg p-4 lg:p-6 shadow-lg bg-gradient-to-b from-green-50 to-white hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-green-700 border-b border-green-200 pb-2 text-center lg:text-left">Past BOS Secretaries</h2>
          <ul className="space-y-1 lg:space-y-2 text-sm lg:text-base">
            <li>Dr.Nagaraj B.N.</li>
            <li>Dr.Vasudev Prabhu N.</li>
            <li>Dr.Naveen Kumar N.</li>
            <li>Dr.G.Srinivas Reddy </li>
            <li>Dr.B.Ramesh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}