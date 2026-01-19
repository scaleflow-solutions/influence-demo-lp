# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is built by the creators of Next.js and offers the best performance and developer experience.

### Option 1: Deploy via Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Influence Group landing page"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Netlify

1. **Build Settings**:
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: 18 or higher

2. **Deploy**:
   ```bash
   # Install Netlify CLI
   pnpm add -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

## Deploy to Cloudflare Pages

1. **Push to Git** (GitHub, GitLab, etc.)

2. **Create Pages Project**:
   - Go to Cloudflare Dashboard
   - Pages → Create a project
   - Connect your Git repository
   - Build settings:
     - Framework preset: Next.js
     - Build command: `pnpm build`
     - Build output directory: `.next`

## Self-Hosted (VPS/Server)

### Requirements
- Node.js 18+
- PM2 or similar process manager

### Steps

1. **Build the project**:
   ```bash
   pnpm build
   ```

2. **Install PM2**:
   ```bash
   pnpm add -g pm2
   ```

3. **Start with PM2**:
   ```bash
   pm2 start pnpm --name "influence-lp" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx** (optional):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

If you add environment variables later, create a `.env.local` file:

```env
# Example variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

Add them to your deployment platform:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Cloudflare**: Pages → Settings → Environment Variables

## Pre-Deployment Checklist

- [ ] Test production build locally: `pnpm build && pnpm start`
- [ ] Optimize images in `/public/assets/`
- [ ] Update meta tags in `app/layout.tsx`
- [ ] Add Google Analytics (if needed)
- [ ] Test on multiple browsers and devices
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test loading performance (Lighthouse)
- [ ] Enable Vercel Speed Insights (optional)

## Post-Deployment

### Monitor Performance
- Use Vercel Analytics
- Set up Google Analytics
- Monitor Core Web Vitals

### Custom Domain
1. Add domain in deployment platform
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: [provided IP]

   Type: CNAME
   Name: www
   Value: [provided URL]
   ```

### SSL Certificate
- Vercel/Netlify/Cloudflare: Auto-configured
- Self-hosted: Use Let's Encrypt with Certbot

## Continuous Deployment

Once connected to Git:
1. Push changes to your repository
2. Deployment platform automatically rebuilds
3. Changes go live in ~2 minutes

```bash
# Workflow
git add .
git commit -m "Update hero text"
git push origin main
# Auto-deploys! ✨
```

## Troubleshooting

### Build Fails
- Check Node.js version (18+)
- Clear cache: `rm -rf .next node_modules && pnpm install`
- Check build logs for errors

### Slow Performance
- Optimize images (use WebP/AVIF)
- Enable compression
- Use CDN for static assets
- Check Lighthouse scores

### Animations Not Working
- Ensure GSAP license compatibility
- Check browser console for errors
- Verify all dependencies installed

## Rollback

### Vercel
- Deployments → Previous deployment → Promote to Production

### Git-based
```bash
git revert HEAD
git push origin main
```

## Support

For deployment issues:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
