export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-primary/50 border-t border-brand-orange/30">
      <div className="container-safe py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pt-6">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                <span className="text-brand-orange text-xl font-bold">AI</span>
              </div>
              <span className="text-brand-text-primary font-semibold">
                Madson Magalhães
              </span>
            </div>
            <p className="text-brand-text-secondary text-sm">
              Agentes de IA que reduzem custos e melhoram a satisfação do cliente.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-brand-text-primary font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-brand-orange transition"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="hover:text-brand-orange transition"
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="hover:text-brand-orange transition"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="hover:text-brand-orange transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h4 className="text-brand-text-primary font-semibold">
              Setores
            </h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>Clínicas de Saúde</li>
              <li>Empresas de Engenharia</li>
              <li>SaaS & Software</li>
              <li>Outros Setores</li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-brand-text-primary font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>
                <a href="/politica-privacidade" className="hover:text-brand-orange transition">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos-uso" className="hover:text-brand-orange transition">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-orange/30 pt-8">
          <p className="text-sm text-brand-text-muted text-center">
            © {currentYear} Madson Magalhães - Inteligência Artificial para negócios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
