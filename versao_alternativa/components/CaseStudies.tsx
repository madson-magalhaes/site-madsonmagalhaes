export default function CaseStudies() {
  const cases = [
    {
      title: "🏥 Clínica de Saúde",
      challenge: "Agendamentos manuais, chamadas perdidas, pacientes confusos",
      solution: "Agente de IA para recepção e triagem",
      result: "90% de agendamentos automatizados",
      roi: "3 meses",
      color: "green",
    },
    {
      title: "🏗️ Empresa de Engenharia",
      challenge: "Resposta lenta a orçamentos, leads perdidos",
      solution: "Agente de intake de projetos com automação",
      result: "Proposta em 2 horas (antes: 2 semanas)",
      roi: "2 meses",
      color: "blue",
    },
    {
      title: "📱 SaaS B2B",
      challenge: "Suporte sobrecarregado, onboarding lento",
      solution: "Agente de sucesso do cliente inteligente",
      result: "65% redução em tickets, retenção +22%",
      roi: "2.5 meses",
      color: "orange",
    },
  ];

  return (
    <section id="cases" className="py-20 md:py-32 section-divider">
      <div className="container-safe">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ✅ Casos de Sucesso
          </h2>
          <p className="text-lg text-gray-300">
            Resultados reais de empresas em diferentes setores
          </p>
        </div>

        <div className="grid-3 md:grid-cols-3">
          {cases.map((caseItem, idx) => (
            <div key={idx} className={`box box-${caseItem.color}`}>
              <h3 className="mb-4">
                {caseItem.title}
              </h3>

              <div className="mb-3">
                <p className="text-xs font-semibold text-brand-orange mb-1">❌ DESAFIO</p>
                <p className="text-sm">{caseItem.challenge}</p>
              </div>

              <div className="mb-4 pb-4 border-b-2 border-current border-opacity-30">
                <p className="text-xs font-semibold text-brand-orange mb-1">🎯 SOLUÇÃO</p>
                <p className="text-sm font-semibold text-white">{caseItem.solution}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-brand-orange mb-2">🏆 RESULTADO</p>
                <p className="text-sm font-bold text-green-400">{caseItem.result}</p>
                <p className="text-xs mt-2 text-yellow-300">⏱️ ROI em {caseItem.roi}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-box mt-12">
          <p>📊 Múltiplos Setores, Resultados Reais</p>
          <p className="secondary">
            SaaS • Varejo • Financeiro • Logística • Marketing • Educação • Saúde • Engenharia • E muito mais
          </p>
        </div>
      </div>
    </section>
  );
}
