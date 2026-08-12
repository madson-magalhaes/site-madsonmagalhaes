# Security Policy

## Security Features

This site implements multiple layers of security to protect user data and prevent attacks:

### 1. Input Validation & Sanitization
- **Client-side validation:** React Hook Form with real-time validation
- **Server-side validation:** All inputs validated again on the API
- **HTML escaping:** Potential HTML/XML tags removed
- **Length limits:** Max 500 characters per field
- **Email validation:** RFC-compliant email format check

### 2. Rate Limiting
- **Contact form:** Maximum 5 submissions per IP per hour
- **Prevents:** Spam, brute force attacks, DoS attempts
- **Implementation:** In-memory store with time-based reset

### 3. Data Protection
- **Environment variables:** Sensitive data stored in .env.local (not in code)
- **Partial IP logging:** Only first 10 characters of IP address stored
- **No sensitive data in logs:** PII is never logged to console/files
- **Data retention:** Contact form data not stored long-term

### 4. HTTP Security Headers
Applied via `next.config.ts`:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### 5. API Security
- **POST-only:** Contact endpoint only accepts POST requests
- **Content-Type validation:** Checks for JSON payloads
- **Error handling:** Generic error messages (no internal details exposed)
- **CORS:** Restricted to same-origin (if needed, explicit configuration)

### 6. Password & Secret Management
- **Never committed:** .env.local is in .gitignore
- **Production secrets:** Managed via Vercel environment variables
- **No hardcoded credentials:** All sensitive data externalized
- **Rotation:** Secrets can be rotated without code changes

### 7. LGPD Compliance (Brazilian Data Protection)
- **User consent:** Terms explicitly state data handling
- **Data minimization:** Only collect what's necessary
- **Right to erasure:** User can request data deletion
- **Data portability:** Data structure allows easy export
- **Privacy policy:** Clear statement of data usage

### 8. Frontend Security
- **No sensitive data in HTML:** Credentials never exposed in markup
- **No localStorage for secrets:** Session data stored safely
- **No inline scripts:** CSP-compatible approach
- **Link rel=noopener:** Prevents window.opener attacks

## Checklist Before Production

- [ ] .env.local is in .gitignore
- [ ] All secrets are in Vercel environment variables (not in code)
- [ ] SMTP credentials configured (if using email)
- [ ] Contact form endpoint has database/email integration
- [ ] SSL/HTTPS enforced (automatic on Vercel)
- [ ] Security headers verified in browser DevTools
- [ ] Rate limiting tested
- [ ] Input validation tested with malicious inputs
- [ ] Error messages don't expose internals
- [ ] Vercel deployment using HTTPS

## Common Attack Scenarios

### SQL Injection
**Status:** ✅ Not applicable (no database direct access)
- Database queries use parameterized statements (if implemented)
- ORM frameworks (if used) provide protection

### XSS (Cross-Site Scripting)
**Status:** ✅ Protected
- React auto-escapes content
- Input sanitization removes HTML
- No inline eval() or dangerouslySetInnerHTML

### CSRF (Cross-Site Request Forgery)
**Status:** ✅ Protected
- SameSite cookies configured automatically by Next.js
- Origin validation via Content-Type checks

### Rate Limiting / DoS
**Status:** ✅ Protected
- 5 requests per IP per hour on contact form
- Vercel provides DDoS protection

### Man-in-the-Middle (MitM)
**Status:** ✅ Protected
- HTTPS enforced (automatic on Vercel)
- Strict-Transport-Security headers (if enabled)

## Incident Response

If a security issue is discovered:

1. **Do not disclose publicly** until patch is deployed
2. **Create a private security advisory** (GitHub)
3. **Deploy fix immediately** to production
4. **Notify affected users** (if applicable)
5. **Document the incident** in git history

## Regular Maintenance

- [ ] Monthly dependency updates (`npm update`)
- [ ] Security audit (`npm audit`)
- [ ] Review logs for suspicious activity
- [ ] Test rate limiting still works
- [ ] Verify environment variables are secret on Vercel

## Third-Party Services

Currently no third-party services are integrated. If adding:

- Use reputable, security-audited services
- Store API keys in environment variables
- Verify API endpoints over HTTPS
- Review service's privacy policy

## Contact

For security issues, contact via the website form (encrypted).

---

**Last Review:** May 2026
**Next Review:** August 2026
