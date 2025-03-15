import { useState } from "react"
import { X } from "lucide-react"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true)
  
  const handleRegisterClick = () => {
    // Open Google Form in a new tab
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeudIyNIKLZMtIgA8hrzGDAosZWloNrTgKbiJyxi93tiDuOdg/viewform", "_blank");
  }
  
  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center z-50 ${!isOpen && "hidden"}`}>
      <div className="bg-white relative rounded-lg overflow-hidden max-w-4xl w-full">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="w-full relative">
          <img
            src="image_ol.png"
            alt="PKC 2025 Event Banner"
            className="w-full h-auto"
          />
          
          {/* Date area with black border */}
          {/* <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 border-2 border-black rounded-lg px-4 py-2 bg-white/80">
            <p className="text-lg font-bold text-center">PKC 2025</p>
          </div> */}
          
          {/* Blue Register Now button */}
          <button
            onClick={handleRegisterClick}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-700 transition"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  )
}