export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Analise seu Processo",
      description:
        "Análise profunda do seu fluxo de atendimento. Identifique ineficiências e quantifique custos atuais.",
      icon: "📊",
    },
    {
      number: 2,
      title: "Implante o Agente",
      description:
        "Agente de IA personalizado conectado aos seus sistemas. Online em 4-6 semanas com mínima disrupção.",
      icon: "🤖",
    },
    {
      number: 3,
      title: "Veja os Resultados",
      description:
        "60-80% menos tickets. Economia mensal significativa. Melhor experiência do cliente.",
      icon: "📈",
    },
    {
      number: 4,
      title: "Escale e Otimize",
      description:
        "Expanda para novos canais. Integre novos fluxos de trabalho. Melhoria contínua.",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-20 bg-gradient-dark border-t border-brand-orange/30"
    >
      <div className="container-safe">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary">
            Nosso Processo
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Metodologia comprovada em 4 etapas, da auditoria inicial ao scaling contínuo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-dark p-6 space-y-4 hover:border-brand-orange/50 transition"
            >
              <div className="text-4xl">{step.icon}</div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-brand-orange font-bold text-2xl">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-brand-text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-brand-text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
