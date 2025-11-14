# Azad Patel Portfolio

A high-performance, interactive portfolio website showcasing full-stack development expertise with an animated SVG robot and modern web technologies.

## 🚀 Features

- ✨ **Interactive SVG Robot** - Cursor-tracking animated robot in hero section
- 🎨 **Dark Theme** - Professional dark design with cyan accents
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **High Performance** - Optimized for Lighthouse 95+ scores
- 🎭 **Smooth Animations** - Framer Motion powered scroll animations
- 📧 **Working Contact Form** - Email integration with Nodemailer
- ♿ **Accessible** - WCAG 2.1 AA compliant with keyboard navigation
- 🔍 **SEO Optimized** - Comprehensive meta tags and structured data

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer
- **Icons:** React Icons
- **Deployment:** Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zero-matter/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` and add your values:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-specific-password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Generate Gmail App Password** (for contact form)
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification
   - Go to "App passwords"
   - Create a new app password for "Mail"
   - Copy the generated password to `SMTP_PASS` in `.env.local`

## 🚀 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3002](http://localhost:3002) in your browser.

## 📝 Content Management

All content is centralized in `lib/content.ts`. Update this file to change:

- Hero section text and links
- About section paragraphs and stats
- Experience history
- Skills and proficiency levels
- Project details
- Education information
- Contact information

### Example: Adding a New Project

```typescript
// In lib/content.ts, add to the projects array:
{
  id: 7,
  name: "My New Project",
  tagline: "Short description",
  description: "Full description",
  problem: "What problem it solves",
  approach: "How you built it",
  result: "What you achieved",
  techStack: ["React", "Node.js", "PostgreSQL"],
  image: "/projects/my-project.jpg",
  demoLink: "https://demo.com",
  githubLink: "https://github.com/username/repo",
  isPrivate: false,
}
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --bg-primary: #0a0e17;      /* Background */
  --accent-primary: #00d9ff;   /* Accent color */
  /* ... more colors */
}
```

### Fonts

Change fonts in `app/layout.tsx`:

```typescript
import { Inter, JetBrains_Mono } from "next/font/google";
```

## 📸 Assets Needed

Before deploying, add these assets to the `public` directory:

1. **Resume PDF** - `/public/Azad_Patel_Resume.pdf`
2. **Profile Photo** - `/public/profile.jpg` (280x280px recommended)
3. **OG Image** - `/public/og-image.jpg` (1200x630px for social sharing)
4. **Project Screenshots** - `/public/projects/*.jpg` (6 images)

### Quick Asset Checklist

- [ ] Resume PDF added
- [ ] Profile photo added (uncomment in `components/About.tsx` line 66-72)
- [ ] OG image created (use [Canva](https://canva.com) or similar)
- [ ] Project screenshots added
- [ ] Update image paths in `lib/content.ts`

## 🧪 Testing

### Test Contact Form Locally

1. Set up email credentials in `.env.local`
2. Run `npm run dev`
3. Navigate to contact section
4. Fill out form and submit
5. Check your email for the message

### Test Accessibility

```bash
# Test with keyboard navigation
# - Tab through all interactive elements
# - Ensure focus is visible
# - Test with screen reader
```

### Test Performance

1. Build production version: `npm run build`
2. Start production server: `npm start`
3. Run Lighthouse in Chrome DevTools
4. Aim for 95+ scores in all categories

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio build"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard:
     - `SMTP_HOST`
     - `SMTP_PORT`
     - `SMTP_USER`
     - `SMTP_PASS`
     - `NEXT_PUBLIC_SITE_URL` (your deployed URL)
   - Deploy!

3. **Post-Deployment**
   - Test contact form in production
   - Submit sitemap to Google Search Console
   - Update resume PDF if needed

### Manual Deployment

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main page
│   ├── globals.css           # Global styles
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── ui/                   # Base UI components
│   ├── Navigation.tsx        # Sticky nav with scroll spy
│   ├── Hero.tsx              # Hero with robot
│   ├── About.tsx             # About section
│   ├── Experience.tsx        # Work experience
│   ├── Skills.tsx            # Skills with progress bars
│   ├── Projects.tsx          # Project showcase
│   ├── Education.tsx         # Education history
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   └── SVGRobot.tsx          # Animated robot
├── hooks/
│   ├── useScrollSpy.ts       # Active section detection
│   ├── useInView.ts          # Intersection observer
│   └── useCursorTracking.ts  # Cursor position tracking
├── lib/
│   ├── content.ts            # All content data
│   ├── utils.ts              # Utility functions
│   └── email.ts              # Email sending logic
└── public/                   # Static assets
```

## 🎯 Performance Tips

1. **Image Optimization**
   - Use WebP format for images
   - Compress images before adding
   - Use appropriate sizes (don't use 4K images)

2. **Font Optimization**
   - Already using `font-display: swap`
   - Only loading Latin subset

3. **Code Splitting**
   - Components lazy loaded on scroll
   - Contact form loaded on demand

## 🐛 Troubleshooting

### Contact Form Not Sending

1. Check `.env.local` has correct SMTP credentials
2. Verify Gmail app password is correct (not regular password)
3. Check console for error messages
4. Test email settings with a simple script

### Robot Animation Laggy

1. Check if `prefers-reduced-motion` is enabled
2. Reduce complexity of animation
3. Consider using CSS animations instead of JS

### Build Errors

1. Clear Next.js cache: `rm -rf .next`
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`
4. Rebuild: `npm run build`

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to open an issue or submit a PR!

## 📧 Contact

**Azad Patel**
- Email: azadpatelc@gmail.com
- LinkedIn: [linkedin.com/in/azadpatel5045](https://linkedin.com/in/azadpatel5045)
- GitHub: [github.com/zero-matter](https://github.com/zero-matter)

---

Built with ❤️ using Next.js, React, and TailwindCSS
