"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Alex Anderson",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Marcus Chen",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Emma Roberts",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Visual Designer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Lisa Park",
    role: "Content Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative py-32 bg-dark overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-border to-transparent" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-influence-red border border-influence-red/30 rounded-full bg-influence-red/5">
            TEAM MEMBERS
          </span>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-influence-red italic">Faces</span> Behind
            Influence
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Discover the talented team of creatives and strategists who drive
            Influence&apos;s unique vision and innovation.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient masks for carousel effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          {/* Infinite scroll container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
              {/* First set */}
              {teamMembers.map((member, index) => (
                <TeamCard key={`first-${member.name}`} member={member} index={index} />
              ))}
              {/* Duplicate set for seamless loop */}
              {teamMembers.map((member, index) => (
                <TeamCard key={`second-${member.name}`} member={member} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
}: {
  member: (typeof teamMembers)[0];
  index: number;
}) {
  return (
    <div className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] group">
      {/* Image Container */}
      <div className="relative aspect-[3/4] mb-5 rounded-lg overflow-hidden bg-dark-lighter">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Hover button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
          <button className="px-6 py-3 bg-influence-red/90 hover:bg-influence-red text-white text-sm font-semibold rounded-sm backdrop-blur-sm transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            About {member.name.split(" ")[0]}
          </button>
        </div>

        {/* Red accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-influence-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-influence-red transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-white/50 text-sm font-medium tracking-wide">
          {member.role}
        </p>
      </div>
    </div>
  );
}
