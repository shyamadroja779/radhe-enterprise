# Radhe Enterprise — Material Handling Equipment Website

A modern, SEO-optimized Next.js 14 website for Radhe Enterprise, a material handling equipment supplier based in Morbi, Gujarat, India.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Fonts**: Barlow Condensed (display) + DM Sans (body)

## Features

- ✅ Fully responsive design
- ✅ SEO optimized (metadata, sitemap, robots.txt, Open Graph, JSON-LD)
- ✅ Product catalog with 40+ products
- ✅ Category filtering and search
- ✅ Dynamic product detail pages
- ✅ WhatsApp floating button
- ✅ Contact form
- ✅ Google Maps embed
- ✅ Fast loading (Image optimization, static generation)
- ✅ Deployment-ready for Vercel

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
radhe-enterprise/
├── app/
│   ├── layout.tsx          # Root layout with Navbar, Footer, WhatsApp button
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Google Fonts import
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── products/
│       ├── page.tsx        # Products listing with search + filter
│       └── [slug]/
│           └── page.tsx    # Dynamic product detail page
│
├── components/
│   ├── Navbar.tsx          # Responsive navigation with dropdown
│   ├── Footer.tsx          # Full footer with links
│   ├── ProductCard.tsx     # Product card component
│   ├── ContactForm.tsx     # React Hook Form contact form
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
│
├── data/
│   └── products.ts         # All 40+ products data + helper functions
│
├── public/
│   └── images/             # Place product images here
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── vercel.json
```

## Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy — Vercel auto-detects Next.js

### Custom Domain

In Vercel Dashboard → Project → Settings → Domains → Add your domain.

Update `baseUrl` in `app/sitemap.ts` and `app/robots.ts` to your actual domain.

## Customization

### Adding Product Images

Place product images in `public/images/` and update `ProductCard.tsx` and the product detail page to use Next.js `<Image>` component.

### Updating Company Info

All contact details are consistent across:
- `app/layout.tsx` (metadata)
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

### Adding New Products

Add new product objects to the `products` array in `data/products.ts`.

## Contact

**Radhe Enterprise**  
Morbi, Gujarat, India  
📞 +91 96246 81003  
📧 radheenterprise1003@gmail.com  
💬 WhatsApp: +91 96246 81003
