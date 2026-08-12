"use client";

import { useTracking } from "@/hooks/useTracking";
import { useState } from "react";

export default function Contact() {
  const { trackClique } = useTracking();
  const [loading, setLoading] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappMessageRaw = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Olá! Vim da sua landing page. Gostaria de agendar uma consulta.";
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
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.446 1.087l-.319.183-.33-.052c-1.132-.143-2.193-.435-3.159-.996l-.203-.129-.21.06c-.747.249-1.426.692-1.898 1.28-.523.684-.837 1.529-.837 2.441 0 1.494.376 2.888 1.115 4.165l.158.308-.102.323c-.704 2.289.039 4.582 1.726 6.08.832.74 1.852 1.226 2.952 1.407 1.541.254 3.153-.212 4.402-1.289.719.04 1.417-.129 2.027-.446 1.727-1.013 2.918-2.854 3.269-4.867.076-.461.104-.923.104-1.377 0-.552-.021-1.042-.062-1.342-.302-2.346-1.884-4.318-4.127-5.026-.996-.33-2.054-.469-3.143-.469zm11.427-2.347c-1.106.54-2.319.864-3.554.958-.653.05-1.42.023-1.554-1.11-.131-1.051-.669-2.055-1.42-2.751-.381-.349-.814-.646-1.289-.887-1.139-.584-2.521-.726-3.746-.424C1.08 1.907-.717 4.298-.717 7.051 0 10.063.675 12.75 2.151 14.969 3.543 17.075 5.526 18.681 7.78 19.52c.758.272 1.545.408 2.345.408 1.266 0 2.514-.312 3.627-.94 1.619-.911 2.845-2.436 3.415-4.27.565-1.88.565-3.878 0-5.758-.57-1.834-1.796-3.359-3.415-4.27z" />
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
