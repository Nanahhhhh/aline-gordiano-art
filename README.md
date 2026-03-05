# Aline Gordiano Art — Portfolio Website

A professional artist portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

---

## Site Structure

| Route | Page |
|---|---|
| `/` | Home |
| `/gallery` | Full artwork gallery |
| `/gallery/[slug]` | Artwork detail page |
| `/about` | Artist biography |

| `/contact` | Contact form & details |
| `/shop` | Prints & originals |
| `/legal/privacy` | Privacy Policy |
| `/legal/terms` | Terms of Use |

---

## Deployment on Vercel

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and create a new project.
3. Import your GitHub repository.
4. Vercel will automatically detect Next.js — click **Deploy**.
5. Your site will be live at your Vercel domain.

### Custom Domain
- In your Vercel project → **Settings → Domains** → add your custom domain.
- Update your domain DNS records as instructed by Vercel.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Cormorant Garamond + Inter (Google Fonts)
- **Deployment**: Vercel
