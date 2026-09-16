import React, { useState } from 'react';
import { ActivePage } from '../types';
import logoImg from '../assets/logo.png';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Inicio' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav bg-[#f6f2ee]/90 border-b border-[#e45831]/10 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-5 md:px-16 py-2 md:py-3 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e45831] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          <button
            onClick={() => {
              setActivePage('home');
              setMobileMenuOpen(false);
            }}
            className="text-left group flex items-center focus:outline-none"
          >
            <img
              src={logoImg}
              alt="MOVA Logo"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain group-hover:opacity-90 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`font-['Hanken_Grotesk'] text-xs uppercase tracking-[0.15em] transition-all duration-300 relative py-1 focus:outline-none ${
                  isActive
                    ? 'text-[#e45831] font-bold border-b-2 border-[#e45831]'
                    : 'text-[#444748] font-medium hover:text-[#e45831]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <button
          onClick={onOpenContact}
          className="bg-[#e45831] text-white px-5 md:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#d04a25] transition-all duration-300 shadow-md shadow-[#e45831]/20 active:scale-95"
        >
          Cotizar Proyecto
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f6f2ee] border-b border-[#e45831]/15 px-6 py-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm uppercase tracking-wider py-2 font-semibold border-b border-[#1b1b1b]/5 flex items-center justify-between ${
                    isActive ? 'text-[#e45831] pl-2 border-l-2 border-[#e45831]' : 'text-[#1b1b1b]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
