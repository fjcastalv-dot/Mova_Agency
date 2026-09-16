import React from 'react';
import { ActivePage } from '../types';
import { MOVA_SERVICES } from '../data/movaData';
import { PhotoGalleryCard } from '../components/PhotoGalleryCard';
import { ProductionVideoCard } from '../components/ProductionVideoCard';
import { DroneVideoCard } from '../components/DroneVideoCard';

interface ServicesPageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  setActivePage,
  onOpenContact,
  onOpenReel,
}) => {
  return (
    <div className="pt-28 pb-16 animate-fade-in">
      {/* Hero Section */}
      <section className="px-5 md:px-16 py-8 md:py-12 max-w-screen-2xl mx-auto">
        <span className="font-['Hanken_Grotesk'] text-xs font-bold text-[#e45831] uppercase tracking-[0.2em] mb-3 block">
          Capacidades
        </span>
        <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1b1b1b] mb-6 leading-[1.05] tracking-tighter">
          NUESTROS <br />
          <span className="text-[#e45831] italic font-medium">SERVICIOS.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#444748] max-w-2xl leading-relaxed">
          Soluciones creativas y estratégicas diseñadas para elevar tu presencia de marca en el ecosistema digital contemporáneo.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="px-5 md:px-16 py-12 bg-[#f6f2ee]">
        <div className="max-w-screen-2xl mx-auto editorial-grid">
          {/* Service 1: Dynamic Photo Gallery (IMG_6683, DSC00659, DSC02422) */}
          <PhotoGalleryCard />

          {/* Service 2: Reel Video Production (reel-asesora.mp4) */}
          <ProductionVideoCard onOpenReelModal={onOpenReel} />

          {/* Service 3: Gestión de redes sociales */}
          <div className="col-span-12 md:col-span-4 apple-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between bg-white border border-[#1b1b1b]/10 shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs font-bold text-[#e45831] tracking-widest">
                  03 / 07
                </span>
                <span className="text-[10px] font-bold text-[#868380] uppercase tracking-widest">
                  SOCIAL
                </span>
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-3 text-[#1b1b1b]">
                Gestión de redes sociales
              </h3>
              <p className="text-[16px] text-[#444748] mb-8 leading-relaxed font-normal font-['Inter',sans-serif]">
                Estrategias integrales de contenido orgánico, dinamización de comunidad y planificación editorial.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1b1b1b]/5">
              <span className="text-[10px] font-bold tracking-widest uppercase border border-[#e45831]/30 px-3 py-1 rounded-full text-[#e45831]">
                GESTIÓN
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase border border-[#e45831]/30 px-3 py-1 rounded-full text-[#e45831]">
                CONTENIDO
              </span>
            </div>
          </div>

          {/* Service 4: Fotografía y video con dron (drone-bayview.mp4) */}
          <DroneVideoCard />

          {/* Service 5: Branding e identidad de marca */}
          <div className="col-span-12 md:col-span-4 apple-card p-8 sm:p-10 rounded-2xl flex flex-col justify-between bg-white border border-[#1b1b1b]/10 shadow-sm">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-xs font-bold text-[#e45831] tracking-widest">
                  05 / 07
                </span>
                <span className="text-[10px] font-bold text-[#868380] uppercase tracking-widest">
                  IDENTIDAD
                </span>
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-3 text-[#1b1b1b]">
                Branding e identidad de marca
              </h3>
              <p className="text-[16px] text-[#444748] mb-6 leading-relaxed font-normal font-['Inter',sans-serif]">
                Creación y renovación de sistemas de identidad visual, manuales de marca y estrategia.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-[#1b1b1b]/5">
              <div className="aspect-square bg-[#f6f2ee] rounded-lg border border-[#e45831]/20"></div>
              <div className="aspect-square bg-[#e45831] rounded-lg"></div>
              <div className="aspect-square bg-[#1b1b1b] rounded-lg"></div>
              <div className="aspect-square bg-[#c4c7c7] rounded-lg"></div>
            </div>
          </div>

          {/* Service 6: Diseño y desarrollo de páginas web */}
          <div className="col-span-12 md:col-span-8 apple-card p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-center gap-8 bg-white border border-[#1b1b1b]/10 shadow-sm">
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs font-bold text-[#e45831] tracking-widest">
                  06 / 07
                </span>
                <span className="text-[10px] font-bold text-[#868380] uppercase tracking-widest">
                  DIGITAL
                </span>
              </div>
              <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-[#1b1b1b] mb-3">
                Diseño y desarrollo de páginas web
              </h3>
              <p className="text-[16px] text-[#444748] mb-6 leading-relaxed font-normal font-['Inter',sans-serif]">
                Desarrollo de sitios web a medida, optimizados para velocidad, experiencia de usuario y conversión.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-[#e45831]/10 text-[#e45831] text-[10px] font-bold rounded-full">UI/UX</span>
                <span className="px-3 py-1 bg-[#e45831]/10 text-[#e45831] text-[10px] font-bold rounded-full">DEVELOPMENT</span>
                <span className="px-3 py-1 bg-[#e45831]/10 text-[#e45831] text-[10px] font-bold rounded-full">SEO</span>
              </div>
            </div>

            {/* Interactive Browser Preview Mock */}
            <div className="flex-1 w-full aspect-video bg-[#f6f2ee] rounded-xl overflow-hidden border border-[#1b1b1b]/10 shadow-inner">
              <div className="w-full h-7 bg-[#e8e8e8] flex items-center px-3 gap-1.5 border-b border-[#1b1b1b]/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e45831]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#1b1b1b]/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#1b1b1b]/10"></div>
              </div>
              <div className="p-4 space-y-2.5">
                <div className="h-3.5 bg-[#e45831]/20 rounded w-3/4"></div>
                <div className="h-3 bg-[#1b1b1b]/10 rounded w-1/2"></div>
                <div className="h-16 bg-[#e45831]/10 rounded-lg w-full flex items-center justify-center text-[10px] text-[#e45831] font-bold uppercase tracking-wider">
                  MOVA Web Studio
                </div>
              </div>
            </div>
          </div>

          {/* Service 7: Publicidad digital */}
          <div className="col-span-12 md:col-span-4 apple-card p-8 sm:p-10 rounded-2xl bg-[#e45831] text-white flex flex-col justify-between shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <span className="font-mono text-xs font-bold text-white/80 tracking-widest">
                07 / 07
              </span>
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                CAMPAÑAS
              </span>
            </div>
            <div>
              <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold mb-3">
                Publicidad digital
              </h3>
              <p className="text-[16px] text-white/90 leading-relaxed font-normal font-['Inter',sans-serif]">
                Gestión y optimización de campañas de publicidad digital en Google Ads, Meta Ads y plataformas clave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo Podemos Ayudar? Section */}
      <section className="bg-black text-white px-5 md:px-16 py-16 md:py-24 border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header Title */}
          <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold mb-12 sm:mb-16 tracking-tight flex items-center flex-wrap gap-1">
            <span className="text-white">¿CÓMO PODEMOS AYUDAR?</span>
          </h2>

          {/* 3 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            {/* Column 1 */}
            <div className="md:pr-8 md:border-r border-white/20 flex flex-col">
              <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-black tracking-wide uppercase leading-tight text-white mb-3">
                PRODUCCIÓN<br />AUDIOVISUAL
              </h3>
              <p className="text-sm sm:text-base text-[#e45831] font-medium leading-snug mb-6">
                ideal para proyectos específicos.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-white/90 font-['Inter',sans-serif]">
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Videos promocionales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Reels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Videos para campañas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Cobertura de eventos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Videos corporativos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Drone.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Fotografía profesional.</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="md:px-8 md:border-r border-white/20 flex flex-col">
              <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-black tracking-wide uppercase leading-tight text-white mb-3">
                CONTENIDO MENSUAL<br />PARA REDES
              </h3>
              <p className="text-sm sm:text-base text-[#e45831] font-medium leading-snug mb-6">
                Generamos el contenido de todo el mes en una sola producción.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-white/90 font-['Inter',sans-serif]">
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Reels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Fotografías.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Tomas de apoyo (B-roll).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Historias.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Contenido para campañas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Material listo para publicar.</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="md:pl-8 flex flex-col">
              <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-black tracking-wide uppercase leading-tight text-white mb-3">
                GESTIÓN INTEGRAL<br />DE REDES
              </h3>
              <p className="text-sm sm:text-base text-[#e45831] font-medium leading-snug mb-6">
                Nos encargamos de toda la estrategia digital.
              </p>
              <ul className="space-y-2.5 text-sm sm:text-base text-white/90 font-['Inter',sans-serif]">
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Planeación mensual.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Estrategia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Producción.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Edición.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Diseño.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Publicación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Reportes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white select-none">•</span>
                  <span>Campañas publicitarias (opcional).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white px-5 md:px-16 py-20 relative overflow-hidden border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
            ¿LISTO PARA <br />
            <span className="text-[#e45831] italic font-medium">CONECTAR?</span>
          </h2>
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-4 bg-[#e45831] text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#d04a25] transition-all shadow-xl shadow-[#e45831]/30 active:scale-95"
          >
            <span>Hablemos</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};
