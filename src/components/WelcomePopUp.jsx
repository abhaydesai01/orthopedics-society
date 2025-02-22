
import { useState } from "react"
import { X } from "lucide-react"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`fixed inset-0 bg-black/50 flex items-center justify-center ${!isOpen && "hidden"}`}>
      <div className="bg-white relative rounded-lg overflow-hidden max-w-4xl w-full">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close popup"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="w-full">
          <img
            src="image3.png"
            alt="PKC 2025 Event Banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

