import React from 'react';

const Gallery = () => {
  const images = [
    {
      src: "/images/1000159510.jpg",
      alt: "Treinamento de equitação no Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.45.12 AM.jpeg",
      alt: "Treinamento com laço no Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.28.10 AM.jpeg",
      alt: "Cavalo no pasto do Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.15.03 AM.jpeg",
      alt: "Cavalo branco no Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.15.02 AM.jpeg",
      alt: "Cavalo em área de descanso no Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.15.00 AM.jpeg",
      alt: "Cavalo no estábulo do Rancho Kentucky"
    },
    {
      src: "/images/WhatsApp Image 2025-03-31 at 10.14.58 AM.jpeg",
      alt: "Cavalo pastando no Rancho Kentucky"
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Galeria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Conheça nosso espaço e os cavalos que fazem parte da família Rancho Kentucky</p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
