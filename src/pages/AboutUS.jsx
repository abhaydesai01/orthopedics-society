import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left side - Single Image */}
        <div className="md:w-1/3">
          <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/image13.jpg" 
              alt="Company image"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-2/3">
          <p className="text-lg mb-8 leading-relaxed">
            The Bangalore Orthopaedic Society (BOS) is a premier organization dedicated to 
            the advancement of orthopaedic education, research, and clinical practice in 
            Bengaluru, Karnataka. Committed to excellence, BOS serves as a collaborative 
            platform for orthopaedic surgeons, researchers, and healthcare professionals 
            to exchange knowledge, refine surgical skills, and stay updated with the latest 
            advancements in the field.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              To promote academic excellence and continuous learning in orthopaedics.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              To facilitate professional collaboration and mentorship among orthopaedic surgeons.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              To organize conferences, workshops, and hands-on training for skill enhancement.
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              To improve patient care standards by incorporating the latest innovations in orthopaedic treatment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}