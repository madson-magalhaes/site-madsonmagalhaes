"use client";

export default function About() {
  const credentials = [
    "PhD em Engenharia Química",
    "10+ anos em Transformação Digital",
    "Desenvolvedor de Agentes de IA",
    "Consultoria em diversos setores produtivos",
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/madson-magalhaes.png"
              alt="Madson Magalhães"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Info */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-brand-text-primary">
                Madson Magalhães
              </h1>
              <p className="text-2xl text-brand-orange font-semibold">
                Especialista em IA para Negócios
              </p>
            </div>

            <p className="text-lg text-brand-text-secondary leading-relaxed">
              Transformo negócios através de soluções inteligentes. Combinando expertise técnica com visão estratégica para impulsionar crescimento e eficiência operacional.
            </p>

            <div className="space-y-3">
              {credentials.map((credential, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <span className="text-brand-orange text-xl mt-1">✓</span>
                  <p className="text-brand-text-secondary">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
