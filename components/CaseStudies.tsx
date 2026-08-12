export default function CaseStudies() {
  const sectors = [
    {
      id: 1,
      sector: "Setor Industrial",
      description: "Lubrificantes e processos industriais",
      icon: "⚙️",
    },
    {
      id: 2,
      sector: "Energia",
      description: "Geração Termoelétrica",
      icon: "⚡",
    },
    {
      id: 3,
      sector: "Pesca",
      description: "Automação e controle de processos pesqueiros",
      icon: "🎣",
    },
    {
      id: 4,
      sector: "Saúde",
      description: "Clínicas de saúde e atendimento ao paciente",
      icon: "🏥",
    },
    {
      id: 5,
      sector: "E-commerce",
      description: "Integração e automação de plataformas",
      icon: "🛒",
    },
    {
      id: 6,
      sector: "Capacitação",
      description: "Treinamentos em aplicação de IA para negócios",
      icon: "📚",
    },
  ];

  return (
    <section
      id="cases"
      className="py-20 bg-gradient-dark border-t border-brand-orange/30"
    >
      <div className="container-safe">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary">
            Experiência em Diversos Setores
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Mais de 10 anos desenvolvendo soluções tecnológicas personalizadas para empresas de diferentes indústrias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div
              key={sector.id}
              className="card-dark p-8 space-y-4 hover:border-brand-orange/50 transition"
            >
              <div className="text-5xl">{sector.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-text-primary">
                  {sector.sector}
                </h3>
                <p className="text-brand-text-secondary">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-dark p-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-brand-text-primary">
              Conheça nossas soluções
            </h3>
            <p className="text-brand-text-secondary">
              Com mais de 10 anos de experiência, entendo os desafios reais enfrentados por empresas em diferentes segmentos. Utilizo essa expertise para criar agentes de IA que geram impacto real e sustentável.
            </p>
            <a href="#contato" className="button-primary inline-block mt-4">
              Discutir seu projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
