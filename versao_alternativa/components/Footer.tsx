export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-safe">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">AI</span>
              </div>
              <span className="font-bold text-lg">Consultoria</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              🤖 Agentes de IA que transformam negócios e geram lucro.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#como-funciona" className="hover:text-brand-orange transition">Como Funciona</a></li>
              <li><a href="#servicos" className="hover:text-brand-orange transition">Serviços</a></li>
              <li><a href="#cases" className="hover:text-brand-orange transition">Casos</a></li>
              <li><a href="#contato" className="hover:text-brand-orange transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Setores</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>🏥 Saúde</li>
              <li>🏗️ Engenharia</li>
              <li>📱 SaaS</li>
              <li>✨ E muito mais...</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-orange transition">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-orange transition">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-brand-orange/20 pt-8">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} <span className="text-brand-orange font-semibold">Consultoria em IA</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
