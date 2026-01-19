"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  const visionText =
    "WE SYNERGIZE OUR HIGHLY ADVANCED BUSINESS MODEL TO COMPETE WORLDWIDE";
  const valuesText = "LEADERSHIP • INNOVATION • AGILITY • SYNERGY • INTEGRITY";

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-dark via-dark-lighter to-dark"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-influence-red rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-influence-red rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Main Vision Text - Scrolls Left */}
        <div className="mb-24 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex items-center text-[clamp(3rem,10vw,8rem)] font-bold leading-none"
              >
                <span className="mx-8 text-white">{visionText}</span>
                <span className="mx-8 text-influence-red">•</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values Text - Scrolls Right */}
        <div className="overflow-hidden border-y border-white/10 py-8">
          <motion.div
            style={{ x: x2 }}
            className="flex whitespace-nowrap"
          >
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="text-[clamp(2rem,6vw,5rem)] font-light text-white/50"
              >
                <span className="mx-12">{valuesText}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCard number="150+" label="Professionals" />
            <StatCard number="90+" label="Global Clients" />
            <StatCard number="6" label="Specialized Companies" />
            <StatCard number="2007" label="Established" />
          </div>
        </div>

        {/* Mission Statement */}
        <div className="container mx-auto px-6 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Delivering{" "}
              <span className="text-influence-red">Outstanding Consultancy</span>{" "}
              to Strengthen Market Positioning
            </h3>
            <p className="text-xl text-white/70 leading-relaxed">
              Through a result-driven approach and a synergistic ecosystem of
              specialized capabilities, we empower organizations to achieve
              unprecedented impact across the Middle East and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="glass glass-hover rounded-2xl p-8 h-full">
        <motion.h4
          className="text-5xl md:text-7xl font-bold text-influence-red mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {number}
        </motion.h4>
        <p className="text-sm md:text-base text-white/60 uppercase tracking-wider">
          {label}
        </p>
      </div>
    </motion.div>
  );
}
