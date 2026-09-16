import React, { useState } from 'react';
import { ActivePage, MethodologyStep } from '../types';
import { MOVA_BRAND_BOOK, MOVA_METHODOLOGY_STEPS } from '../data/movaData';

interface MethodologyPageProps {
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({
  setActivePage,
  onOpenContact,
}) => {
  const [selectedStep, setSelectedStep] = useState<MethodologyStep | null>(null);

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      {/* Hero Title Section */}
      <section className="px-5 md:px-16 mb-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-[#1b1b1b]/10 pb-8">
          <div className="max-w-4xl">
            <span className="font-['Hanken_Grotesk'] text-xs font-bold text-[#e45831] uppercase tracking-widest mb-3 block">
              METODOLOGÍA MOVA
            </span>
            <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-[#1b1b1b] mb-4 leading-[1.08] tracking-tighter">
              {MOVA_BRAND_BOOK.tagline}
            </h1>
            <p className="text-base sm:text-lg text-[#444748] max-w-2xl leading-relaxed font-medium">
              Proceso estructurado en 5 etapas para desarrollar estrategias visuales y digitales con altos estándares de calidad y resultados reales.
            </p>
          </div>
          <div className="hidden md:block font-mono text-xs text-[#868380] uppercase tracking-wider pb-2">
            BRANDBOOK 2026
          </div>
        </div>
      </section>

      {/* 5 Process Steps Grid */}
      <section className="px-5 md:px-16 mb-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-l border-[#1b1b1b]/10 bg-white shadow-sm">
          {MOVA_METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.number}
              onClick={() => setSelectedStep(step)}
              className="group border-r border-b border-[#1b1b1b]/10 p-6 sm:p-8 hover:bg-[#f6f2ee] transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-['Hanken_Grotesk'] text-3xl font-extrabold text-[#e45831]">
                    {step.number}
                  </span>
                  <span className="material-symbols-outlined text-[#e45831] text-2xl">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1b1b1b] mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#444748] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1b1b1b]/10 flex items-center justify-between group-hover:text-[#e45831] transition-colors">
                <span className="text-xs font-semibold uppercase tracking-wider">{step.tag}</span>
                <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Essence Section */}
      <section className="px-5 md:px-16 mb-16 max-w-screen-2xl mx-auto">
        <div className="bg-[#1b1b1b] text-white rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
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
      </section>

      {/* CTA Section */}
      <section className="px-5 md:px-16 max-w-screen-2xl mx-auto">
        <div className="bg-[#e45831] text-white rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold mb-3">
            {MOVA_BRAND_BOOK.contact.tagline}
          </h2>
          <p className="text-sm sm:text-base text-white/90 mb-8 max-w-xl mx-auto">
            Trabajemos juntos con nuestra metodología para dar el siguiente paso.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 bg-white text-[#e45831] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#f6f2ee] transition-all shadow-md"
          >
            Iniciar Proyecto
          </button>
        </div>
      </section>

      {/* Step Detail Modal */}
      {selectedStep && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#f6f2ee] rounded-2xl border border-[#e45831]/20 p-8 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedStep(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1b1b1b]/5 hover:bg-[#e45831] hover:text-white transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="font-['Hanken_Grotesk'] text-3xl font-extrabold text-[#e45831]">
                {selectedStep.number}
              </span>
              <div>
                <span className="text-[10px] font-bold text-[#e45831] uppercase tracking-widest block">
                  {selectedStep.tag}
                </span>
                <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1b1b]">
                  {selectedStep.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#444748] leading-relaxed font-['Inter',sans-serif]">
              {selectedStep.description}
            </p>

            <div className="space-y-3 pt-2">
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

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={() => setSelectedStep(null)}
                className="text-xs uppercase font-bold text-[#868380] hover:text-[#1b1b1b]"
              >
                Cerrar
              </button>
              <button
                onClick={() => {
                  setSelectedStep(null);
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-full bg-[#e45831] text-white text-xs uppercase tracking-widest font-bold hover:bg-[#d04a25] transition-all"
              >
                Iniciar esta Fase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
