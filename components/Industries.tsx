export default function Industries() {
  const industries = [
    {
      title: "Clínicas de Saúde",
      icon: "🏥",
      useCases: [
        "Agendamentos 24/7 (sem chamadas perdidas)",
        "Triagem pré-consulta",
        "Acompanhamento e lembretes",
        "Resposta a dúvidas sobre convênios",
      ],
      result: "Automação de tarefas administrativas, mais pacientes atendidos",
      impact: "Maior satisfação do paciente",
    },
    {
      title: "Empresas de Engenharia",
      icon: "🏗️",
      useCases: [
        "Automação de inquéritos de projetos",
        "Processamento de solicitações de orçamento",
        "Comunicação com fornecedores",
        "Aceleração de propostas",
      ],
      result: "Ciclo de vendas mais rápido",
      impact: "Mais leads fechados, menos trabalho manual",
    },
  ];

  return (
    <section className="py-20 bg-gradient-dark border-t border-brand-orange/30">
      <div className="container-safe">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-text-primary">
            Clientes em Diversos Setores
          </h2>
          <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Você vê apenas dois exemplos. Trabalhamos com múltiplos setores e tamanhos de empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {industries.map((industry) => (
            <div key={industry.title} className="card-dark p-8 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{industry.icon}</span>
                  <h3 className="text-2xl font-bold text-brand-text-primary">
                    {industry.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-brand-orange">
                  CASOS DE USO
                </p>
                <ul className="space-y-2">
                  {industry.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-2 text-brand-text-secondary">
                      <span className="text-brand-orange flex-shrink-0">→</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-brand-orange/30 pt-6 space-y-3">
                <div>
                  <p className="text-sm text-brand-text-muted">Resultado</p>
                  <p className="text-brand-text-primary font-semibold">
                    {industry.result}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-brand-text-muted">Impacto</p>
                  <p className="text-semantic-green font-bold text-sm">
                    {industry.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-brand-text-primary mb-3">
            E Muito Mais...
          </h3>
          <p className="text-brand-text-secondary mb-4">
            Trabalhamos com SaaS, Varejo, Serviços Financeiros, Logística, Marketing, Educação e diversos outros setores. Se sua empresa tem desafios de eficiência, comunicação ou atendimento ao cliente, temos uma solução de IA para você.
          </p>
          <a href="#contato" className="button-primary inline-block">
            Conversar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
