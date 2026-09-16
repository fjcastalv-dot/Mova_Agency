import React, { useState } from 'react';
import { ActivePage, MethodologyStep } from '../types';
import { MOVA_BRAND_BOOK, MOVA_METHODOLOGY_STEPS } from '../data/movaData';

interface AboutPageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
  onOpenReel: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage, onOpenContact, onOpenReel }) => {
  const [selectedStep, setSelectedStep] = useState<MethodologyStep | null>(null);

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      {/* Brand Book Intro & Tagline */}
      <section className="px-5 md:px-16 py-8 max-w-screen-2xl mx-auto">
        <span className="font-['Hanken_Grotesk'] text-xs font-bold text-[#e45831] uppercase tracking-[0.3em] mb-3 block">
          BRANDBOOK 2026
        </span>
        <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-[#1b1b1b] mb-4 tracking-tighter">
          AGENCIA CREATIVA Y DIGITAL
        </h1>
        <p className="text-lg sm:text-xl font-bold text-[#e45831] tracking-widest uppercase mb-8 border-b border-[#e45831]/20 pb-6">
          {MOVA_BRAND_BOOK.tagline}
        </p>

        {/* Introduction */}
        <div className="bg-[#f6f2ee] rounded-2xl p-8 sm:p-12 mb-12 border border-[#e45831]/10">
          <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest mb-2 block">
            {MOVA_BRAND_BOOK.introduction.title}
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#1b1b1b] mb-6 leading-relaxed">
            "{MOVA_BRAND_BOOK.introduction.paragraph1}"
          </p>
          <div className="space-y-4 text-sm sm:text-base text-[#444748] leading-relaxed max-w-4xl">
            <p>{MOVA_BRAND_BOOK.introduction.paragraph2}</p>
            <p className="font-semibold text-[#1b1b1b]">{MOVA_BRAND_BOOK.introduction.paragraph3}</p>
          </div>
        </div>

        {/* History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest block">
              {MOVA_BRAND_BOOK.history.title}
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b]">
              Pasión por Crear
            </h2>
            <p className="text-base text-[#444748] leading-relaxed">
              {MOVA_BRAND_BOOK.history.paragraph1}
            </p>
            <p className="text-base text-[#1b1b1b] font-medium leading-relaxed pt-2">
              {MOVA_BRAND_BOOK.history.paragraph2}
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-lg">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABXcPrOUq6di-q93So3n5dW0D5FXjmxkmY63k2RzhenlTiVJw0FkdzpYmg3uZTVWxZckqgo4rBqEIYUejGo87n_FMlcKCQetNcRDjs_UKZW2HqWZwiaPg_cYYFWElIzkUm4fslwjhfpMf_24yKlF8DD7-bZP7f1vAwOAKqbRfhRnOeNxwR1Anm2clY8cPj4QZvRl5Mw8_EP2pehU9MDHBZ__03FNDQ-bw2r8_0LVXKYxXN53lxQF6x"
              alt="MOVA Historia"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#1b1b1b]/10 apple-card shadow-sm">
            <span className="font-mono text-xs font-bold text-[#e45831] uppercase tracking-widest block mb-2">
              01 / MISIÓN
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1b1b] uppercase tracking-wider mb-4">
              Misión
            </h3>
            <p className="text-[16px] text-[#1b1b1b] font-medium leading-relaxed font-['Inter',sans-serif]">
              {MOVA_BRAND_BOOK.mission}
            </p>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#1b1b1b]/10 apple-card shadow-sm">
            <span className="font-mono text-xs font-bold text-[#1b1b1b] uppercase tracking-widest block mb-2">
              02 / VISIÓN
            </span>
            <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1b1b] uppercase tracking-wider mb-4">
              Visión
            </h3>
            <p className="text-[16px] text-[#1b1b1b] font-medium leading-relaxed font-['Inter',sans-serif]">
              {MOVA_BRAND_BOOK.vision}
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest block mb-1">
              PRINCIPIOS DE MARCA
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b]">
              Valores MOVA
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {MOVA_BRAND_BOOK.values.map((v, idx) => (
              <div
                key={v.title}
                className="bg-white p-6 rounded-2xl border border-[#1b1b1b]/10 text-center flex flex-col justify-between apple-card shadow-sm hover:border-[#e45831]/40"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#e45831] tracking-widest block mb-3">
                    0{idx + 1}
                  </span>
                  <h4 className="font-['Hanken_Grotesk'] font-bold text-sm text-[#1b1b1b] mb-2 uppercase">
                    {v.title}
                  </h4>
                  <p className="text-xs text-[#444748] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest block mb-1">
              PROCESO DE TRABAJO
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b]">
              Nuestra Metodología
            </h2>
            <p className="text-sm text-[#444748] mt-2 max-w-xl mx-auto">
              Un proceso ordenado en 5 fases diseñadas para garantizar coherencia, calidad y resultados en cada entrega.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-[#1b1b1b]/10 bg-white rounded-2xl shadow-sm overflow-hidden">
            {MOVA_METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.number}
                onClick={() => setSelectedStep(step)}
                className="group border-r border-b border-[#1b1b1b]/10 p-6 sm:p-8 hover:bg-[#f6f2ee] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs font-bold text-[#e45831] tracking-widest">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-bold text-[#868380] uppercase tracking-wider">
                      ETAPA
                    </span>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1b1b1b] mb-2 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-[#1b1b1b]/5 flex items-center justify-between text-[10px] font-bold text-[#e45831] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Ver Detalle</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </div>

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
              <p className="text-sm text-[#444748] mb-6 leading-relaxed font-['Inter',sans-serif]">
                {selectedStep.description}
              </p>
              <div className="space-y-2 pt-2 border-t border-[#1b1b1b]/10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1b1b1b]">
                  Acciones Clave:
                </h4>
                <ul className="space-y-2 text-xs text-[#444748]">
                  {selectedStep.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-['Inter',sans-serif]">
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

        {/* Essence Banner */}
        <div className="bg-[#1b1b1b] text-white rounded-2xl p-8 sm:p-14 text-center mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#e45831]"></div>
          <span className="text-xs font-bold text-[#e45831] tracking-[0.3em] uppercase block mb-4">
            {MOVA_BRAND_BOOK.essence.headline}
          </span>
          <p className="font-['Hanken_Grotesk'] text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4 font-semibold uppercase">
            {MOVA_BRAND_BOOK.essence.part1}
          </p>
          <p className="font-['Hanken_Grotesk'] text-2xl sm:text-4xl font-black text-[#e45831] max-w-4xl mx-auto leading-snug uppercase">
            {MOVA_BRAND_BOOK.essence.part2}
          </p>
        </div>

        {/* Contact info from Brandbook */}
        <div className="bg-[#e45831] text-white rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold mb-3">
            {MOVA_BRAND_BOOK.contact.tagline}
          </h2>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm font-medium mt-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">mail</span>
              <a href={`mailto:${MOVA_BRAND_BOOK.contact.email}`} className="hover:underline">
                {MOVA_BRAND_BOOK.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">call</span>
              <a href={`tel:${MOVA_BRAND_BOOK.contact.phone.replace(/\s+/g, '')}`} className="hover:underline">
                {MOVA_BRAND_BOOK.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">location_on</span>
              <span>{MOVA_BRAND_BOOK.contact.locations}</span>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 bg-white text-[#e45831] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#f6f2ee] transition-all shadow-md"
            >
              Contactar Agencia
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
