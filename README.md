# Rapkology

**Live:** [Live](https://rapkology-sandy.vercel.app)

A modern hip-hop / rap portal built with Next.js & TypeScript. It features a responsive header with a mobile hamburger menu, a hero slider, category routing, and clean Tailwind styling.

---

## ✨ Features
- **Responsive header** with logo + hamburger on mobile and a full navigation on desktop.
- **Mobile drawer**: hamburger tap reveals navigation & actions on a yellow background.
- **Hero slider** using Swiper with slide-scoped pagination and custom prev/next controls.
- **Category routes** (Haberler, Etkinlikler, Müzikler, Videolar, İletişim).
- **Tailwind CSS utilities** + `class-variance-authority`-style Button variants.
- **Lucide icons** for a consistent icon set.

---

## 🧱 Tech Stack
- **Framework:** Next.js (App Router) + TypeScript  
- **Styling:** Tailwind CSS  
- **Components/Patterns:** class-variance-authority (CVA), shadcn-style Button  
- **Slider:** Swiper (`swiper/react` with Navigation & Pagination modules)  
- **Icons:** lucide-react  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, pnpm, or yarn

### Installation
```bash
# clone
git clone https://github.com/enesakkose/rapkology.git
cd rapkology

# install deps (choose one)
npm install
# or
yarn
# or
pnpm install
```

### Development
```bash
npm run dev
# open http://localhost:3000
```

### Production build
```bash
npm run build
npm start
```

> If you deploy on Vercel, just connect this repo and it will build automatically.

---

## 📁 Project Structure (high-level)
```
rapkology/
├─ public/                 # static assets (images, svg logos)
├─ src/
│  ├─ app/                 # App Router pages/layouts
│  ├─ components/
│  │  ├─ ui/Button.tsx     # CVA button
│  │  ├─ header/Header.tsx # responsive header + mobile drawer
│  │  └─ hero/HeroSlider.tsx
│  └─ utils/               # helpers (e.g., cn)
├─ next.config.ts
├─ tailwind.config.(js|ts)
├─ postcss.config.(js|mjs)
├─ package.json
└─ README.md
```

---

## 🧭 Available Scripts
- `dev` – start dev server  
- `build` – production build  
- `start` – serve the production build  
- `lint` – lint the codebase (if configured)  

> See `package.json` for the exact list.

---

## 🔧 Configuration Notes
- **Tailwind:** custom colors (e.g., brand black/yellow), responsive typography in `@layer base`.  
- **Images:** Next.js `next/image` with `fill` + `object-contain` is used for responsive logos.  
- **Swiper:** navigation buttons are hidden on mobile; slide pagination is mounted per slide.  

---

## 🗺️ Roadmap / Ideas
- Content CMS integration (Sanity/Strapi/Contentlayer)  
- Dark theme refinements  
- Search modal & keyboard shortcuts  
- SEO/OpenGraph metadata  
- Unit tests (Vitest/RTL)  

---

## 🤝 Contributing
PRs and issues are welcome. Please open an issue to discuss major changes.

---

## 📄 License
TBD (add a LICENSE file or choose MIT if you prefer).
