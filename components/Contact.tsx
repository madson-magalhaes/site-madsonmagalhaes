"use client";

import { useTracking } from "@/hooks/useTracking";
import { getOrCreateRefId } from "@/lib/tracking";
import { useState } from "react";

export default function Contact() {
  const { trackClique } = useTracking();
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/558896758647");

  useEffect(() => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558896758647";
    const whatsappMessageTemplate =
      process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
      "Olá! Vim da sua landing page. Cupom: {cupom}";

    const refId = getOrCreateRefId();
    const whatsappMessageRaw = whatsappMessageTemplate.replace("{cupom}", refId);
    const whatsappMessage = encodeURIComponent(whatsappMessageRaw);

    setWhatsappUrl(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`);
  }, []);

  const handleWhatsAppClick = () => {
    trackClique(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "558896758647");
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

              <a
                href={whatsappUrl}
                onClick={handleWhatsAppClick}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full text-center text-lg py-4 block"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
