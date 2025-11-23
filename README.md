# NextecAsia Landing Page

A high-conversion landing page for NextecAsia, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Dark mode with slate-950 background)
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Shadcn UI** (Component library)

## Design System

- **Theme**: Dark Mode (slate-950 background)
- **Accents**: Electric Blue (#3b82f6) and Neon Purple (#8b5cf6) gradients
- **Typography**: Inter font (clean, developer-focused)
- **Visuals**: Glassmorphism effects with subtle glowing borders

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── Hero.tsx        # Hero section with animations
│   ├── BentoGrid.tsx   # Service portfolio grid
│   └── ui/
│       └── button.tsx  # Button component
└── lib/
    └── utils.ts        # Utility functions
```

## Features Implemented

- ✅ Hero Section with fade-in animations and grid background
- ✅ Bento Grid Service Portfolio with hoverable cards
- ✅ Glassmorphism effects
- ✅ Gradient accents (Electric Blue & Neon Purple)
- ✅ Responsive design

## Next Steps

- Product Showcase (Smart POS section)
- Why Choose Us (Stats section)
- Contact/Quote form
- Footer component

