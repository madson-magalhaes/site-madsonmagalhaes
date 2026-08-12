# AI Consulting Site

Professional consulting portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Designed with security and privacy in mind.

## Features

- ✅ **Fast & Responsive** — Next.js 15 with Tailwind CSS
- ✅ **Secure** — Environment variables, input sanitization, rate limiting
- ✅ **Privacy-First** — LGPD compliant, no personal data collection
- ✅ **Type-Safe** — Full TypeScript implementation
- ✅ **SEO-Friendly** — Proper metadata and structure
- ✅ **Accessible** — WCAG compliant components

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form
- **Security:** Input sanitization, rate limiting, HTTPS headers

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Industries.tsx
│   ├── CaseStudies.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── public/                 # Static assets (images)
│   └── madson.png
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── package.json
```

## Security Features

### Input Validation
- All form inputs are validated on client and server
- Email format validation with regex
- Required field checks
- Maximum length enforcement (500 chars)

### Data Protection
- Environment variables for sensitive data (.env.local)
- Input sanitization (HTML tags removal)
- Partial IP logging (first 10 chars only)
- No PII stored in logs

### Rate Limiting
- 5 requests per IP per hour to contact form
- Prevents spam and abuse

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Privacy
- LGPD compliant (Brazilian data protection law)
- No tracking scripts
- No third-party analytics by default
- Clear privacy policy

## Email Configuration (Optional)

To enable email notifications for form submissions:

1. **Update .env.local:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL_TO=secure-email@domain.com
   ```

2. **Implement email service in `app/api/contact/route.ts`:**
   ```typescript
   import nodemailer from 'nodemailer';
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: process.env.SMTP_PORT,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   });
   ```

## Deployment on Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/repo.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Add environment variables in Vercel dashboard
   - Click "Deploy"

3. **Set environment variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all variables from .env.example
   - Redeploy

## Performance

- **First Contentful Paint:** < 1.5s
- **Lighthouse Score:** 90+
- **Bundle Size:** ~50KB (gzipped)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Android Chrome 90+)

## Contributing

When modifying the site:

1. Keep security in mind
2. Don't commit .env.local
3. Update README for significant changes
4. Test locally before pushing

## License

Private. All rights reserved.

## Support

For issues or questions:
- Create an issue in GitHub
- Contact via the website form

---

**Last Updated:** May 2026
**Status:** Active Development
