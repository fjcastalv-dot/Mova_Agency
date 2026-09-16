import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(['Branding e identidad de marca', 'Diseño y desarrollo de páginas web']);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    'Fotografía comercial y corporativa',
    'Producción y edición de video',
    'Fotografía y video con dron',
    'Gestión de redes sociales',
    'Branding e identidad de marca',
    'Diseño y desarrollo de páginas web',
    'Publicidad digital'
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `Hola MOVA, me gustaría solicitar una cotización:\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      (formData.company ? `*Empresa:* ${formData.company}\n` : '') +
      `*Servicios:* ${selectedServices.join(', ')}\n` +
      `*Detalles:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/529982401868?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#f6f2ee] rounded-2xl border border-[#e45831]/20 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#1b1b1b]/5 hover:bg-[#e45831] hover:text-white transition-colors flex items-center justify-center"
          aria-label="Cerrar modal"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {!submitted ? (
          <div>
            <span className="text-xs font-bold text-[#e45831] uppercase tracking-[0.2em] block mb-2">
              Cotización & Propuesta
            </span>
            <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#1b1b1b] mb-4">
              Solicitar <span className="text-[#e45831] italic">Cotización</span>
            </h2>
            <p className="text-sm text-[#444748] mb-8">
              Cuéntanos brevemente sobre tu marca y objetivos. Te responderemos en menos de 24 horas con una propuesta estratégica.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1b1b] mb-3">
                  ¿Qué servicios necesitas?
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#e45831] text-white shadow-md shadow-[#e45831]/20'
                            : 'bg-[#1b1b1b]/5 text-[#444748] hover:bg-[#1b1b1b]/10'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#444748] mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Sofía Martínez"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-white text-sm focus:outline-none focus:border-[#e45831]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#444748] mb-1">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sofia@empresa.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-white text-sm focus:outline-none focus:border-[#e45831]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#444748] mb-1">
                  Empresa / Marca
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ej. MOVA Studio"
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-white text-sm focus:outline-none focus:border-[#e45831]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#444748] mb-1">
                  Detalles del Proyecto *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Cuéntanos brevemente sobre tu visión, requerimientos o fechas límite..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-white text-sm focus:outline-none focus:border-[#e45831]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs uppercase font-bold text-[#444748] hover:bg-[#1b1b1b]/5 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">chat</span>
                  Solicitar Cotización por WhatsApp
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-3xl">chat</span>
            </div>
            <h3 className="font-['Hanken_Grotesk'] text-3xl font-extrabold text-[#1b1b1b]">
              ¡Cotización Lista, {formData.name || 'Cliente'}!
            </h3>
            <p className="text-sm text-[#444748] max-w-md mx-auto leading-relaxed">
              Hemos preparado tu solicitud para <strong className="text-[#e45831]">{selectedServices.join(', ')}</strong>. Se ha abierto el chat de WhatsApp con nuestro equipo (<strong className="text-[#1b1b1b]">+52 998 240 1868</strong>).
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#e45831]/10 text-left text-xs space-y-1 max-w-md mx-auto">
              <div className="text-[#868380] uppercase tracking-wider font-bold">Resumen de Solicitud</div>
              <div><strong className="text-[#1b1b1b]">Empresa:</strong> {formData.company || 'N/A'}</div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/529982401868?text=${encodeURIComponent(
                  `Hola MOVA, me gustaría solicitar una cotización:\n\n` +
                  `*Nombre:* ${formData.name}\n` +
                  `*Email:* ${formData.email}\n` +
                  (formData.company ? `*Empresa:* ${formData.company}\n` : '') +
                  `*Servicios:* ${selectedServices.join(', ')}\n` +
                  `*Detalles:* ${formData.message}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                Abrir Chat de WhatsApp (+52 998 240 1868)
              </a>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1b1b1b] text-white hover:bg-[#e45831] transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
