import React, { useState, useEffect } from 'react';

const PHOTOS = [
  {
    id: 'dsc00024',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433184/DSC00024.jpg',
    alt: 'Fotografía comercial y corporativa'
  },
  {
    id: 'img6683',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433199/IMG_6683.jpg',
    alt: 'Fotografía gastronómica comercial'
  },
  {
    id: 'dsc00659',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433183/DSC00659.jpg',
    alt: 'Fotografía de producto y joyería'
  },
  {
    id: 'dsc02422',
    src: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433183/DSC02422.jpg',
    alt: 'Fotografía publicitaria y macro'
  }
];

export const PhotoGalleryCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance photos smoothly
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  return (
    <div
      className="col-span-12 md:col-span-7 apple-card relative overflow-hidden rounded-2xl h-[420px] sm:h-[500px] group shadow-sm bg-black border border-[#1b1b1b]/10 select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images with Cross-Fade */}
      <div className="absolute inset-0 z-0 bg-black">
        {PHOTOS.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
        {/* Elegant Bottom Gradient - only at the very bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
      </div>

      {/* Subtle Navigation Chevrons on Hover */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        aria-label="Foto anterior"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        aria-label="Siguiente foto"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>

      {/* Bottom Service Content (Pure, Minimal, Original Agency Style) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold text-[#e45831] uppercase tracking-widest">
              01 / 07
            </span>
            <div className="h-[1px] w-8 bg-[#e45831]/60"></div>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
              FOTOGRAFÍA
            </span>
          </div>
          <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
            Fotografía comercial y corporativa
          </h3>
          <p className="text-[16px] text-white/80 max-w-sm font-['Inter',sans-serif]">
            Narrativa visual de alta gama para productos, espacios arquitectónicos y equipos corporativos.
          </p>
        </div>

        {/* Minimal Subtle Dot Indicators */}
        <div className="flex items-center gap-2 pb-1">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all rounded-full ${
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
