import React, { useState } from 'react';

export default function AboutUs() {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      
      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left side - Single Image */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <picture>
              {/* Mobile image (displays on smaller screens) */}
              <source media="(max-width: 767px)" srcSet="/image1y.jpg" />
              {/* Desktop image (displays on medium screens and larger) */}
              <source media="(min-width: 768px)" srcSet="/image1x.jpg" />
              {/* Fallback image if picture tag is not supported */}
              <img 
                src="/image1x.jpg" 
                alt="BOS Official"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="md:w-2/3">
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
          
          <div className="text-lg leading-relaxed">
            <p className="mb-4">
              The History of Orthopaedics in Bangalore dates back to 1956, when Dr. H K Srinivas Murthy established the Department of Orthopaedics in Victoria Hospital attached to Bangalore Medical College. Later by 1960-64, others joined as lecturers after post graduate qualification mostly from AIIMS, New Delhi and K.G. Medical College Lucknow. By 1980 a few private Orthopaedic surgeons opened their practices and were practicing Orthopaedic surgery in various hospitals, like St. Marthas, St. Philomina Hospital.
            </p>
            
            <p className="mb-4">
              Taking cue from clinical proceedings of Bombay Orthopaedic Society, few of them lead by Dr V Hanumanthaiah met at medical association lecture hall on a cup of tea and discussed the formation of Bangalore Orthopaedic Society in 1986. The BOS was formed ultimately with Dr V Hanumanthaiah as the founder chairman. The society used to meet once every 2 months at various teaching hospitals and discuss difficult and rare cases on a dinner hosted by pharmaceutical companies.
            </p>

            {showFullHistory && (
              <>
                <p className="mb-4">
                  A few years later the society was registered with registrar Government of Karnataka and full fledged office bearers were elected as Dr. V. H. Hanumanthaiah as President, Dr. N. Krishnappa, as Secretary, and 5 executive committee members. Bangalore Orthopaedic Society continued to meet though, a bit irregularly up till then and the meetings were changed to monthly and many of the colleagues in private colleges started attending these meetings, and a minimal fee of Rs. 30/- per year was fixed.
                </p>
                
                <p className="mb-4">
                  Dr V Hanumanthaiah continued as president with Dr N Krishnappa as the secretary for 12 continuous years. Deliberations of the monthly meetings were well attended and many C.M.E.s were being held in addition to social service in the form of Orthopaedic treatment for disabled persons and other Orthopaedic diseases. The highlight of their tenure was organizing the IOACON in 1994 at Bangalore, the success and standards of which are still talked about and remains as gold standard. The contribution of IOACON to BOS is the site at Koramangala.
                </p>
                
                <p className="mb-4">
                  From the year 2000 the office bearers are elected every year during Annual BOS conferences.
                </p>
              </>
            )}

            <button 
              onClick={() => setShowFullHistory(!showFullHistory)}
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-2 mb-6 transition-colors duration-200"
            >
              {showFullHistory ? "Read Less" : "Read More"}
            </button>

            <div className="border-t-4 border-blue-500 mb-6"></div>

            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <div className="border-t-4 border-blue-500 mb-6"></div>
            
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
    </div>
  );
}