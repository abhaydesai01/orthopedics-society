import React from 'react';

const PresidentsMessage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
        President's Message
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left side - Image and Signature */}
        <div className="md:w-1/3 flex-shrink-0 space-y-6">
          <img 
            src="/image18.jpg" 
            alt="Dr Avinash Parthasarathy" 
            className="w-full rounded-lg shadow-lg"
          />
          <div className="text-center space-y-2">
            <p className="font-semibold text-blue-900">Dr Avinash Parthasarathy</p>
            <p className="text-gray-600">President</p>
            <p className="text-gray-600">Bangalore Orthopaedic Society</p>
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-2/3 space-y-6">
          <div className="text-gray-700 italic mb-6">
            Dear Colleagues and Friends,
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            It is my privilege and honor to serve as the President of the Bangalore Orthopaedic Society (BOS), an esteemed organization dedicated to the pursuit of excellence in orthopaedic education, research, and clinical practice.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Orthopaedics is a constantly evolving field, and staying at the forefront of new techniques, technologies, and best practices is essential to delivering the highest standard of care to our patients. At BOS, we strive to create a platform for collaboration, learning, and professional growth, ensuring that our members have access to the latest advancements in our specialty.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Through academic conferences, surgical workshops, clinical discussions, and digital learning initiatives, BOS continues to foster an environment of knowledge sharing and innovation. Our flagship event, BOSCON 2025, promises to be a landmark occasion, bringing together some of the brightest minds in the field to exchange ideas and push the boundaries of orthopaedic excellence.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            As we move forward, our focus remains on strengthening the bonds within our orthopaedic community, mentoring the next generation of surgeons, and embracing technological advancements to improve patient outcomes. I encourage all our members to actively participate, contribute, and benefit from the numerous opportunities BOS provides.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Together, let us continue our journey towards academic and clinical excellence, making a meaningful impact on the lives of our patients and the future of orthopaedics.
          </p>
          
          <div className="text-gray-700 italic mt-6">
            Warm regards,
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentsMessage;