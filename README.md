# devvx.in Portfolio Website

A high-performance, minimalist portfolio website tailored for **Devvx** (Senior Backend & Distributed Systems Engineer), faithfully recreating the layout, typography, subtle ghost watermarks, and micro-interactions from the reference designs.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS (with custom outline typography, ghost watermark utilities, and atmospheric gradients)
- **Icons**: Custom SVG vector icon suite + Lucide React
- **Animations**: Framer Motion (smooth scroll, hover transforms, spring-based modal entry/exit)
- **Forms & Validation**: Zod schema validation (client & server)
- **Email Delivery**: Nodemailer with SMTP environment variable configuration & mock simulation in local development
- **Security**: In-memory token bucket rate limiter & honeypot anti-spam protection

---

## 🚀 Quick Start (Local Run)

All dependencies are installed locally inside this project directory (`no global installations required`).

```bash
# 1. Enter project directory
cd /Users/devvx/.gemini/antigravity/scratch/devvx-portfolio

# 2. Run local development server
npm run dev

# 3. Or build and start production server
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration (`.env.local`)

Copy `.env.example` to `.env.local` and add your SMTP credentials when ready for live production emails:

```env
# SMTP Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
CONTACT_EMAIL_TO=hello@devvx.in
CONTACT_EMAIL_FROM="Devvx Portfolio" <no-reply@devvx.in>

# Rate Limiting
RATE_LIMIT_WINDOW_MINUTES=15
RATE_LIMIT_MAX_REQUESTS=5
```

> **Note**: When SMTP variables are omitted in local development, form submissions will gracefully simulate delivery and log nicely formatted messages directly in your server console.

---

## 📁 Directory Structure

```
devvx-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML, SEO & OpenGraph metadata
│   │   ├── page.tsx                # Single-page layout connecting all sections
│   │   ├── globals.css             # Base styles, outline typography & watermarks
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts        # Contact endpoint (Zod + Rate Limiting + Honeypot)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Top pill navigation with status indicator & mobile drawer
│   │   │   └── Footer.tsx          # Profile avatar pill, social links & copyright
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx     # Outline typography ("DEV VX"), portrait cutout & social stack
│   │   │   ├── SelectedWork.tsx    # Filterable project cards with watermark & hover arrows
│   │   │   ├── ServicesSection.tsx # Backend service list with hover states & drawer
│   │   │   ├── ExperienceSection.tsx # Dark card with timeline and expandable impact metrics
│   │   │   └── ConnectSection.tsx  # Atmospheric "HAVE A PROJECT IN MIND?" CTA & footer
│   │   └── ui/
│   │       ├── Badge.tsx           # Reusable status and tag badges
│   │       ├── Button.tsx          # Reusable pill buttons with arrow hover transitions
│   │       ├── Watermark.tsx       # Ghost watermark typography
│   │       ├── Icons.tsx           # Vector SVG icons
│   │       ├── ContactModal.tsx    # Interactive contact modal
│   │       ├── ProjectModal.tsx    # Architecture breakdown modal for projects
│   │       └── ServiceDrawer.tsx   # Service details drawer
│   ├── data/
│   │   └── portfolio.ts            # Centralized content (projects, services, experience, bio)
│   ├── lib/
│   │   ├── email.ts                # Nodemailer transport & HTML email template
│   │   ├── rate-limit.ts           # Token bucket rate limiting helper
│   │   ├── utils.ts                # Tailwind class merge utility
│   │   └── validations.ts          # Zod schema for contact form
│   └── types/
│       └── index.ts                # TypeScript interface definitions
└── public/
    └── images/
        ├── avatar.png              # Optimized hero portrait cutout
        ├── projects/               # Architectural SVG diagrams
        └── references/             # Original reference screenshots
```
