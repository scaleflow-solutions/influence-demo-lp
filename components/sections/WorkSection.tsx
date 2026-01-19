"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    number: "01",
    client: "ISDB",
    project: "SHARM EL-SHEIKH",
    title: "ISDB Annual Meeting",
    description: "Comprehensive event management and PR for the Islamic Development Bank's flagship annual gathering",
    image: "/api/placeholder/800/600",
    year: "2024",
  },
  {
    id: 2,
    number: "02",
    client: "L'ORÉAL",
    project: "PARIS",
    title: "L'Oréal Paris Launch",
    description: "Strategic communications and influencer engagement for premium beauty product launch across MEA",
    image: "/api/placeholder/800/600",
    year: "2024",
  },
  {
    id: 3,
    number: "03",
    client: "ARAMCO",
    project: "RIYADH",
    title: "Energy Transition Forum",
    description: "High-level stakeholder engagement and media strategy for sustainability-focused energy summit",
    image: "/api/placeholder/800/600",
    year: "2023",
  },
  {
    id: 4,
    number: "04",
    client: "DUBAI EXPO",
    project: "2020",
    title: "National Pavilion Program",
    description: "Multi-month experiential marketing campaign for international country pavilions",
    image: "/api/placeholder/800/600",
    year: "2023",
  },
];

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter via-dark to-dark-lighter" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
            SELECTED <span className="text-influence-red">WORK</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Transforming visions into reality across the Middle East and beyond.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect - image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        delay: index * 0.2,
        ease: [0.6, 0.05, 0.01, 0.9],
      }}
      className={`relative grid md:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
      style={{ opacity }}
    >
      {/* Project Number */}
      <div className="absolute -top-4 md:-top-8 left-0 text-[60px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-bold text-white/5 leading-none select-none">
        {project.number}
      </div>

      {/* Content */}
      <motion.div
        className={`relative z-10 ${isEven ? "md:order-1" : "md:order-2"}`}
        style={{ y: contentY }}
      >
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-influence-red text-sm font-semibold tracking-wider">
              {project.year}
            </span>
            <div className="h-px flex-1 bg-influence-red/30" />
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 leading-none">
            {project.client}
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/50 font-light">
            {project.project}
          </p>
        </div>

        <h4 className="text-xl md:text-2xl font-semibold mb-4">
          {project.title}
        </h4>

        <p className="text-lg text-white/70 mb-8 max-w-lg">
          {project.description}
        </p>

        <motion.a
          href={`/work/${project.id}`}
          className="inline-flex items-center gap-3 glass glass-hover px-6 py-3 rounded-full text-sm font-semibold group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>VIEW PROJECT</span>
          <motion.span
            className="text-influence-red"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.a>
      </motion.div>

      {/* Image */}
      <motion.div
        className={`relative ${isEven ? "md:order-2" : "md:order-1"}`}
      >
        <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl group cursor-pointer">
          {/* Placeholder gradient (since we don't have actual images) */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-influence-red/20 via-purple-500/20 to-blue-500/20"
            style={{ y: imageY }}
          />

          {/* Image overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />

          {/* Text overlay on image */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="text-center">
              <p className="text-6xl font-bold text-white mb-4">
                {project.client}
              </p>
              <p className="text-2xl text-influence-red">VIEW CASE STUDY</p>
            </div>
          </div>

          {/* Red glow on hover */}
          <div className="absolute inset-0 red-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </motion.div>
  );
}
