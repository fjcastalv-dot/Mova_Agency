import React from 'react';
import { ActivePage } from '../types';
import { MOVA_BRAND_BOOK } from '../data/movaData';
import logoImg from '../assets/logo.png';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenContact }) => {
  return (
    <footer className="bg-[#f6f2ee] w-full py-16 border-t border-[#e45831]/10 text-[#1b1b1b]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 md:px-16 w-full gap-8 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setActivePage('home')}
            className="text-left group flex items-center focus:outline-none"
          >
            <img
              src={logoImg}
              alt="MOVA Logo"
              className="h-10 md:h-12 w-auto object-contain hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </button>
          <span className="text-xs font-bold text-[#1b1b1b] tracking-widest uppercase">
            AGENCIA CREATIVA Y DIGITAL
          </span>
          <p className="text-[#e45831] font-bold text-xs uppercase tracking-wider max-w-xs">
            {MOVA_BRAND_BOOK.tagline}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest mb-1">
              Explorar
            </span>
            <button
              onClick={() => setActivePage('home')}
              className="text-left text-sm text-[#444748] hover:text-[#e45831] transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => setActivePage('services')}
              className="text-left text-sm text-[#444748] hover:text-[#e45831] transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="text-left text-sm text-[#444748] hover:text-[#e45831] transition-colors"
            >
              Contacto
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest mb-1">
              Sedes
            </span>
            <span className="text-sm text-[#444748]">Cancún</span>
            <span className="text-sm text-[#444748]">CDMX</span>
            <span className="text-sm text-[#444748]">Playa del Carmen</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-widest mb-1">
              Contacto
            </span>
            <a
              href={`mailto:${MOVA_BRAND_BOOK.contact.email}`}
              className="text-sm text-[#1b1b1b] hover:text-[#e45831] transition-colors font-medium"
            >
              {MOVA_BRAND_BOOK.contact.email}
            </a>
            <a
              href="https://wa.me/529982401868?text=Hola%20MOVA,%20quisiera%20solicitar%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#25D366] font-bold hover:underline flex items-center gap-1"
            >
              <span>WhatsApp: +52 998 240 1868</span>
            </a>
            <button
              onClick={onOpenContact}
              className="mt-1 text-left text-xs font-bold uppercase text-[#e45831] hover:underline"
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 mt-12 pt-6 border-t border-[#e45831]/10 flex flex-col sm:flex-row justify-between items-center text-xs text-[#868380] gap-4">
        <div>© 2026 MOVA Agencia Creativa y Digital. Todos los derechos reservados.</div>
        <div className="text-xs text-[#1b1b1b] font-medium">
          {MOVA_BRAND_BOOK.contact.locations}
        </div>
      </div>
    </footer>
  );
};
