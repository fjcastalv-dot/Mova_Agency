import React, { useState, useRef } from 'react';

interface DroneVideoCardProps {
  onOpenReel?: () => void;
}

export const DroneVideoCard: React.FC<DroneVideoCardProps> = () => {
  const [videoSrc] = useState<string>(
    'https://res.cloudinary.com/boofzznx/video/upload/v1789433129/dji_fly_20250819_164004_6_1755653543344_video.mp4'
  );
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="col-span-12 md:col-span-4 apple-card relative overflow-hidden rounded-2xl h-[350px] sm:h-[400px] group shadow-sm bg-black border border-white/10 flex flex-col justify-between select-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.includes('.mp4')) {
              target.src = 'https://res.cloudinary.com/boofzznx/video/upload/v1789433129/dji_fly_20250819_164004_6_1755653543344_video.mov';
            } else if (!target.src.includes('/videos/drone-bayview.mp4')) {
              target.src = '/videos/drone-bayview.mp4';
            }
          }}
        />
        {/* Soft Vignette Overlay only for text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Discreet Mute Button on Hover (Top Right) */}
      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-black/50 hover:bg-[#e45831] text-white flex items-center justify-center backdrop-blur-sm transition-all"
          title={isMuted ? 'Activar sonido' : 'Silenciar'}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
        >
          <span className="material-symbols-outlined text-lg">
            {isMuted ? 'volume_off' : 'volume_up'}
          </span>
        </button>
      </div>

      {/* Bottom Service Content (Pure, Minimal, Original Agency Style) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10">
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
        <p className="text-white/80 text-xs font-normal font-['Inter',sans-serif]">
          Perspectivas 4K aéreas con pilotos certificados para todo tipo de proyectos.
        </p>
      </div>
    </div>
  );
};
