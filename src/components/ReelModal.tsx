import React, { useState } from 'react';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  if (!isOpen) return null;

  const reelProjects = [
    {
      title: 'Evita estos 3 errores al comprar en Cancún',
      client: 'Asesoría Inmobiliaria Cancún',
      duration: '00:55',
      category: 'Reel Estratégico & Retención',
      videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1789432709/evita_estos_3_errores_al_comprar_en_cancun.mp4',
      cover: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433184/DSC00024.jpg',
      desc: 'Estrategia de video vertical con subtítulos de alta retención para broker inmobiliario certificado.'
    },
    {
      title: 'Toma Aérea Cancún • DJI Fly 4K',
      client: 'Perspectivas Aéreas MOVA',
      duration: '00:13',
      category: 'Dron 4K & Cine Aéreo',
      videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1789433129/dji_fly_20250819_164004_6_1755653543344_video.mp4',
      cover: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433199/IMG_6683.jpg',
      desc: 'Tomas cinematográficas con dron en alta definición capturando arquitectura y costas caribeñas.'
    },
    {
      title: 'Producción & Colorimetría Comercial',
      client: 'MOVA Creative Reel',
      duration: '01:10',
      category: 'Comercial & Gastronomía',
      videoUrl: 'https://res.cloudinary.com/boofzznx/video/upload/v1789432709/evita_estos_3_errores_al_comprar_en_cancun.mp4',
      cover: 'https://res.cloudinary.com/boofzznx/image/upload/v1789433183/DSC02422.jpg',
      desc: 'Edición dinámica, motion graphics, corrección de color y dirección fotográfica publicitaria.'
    }
  ];

  const currentProject = reelProjects[activeProjectIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#111111] text-white rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
        {/* Top bar */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#e45831] animate-ping"></span>
            <span className="font-['Hanken_Grotesk'] text-xs uppercase tracking-widest text-[#e45831] font-bold">
              MOVA CINEMA REEL 2025
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#e45831] transition-colors flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group flex items-center justify-center">
          {isPlaying ? (
            <video
              key={currentProject.videoUrl}
              src={currentProject.videoUrl}
              controls
              autoPlay
              playsInline
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <>
              <img
                src={currentProject.cover}
                alt={currentProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-60 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* Center Play Overlay */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-[#e45831] text-white flex items-center justify-center shadow-xl shadow-[#e45831]/40 border border-white/20">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </div>
              </button>
            </>
          )}

          {/* Video Title & Badge */}
          {!isPlaying && (
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#e45831] px-2 py-0.5 rounded bg-black/60 border border-[#e45831]/30">
                  {currentProject.category}
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl md:text-3xl font-extrabold mt-2 text-white">
                  {currentProject.title}
                </h3>
                <p className="text-xs text-white/70 max-w-md mt-1 hidden sm:block">
                  {currentProject.desc}
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-white/60">{currentProject.duration}</span>
              </div>
            </div>
          )}
        </div>

        {/* Reel Selector Bar */}
        <div className="p-6 bg-[#181818] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {reelProjects.map((proj, idx) => (
            <button
              key={proj.title}
              onClick={() => {
                setActiveProjectIndex(idx);
                setIsPlaying(true);
              }}
              className={`p-3 rounded-lg text-left transition-all border ${
                activeProjectIndex === idx
                  ? 'border-[#e45831] bg-[#e45831]/10 text-white font-semibold'
                  : 'border-white/5 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="text-[10px] font-bold text-[#e45831] uppercase tracking-wider mb-0.5">
                0{idx + 1} / {proj.client}
              </div>
              <div className="text-xs font-medium truncate">{proj.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
