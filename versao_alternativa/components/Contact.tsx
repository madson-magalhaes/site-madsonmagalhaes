import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contato" className="py-20 md:py-32 section-divider">
      <div className="container-safe">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🚀 Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-lg text-gray-300">
              Agende uma <strong>auditoria de IA gratuita</strong>. Analisaremos suas oportunidades e mostraremos o potencial de retorno.
            </p>
          </div>

          <div className="bg-white/5 p-10 rounded-lg border-3 border-brand-orange shadow-lg backdrop-blur">
            <ContactForm />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <p className="text-brand-orange font-bold mb-1">⚡ 24h</p>
              <p className="text-xs text-gray-600">Resposta rápida</p>
            </div>
            <div className="p-4">
              <p className="text-brand-orange font-bold mb-1">🔒 Seguro</p>
              <p className="text-xs text-gray-600">Dados encriptados</p>
            </div>
            <div className="p-4">
              <p className="text-brand-orange font-bold mb-1">✅ LGPD</p>
              <p className="text-xs text-gray-600">Em conformidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
