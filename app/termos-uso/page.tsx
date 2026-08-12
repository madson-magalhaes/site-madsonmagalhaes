import Link from "next/link";

export const metadata = {
  title: "Termos de Uso - Outsider M.",
  description: "Leia nossos termos de uso e condições de serviço.",
};

export default function TermosUso() {
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
          <h1 className="text-4xl font-bold mb-8 text-brand-orange">Termos de Uso</h1>

          <p className="text-brand-text-secondary mb-6">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">1. Termos</h2>
              <p className="text-brand-text-secondary">
                Ao acessar este website, você aceita estar vinculado por estes termos e condições. Você se compromete em cumprir com todos os termos estabelecidos, as leis aplicáveis e regulações locais. Todos os materiais contidos neste site são protegidos por leis de direitos autorais e marcas registradas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">2. Licença de Uso</h2>
              <p className="text-brand-text-secondary mb-4">
                O site concede direitos temporários, pessoais e não comerciais apenas para visualizar os materiais. Você não pode:
              </p>
              <ul className="list-disc list-inside text-brand-text-secondary space-y-2 ml-4">
                <li>Modificar ou copiar os materiais</li>
                <li>Usar os materiais para qualquer propósito comercial</li>
                <li>Fazer engenharia reversa, descompilar ou desassemblar qualquer software contido no site</li>
                <li>Remover qualquer aviso de direitos autorais ou propriedade dos materiais</li>
                <li>Transferir os materiais para outro servidor</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">3. Isenção de Garantias</h2>
              <p className="text-brand-text-secondary">
                Os materiais neste site são fornecidos "como estão" sem garantias expressas ou implícitas. Este site não faz representações ou garantias quanto à precisão, confiabilidade ou resultados prováveis do uso dos materiais em seu site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">4. Limitações</h2>
              <p className="text-brand-text-secondary">
                Este site não será responsável por qualquer dano que resulte do uso ou incapacidade de usar os materiais do site, mesmo que o operador do site ou um representante autorizado tenha sido notificado da possibilidade de tais danos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">5. Precisão do Conteúdo</h2>
              <p className="text-brand-text-secondary">
                Os materiais que aparecem no site podem incluir erros técnicos, tipográficos ou fotográficos. Este site não garante que nenhum dos materiais em seu site seja preciso, completo ou atual. Este site pode fazer alterações nos materiais contidos em seu site a qualquer momento sem aviso prévio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">6. Links</h2>
              <p className="text-brand-text-secondary">
                Este site não fez uma revisão abrangente de todos os sites vinculados ao seu website e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso do site. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">7. Modificações dos Termos</h2>
              <p className="text-brand-text-secondary">
                Este site pode revisar estes termos de serviço para seu website a qualquer momento sem aviso prévio. Ao usar este website você está concordando em ficar vinculado pela versão atual desses termos de serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">8. Lei Aplicável</h2>
              <p className="text-brand-text-secondary">
                Estes termos e condições são governados por e construídos de acordo com as leis da República Federativa do Brasil, e você irrevogavelmente consente a submissão à jurisdição exclusiva dos tribunais localizados nesta localidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-brand-text-primary mb-4">9. Contato</h2>
              <p className="text-brand-text-secondary">
                Se você tiver alguma dúvida sobre estes Termos de Uso, favor entrar em contato conosco através do formulário de contato em nossa página principal.
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
