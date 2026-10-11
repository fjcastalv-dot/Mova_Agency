import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REEL_VIDEOS = [
  {
    id: 1,
    title: 'Evita estos 3 errores al comprar en Cancún',
    subtitle: 'Asesoría Inmobiliaria Cancún',
    videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1789432709/evita_estos_3_errores_al_comprar_en_cancun.mp4',
  },
  {
    id: 2,
    title: 'Sayab Residencial',
    subtitle: 'Producción Audiovisual & Recorrido',
    videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1791737515/Sayab_Residencial_2_1.mp4',
  },
  {
    id: 3,
    title: 'Monteverde Residencial',
    subtitle: 'Estrategia Visual Inmobiliaria',
    videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1791737524/Monteverde_1.mp4',
  },
];

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveProjectIndex((prev) => (prev === 0 ? REEL_VIDEOS.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveProjectIndex((prev) => (prev === REEL_VIDEOS.length - 1 ? 0 : prev + 1));
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen) return null;

  const currentProject = REEL_VIDEOS[activeProjectIndex];

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#111111] text-white rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Video Title */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 bg-black/70 gap-3">
          {/* Left: Brand + Title in the top bar */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e45831] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e45831]"></span>
            </span>
            <span className="font-['Hanken_Grotesk'] text-xs uppercase tracking-widest text-[#e45831] font-bold shrink-0">
              MOVA AGENCY
            </span>
            <span className="text-white/30 hidden sm:inline">•</span>
            <h4 className="text-xs sm:text-sm font-semibold text-white truncate min-w-0">
              {currentProject.title}
            </h4>
          </div>

          {/* Right: Counter + Close Button */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-[#e45831] bg-[#e45831]/10 px-2.5 py-0.5 rounded border border-[#e45831]/20 tracking-wider">
              0{activeProjectIndex + 1} / 0{REEL_VIDEOS.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#e45831] transition-colors flex items-center justify-center text-white cursor-pointer"
              title="Cerrar"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Video Canvas Container with Left and Right Orange Arrows */}
        <div className="relative w-full bg-black overflow-hidden flex items-center justify-center h-[65vh] sm:h-[75vh] max-h-[750px] group">
          {/* Left Arrow (Orange) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#e45831] text-[#e45831] hover:text-white border border-[#e45831]/50 hover:border-[#e45831] flex items-center justify-center backdrop-blur-md transition-all shadow-xl shadow-black/60 hover:scale-110 active:scale-95 cursor-pointer group/btn"
            title="Video anterior"
            aria-label="Video anterior"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl transition-transform group-hover/btn:-translate-x-0.5">
              chevron_left
            </span>
          </button>

          {/* Right Arrow (Orange) */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/70 hover:bg-[#e45831] text-[#e45831] hover:text-white border border-[#e45831]/50 hover:border-[#e45831] flex items-center justify-center backdrop-blur-md transition-all shadow-xl shadow-black/60 hover:scale-110 active:scale-95 cursor-pointer group/btn"
            title="Siguiente video"
            aria-label="Siguiente video"
          >
            <span className="material-symbols-outlined text-2xl sm:text-3xl transition-transform group-hover/btn:translate-x-0.5">
              chevron_right
            </span>
          </button>

          {/* Video Player */}
          <video
            key={currentProject.videoUrl}
            src={currentProject.videoUrl}
            controls
            autoPlay
            playsInline
            className="w-auto h-full max-h-[65vh] sm:max-h-[75vh] max-w-full object-contain mx-auto"
          />
        </div>
      </div>
    </div>,
    document.body
  );
};
