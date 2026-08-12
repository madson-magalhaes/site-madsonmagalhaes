"use client";

import { useTracking } from "@/hooks/useTracking";
import { getOrCreateRefId } from "@/lib/tracking";
import { useState } from "react";

export default function Contact() {
  const { trackClique } = useTracking();
  const [loading, setLoading] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappMessageTemplate = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Olá! Vim da sua landing page. Cupom: {cupom}";

  const refId = getOrCreateRefId();
  const whatsappMessageRaw = whatsappMessageTemplate.replace("{cupom}", refId);
  const whatsappMessage = encodeURIComponent(whatsappMessageRaw);

  const handleWhatsApp = async () => {
    trackClique();
    setLoading(true);
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
      setLoading(false);
    }, 300);
  };

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-dark border-t border-brand-orange/30"
    >
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary">
                Pronto para aumentar seus lucros?
              </h2>
              <p className="text-lg text-brand-text-secondary">
                Vamos conversar sobre seu negócio e identificar as melhores oportunidades de implementação de IA. Fale com um especialista agora.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-brand-orange font-semibold mb-2">
                  O que Esperar
                </h3>
                <ul className="space-y-2 text-brand-text-secondary">
                  <li className="flex gap-2">
                    <span className="text-brand-orange">→</span>
                    <span>Análise de custos atuais</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-orange">→</span>
                    <span>Identificação de oportunidades de IA</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-orange">→</span>
                    <span>Oportunidades de implementação</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-brand-orange">→</span>
                    <span>Roadmap de implementação personalizado</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-brand-orange/30 pt-6">
                <h3 className="text-brand-orange font-semibold mb-3">
                  Privacidade
                </h3>
                <p className="text-sm text-brand-text-secondary">
                  Seus dados estão encriptados e seguros. Nunca compartilhamos informações de contato. Em conformidade com LGPD.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp CTA */}
          <div className="card-dark p-8 flex flex-col justify-center">
            <div className="space-y-6 text-center">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-brand-text-primary">
                  Comece Agora
                </h3>
                <p className="text-brand-text-secondary">
                  Clique abaixo e vamos conversar no WhatsApp
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.01 1.01 4.35L2.05 22l6.03-1.61C10.79 22.18 11.88 22.5 13 22.5c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.02 0-2.02-.25-2.95-.7l-.21-.1-2.17.58.6-2.19-.13-.2C4.27 15.77 4 14.12 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm3.89-12.71c-.38-.38-1.01-.38-1.39 0l-.51.51c-.39.39-.39 1.02 0 1.41l1.01 1.01c-.29.86-.74 1.63-1.34 2.25l-1.01-1.01c-.39-.39-1.02-.39-1.41 0l-.51.51c-.38.38-.38 1.01 0 1.39l1.01 1.01c-.61.6-1.39 1.05-2.25 1.34l-1.01-1.01c-.39-.39-1.02-.39-1.41 0l-.51.51c-.38.38-.38 1.01 0 1.39l1.01 1.01c.86-.29 1.63-.74 2.25-1.34l1.01 1.01c.39.39 1.02.39 1.41 0l.51-.51c.38-.38.38-1.01 0-1.39l-1.01-1.01c.61-.61 1.05-1.39 1.34-2.25l1.01 1.01c.39.39 1.02.39 1.41 0l.51-.51c.39-.39.39-1.02 0-1.41z" />
                </svg>
                <span>{loading ? "Abrindo..." : "Conversar no WhatsApp"}</span>
              </button>

              <p className="text-sm text-brand-text-secondary">
                ⚡ Resposta garantida em até 2 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
