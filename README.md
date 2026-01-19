# Influence Group Landing Page

An award-winning, high-end landing page for The Influence Group - transforming from corporate to creative powerhouse.

## Overview

This project showcases The Influence Group's ecosystem of 6 specialized companies through an immersive, interactive web experience featuring:

- **Kinetic Logo Animation**: A pulsing red orb that evolves as users scroll
- **Smooth Scroll**: Inertial scrolling powered by Lenis for a premium feel
- **Bento Grid Layout**: Dynamic ecosystem tiles with 3D hover effects
- **Parallax Scrolling**: Multi-layer depth effects throughout
- **Horizontal Kinetic Text**: Vision statement that scrolls horizontally
- **Film Grain Overlay**: Premium tactile aesthetic
- **Custom Cursor**: Red orb cursor with trail effects
- **Glassmorphism**: Frosted glass cards with red glow accents

## Tech Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (CSS-first configuration)
- **Animations**:
  - GSAP (GreenSock Animation Platform)
  - Framer Motion
  - Lenis (Smooth Scroll)

## Design Philosophy

### Color System
- **Dark Mode**: Deep charcoal/black (`#0A0A0A`) base
- **Influence Red**: Primary accent (`#E31E24`)
- **Red Glow**: Subtle red glow effects for depth

### Typography
- **Macro Typography**: Massive display fonts for impact
- **High Fashion Minimal**: Intentional white space
- **Fluid Grid**: 12-column grid with bleeding edges

### Motion Design
- **Liquid Precision**: Smooth, weighted animations
- **Text Scramble/Reveal**: Glitch-style reveals
- **3D Depth**: Parallax and transform effects

## Project Structure

```
influence-lp/
├── app/
│   ├── layout.tsx          # Root layout with smooth scroll
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx      # Navigation with glassmorphism
│   │   ├── Footer.tsx      # Footer with CTA
│   │   ├── CustomCursor.tsx # Custom red orb cursor
│   │   ├── FilmGrain.tsx   # Film grain overlay
│   │   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   └── sections/
│       ├── HeroSection.tsx       # Hero with kinetic logo
│       ├── EcosystemSection.tsx  # Bento grid of companies
│       ├── WorkSection.tsx       # Projects with parallax
│       └── VisionSection.tsx     # Horizontal scrolling text
├── public/
│   └── assets/
│       ├── hero-background.gif
│       └── influence-logo.png
└── tailwind.config.ts      # Custom theme configuration
```

## Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Development

The development server runs at [http://localhost:3000](http://localhost:3000) (or 3001 if 3000 is in use).

Hot reload is enabled - changes to files will automatically update in the browser.

## Key Features

### 1. Hero Section
- Massive macro typography with letter-by-letter reveal
- Kinetic red orb (logo core) with pulsing animation
- Animated GIF background with gradient overlays
- Scroll-triggered parallax effects

### 2. Ecosystem Grid
- Bento-style asymmetric grid layout
- 6 company tiles with unique sizes
- 3D tilt effects on hover
- Glassmorphism with red glow accents
- Dynamic background gradients

### 3. Selected Work
- Overlapping project cards
- Parallax scrolling (image moves slower than content)
- Large typographic numbers in background
- Alternating left/right layout
- Interactive hover states with red glow

### 4. Vision Section
- Horizontal kinetic text that scrolls with page
- Dual-direction scrolling marquees
- Stats cards with animated numbers
- Mission statement with centered layout

### 5. UI Components
- **Custom Cursor**: Red dot with trailing ring effect
- **Film Grain**: Subtle animated noise overlay
- **Smooth Scroll**: Lenis-powered inertial scrolling
- **Navbar**: Glassmorphism with scroll-responsive styling
- **Footer**: Bold CTA with social links

## Customization

### Colors
Edit [app/globals.css](app/globals.css#L3-L13) to customize the color palette (Tailwind v4 uses CSS variables):

```css
@theme {
  --color-dark: #0A0A0A;
  --color-dark-lighter: #1A1A1A;
  --color-influence-red: #E31E24;
  --color-influence-red-light: #FF3940;
  /* ... */
}
```

### Animations
Adjust animation timings in [globals.css](app/globals.css) or component files.

### Content
Update company data, projects, and text in the respective section files:
- Companies: [EcosystemSection.tsx](components/sections/EcosystemSection.tsx#L5-L44)
- Projects: [WorkSection.tsx](components/sections/WorkSection.tsx#L5-L36)
- Vision text: [VisionSection.tsx](components/sections/VisionSection.tsx#L17-L18)

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Framer Motion viewport detection
- **Font Optimization**: System fonts with custom fallbacks
- **Package Optimization**: Experimental `optimizePackageImports` for GSAP and Framer Motion

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Note: Custom cursor effects are disabled on mobile devices.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
pnpm build
```

## Credits

**Design Inspiration**:
- Mark.Media
- Nexform
- Craincy

**Built for**: The Influence Group
**Year**: 2024

## License

All rights reserved - The Influence Group © 2024
