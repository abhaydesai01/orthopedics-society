import React from "react"
import { Link } from 'react-router-dom'
import { Download, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = "/image_1.jpg";

  const slides = [
    {
      title: "",
      image: "/image_m.png",
      subtitle: [
        "BOSCON 2025",
        "28th Annual Conference of Banglore Orthopaedic Association",
        " 5th & 6th April, 2025",
        "Bengaluru"
      ],
      buttons: [
        { text: "Download Brochure", link: "/BOSCON 2025 BROCHURE .pdf", primary: true },
        { text: "Click Here for More Info", link: "/Trade brochure BOSCON 25.pdf", secondary: true },
        { text: "Register Now", link: "https://docs.google.com/forms/d/e/1FAIpQLSeudIyNIKLZMtIgA8hrzGDAosZWloNrTgKbiJyxi93tiDuOdg/viewform?usp=dialog", primary: true },
      ],
    },
    {
      title: "BOS PREMIER LEAGUE 1.0",
      image: "image_ld.png",
      subtitle: [
        "Date: 16/MARCH/2025",
        "Venue: MITT Cricket ground, Yelahanka",
        // "Live streaming of the game",
        // "Many individual awards to be won",
        // "Team & individual photos"
      ],
      details: [
        "RSVP:",
        "DR ABRAR (SGITO) 9739893893",
        "DR SHASHANK (BMCRI) 9845857454",
        // "***INDIVIDUAL PLAYERS CAN ALSO REGISTER"
      ],
      buttons: [
        { text: "Register Now", link: "/image_la.jpg", primary: true },
      ],
      customBackground: "/image_1.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="pt- bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].customBackground || backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative py-4 md:py-6">
          <div className="text-center z-10">
            <>
              {slides[currentSlide].image && (
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title || slides[currentSlide].subtitle?.[0]}
                  className="mx-auto mb-4 h-32 md:h-40 lg:h-48 rounded-lg bg-white p-2"
                />
              )}
              {slides[currentSlide].title && (
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  {slides[currentSlide].title}
                </h2>
              )}
              {Array.isArray(slides[currentSlide].subtitle) ? (
                slides[currentSlide].subtitle.map((line, index) => (
                  <p key={index} className="text-white text-lg md:text-xl lg:text-2xl mb-2">
                    {line}
                  </p>
                ))
              ) : slides[currentSlide].subtitle && (
                <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white">
                  {slides[currentSlide].subtitle}
                </p>
              )}
              {slides[currentSlide].details &&
                slides[currentSlide].details.map((detail, index) => (
                  <p key={index} className="text-lg md:text-xl text-white mb-2">
                    {detail}
                  </p>
                ))
              }
            </>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4">
              {slides[currentSlide].buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold rounded transition-colors duration-200 ${button.primary
                      ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                      : button.secondary
                        ? "bg-gray-600 text-white hover:bg-gray-700"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full opacity-75 hover:opacity-100 z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? "bg-white" : "bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* President's Message Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="h-full w-full">
              <img
                src="/image18.jpg"
                alt="COS Team"
                className="h-auto max-h-96 w-auto max-w-full rounded-lg object-cover shadow-lg mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-blue-700">President's Message</h2>
              <p className="mb-4 text-gray-700">
                Dear Colleagues and Friends,
              </p>
              <p className="mb-4 text-gray-700">
                It is my privilege and honor to serve as the President of the Bangalore Orthopaedic Society (BOS), an esteemed organization dedicated to the pursuit of excellence in orthopaedic education, research, and clinical practice.

              </p>
              {/* <p className="mb-4 text-gray-700">
                On behalf of all members, we congratulate the team for the year 23-24 lead ably by Dr. Deepak Rai, Dr. Shailesh Pai, Dr. Fahim & Dr. Navaneeth Kamath for the enormous achievements...
              </p> */}
              <Link to="/presidentsmessage" className="text-blue-600 hover:text-blue-700">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold text-blue-700">About Bangalore Orthopaedic Society</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                The Bangalore Orthopaedic Society (BOS) is a premier organization dedicated to the advancement of orthopaedic education, research, and clinical practice in Bengaluru, Karnataka. Committed to excellence, BOS serves as a collaborative platform for orthopaedic surgeons, researchers, and healthcare professionals to exchange knowledge, refine surgical skills, and stay updated with the latest advancements in the field.
              </p>
              <Link to="/about-us" className="text-blue-600 hover:text-blue-700">
                Read More →
              </Link>
            </div>
            <div className="h-full w-full">
              <img
                src="/images5.jpeg"
                alt="Bangalore Orthopaedic Society Event"
                className="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Registration Details */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-700">Membership Application Form</h2>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdf8poSTSDLZmgUnulJb4W4j1D6f7lBeec4osxlCviUGM0tMQ/viewform"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
              Registration Form
              </a>

              <p className="text-gray-700">
                Mail your Registration form to{" "}
                <a href="mailto:membership.bos@gmail.com" className="text-blue-600 hover:text-blue-700">
                  membership.bos@gmail.com
                </a>
              </p>

              <div className="space-y-3 text-gray-700">
                <p>BANGLORE ORTHOPAEDIC SOCIETY</p>
                <p>KARNATAKA BANK LIMITED</p>
                <p>SB A/C No.- 0612500102803601</p>
                <p>IFSC Code.- KARB0000058</p>
                <p>Registration Fees- Rs.1500/-</p>
              </div>
            </div>

            {/* Right Column - QR Code */}
            <div className="flex items-center justify-center">
              <img
                src="/image19.jpg"
                alt="Google Pay QR Code"
                className="w-80 h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}