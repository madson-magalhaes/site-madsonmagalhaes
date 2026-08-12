# 📧 Setup Gmail App Password

Para configurar o envio de emails com o Gmail, você precisa de uma **App Password** (não é sua senha normal do Gmail).

## Passo 1: Ativar Autenticação em 2 Etapas

1. Vá para: https://myaccount.google.com
2. Clique em **Segurança** (à esquerda)
3. Procure por **Autenticação em 2 etapas**
4. Clique em **Ativar** (se ainda não estiver ativada)
5. Siga as instruções do Google (vai pedir seu número de telefone)

## Passo 2: Gerar App Password

1. Após ativar 2FA, volte para: https://myaccount.google.com/security
2. Procure por **Senhas de aplicativo** (abaixo de "Autenticação em 2 etapas")
3. Se não vir, certifique-se de ter 2FA ativado
4. Clique em **Senhas de aplicativo**
5. Selecione:
   - **Aplicativo**: Mail
   - **Dispositivo**: Windows Computer (ou seu sistema operacional)
6. Clique em **Gerar**
7. Google vai gerar uma senha de 16 caracteres com espaços: `xxxx xxxx xxxx xxxx`

## Passo 3: Configurar no `.env.local`

Copie a senha gerada (com espaços) e atualize `.env.local`:

```env
SMTP_USER=outsidermadson@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
CONTACT_EMAIL_TO=outsidermadson@gmail.com
```

⚠️ **IMPORTANTE**: 
- A senha tem **espaços** - não remova!
- Ela é diferente da sua senha normal do Gmail
- Nunca commite `.env.local` no Git (já está em `.gitignore`)

## Passo 4: Testar Localmente

1. Certifique-se de ter parado o servidor anterior: `Ctrl+C`
2. Inicie um novo servidor:
   ```bash
   npm run dev
   ```
3. Abra http://localhost:3000 no navegador
4. Role até a seção de contato
5. Preencha o formulário com dados de teste:
   - Nome: Seu Nome
   - Email: seu-email-pessoal@gmail.com (qualquer email funciona)
   - Empresa: Empresa Teste
   - Setor: Tecnologia
   - Mensagem: Teste de formulário
6. Clique em **Enviar**
7. Verifique seu email `outsidermadson@gmail.com` em alguns segundos

## Passo 5: Verificar Logs

Se não receber o email, verifique o console do servidor:

```bash
# Terminal mostrará:
Email sent successfully: <message-id>
# ou
Error sending email: <erro>
```

## Possíveis Erros

### "Invalid login"
- A App Password pode estar incorreta
- Verifique se tem espaços (xxxx xxxx xxxx xxxx)
- Gere uma nova se necessário

### "Less secure apps"
- O Gmail bloqueia apps "menos seguros"
- Use App Password em vez de senha normal
- Isso é normal e esperado

### Email não chega
- Verifique pasta "Spam/Lixo"
- O email pode levar 5-10 segundos
- Verifique os logs do console

## Para Produção (Vercel/Hostinger)

Quando fizer deploy, você vai adicionar essas variáveis no painel de ambiente da plataforma:

**Vercel:**
1. Vá para seu projeto em vercel.com
2. Settings → Environment Variables
3. Adicione:
   - `SMTP_USER`: `outsidermadson@gmail.com`
   - `SMTP_PASS`: `xxxx xxxx xxxx xxxx`
   - `CONTACT_EMAIL_TO`: `outsidermadson@gmail.com`

**Hostinger:**
1. Vá para cPanel
2. Variables (ou Environment)
3. Adicione as mesmas variáveis

## ✅ Checklist

- [ ] 2FA ativado em myaccount.google.com
- [ ] App Password gerado
- [ ] `.env.local` atualizado com a senha
- [ ] Server iniciado com `npm run dev`
- [ ] Formulário testado localmente
- [ ] Email recebido em `outsidermadson@gmail.com`
- [ ] Logs mostram "Email sent successfully"

Pronto! Seu email está configurado! 🚀
