import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade - Outsider M.",
  description: "Conheça nossa política de privacidade e como protegemos seus dados.",
};

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-gradient-dark text-brand-text-primary min-h-screen">
      {/* Header */}
      <header className="bg-brand-dark-primary/50 border-b border-brand-orange/30">
        <div className="container-safe py-6">
          <Link href="/" className="inline-flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center">
              <span className="text-brand-orange text-xl font-bold">AI</span>
            </div>
            <span className="text-brand-text-primary font-semibold">Madson - Inteligência Artificial para negócios</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-safe py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-brand-orange">Política de Privacidade</h1>

          <p className="text-brand-text-secondary mb-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Sua Privacidade é Importante para Nós</h2>
              <p className="text-brand-text-secondary">
                Este site está comprometido em respeitar sua privacidade em relação às informações coletadas em nosso website e plataformas relacionadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Coleta de Informações</h2>
              <p className="text-brand-text-secondary">
                Solicitamos informações pessoais apenas quando necessário para fornecer nossos serviços. Coletamos dados de forma legal, com conhecimento e consentimento do usuário, e explicamos por que as informações são coletadas e como serão utilizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Retenção e Segurança de Dados</h2>
              <p className="text-brand-text-secondary mb-4">
                As informações são retidas apenas pelo tempo necessário para os serviços solicitados. Protegemos os dados armazenados utilizando meios comercialmente aceitáveis para prevenir perda, roubo, acesso não autorizado, divulgação, cópia, uso ou modificação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Compartilhamento de Informações</h2>
              <p className="text-brand-text-secondary">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Você reconhece e consente que podemos compartilhar suas informações quando legalmente obrigados a fazer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Links Externos</h2>
              <p className="text-brand-text-secondary">
                Nosso site contém links para websites externos fora de nosso controle. Você deve estar ciente de que não podemos aceitar responsabilidade pelas práticas de privacidade desses sites externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Direitos do Usuário</h2>
              <p className="text-brand-text-secondary">
                Você pode recusar solicitações de informações pessoais, entendendo que alguns serviços podem se tornar indisponíveis como resultado. Você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Google AdSense</h2>
              <p className="text-brand-text-secondary">
                Utilizamos o Google AdSense para publicidade, empregando cookies do DoubleClick para entregar anúncios relevantes enquanto limitamos a exposição repetitiva.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Compromissos do Usuário</h2>
              <p className="text-brand-text-secondary">
                Você concorda em usar este site de forma legal e apropriada, comprometendo-se a evitar atividades ilegais, conteúdo discriminatório, distribuição de malware e violações de direitos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">Contato</h2>
              <p className="text-brand-text-secondary">
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco através do formulário em nossa página principal.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-brand-orange/30">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-brand-orange text-brand-dark-primary font-semibold rounded-lg hover:bg-opacity-90 transition"
            >
              Voltar ao Site
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
