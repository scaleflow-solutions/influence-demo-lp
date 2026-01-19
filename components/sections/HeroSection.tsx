"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mediaType, setMediaType] = useState<"video" | "gif" | "gradient">("gif");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Simple parallax for background
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Check if optimized video exists, otherwise use GIF
  useEffect(() => {
    fetch("/assets/hero-bg.mp4", { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          setMediaType("video");
        }
      })
      .catch(() => {
        // Video doesn't exist, keep using GIF (default)
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-start overflow-hidden"
    >
      {/* Background: Video (preferred) > GIF (fallback) > Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity }}
      >
        {mediaType === "video" ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onLoadedData={() => setVideoLoaded(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/assets/hero-bg.mp4" type="video/mp4" />
              <source src="/assets/hero-bg.webm" type="video/webm" />
            </video>
            {/* Loading placeholder */}
            {!videoLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-influence-red/20 animate-pulse" />
            )}
          </>
        ) : mediaType === "gif" ? (
          /* GIF background (current) - will be replaced with video for better performance */
          <Image
            src="/assets/hero-background.gif"
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
        ) : (
          /* Fallback gradient if no media */
          <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-influence-red/10" />
        )}
        {/* Bottom gradient fade for smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 pt-32 md:pt-40 lg:pt-48">
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
