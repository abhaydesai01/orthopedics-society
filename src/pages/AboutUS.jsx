import React, { useState } from 'react';

export default function AboutUs() {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      {/* Content Section - Full Width */}
      <div className="w-full">
        <p className="text-lg mb-6 leading-relaxed">
          The Bangalore Orthopaedic Society (BOS) is a premier organization dedicated to 
          the advancement of orthopaedic education, research, and clinical practice in 
          Bengaluru, Karnataka. Committed to excellence, BOS serves as a collaborative 
          platform for orthopaedic surgeons, researchers, and healthcare professionals 
          to exchange knowledge, refine surgical skills, and stay updated with the latest 
          advancements in the field.
        </p>

        <div className="border-t-4 border-blue-500 mb-6"></div>

        <h2 className="text-2xl font-semibold mb-4">History of BOS</h2>
        <div className="border-t-4 border-blue-500 mb-6"></div>
        
        <p className="text-lg leading-relaxed">
          The History of Orthopaedics in Bangalore dates back to 1956, when Dr. H K Srinivas Murthy established the Department of Orthopaedics in Victoria Hospital attached to Bangalore Medical College. Later by 1960-64, others joined as lecturers after post-graduate qualification mostly from AIIMS, New Delhi and K.G. Medical College Lucknow. By 1980, a few private Orthopaedic surgeons opened their practices and were practicing Orthopaedic surgery in various hospitals, like St. Martha’s and St. Philomena Hospital.
        </p>
        
        <p className="text-lg leading-relaxed mt-4">
          Taking cue from clinical proceedings of Bombay Orthopaedic Society, a few of them, led by Dr. V Hanumanthaiah, met at a medical association lecture hall over a cup of tea and discussed the formation of Bangalore Orthopaedic Society in 1986. The BOS was ultimately formed with Dr. V Hanumanthaiah as one of its pioneers.
        </p>
      </div>
    </div>
  );
}