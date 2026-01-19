"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Client names - add actual logo paths when available
const clientsRow1 = [
  "Cairo Festival City",
  "MidBank",
  "L'ORÉAL PARIS",
  "Bel",
  "McDonald's",
  "DHL",
  "PepsiCo",
];

const clientsRow2 = [
  "Mars",
  "Lipton",
  "AXA",
  "Lafarge",
  "Unilever",
  "Forbes",
  "IsDB",
];

export function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-dark overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-influence-red">OUR</span>{" "}
          <span className="text-white">CLIENTS</span>
        </h2>
      </motion.div>

      {/* Logos Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        {/* Divider line */}
        <div className="absolute left-6 right-6 top-1/2 h-px bg-dark-border" />

        {/* First row - scrolling left */}
        <div className="overflow-hidden py-8">
          <div className="flex gap-12 md:gap-20 animate-scroll-slow">
            {[...clientsRow1, ...clientsRow1].map((client, idx) => (
              <ClientLogo key={`row1-${idx}`} name={client} />
            ))}
          </div>
        </div>

        {/* Second row - scrolling right */}
        <div className="overflow-hidden py-8">
          <div className="flex gap-12 md:gap-20 animate-scroll-reverse">
            {[...clientsRow2, ...clientsRow2].map((client, idx) => (
              <ClientLogo key={`row2-${idx}`} name={client} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ClientLogo({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center min-w-[140px] md:min-w-[180px] h-[60px] md:h-[80px] group">
      <span className="text-white/30 text-lg md:text-xl font-bold tracking-wide grayscale group-hover:text-white/60 group-hover:grayscale-0 transition-all duration-500 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
