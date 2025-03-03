import React from 'react';

export default function Gallery() {
  // Array of image URLs
  const images = [
    { id: 1, src: "/image1a.jpg", alt: "Gallery Image 1" },
    { id: 2, src: "/image1b.jpg", alt: "Gallery Image 2" },
    { id: 3, src: "/image1g.jpg", alt: "Gallery Image 3" },
    { id: 4, src: "/image1d.jpg", alt: "Gallery Image 4" },
    { id: 5, src: "/image1e.jpg", alt: "Gallery Image 5" },
    { id: 6, src: "/image1f.jpg", alt: "Gallery Image 6" },
    { id: 7, src: "/image1c.jpg", alt: "Gallery Image 7" },
    { id: 8, src: "/image1m.jpg", alt: "Gallery Image 8" },
    // { id: 9, src: "/image1i.jpg", alt: "Gallery Image 9" },
    { id: 10, src: "/image1j.jpg", alt: "Gallery Image 10" },
    { id: 11, src: "/image1k.jpg", alt: "Gallery Image 11" },
    { id: 12, src: "/image1l.jpg", alt: "Gallery Image 12" },
    { id: 13, src: "/image1h.jpg", alt: "Gallery Image 13" },
    { id: 14, src: "/image1n.jpg", alt: "Gallery Image 14" },
    { id: 15, src: "/image1s.jpg", alt: "Gallery Image 15" },
    { id: 16, src: "/image1p.jpg", alt: "Gallery Image 16" },
    { id: 17, src: "/image1r.jpg", alt: "Gallery Image 17" },
    { id: 18, src: "/image1t.jpg", alt: "Gallery Image 18" },
    { id: 19, src: "/image1q.jpg", alt: "Gallery Image 19" },
    { id: 20, src: "/image1o.jpg", alt: "Gallery Image 20" },
    { id: 21, src: "/image1u.jpg", alt: "Gallery Image 21" },
    { id: 22, src: "/image1v.jpg", alt: "Gallery Image 22" },
    { id: 23, src: "/image1w.jpg", alt: "Gallery Image 23" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center items-center p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img 
              src={image.src} 
              alt={image.alt}
              className="max-w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}