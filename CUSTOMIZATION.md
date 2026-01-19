# Customization Guide

## Quick Customizations

### 1. Update Company Information

Edit [components/sections/EcosystemSection.tsx](components/sections/EcosystemSection.tsx):

```typescript
const companies = [
  {
    id: "ipa",
    name: "IPA",
    fullName: "Influence Public Affairs",
    description: "Government relations and policy engagement",
    color: "from-influence-red/20 to-influence-red/5",
    size: "large",
  },
  // ... add more companies
];
```

### 2. Update Projects/Case Studies

Edit [components/sections/WorkSection.tsx](components/sections/WorkSection.tsx):

```typescript
const projects = [
  {
    id: 1,
    number: "01",
    client: "CLIENT NAME",
    project: "PROJECT LOCATION",
    title: "Project Title",
    description: "Project description...",
    image: "/path/to/image.jpg", // Add actual images
    year: "2024",
  },
  // ... add more projects
];
```

### 3. Change Brand Colors

Edit [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  influence: {
    red: "#E31E24",        // Primary brand color
    "red-light": "#FF3940", // Lighter variant
    "red-dark": "#C01117",  // Darker variant
  },
}
```

### 4. Update Hero Text

Edit [components/sections/HeroSection.tsx](components/sections/HeroSection.tsx):

```typescript
const titleWords = ["YOUR", "CUSTOM", "HERO", "TEXT."];
```

And the subtitle:

```typescript
<p className="text-xl md:text-3xl font-light text-white/80 mb-4">
  Your custom subtitle here.
</p>
```

### 5. Update Vision/Mission Text

Edit [components/sections/VisionSection.tsx](components/sections/VisionSection.tsx):

```typescript
const visionText = "YOUR VISION STATEMENT HERE";
const valuesText = "VALUE 1 • VALUE 2 • VALUE 3 • VALUE 4";
```

### 6. Update Stats

Edit [components/sections/VisionSection.tsx](components/sections/VisionSection.tsx):

```typescript
<StatCard number="150+" label="Your Label" />
<StatCard number="90+" label="Another Stat" />
```

### 7. Update Navigation Links

Edit [components/ui/Navbar.tsx](components/ui/Navbar.tsx):

```typescript
<NavLink href="#your-section">YOUR LINK</NavLink>
```

### 8. Update Footer

Edit [components/ui/Footer.tsx](components/ui/Footer.tsx):

```typescript
<h3 className="text-4xl md:text-6xl font-bold mb-4">
  YOUR CUSTOM
  <br />
  <span className="text-influence-red">CTA TEXT</span>
</h3>
```

### 9. Add Real Images

Replace placeholder images in WorkSection.tsx with actual project images:

1. Add images to `public/assets/projects/`
2. Update the image paths:

```typescript
image: "/assets/projects/your-project.jpg",
```

### 10. Customize Animations

#### Smooth Scroll Speed
Edit [components/ui/SmoothScroll.tsx](components/ui/SmoothScroll.tsx):

```typescript
new Lenis({
  duration: 1.2,  // Increase for slower scroll
  // ...
});
```

#### Hero Letter Animation
Edit [components/sections/HeroSection.tsx](components/sections/HeroSection.tsx):

```typescript
gsap.fromTo(
  letters,
  { y: 100, opacity: 0, rotateX: 90 },
  {
    y: 0,
    opacity: 1,
    rotateX: 0,
    duration: 1,      // Animation duration
    stagger: 0.03,    // Delay between letters
    ease: "power4.out",
    delay: 0.5,       // Initial delay
  }
);
```

## Advanced Customizations

### Add New Sections

1. Create a new section component in `components/sections/`:

```typescript
// components/sections/YourSection.tsx
"use client";

export function YourSection() {
  return (
    <section className="relative py-32">
      {/* Your content */}
    </section>
  );
}
```

2. Import and add to [app/page.tsx](app/page.tsx):

```typescript
import { YourSection } from "@/components/sections/YourSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HeroSection />
        <YourSection />  {/* Add here */}
        <EcosystemSection />
        {/* ... */}
      </main>
      <Footer />
    </>
  );
}
```

### Modify Grid Layouts

The Ecosystem Grid uses CSS Grid. Customize in [components/sections/EcosystemSection.tsx](components/sections/EcosystemSection.tsx):

```typescript
// Change grid columns and gap
className="grid grid-cols-1 md:grid-cols-3 gap-6"

// Modify card sizes
const getGridClasses = () => {
  if (company.size === "large") return "md:col-span-2 md:row-span-2";
  // ... customize sizes
};
```

### Custom Cursor Behavior

Edit [components/ui/CustomCursor.tsx](components/ui/CustomCursor.tsx):

```typescript
// Change cursor size
className="w-5 h-5" // Main dot

// Change spring animation
const springConfig = {
  damping: 25,    // Lower = more bouncy
  stiffness: 300  // Higher = more responsive
};
```

### Film Grain Intensity

Edit [app/globals.css](app/globals.css):

```css
.grain-overlay {
  /* ... */
  opacity: 0.05; /* Increase for more grain */
}
```

## Typography Customization

### Font Families

1. Install fonts via Google Fonts or local files
2. Update [tailwind.config.ts](tailwind.config.ts):

```typescript
fontFamily: {
  sans: ["Your Font", "system-ui", "sans-serif"],
},
```

3. Import in [app/layout.tsx](app/layout.tsx)

### Macro Typography Sizes

Edit [app/globals.css](app/globals.css):

```css
.macro-text {
  @apply text-[clamp(3rem,15vw,12rem)]; /* Adjust min, preferred, max */
}
```

## Performance Tips

1. **Optimize Images**: Use WebP/AVIF formats
2. **Lazy Load**: Add `loading="lazy"` to images below fold
3. **Reduce Motion**: Add prefers-reduced-motion support
4. **Code Split**: Keep sections in separate files (already done)

## Accessibility Improvements

1. **Add ARIA Labels**:
```typescript
<nav aria-label="Main navigation">
```

2. **Skip Links**:
```typescript
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to content
</a>
```

3. **Focus Styles**: Ensure all interactive elements have visible focus states

## Common Issues

### Smooth Scroll Not Working
- Check that SmoothScroll wrapper is in layout.tsx
- Ensure Lenis is properly initialized

### Animations Janky
- Reduce the number of particles/elements
- Use `will-change` CSS property sparingly
- Check browser DevTools Performance tab

### TypeScript Errors
- Run `pnpm build` to check for type errors
- Add type definitions for any custom props

## Need Help?

Refer to:
- [Next.js Docs](https://nextjs.org/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
