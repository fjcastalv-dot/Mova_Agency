import React, { useState, useEffect } from 'react';

const SHOWCASE_PHOTOS = [
  {
    id: 'dsc02355',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789588508/DSC02355.jpg',
    alt: 'Fotografía, Video & Estrategia Digital - Interior & Arquitectura Cancún'
  },
  {
    id: 'img6683',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433199/IMG_6683.jpg',
    alt: 'Fotografía comercial y producto'
  },
  {
    id: 'dsc00024',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433184/DSC00024.jpg',
    alt: 'Producción de moda y estilo visual'
  },
  {
    id: 'dsc00659',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433183/DSC00659.jpg',
    alt: 'Detalle editorial y joyería'
  }
];

export const ShowcaseGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance photos smoothly every 4.5 seconds
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? SHOWCASE_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_PHOTOS.length);
  };

  return (
    <div
      className="mt-12 sm:mt-16 apple-card relative overflow-hidden rounded-2xl shadow-xl h-[380px] sm:h-[500px] group bg-black border border-[#1b1b1b]/10 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Cross-Fade */}
      <div className="absolute inset-0 z-0 bg-black">
        {SHOWCASE_PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-90' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
        {/* Soft bottom vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Discreet Navigation Arrows on Hover */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Foto anterior"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        aria-label="Siguiente foto"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>

      {/* Bottom Content: Preserves Title & Legend, without 'ESTÁNDAR EDITORIAL & DIGITAL' */}
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-['Hanken_Grotesk'] text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Fotografía, Video & Estrategia Digital
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-normal font-['Inter',sans-serif]">
            Contenido producido con visión cinematográfica y enfoque orientado a resultados comerciales en Cancún, CDMX y Playa del Carmen.
          </p>
        </div>

        {/* Minimal dot indicators */}
        <div className="flex items-center gap-2 pb-1 shrink-0">
          {SHOWCASE_PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all rounded-full cursor-pointer ${
                i === currentIndex
                  ? 'w-6 h-1.5 bg-[#e45831]'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir a foto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
