"use client";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-dark flex items-center justify-center py-20">
      <div className="container-safe">
        <div className="space-y-12">
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-text-primary leading-tight">
                Soluções em IA para{" "}
                <span className="text-brand-orange">Empresas Reais</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-text-secondary max-w-3xl">
                Consultoria estratégica, desenvolvimento de agentes de IA e treinamento do seu time. Mais de 10 anos transformando negócios através da tecnologia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contato" className="button-primary text-center">
                Quero Saber Mais
              </a>
              <a href="#servicos" className="button-secondary text-center">
                Conhecer Serviços
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
