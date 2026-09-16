import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ReelModal } from './components/ReelModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [reelModalOpen, setReelModalOpen] = useState(false);

  // Scroll to top when active page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2ee] text-[#1b1b1b] selection:bg-[#e45831] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {(activePage === 'home' || activePage === 'about' || activePage === 'methodology') && (
          <HomePage
            setActivePage={setActivePage}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenReel={() => setReelModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            setActivePage={setActivePage}
            onOpenContact={() => setContactModalOpen(true)}
            onOpenReel={() => setReelModalOpen(true)}
          />
        )}

        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ReelModal
        isOpen={reelModalOpen}
        onClose={() => setReelModalOpen(false)}
      />
    </div>
  );
}
