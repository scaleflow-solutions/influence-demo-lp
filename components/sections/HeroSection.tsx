"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Use CSS-based parallax effect via scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrolled = window.scrollY;
      const sectionHeight = sectionRef.current.offsetHeight;
      const opacity = Math.max(0, 1 - (scrolled / sectionHeight) * 2);

      const bgElement = sectionRef.current.querySelector('[data-hero-bg]') as HTMLElement;
      if (bgElement) {
        bgElement.style.opacity = String(opacity);
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-start overflow-hidden"
    >
      {/* Background: Video (preferred) > GIF (fallback) */}
      <div
        data-hero-bg
        className="absolute inset-0 z-0 transition-opacity"
        style={{ opacity: 1 }}
      >
        {/* Video background - loads by default (10MB vs 24MB GIF) */}
        {!videoError ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230A0A0A'/%3E%3Cstop offset='50%25' style='stop-color:%231A1A1A'/%3E%3Cstop offset='100%25' style='stop-color:rgba(227,30,36,0.2)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23g)'/%3E%3C/svg%3E"
            >
              <source src="/assets/hero-bg-video.mp4" type="video/mp4" />
            </video>
            {/* Loading placeholder */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-influence-red/20" />
            )}
          </>
        ) : (
          /* GIF fallback only if video fails to load */
          <Image
            src="/assets/hero-background.gif"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
        )}
        {/* Bottom gradient fade for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-44 sm:pt-48 md:pt-40 lg:pt-48">
        <div className="max-w-7xl mx-auto text-left">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Amplify Your Influence
          </h1>

          {/* Sub-headline */}
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl font-light text-white/80 mb-3">
              6 Companies. 1 Ecosystem.
            </p>
            <p className="text-xl md:text-2xl font-light">
              <span className="text-influence-red font-semibold">Infinite Impact.</span>
            </p>
          </div>

          {/* CTA */}
          <a
            href="#work"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-influence-red hover:bg-influence-red-light text-white text-lg font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-influence-red/30"
          >
            <span>EXPLORE WORK</span>
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-influence-red rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
