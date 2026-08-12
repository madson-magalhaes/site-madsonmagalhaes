# Security & Privacy Checklist

## ✅ Segurança Implementada

### Input Security
- [x] Form validation (client + server)
- [x] Email format validation
- [x] Required field checks
- [x] HTML tag removal (sanitization)
- [x] Maximum length enforcement (500 chars)
- [x] No eval() or dangerous functions

### API Security
- [x] POST-only contact endpoint
- [x] Content-Type validation
- [x] Rate limiting (5 reqs/hour per IP)
- [x] Error messages don't expose internals
- [x] Input validation on API route
- [x] Partial IP logging (privacy)

### Data Protection
- [x] Environment variables for secrets
- [x] .env.local in .gitignore
- [x] No hardcoded credentials
- [x] No PII in logs
- [x] No tracking scripts by default

### Network Security
- [x] Security headers configured:
  - [x] X-Content-Type-Options: nosniff
  - [x] X-Frame-Options: SAMEORIGIN
  - [x] X-XSS-Protection: 1; mode=block
  - [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] HTTPS ready for Vercel
- [x] SameSite cookies (Next.js default)

### Code Security
- [x] TypeScript strict mode
- [x] No console.log of sensitive data
- [x] No eval() or Function()
- [x] No dangerouslySetInnerHTML
- [x] Proper error handling
- [x] Try-catch blocks on API

### Privacy
- [x] LGPD compliant (Brazilian law)
- [x] No unnecessary data collection
- [x] Clear privacy practices
- [x] No third-party tracking
- [x] Encrypted form handling
- [x] User anonymity respected

---

## 🔐 Pre-Production Verification

### Before Git Commit
```bash
# 1. Check for secrets in code
git diff --cached | grep -i "password\|api_key\|secret\|token"
# Should return nothing

# 2. Verify .env.local is ignored
grep ".env.local" .gitignore
# Should show: .env.local

# 3. Run security checks
npm audit
# Should be 0 vulnerabilities (or low/moderate only)

# 4. Type check
npm run type-check
# Should pass

# 5. Build check
npm run build
# Should complete without errors
```

### Before Vercel Deployment
```bash
# 1. Clear sensitive data
rm -rf .env.local
# Recreate with only dev values

# 2. Verify git ignores secrets
git status
# Should NOT show .env files

# 3. Check package.json for suspicious packages
npm ls
# Review all dependencies

# 4. Final build test
npm run build && npm start
# Test at http://localhost:3000
```

### Vercel Environment Setup
- [ ] Create strong, unique passwords
- [ ] Use environment variables ONLY (never in code)
- [ ] Enable 2FA on Vercel account
- [ ] Review collaborator access
- [ ] Set up branch protection on GitHub
- [ ] Test form submission in production

---

## 🛡️ Attack Prevention

### XSS (Cross-Site Scripting)
**Status:** ✅ Protected
- React auto-escapes content
- No dangerouslySetInnerHTML
- Input sanitization removes HTML tags

**Test:** Try submitting `<script>alert('xss')</script>` in form
- Expected: Treated as text, not executed
- Check browser console for any errors

### SQL Injection
**Status:** ✅ Not vulnerable
- No direct database queries in code
- If database added: use parameterized queries
- Use ORMs (Prisma, TypeORM) for safety

**Action if adding database:**
```typescript
// ❌ WRONG
db.query(`SELECT * FROM users WHERE email = '${email}'`);

// ✅ RIGHT
db.query('SELECT * FROM users WHERE email = ?', [email]);
```

### CSRF (Cross-Site Request Forgery)
**Status:** ✅ Protected
- SameSite cookies (Next.js default)
- POST-only contact endpoint
- Origin validation via Content-Type

### DoS (Denial of Service)
**Status:** ✅ Protected
- Rate limiting (5 reqs/hour)
- Request validation (max 500 chars)
- Vercel auto-DDoS protection

**Test:** Spam the contact form
- Expected: 6th request gets 429 error
- IP blocks for 1 hour

### Credential Theft
**Status:** ✅ Protected
- No passwords stored in code
- Environment variables for secrets
- HTTPS only (Vercel enforces)

---

## 📋 Ongoing Security Tasks

### Weekly
- [ ] Check Vercel analytics for errors
- [ ] Review contact form submissions
- [ ] Scan logs for suspicious patterns

### Monthly
- [ ] Run `npm audit`
- [ ] Update dependencies
- [ ] Review GitHub commits
- [ ] Test form submission

### Quarterly
- [ ] Update Next.js
- [ ] Review dependencies for vulnerabilities
- [ ] Test SSL certificate validity
- [ ] Review rate limiting logs

### Annually
- [ ] Full security audit
- [ ] Penetration testing (optional)
- [ ] Privacy policy review
- [ ] Legal compliance check (LGPD, etc)

---

## 🚨 Security Incident Response

### If Secrets are Exposed

1. **Immediately:**
   ```bash
   # Revoke exposed credentials
   # Reset SMTP password
   # Rotate any exposed API keys
   ```

2. **Create new credentials:**
   - New SMTP password (Gmail App Password)
   - Update in Vercel environment variables
   - Delete old secrets from everywhere

3. **Audit:**
   ```bash
   git log --all -- .env.local
   # Check if ever committed
   ```

4. **Clean git history (if leaked):**
   ```bash
   # Use BFG or git-filter-branch
   # This is complex - use only if necessary
   ```

### If Form Data is Breached

1. **Notify users immediately**
2. **Rotate all secrets**
3. **Review access logs**
4. **Update privacy policy**
5. **Consider credit monitoring (if sensitive data)**

---

## 🔍 Verification Checklist

### Code Review
- [ ] No hardcoded passwords/keys
- [ ] All secrets in environment variables
- [ ] Input validation everywhere
- [ ] Error messages generic
- [ ] HTTPS/TLS enforced
- [ ] Security headers present
- [ ] No eval() or Function()
- [ ] No dangerouslySetInnerHTML

### Configuration Review
- [ ] .env.local in .gitignore
- [ ] .env.example doesn't have real secrets
- [ ] GitHub repo is private (if containing sensitive code)
- [ ] Vercel environment variables are secret
- [ ] 2FA enabled on GitHub/Vercel
- [ ] Branch protection enabled

### Deployment Review
- [ ] No secrets in git history
- [ ] Build succeeds cleanly
- [ ] Type checking passes
- [ ] Security audit clean
- [ ] HTTPS certificate valid
- [ ] Security headers present
- [ ] Rate limiting works
- [ ] Form validation works

---

## 📞 Emergency Contacts

**If security issue detected:**

1. **Private GitHub Issue:**
   - Don't disclose publicly
   - Fix immediately
   - Deploy hotfix to production

2. **Contact Vercel Support:**
   - Go to vercel.com/support
   - Report security issue
   - Follow their incident response

3. **Legal/Compliance:**
   - Review LGPD requirements
   - Consider user notification
   - Consult with legal team

---

## References

- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **LGPD (Brasil):** https://www.gov.br/cidadania/pt-br/acesso-a-informacao/lgpd
- **Next.js Security:** https://nextjs.org/docs/going-to-production
- **Vercel Security:** https://vercel.com/security

---

**Security is continuous. Review regularly!** 🔒
