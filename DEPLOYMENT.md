# Deployment Guide

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Navigate to http://localhost:3000
```

## Pre-Deployment Checklist

Before pushing to production, verify:

- [ ] **Secrets are safe:** No .env.local in git (check .gitignore)
- [ ] **Build succeeds:** `npm run build` completes without errors
- [ ] **Type checking passes:** `npm run type-check` passes
- [ ] **Form handling:** Contact form works and doesn't expose errors
- [ ] **Images load:** madson.png appears on Hero section
- [ ] **Mobile responsive:** Test on iPhone/Android sizes
- [ ] **Security headers:** Check DevTools Network tab for headers
- [ ] **Performance:** Lighthouse score 90+ on homepage

## Deploy to GitHub

1. **Initialize Git (if not done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI consulting site"
   ```

2. **Create GitHub repository:**
   - Go to github.com/new
   - Create **private** repository (recommended)
   - Name: `site-madson` or similar

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/site-madson.git
   git branch -M main
   git push -u origin main
   ```

## Deploy to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. **Sign up/Login:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables:**
   - Click "Environment Variables"
   - Add variables from .env.example:
     ```
     NEXT_PUBLIC_SITE_URL=https://yourdomain.com
     NEXT_PUBLIC_ENVIRONMENT=production
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     CONTACT_EMAIL_TO=secure-email@domain.com
     ```
   - **Never paste .env.local content directly**
   - Use secure, generated passwords only

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (~2 minutes)
   - Get your Vercel domain (something.vercel.app)

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod

# Add environment variables when prompted
```

## Custom Domain Setup

After Vercel deployment:

1. **In Vercel Dashboard:**
   - Go to Project → Settings → Domains
   - Click "Add Domain"
   - Enter your custom domain (e.g., ai-consulting.yourdomain.com)

2. **In Domain Registrar:**
   - Add CNAME record pointing to vercel's DNS
   - Vercel shows exact DNS records needed

3. **Verify:**
   - Wait 24-48 hours for DNS propagation
   - HTTPS certificate auto-provisions

## GitHub + Vercel Automatic Deployment

Once connected:
- Every push to `main` → automatic deploy to production
- Every push to `develop` (if it exists) → automatic preview deployment
- Pull requests → automatic preview deployment

**To disable:**
- Go to Vercel Project Settings → Git
- Uncheck "Deploy on push"

## Monitoring

### Vercel Analytics
- Go to Project → Analytics
- View performance metrics
- Monitor errors and logs

### GitHub Actions
- Check `.github/workflows/security.yml`
- Runs automatically on push
- Ensures no secrets in code
- Verifies build succeeds

## Rollback

If something breaks after deploy:

```bash
# Option 1: Using Vercel CLI
vercel rollback

# Option 2: Using Vercel Dashboard
# Go to Project → Deployments → Select previous version → Promote to Production
```

## Email Configuration (Optional)

To enable form emails:

### Using Gmail

1. **Generate App Password:**
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication
   - Create "App Password" for Mail
   - Copy the 16-character password

2. **Add to Vercel:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxxx xxxx xxxx xxxx
   CONTACT_EMAIL_TO=secure-email@domain.com
   ```

3. **Implement Email in `app/api/contact/route.ts`:**
   ```typescript
   import nodemailer from 'nodemailer';

   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: true,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });

   // In the POST handler:
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: process.env.CONTACT_EMAIL_TO,
     subject: `New AI Consulting Inquiry from ${sanitizedData.name}`,
     html: `...`, // Format form data as HTML
   });
   ```

## Maintenance

### Weekly
- Check Vercel analytics for errors
- Monitor contact form submissions

### Monthly
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review Vercel logs

### Quarterly
- Update Next.js and major dependencies
- Test form submission end-to-end
- Review and update case studies

## Troubleshooting

### Build fails on Vercel
- Check "Builds" tab in Vercel dashboard
- Look for error messages
- Verify environment variables are set
- Test locally: `npm run build`

### Site won't load
- Check DNS propagation: `nslookup yourdomain.com`
- Verify SSL certificate: Check browser address bar
- Clear browser cache and retry

### Form not sending emails
- Check SMTP credentials are correct
- Verify Less Secure Apps is enabled (if using Gmail)
- Check Vercel function logs

### Slow performance
- Run Lighthouse in browser DevTools
- Check Vercel Analytics for bottlenecks
- Optimize images if added

## Security Reminders

- ✅ Never commit .env.local
- ✅ Always use environment variables for secrets
- ✅ Enable 2FA on GitHub and Vercel accounts
- ✅ Review collaborator access regularly
- ✅ Keep dependencies updated
- ✅ Monitor Vercel analytics for attacks/errors

---

**Questions?** Check next.js.org/docs or vercel.com/docs
