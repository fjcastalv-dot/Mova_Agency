import React, { useState, useRef } from 'react';
import { DroneVideoModal, DRONE_GALLERY_VIDEOS } from './DroneVideoModal';

interface DroneVideoCardProps {
  onOpenReel?: () => void;
}

export const DroneVideoCard: React.FC<DroneVideoCardProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPreviewIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const currentPreviewVideo = DRONE_GALLERY_VIDEOS[currentPreviewIndex];

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="col-span-12 md:col-span-4 apple-card relative overflow-hidden rounded-2xl h-[350px] sm:h-[400px] group shadow-sm bg-black border border-white/10 flex flex-col justify-between select-none cursor-pointer"
        title="Haz clic para ver el video en ventana flotante"
      >
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <video
            ref={videoRef}
            key={currentPreviewVideo.videoUrl}
            src={currentPreviewVideo.videoUrl}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              if (currentPreviewVideo.fallbackUrl && target.src !== currentPreviewVideo.fallbackUrl) {
                target.src = currentPreviewVideo.fallbackUrl;
              }
            }}
          />
          {/* Soft Vignette Overlay only for text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Hover Center Indicator: Click to expand floating modal */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-[#e45831]/60 text-white flex items-center gap-2 shadow-xl shadow-black/60 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span className="material-symbols-outlined text-[#e45831] text-lg">open_in_full</span>
            <span className="text-xs font-bold uppercase tracking-wider text-white">Ver en tamaño mayor</span>
          </div>
        </div>

        {/* Discreet Mute Button (Top Right) */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleMute}
            className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
            title={isMuted ? 'Activar sonido' : 'Silenciar'}
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            <span className="material-symbols-outlined text-lg">
              {isMuted ? 'volume_off' : 'volume_up'}
            </span>
          </button>
        </div>

        {/* Bottom Service Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 pointer-events-none">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-[#e45831] uppercase tracking-widest">
              04 / 07
            </span>
            <div className="h-[1px] w-8 bg-[#e45831]/60"></div>
            <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
              AÉREO
            </span>
          </div>
          <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-bold text-white mb-1">
            Fotografía y video con dron
          </h3>
          <p className="text-white/80 text-xs font-normal font-['Inter',sans-serif] mb-3">
            Perspectivas 4K aéreas con pilotos certificados para todo tipo de proyectos.
          </p>

          <div className="flex items-center gap-2 text-[#e45831] text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">
            <span>VER EN VENTANA FLOTANTE</span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              open_in_full
            </span>
          </div>
        </div>
      </div>

      {/* Floating Drone Modal */}
      <DroneVideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialIndex={currentPreviewIndex}
      />
    </>
  );
};
