export default function Services() {
  const services = [
    {
      id: 1,
      name: "Consultoria Estratégica",
      description: "Analisamos seus processos para identificar as melhores oportunidades de aplicação de IA no seu negócio",
      features: [
        "Análise do seu negócio",
        "Identificação de oportunidades",
        "Plano de implementação",
        "Estimativa de impacto",
      ],
      icon: "🔍",
    },
    {
      id: 2,
      name: "Desenvolvimento de Agentes IA",
      description: "Criamos agentes de IA personalizados e prontos para usar, integrados com seus sistemas atuais",
      features: [
        "Agente customizado para seu negócio",
        "Integração com seus sistemas",
        "Suporte 24/7",
        "Contínuo aprimoramento",
      ],
      icon: "🤖",
    },
    {
      id: 3,
      name: "Treinamento e Capacitação",
      description: "Preparamos seu time para trabalhar com IA e obter o máximo de valor das soluções implementadas",
      features: [
        "Treinamento prático",
        "Conceitos de IA explicados",
        "Como usar agentes de IA",
        "Suporte contínuo",
      ],
      icon: "📚",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-dark border-t border-brand-orange/30"
    >
      <div className="container-safe">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary">
            Nossos Serviços
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Soluções completas em IA, do planejamento à implementação e capacitação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-dark p-8 space-y-6 hover:border-brand-orange/50 transition flex flex-col"
            >
              <div className="space-y-4">
                <div className="text-5xl">{service.icon}</div>
                <h3 className="text-2xl font-bold text-brand-text-primary">
                  {service.name}
                </h3>
                <p className="text-brand-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 border-t border-brand-orange/30 pt-6 flex-grow">
                {service.features.map((feature) => (
                  <div key={feature} className="flex gap-3">
                    <span className="text-brand-orange flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-brand-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="button-primary w-full text-center mt-auto"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 bg-brand-orange/10 border border-brand-orange/30 rounded-lg text-center max-w-2xl mx-auto">
          <p className="text-brand-text-primary font-semibold text-lg mb-2">
            Investimento Personalizado
          </p>
          <p className="text-brand-text-secondary">
            Cada projeto é único. Vamos conversar sobre suas necessidades específicas para criar uma solução adequada ao seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
