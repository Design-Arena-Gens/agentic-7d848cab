# Luminara Stories

A premium storybook marketplace built with Next.js 14 and Tailwind CSS. Browse curated collections, explore detailed book pages, manage a cart, and complete a themed checkout designed for gifting luminous adventures.

## 🚀 Quick Start

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## 🧭 Features

- Hero landing page highlighting the brand narrative and curated promises
- Interactive catalog with category, price, format filters, and keyword search
- Book detail pages with related recommendations and cart integration
- Persistent cart with quantity management, order summary, and checkout flow
- Newsletter subscription endpoint mock for lead capture
- Responsive, accessible layout optimized for Vercel deployment

## 🗂️ Structure

```
app/
  page.tsx              # Landing experience
  catalog/              # Catalog browser route
  cart/                 # Cart summary route
  checkout/             # Checkout form route
  books/[slug]/         # Dynamic book detail pages
components/             # UI building blocks and providers
lib/                    # Domain data and cart logic
public/                 # Brand assets
```

## 🛠️ Scripts

- `npm run dev` – start local development
- `npm run build` – create a production build
- `npm run start` – serve the production build locally
- `npm run lint` – run ESLint with Next.js config
- `npm run type-check` – validate TypeScript types

## 📬 API Routes

- `POST /api/subscribe` – mock endpoint accepting an `email` payload and returning a success response after a short delay

## 📦 Tech Stack

- Next.js 14 (App Router)
- React 18 with client/server component mix
- Tailwind CSS 3.4 with custom theme tokens
- TypeScript 5
- Framer Motion, Heroicons, clsx utility

## ✅ Production Checklist

- [x] Install dependencies `npm install`
- [x] Run lint/type checks `npm run lint` `npm run type-check`
- [x] Build for production `npm run build`
- [x] Deploy with Vercel `vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-7d848cab`

Enjoy sharing luminous stories!
