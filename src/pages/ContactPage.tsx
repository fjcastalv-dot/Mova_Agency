import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Branding e identidad de marca',
    'Diseño y desarrollo de páginas web'
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Fotografía comercial y corporativa',
    'Producción y edición de video',
    'Fotografía y video con dron',
    'Gestión de redes sociales',
    'Branding e identidad de marca',
    'Diseño y desarrollo de páginas web',
    'Publicidad digital'
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `Hola MOVA, me gustaría solicitar información:\n\n` +
      `*Nombre:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      (formData.company ? `*Empresa:* ${formData.company}\n` : '') +
      (formData.phone ? `*Teléfono:* ${formData.phone}\n` : '') +
      `*Servicios:* ${selectedServices.join(', ')}\n` +
      `*Detalles:* ${formData.details}`;

    const whatsappUrl = `https://wa.me/529982401868?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-28 pb-16 animate-fade-in">
      <section className="px-5 md:px-16 py-8 md:py-12 max-w-screen-2xl mx-auto">
        <span className="font-['Hanken_Grotesk'] text-xs font-bold text-[#e45831] uppercase tracking-[0.3em] mb-3 block">
          Contacto Directo
        </span>
        <h1 className="font-['Hanken_Grotesk'] text-4xl sm:text-6xl font-extrabold text-[#1b1b1b] mb-6 leading-tight tracking-tighter">
          Hablemos de tu <br />
          <span className="text-[#e45831] italic font-medium">próximo proyecto.</span>
        </h1>
      </section>

      <section className="px-5 md:px-16 py-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Studio details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-[#e45831]/10 shadow-sm space-y-6">
              <h3 className="font-['Hanken_Grotesk'] text-xl font-bold text-[#1b1b1b]">
                Atención al Cliente & Nuevos Negocios
              </h3>
              
              <div className="space-y-4 text-sm text-[#444748]">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e45831] mt-0.5">mail</span>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#1b1b1b]">Email</div>
                    <a href="mailto:contacto@movacreative.mx" className="text-[#e45831] font-semibold hover:underline">
                      contacto@movacreative.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#25D366] mt-0.5">chat</span>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#1b1b1b]">WhatsApp Directo</div>
                    <a
                      href="https://wa.me/529982401868?text=Hola%20MOVA,%20quisiera%20solicitar%20informaci%C3%B3n"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline flex items-center gap-1"
                    >
                      +52 998 240 1868
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e45831] mt-0.5">call</span>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#1b1b1b]">Teléfono</div>
                    <a href="tel:+529982401868" className="text-[#1b1b1b] font-medium hover:underline">
                      +52 998 240 1868
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#e45831] mt-0.5">location_on</span>
                  <div>
                    <div className="text-xs uppercase font-bold text-[#1b1b1b]">Ubicación</div>
                    <p className="text-xs text-[#444748] font-medium font-['Inter',sans-serif]">
                      Cancún | CDMX | Playa del Carmen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] text-white p-8 rounded-2xl shadow-xl space-y-4">
              <span className="text-[10px] uppercase font-bold text-[#e45831] tracking-widest block">
                COMPROMISO MOVA
              </span>
              <h4 className="font-['Hanken_Grotesk'] text-2xl font-extrabold">
                Respuesta en menos de 24h
              </h4>
              <p className="text-[13px] text-white/70 leading-relaxed font-['Inter',sans-serif]">
                Cada propuesta es evaluada directamente por nuestro equipo directivo para garantizar viabilidad técnica y alineación creativa.
              </p>
            </div>
          </div>

          {/* Right: Interactive Configurator & Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#e45831]/15 shadow-xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#1b1b1b] mb-2">
                    Configura tu Consulta
                  </h3>

                  {/* Services Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1b1b1b] mb-3">
                      Servicios Requeridos
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const active = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold font-['Inter',sans-serif] transition-all ${
                              active
                                ? 'bg-[#e45831] text-white shadow-md'
                                : 'bg-[#f6f2ee] text-[#444748] hover:bg-[#e45831]/10'
                            }`}
                          >
                            {active ? '✓ ' : '+ '}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#444748] mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu Nombre"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-[#f6f2ee] text-sm focus:outline-none focus:border-[#e45831]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#444748] mb-1">
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@empresa.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-[#f6f2ee] text-sm focus:outline-none focus:border-[#e45831]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#444748] mb-1">
                        Empresa / Marca
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nombre de Empresa"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-[#f6f2ee] text-sm focus:outline-none focus:border-[#e45831]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-[#444748] mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-[#f6f2ee] text-sm focus:outline-none focus:border-[#e45831]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#444748] mb-1">
                      Descripción del Proyecto *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Explícanos tu propuesta, objetivos o plazos estimados..."
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1b1b1b]/10 bg-[#f6f2ee] text-sm focus:outline-none focus:border-[#e45831]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">chat</span>
                    <span>Enviar Consulta a WhatsApp (+52 998 240 1868)</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-3xl">chat</span>
                  </div>
                  <h3 className="font-['Hanken_Grotesk'] text-3xl font-extrabold text-[#1b1b1b]">
                    ¡Gracias, {formData.name}!
                  </h3>
                  <p className="text-sm text-[#444748] max-w-md mx-auto leading-relaxed">
                    Hemos preparado tu solicitud para <strong className="text-[#e45831]">{selectedServices.join(', ')}</strong>. Se ha abierto la ventana de chat directo de WhatsApp con nuestro número de atención <strong className="text-[#1b1b1b]">+52 998 240 1868</strong>.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/529982401868?text=${encodeURIComponent(
                        `Hola MOVA, me gustaría solicitar información:\n\n` +
                        `*Nombre:* ${formData.name}\n` +
                        `*Email:* ${formData.email}\n` +
                        (formData.company ? `*Empresa:* ${formData.company}\n` : '') +
                        (formData.phone ? `*Teléfono:* ${formData.phone}\n` : '') +
                        `*Servicios:* ${selectedServices.join(', ')}\n` +
                        `*Detalles:* ${formData.details}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-lg flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">chat</span>
                      <span>Abrir Chat de WhatsApp (+52 998 240 1868)</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', company: '', phone: '', details: '' });
                      }}
                      className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1b1b1b] text-white hover:bg-[#e45831] transition-all"
                    >
                      Enviar Otra Consulta
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
