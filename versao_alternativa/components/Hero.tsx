"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                🤖 Agentes de IA que{" "}
                <span className="text-brand-orange">Geram Lucro</span>
              </h1>
              <p className="text-lg text-gray-300">
                Implante agentes de IA para atendimento 24/7. Agentes inteligentes, treinamentos estratégicos e consultoria para crescimento escalável.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="button-primary text-center">
                Começar Agora
              </a>
              <a href="#cases" className="button-secondary text-center">
                Ver Casos
              </a>
            </div>

            <div className="pt-8 border-t-4 border-brand-orange space-y-3">
              <p className="text-sm font-semibold text-brand-orange">💡 Confie em soluções de IA para:</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex gap-3 items-start">
                  <span className="text-brand-orange text-lg">✓</span>
                  <span><strong>Agentes de atendimento 24/7</strong> em diversos setores</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-orange text-lg">✓</span>
                  <span><strong>Treinamento estratégico</strong> do seu time em IA</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-brand-orange text-lg">✓</span>
                  <span><strong>Automação inteligente</strong> de processos críticos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <Image
                src="/madson.png"
                alt="Consultoria em IA"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
