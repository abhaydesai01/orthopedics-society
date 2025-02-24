import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      image: "/le.png",
      title: "Cricket League",
      date: "March 16, 2025",
      location: "MVIT Cricket Ground,Velahanka",
      registrationLink: "#"
    },
    {
      id: 2,
      image: "/image_m.png",
      title: "BOSCON-2025",
      date: "April 5, 2025",
      location: "City Convention Center",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeudIyNIKLZMtIgA8hrzGDAosZWloNrTgKbiJyxi93tiDuOdg/viewform"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20 pt-24">
      <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Upcoming Events
      </h1>
      
      <div className="space-y-24">
        {events.map((event) => (
          <div key={event.id}>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => (e.target.src = "/default-placeholder.jpg")}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <p className="text-blue-600 font-semibold text-lg">{event.date}</p>
                  <h2 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    <span className="inline-block mr-2">📍</span>
                    {event.location}
                  </p>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {event.description}
                </p>
                
                {event.title === "BOSCON-2025" ? (
                  <a 
                    href={event.registrationLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-fit inline-block"
                  >
                    Register Now
                  </a>
                ) : (
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 w-fit">
                    Register Now
                  </button>
                )}
              </div>
            </div>
            
            <div className="border-b border-gray-200 mt-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;