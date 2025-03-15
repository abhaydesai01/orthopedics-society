import { X } from "lucide-react";
import { useState } from "react";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleRegisterClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeudIyNIKLZMtIgA8hrzGDAosZWloNrTgKbiJyxi93tiDuOdg/viewform", "_blank");
  };

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${!isOpen && "hidden"}`}>
      <div className="bg-white relative rounded-lg overflow-hidden w-full max-w-2xl shadow-lg">
        
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        
        {/* Image Section */}
        <div className="w-full flex flex-col items-center">
          <img
            src="image_ol.png"
            alt="PKC 2025 Event Banner"
            className="w-full max-h-96 object-contain rounded-t-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to BOSPL 2025</h2>
          <p className="text-gray-600 mb-6">Join us for an unforgettable experience. Register now!</p>
          
          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}