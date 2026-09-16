import React, { useState, useRef } from 'react';

interface ProductionVideoCardProps {
  onOpenReelModal?: () => void;
}

export const ProductionVideoCard: React.FC<ProductionVideoCardProps> = ({ onOpenReelModal }) => {
  const [videoSrc] = useState<string>(
    'https://res.cloudinary.com/boofzznx/video/upload/v1789432709/evita_estos_3_errores_al_comprar_en_cancun.mp4'
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
    <div className="col-span-12 md:col-span-5 apple-card relative overflow-hidden rounded-2xl h-[420px] sm:h-[500px] group shadow-sm bg-black border border-white/10 flex flex-col justify-between select-none">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden flex items-center justify-center">
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
            if (!target.src.includes('videos/reel-asesora.mp4')) {
              target.src = `${import.meta.env.BASE_URL}videos/reel-asesora.mp4`;
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
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold text-[#e45831] uppercase tracking-widest">
            02 / 07
          </span>
          <div className="h-[1px] w-8 bg-[#e45831]/60"></div>
          <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
            PRODUCCIÓN
          </span>
        </div>
        <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-white mb-2">
          Producción y edición de video
        </h3>
        <p className="text-[16px] text-white/80 max-w-sm font-['Inter',sans-serif] leading-relaxed mb-4">
          Producción audiovisual y edición cinematográfica optimizada para formatos digitales y comerciales.
        </p>

        {onOpenReelModal && (
          <button
            onClick={onOpenReelModal}
            className="flex items-center gap-2 text-[#e45831] text-xs font-bold uppercase tracking-widest group/btn hover:text-white transition-colors"
          >
            <span>VER REEL AUDIOVISUAL</span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
              arrow_forward
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
