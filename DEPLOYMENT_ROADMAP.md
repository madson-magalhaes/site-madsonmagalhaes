# 🚀 Roadmap de Deploy para Produção

**Status**: Desenvolvimento  
**Atualizado**: 2026-05-10  
**Responsável**: Madson

---

## ✅ Concluído

- [x] Estrutura básica Next.js
- [x] Landing page com seções
- [x] Formulário de contato (frontend)
- [x] Políticas de Privacidade e Termos de Uso
- [x] Validação básica de input
- [x] Rate limiting em memória
- [x] TypeScript setup
- [x] Design e branding (Orange #FF6700 + Dark blue)

---

## 📋 TODO - Fase 1: Backend & Data (CRÍTICO)

### 1. Configurar Supabase
- [ ] Criar conta Supabase (https://supabase.com)
- [ ] Criar novo projeto
- [ ] Obter `SUPABASE_URL` e `SUPABASE_ANON_KEY`
- [ ] Criar tabela `contacts`:
  ```sql
  CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    industry VARCHAR(255),
    message TEXT NOT NULL,
    ip_partial VARCHAR(10),
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  );
  ```
- [ ] Criar índice em `email` e `created_at`
- [ ] Adicionar RLS (Row Level Security) se necessário

### 2. Implementar Salvamento de Contatos
- [ ] Instalar `@supabase/supabase-js`
- [ ] Criar cliente Supabase em `/lib/supabase.ts`
- [ ] Atualizar `app/api/contact/route.ts` para salvar em Supabase
- [ ] Testar salvamento localmente

### 3. Configurar Envio de Email
- [x] Escolher provedor:
  - [x] Gmail SMTP (mais simples para começar) ✅ ESCOLHIDO
  - [ ] SendGrid (recomendado para produção)
  - [ ] Resend (se quiser React emails)
- [x] Se Gmail:
  - [x] Gerar App Password
  - [x] Configurar variáveis SMTP_USER, SMTP_PASS
- [x] Implementar código de envio em `route.ts` ✅ CONCLUÍDO
- [x] Testar envio com formulário ✅ FUNCIONANDO

---

## 📋 TODO - Fase 2: Rate Limiting Persistente

### 4. Implementar Rate Limiting com Redis (Vercel) ou Database (Hostinger)

**Se usar Vercel:**
- [ ] Ativar Vercel Redis addon
- [ ] Obter `REDIS_URL`
- [ ] Instalar `redis`
- [ ] Refatorar `getRateLimit()` para usar Redis
- [ ] Testar limite 5 req/hora

**Se usar Hostinger:**
- [ ] Criar banco de dados MySQL/PostgreSQL
- [ ] Criar tabela `rate_limits`:
  ```sql
  CREATE TABLE rate_limits (
    ip VARCHAR(50) PRIMARY KEY,
    count INT DEFAULT 1,
    reset_time TIMESTAMP,
    updated_at TIMESTAMP DEFAULT NOW()
  );
  ```
- [ ] Refatorar `getRateLimit()` para usar banco
- [ ] Testar limite 5 req/hora

---

## 📋 TODO - Fase 3: Configuração de Deploy

### 5. Preparar para Vercel (Recomendado)
- [ ] Fazer login em vercel.com
- [ ] Conectar repositório GitHub
- [ ] Adicionar environment variables no painel Vercel:
  - SUPABASE_URL
  - SUPABASE_ANON_KEY
  - SMTP_HOST (ou SENDGRID_API_KEY)
  - SMTP_PORT
  - SMTP_USER
  - SMTP_PASS
  - CONTACT_EMAIL_TO
  - NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
  - REDIS_URL (se usar Vercel Redis)
- [ ] Deploy automático (deve acontecer ao fazer push)
- [ ] Testar em staging
- [ ] Configurar domínio customizado

**OU preparar para Hostinger:**
- [ ] Contatar suporte Hostinger para Node.js setup
- [ ] Obter credenciais FTP/SSH
- [ ] Configurar variáveis de ambiente no cPanel
- [ ] Fazer build local e deploy manual ou via git hooks

---

## 📋 TODO - Fase 4: Segurança & QA

### 6. Segurança
- [ ] Revisar CORS headers
- [ ] Adicionar CSP (Content Security Policy)
- [ ] Habilitar HTTPS (automático em Vercel/Hostinger)
- [ ] Revisar variáveis sensíveis (nenhuma commitada)
- [ ] Executar `npm audit` e corrigir vulnerabilidades

### 7. Testes
- [ ] Testar formulário com dados válidos
- [ ] Testar rate limiting (enviar 6 requisições)
- [ ] Testar validação de email inválido
- [ ] Verificar email recebido
- [ ] Verificar dado salvo em Supabase
- [ ] Testar em mobile
- [ ] Verificar políticas de privacidade e termos (links funcionam)

### 8. Monitoring
- [ ] Configurar logs em Vercel/Hostinger
- [ ] Testar alert de erros (opcional: Sentry)
- [ ] Monitorar uptime (opcional: Healthchecks.io)

---

## 📋 TODO - Fase 5: Pós-Deploy

### 9. Após Go Live
- [ ] Validar HTTPS está ativo
- [ ] Testar formulário em produção
- [ ] Registrar em Google Analytics (opcional)
- [ ] Registrar em Google Search Console
- [ ] Fazer backup Supabase configurado
- [ ] Documentar processo de manutenção

---

## 🔐 Checklist de Segurança Final

Antes de deixar em produção:

```
SEGURANÇA
---------
[ ] Nenhum .env.local commitado
[ ] Environment variables em painel seguro (Vercel/Hostinger)
[ ] HTTPS ativo
[ ] Rate limiting funcionando
[ ] Validação de input robusta
[ ] Erro 500 não expõe stack trace
[ ] Senhas SMTP não em código
[ ] RLS do Supabase configurado

FUNCIONALIDADE
--------------
[ ] Formulário salva no Supabase
[ ] Email é enviado para você
[ ] Validações funcionam
[ ] Rate limit bloquearia spam
[ ] Políticas de privacidade acessíveis
[ ] Links no footer funcionam

PERFORMANCE
-----------
[ ] Lighthouse score > 80
[ ] Deploy < 30s em Vercel
[ ] Banco responde < 100ms
[ ] Email enviado < 5s
```

---

## 📅 Ordem Recomendada de Execução

1. **Supabase** (banco de dados)
2. **Email** (SMTP ou SendGrid)
3. **Rate Limiting Persistente** (Redis ou DB)
4. **Testes Locais** (validar tudo funciona)
5. **Deploy Staging** (em Vercel ou Hostinger)
6. **Testes em Staging** (formulário, email, banco)
7. **Deploy Produção**
8. **Monitoramento**

---

## 💡 Dicas

- Use `.env.example` como referência para environment variables
- Nunca commite `.env.local` ou `.env.production`
- Teste rate limiting enviando 6 submissões rapidamente
- Guarde backups das chaves Supabase em lugar seguro
- Documente as credenciais de acesso (1Password, Bitwarden, etc)

---

## 📞 Próximos Passos

Quando pronto para começar Phase 1, confirme:
- [ ] Você quer usar Supabase? (ou outra opção?)
- [ ] Email com Gmail SMTP ou SendGrid?
- [ ] Vai usar Vercel ou Hostinger?

Depois é só executar o roadmap! 🚀
