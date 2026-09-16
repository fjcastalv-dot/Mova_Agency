import React, { useState } from 'react';
import { ActivePage, MethodologyStep } from '../types';
import { MOVA_BRAND_BOOK, MOVA_VALUES, MOVA_METHODOLOGY_STEPS } from '../data/movaData';
import { ShowcaseGallery } from '../components/ShowcaseGallery';

interface HomePageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActivePage, onOpenContact, onOpenReel }) => {
  const [selectedStep, setSelectedStep] = useState<MethodologyStep | null>(null);

  return (
    <div className="pt-28 pb-16">
      {/* Hero Section */}
      <section className="px-5 md:px-16 py-8 md:py-16 max-w-screen-2xl mx-auto animate-fade-in">
        <div className="editorial-grid items-end">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-['Hanken_Grotesk'] text-xs text-[#e45831] uppercase tracking-[0.4em] mb-4 block font-bold">
              AGENCIA CREATIVA Y DIGITAL
            </span>
            <h1 className="font-['Hanken_Grotesk'] text-[44px] sm:text-[64px] lg:text-[76px] font-extrabold leading-[0.92] text-[#e45831] max-w-4xl mb-8 tracking-tighter">
              Estrategias<br />
              <span className="text-[#1b1b1b] italic font-normal">QUE MUEVEN MARCAS</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-6">
            <p className="text-base sm:text-lg text-[#444748] max-w-sm border-l-2 border-[#e45831] pl-5 leading-relaxed font-medium mb-8 font-['Inter',sans-serif]">
              Transformamos la visión de marcas exigentes a través de producción audiovisual, estrategia digital y diseño de alto nivel.
            </p>
            <div className="flex flex-wrap gap-4 items-center pl-5">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-[#e45831] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#d04a25] transition-all shadow-md shadow-[#e45831]/20 active:scale-95"
              >
                Solicitar Cotización
              </button>
              <button
                onClick={onOpenReel}
                className="px-6 py-3 border border-[#1b1b1b]/20 text-[#1b1b1b] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1b1b1b] hover:text-white transition-all flex items-center gap-2"
              >
                <span>Ver Cinema Reel</span>
                <span className="material-symbols-outlined text-sm">play_arrow</span>
              </button>
            </div>
          </div>
        </div>

        {/* Visual Showcase Gallery */}
        <ShowcaseGallery />
      </section>

      {/* Quienes Somos / Misión & Visión */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Misión */}
          <div className="group relative">
            {/* Ambient Backlight Halo LED Effect behind the card */}
            <div className="absolute -inset-1 bg-[#e45831]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-2 sm:-inset-3 bg-[#e45831]/12 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 bg-white p-8 sm:p-10 rounded-2xl border border-[#1b1b1b]/10 apple-card shadow-sm group-hover:border-[#e45831]/40 transition-all duration-500 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-xs font-bold text-[#e45831] uppercase tracking-widest block mb-2">
                  01 / MISIÓN
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-[#1b1b1b] uppercase tracking-wider mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-base sm:text-lg text-[#1b1b1b] font-medium leading-relaxed font-['Inter',sans-serif]">
                  {MOVA_BRAND_BOOK.mission}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Visión */}
          <div className="group relative">
            {/* Ambient Backlight Halo LED Effect behind the card */}
            <div className="absolute -inset-1 bg-[#e45831]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-75 transition-all duration-500 pointer-events-none" />
            <div className="absolute -inset-2 sm:-inset-3 bg-[#e45831]/12 rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 pointer-events-none" />

            <div className="relative z-10 bg-white p-8 sm:p-10 rounded-2xl border border-[#1b1b1b]/10 apple-card shadow-sm group-hover:border-[#e45831]/40 transition-all duration-500 flex flex-col justify-between h-full">
              <div>
                <span className="font-mono text-xs font-bold text-[#1b1b1b] group-hover:text-[#e45831] transition-colors uppercase tracking-widest block mb-2">
                  02 / VISIÓN
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl sm:text-3xl font-bold text-[#1b1b1b] uppercase tracking-wider mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-base sm:text-lg text-[#1b1b1b] font-medium leading-relaxed font-['Inter',sans-serif]">
                  {MOVA_BRAND_BOOK.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los 6 Valores MOVA (Animación Apple-Card) */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 border-b border-[#1b1b1b]/10 pb-6">
          <div>
            <span className="text-xs text-[#e45831] uppercase tracking-[0.3em] font-bold block mb-2">
              FILOSOFÍA DE TRABAJO
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b]">
              Los 6 Valores <span className="text-[#e45831]">MOVA</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOVA_VALUES.map((val, idx) => (
            <div
              key={val.title}
              className="group p-8 rounded-2xl border border-[#1b1b1b]/10 bg-white hover:bg-[#e45831] transition-all duration-500 hover:shadow-xl hover:shadow-[#e45831]/15 cursor-pointer flex flex-col justify-between apple-card"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs font-bold text-[#e45831] group-hover:text-white/80 transition-colors tracking-widest">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-[1px] bg-[#e45831]/30 group-hover:bg-white/40 transition-colors"></div>
                </div>
                <h4 className="font-['Hanken_Grotesk'] text-xl font-bold uppercase tracking-wide mb-3 group-hover:text-white transition-colors text-[#1b1b1b]">
                  {val.title}
                </h4>
                <p className="text-sm text-[#444748] leading-relaxed group-hover:text-white/90 transition-colors font-normal font-['Inter',sans-serif]">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 border-b border-[#1b1b1b]/10 pb-6">
          <div>
            <span className="text-xs text-[#e45831] uppercase tracking-[0.3em] font-bold block mb-2">
              PROCESO DE TRABAJO
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b]">
              Metodología <span className="text-[#e45831]">MOVA</span>
            </h2>
          </div>
          <p className="text-xs text-[#868380] uppercase tracking-wider max-w-xs mt-4 sm:mt-0 font-mono sm:text-right">
            5 Fases para Garantizar Calidad y Resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-[#1b1b1b]/10 bg-white rounded-2xl shadow-sm overflow-hidden">
          {MOVA_METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.number}
              onClick={() => setSelectedStep(step)}
              className="group border-r border-b border-[#1b1b1b]/10 p-5 sm:p-6 xl:p-8 hover:bg-[#1b1b1b] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-xs font-bold text-[#e45831] tracking-widest">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-bold text-[#868380] group-hover:text-white/60 uppercase tracking-wider transition-colors">
                    ETAPA
                  </span>
                </div>
                <h3 className="font-['Hanken_Grotesk'] text-base sm:text-lg lg:text-xl font-extrabold text-[#1b1b1b] group-hover:text-white mb-2 uppercase tracking-tight transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444748] group-hover:text-white/80 leading-relaxed transition-colors font-['Inter',sans-serif]">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#1b1b1b]/5 group-hover:border-white/10 flex items-center justify-between text-[10px] font-bold text-[#e45831] uppercase tracking-wider transition-all">
                <span>Ver Detalle</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Detail Modal */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative border border-[#e45831]/20 animate-fade-in">
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-4 right-4 text-[#444748] hover:text-[#e45831]"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#e45831]/10 flex items-center justify-center text-[#e45831]">
                <span className="material-symbols-outlined">{selectedStep.icon}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#e45831] uppercase tracking-widest">
                  Etapa {selectedStep.number}
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1b1b] uppercase">
                  {selectedStep.title}
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#444748] mb-6 leading-relaxed">
              {selectedStep.description}
            </p>
            <div className="space-y-2 pt-2 border-t border-[#1b1b1b]/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1b1b]">
                Acciones Clave:
              </h4>
              <ul className="space-y-2 text-xs text-[#444748]">
                {selectedStep.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#e45831] text-sm mt-0.5">
                      check_circle
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setSelectedStep(null)}
              className="w-full mt-6 py-3 bg-[#e45831] text-white rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-[#d04a25] transition-colors"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Strategic Value Proposition */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="bg-[#1b1b1b] text-white rounded-2xl p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#e45831]"></div>
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#e45831] tracking-[0.3em] uppercase block mb-3">
              EL ENFOQUE MOVA
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Diseñado para marcas que buscan destacar.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <span className="font-mono text-xs font-bold text-[#e45831] block mb-2">01 / ESTÁNDAR</span>
              <h3 className="font-['Hanken_Grotesk'] text-xl font-bold mb-2">Artesanía Visual</h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal font-['Inter',sans-serif]">
                Cada toma, encuadre y pieza gráfica pasa por rigurosos controles estéticos y técnicos antes de publicarse.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#e45831] block mb-2">02 / ESTRATEGIA</span>
              <h3 className="font-['Hanken_Grotesk'] text-xl font-bold mb-2">Impacto Tangible</h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal font-['Inter',sans-serif]">
                No hacemos piezas bonitas vacías. Desarrollamos narrativas alineadas a tus objetivos de conversión y posicionamiento.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#e45831] block mb-2">03 / COBERTURA</span>
              <h3 className="font-['Hanken_Grotesk'] text-xl font-bold mb-2">Presencia Multisede</h3>
              <p className="text-sm text-white/70 leading-relaxed font-normal font-['Inter',sans-serif]">
                Equipos de producción activos en Cancún, Ciudad de México y Playa del Carmen para responder con agilidad.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
            <span className="text-xs font-mono text-white/60 uppercase">
              Descubre nuestras soluciones especializadas
            </span>
            <button
              onClick={() => setActivePage('services')}
              className="text-xs font-bold uppercase tracking-widest text-[#e45831] hover:text-white transition-colors flex items-center gap-2"
            >
              <span>EXPLORAR SERVICIOS</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Essence Banner */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="bg-[#f6f2ee] rounded-2xl p-8 sm:p-14 text-center border border-[#1b1b1b]/10">
          <span className="text-xs font-bold text-[#e45831] tracking-[0.3em] uppercase block mb-3">
            {MOVA_BRAND_BOOK.essence.headline}
          </span>
          <p className="font-['Hanken_Grotesk'] text-xl sm:text-2xl text-[#1b1b1b] max-w-3xl mx-auto mb-3 font-semibold uppercase">
            {MOVA_BRAND_BOOK.essence.part1}
          </p>
          <p className="font-['Hanken_Grotesk'] text-2xl sm:text-4xl font-black text-[#e45831] max-w-4xl mx-auto leading-snug uppercase">
            {MOVA_BRAND_BOOK.essence.part2}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-16 py-12 max-w-screen-2xl mx-auto">
        <div className="py-16 sm:py-20 bg-[#e45831] text-white rounded-2xl text-center px-6 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-5xl font-extrabold mb-4 uppercase tracking-tight">
              ¿Listo para impulsar tu marca?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-xl mx-auto font-medium">
              Cuéntanos de tu proyecto y recibe una cotización personalizada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-10 py-4 bg-white text-[#e45831] rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#f6f2ee] transition-all shadow-lg active:scale-95"
              >
                SOLICITAR COTIZACIÓN
              </button>
              <button
                onClick={() => setActivePage('services')}
                className="w-full sm:w-auto px-10 py-4 border border-white/80 text-white rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#e45831] transition-all"
              >
                VER SERVICIOS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


