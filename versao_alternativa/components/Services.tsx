export default function Services() {
  const services = [
    {
      icon: "🔍",
      title: "Auditoria Estratégica",
      description: "Análise profunda e diagnóstico de oportunidades de IA",
      details: "2-4 semanas",
      color: "orange",
    },
    {
      icon: "🤖",
      title: "Desenvolvimento de Agentes",
      description: "Agentes de IA personalizados e integrados ao seu negócio",
      details: "6-12 semanas",
      color: "blue",
    },
    {
      icon: "📚",
      title: "Treinamentos",
      description: "Capacite seu time em IA, prompting e automação",
      details: "Customizável",
      color: "green",
    },
    {
      icon: "📈",
      title: "Otimização Contínua",
      description: "Melhorias constantes e scaling das soluções",
      details: "Contínuo",
      color: "purple",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 section-divider">
      <div className="container-safe">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎯 Serviços Completos
          </h2>
          <p className="text-lg text-gray-300">
            Do diagnóstico ao sucesso contínuo, oferecemos soluções integradas em IA
          </p>
        </div>

        <div className="grid-2 md:grid-cols-4">
          {services.map((service, idx) => (
            <div key={idx} className={`box box-${service.color}`}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="mb-3">
                {service.title}
              </h3>
              <p className="mb-4">
                {service.description}
              </p>
              <p className="text-sm font-medium text-brand-orange">
                ⏱️ {service.details}
              </p>
            </div>
          ))}
        </div>

        <div className="highlight-box mt-12">
          <p>💰 Investimento Personalizado</p>
          <p className="secondary">
            Conforme seu projeto e escopo • Aceitamos Moedas Fiduciárias ou Criptomoedas
          </p>
        </div>
      </div>
    </section>
  );
}
