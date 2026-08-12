# Quick Start Guide

## 🚀 Iniciar em 3 passos

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Iniciar Servidor Local
```bash
npm run dev
```

### 3️⃣ Acessar no Navegador
```
http://localhost:3000
```

Done! ✅

---

## 📝 Personalizar o Site

### Editar Textos Principais

**Homepage Hero:**
- Arquivo: `components/Hero.tsx`
- Edite: Headline, subheading, CTAs

**Seções:**
- "How It Works" → `components/HowItWorks.tsx`
- "Industries" → `components/Industries.tsx`
- "Case Studies" → `components/CaseStudies.tsx`
- "Services" → `components/Services.tsx`

**Header/Footer:**
- Logo e navegação → `components/Header.tsx`
- Links e info → `components/Footer.tsx`

### Alterar Cores

Abra `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    orange: "#FF6700",      // Sua marca
    "dark-primary": "#0A1128",
    // ...
  }
}
```

### Substituir Imagem

1. Colocar nova imagem em `public/` (ex: `public/avatar.jpg`)
2. Editar `components/Hero.tsx`:
```typescript
<Image
  src="/avatar.jpg"  // ← Mude aqui
  alt="AI Consulting"
  // ...
/>
```

---

## 🧪 Testar Localmente

### Form de Contato
1. Navegue até "Schedule Free Audit"
2. Preencha o formulário
3. Clique "Schedule Free Audit"
4. Deve aparecer mensagem de sucesso ✓

**Nota:** Email não funciona em dev. Para teste completo:
- Configure SMTP em `.env.local`
- Reinicie servidor (`npm run dev`)

### Responsividade
1. Abra DevTools (F12 / Cmd+Option+I)
2. Clique em "Toggle device toolbar" (Ctrl+Shift+M)
3. Teste em diferentes tamanhos:
   - iPhone (375px)
   - iPad (768px)
   - Desktop (1920px)

### Performance
1. Abra DevTools → Lighthouse
2. Clique "Analyze page load"
3. Deve ter score 90+ ✓

---

## 🔧 Configurações Importantes

### Email Notifications (Opcional)

Se quiser receber emails de novos leads:

1. **Usar Gmail:**
   ```bash
   # Edite .env.local
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=seu-email@gmail.com
   SMTP_PASS=sua-senha-app
   CONTACT_EMAIL_TO=seu-email@domain.com
   ```

2. **Implementar no código:**
   - Edite `app/api/contact/route.ts`
   - Descomente a seção de email
   - Instale: `npm install nodemailer`

3. **Reinicie:**
   ```bash
   npm run dev
   ```

### Segurança: Variáveis de Ambiente

**Nunca commitar:**
- ❌ .env.local
- ❌ Senhas SMTP
- ❌ API Keys

**Sempre usar:**
- ✅ .env.example (exemplo)
- ✅ Vercel Environment Variables (produção)

---

## 📦 Build & Deploy Local

### Testar Build de Produção
```bash
npm run build    # Compila o site
npm start        # Inicia servidor de produção
```
Acesse: http://localhost:3000

### Type Check
```bash
npm run type-check
```
Verifica erros de TypeScript.

---

## 🐛 Troubleshooting

### "Porta 3000 já está em uso"
```bash
# Mude para outra porta
npm run dev -- -p 3001
# Acesse: http://localhost:3001
```

### "Module not found"
```bash
# Reinstale dependências
rm -rf node_modules
npm install
npm run dev
```

### "Form validation failing"
- Verrifique `.env.local` existe
- Cheque console (F12) para erros
- Limpe cache: Ctrl+Shift+Delete

### "Imagem não carrega"
- Verifique arquivo existe em `/public`
- Verifique nome do arquivo (case-sensitive)
- Reinicie servidor: `npm run dev`

---

## 📱 Mobile Testing

### Local Network
```bash
# Terminal mostra:
# Local:    http://localhost:3000
# Network:  http://192.168.X.X:3000

# Acesse do seu phone via Network URL
```

### DevTools
```
F12 → Ctrl+Shift+M (Toggle device)
```

---

## 🚀 Deploy Rápido para Vercel

### Primeira vez

1. **GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOU/site-madson.git
   git push -u origin main
   ```

2. **Vercel:**
   - Abra vercel.com
   - Clique "New Project"
   - Selecione seu repo
   - Configure env vars
   - Click "Deploy"

3. **Domínio:**
   - Vercel Dashboard → Settings → Domains
   - Adicione seu domínio
   - Configure DNS (24-48h)

### Updates Futuros

```bash
git add .
git commit -m "Update case studies"
git push origin main
# → Vercel deploy automático!
```

---

## 📚 Estrutura de Componentes

```
Header
  ↓
Hero (Headline + CTA)
  ↓
HowItWorks (4 passos)
  ↓
Industries (Healthcare + Engenharia)
  ↓
CaseStudies (3 casos)
  ↓
Services (3 tiers)
  ↓
Contact (Form)
  ↓
Footer
```

Cada componente é independente e reutilizável.

---

## ✅ Checklist Antes de Produção

- [ ] Revisar todos os textos
- [ ] Adicionar case studies reais
- [ ] Testar form de contato
- [ ] Testar em mobile
- [ ] Run `npm run build` (sem erros)
- [ ] Run `npm audit` (segurança)
- [ ] Configurar domínio custom
- [ ] Verificar .env.local está em .gitignore
- [ ] Deploy para Vercel

---

## 🤝 Precisa de Ajuda?

- **Next.js:** https://nextjs.org/docs
- **Tailwind:** https://tailwindcss.com/docs
- **Vercel:** https://vercel.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Tudo pronto! Seu site está rodando em http://localhost:3000** 🎉
