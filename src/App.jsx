import React, { useState } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappUrl = "https://wa.me/573126132588?text=Hola,%20quisiera%20solicitar%20información%20sobre%20los%20servicios%20de%20salud%20ocupacional.";

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-slate-800 flex flex-col font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-extrabold text-[#003366]">Integra Ocupacional</h1>
            <span className="text-xs text-slate-500 hidden sm:inline">| IPS Salud Ocupacional</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700">
            <a href="#inicio" className="hover:text-[#003366]">Inicio</a>
            <a href="#servicios" className="hover:text-[#003366]">Servicios SST</a>
            <a href="#contacto" className="hover:text-[#003366]">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#D32F2F] hover:opacity-90 shadow-sm"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="inicio" className="py-16 lg:py-24 bg-gradient-to-b from-white to-[#F4F6F8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#003366] text-xs font-semibold uppercase tracking-wider">
              Medicina Laboral y Preventiva
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#003366] leading-tight">
              Protegemos la salud de sus trabajadores, impulsamos su empresa
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Brindamos servicios integrales de seguridad y salud en el trabajo con altos estándares de calidad y cumplimiento normativo.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg text-white font-semibold bg-[#003366] hover:bg-blue-900 shadow-md"
              >
                Atención por WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-[#003366] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              IO
            </div>
            <h3 className="text-xl font-bold text-[#003366]">Integra Ocupacional IPS</h3>
            <p className="text-sm text-slate-500 italic">Al servicio del bienestar laboral</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-[#D32F2F] uppercase tracking-widest mb-2">Portafolio</h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-[#003366]">Servicios Especializados</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">Exámenes Ocupacionales</h3>
              <p className="text-slate-600 text-sm mb-6">Evaluaciones médicas de ingreso, periódicos, de retiro y post-incapacidad.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-2.5 rounded-lg border border-[#1E88E5] text-[#1E88E5] text-sm font-semibold hover:bg-blue-50">
              Gestionar Cita
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">Optometría y Audiometría</h3>
              <p className="text-slate-600 text-sm mb-6">Tamizajes visuales y auditivos especializados para ambientes industriales.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-2.5 rounded-lg border border-[#1E88E5] text-[#1E88E5] text-sm font-semibold hover:bg-blue-50">
              Gestionar Cita
            </button>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#003366] mb-3">Laboratorio Clínico</h3>
              <p className="text-slate-600 text-sm mb-6">Pruebas paraclínicas ocupacionales y toxicológicas completas.</p>
            </div>
            <button onClick={() => setIsModalOpen(true)} className="w-full py-2.5 rounded-lg border border-[#1E88E5] text-[#1E88E5] text-sm font-semibold hover:bg-blue-50">
              Gestionar Cita
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-[#003366] rounded-2xl text-white p-8 sm:p-12 shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-extrabold mb-4">Canal de Atención Directa</h2>
            <p className="text-blue-100 text-sm mb-4">Comuníquese con nuestro equipo para cotizaciones y agendas empresariales.</p>
            <p className="font-bold text-emerald-400">WhatsApp: 312 613 2588</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl font-extrabold text-slate-900 bg-emerald-400 hover:bg-emerald-300 shadow-lg text-center"
            >
              Escribir al WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* FOOTER */}
      <footer className="mt-auto bg-slate-900 text-slate-300 pt-8 pb-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Integra Ocupacional IPS. Calle 31 # 28-45, Palmira, Valle del Cauca, Colombia.</p>
          <p>Teléfono / WhatsApp: 312 613 2588</p>
        </div>
      </footer>

      {/* MODAL MANTENIMIENTO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 text-center space-y-4">
            <h3 className="text-xl font-bold text-[#003366]">Módulo en Mantenimiento</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos encontramos actualizando nuestra plataforma de agendamiento en línea para brindarle un mejor servicio. Pedimos disculpas por los inconvenientes ocasionados.
            </p>
            <p className="text-slate-700 font-semibold text-xs bg-slate-50 p-3 rounded-lg border border-slate-200">
              Para atención inmediata, comuníquese vía WhatsApp al <strong className="text-[#003366]">312 613 2588</strong>.
            </p>
            <div className="pt-2 flex gap-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-lg bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600"
              >
                Ir a WhatsApp
              </a>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-lg bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}