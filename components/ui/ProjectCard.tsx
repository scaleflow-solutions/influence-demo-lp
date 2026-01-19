"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: "default" | "featured";
}

export function ProjectCard({
  project,
  index,
  variant = "default",
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${
        isFeatured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image Container */}
        <div
          className={`relative overflow-hidden rounded-lg bg-dark-lighter ${
            isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Category Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 text-xs font-medium tracking-wider text-white bg-influence-red/80 backdrop-blur-sm rounded-full"
              >
                {cat.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Client */}
            <p className="text-influence-red text-sm font-medium mb-2 tracking-wide">
              {project.client}
            </p>

            {/* Title */}
            <h3
              className={`font-bold text-white mb-3 group-hover:text-influence-red transition-colors duration-300 ${
                isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
              }`}
            >
              {project.title}
            </h3>

            {/* Description - only show on featured */}
            {isFeatured && (
              <p className="text-white/70 text-sm md:text-base line-clamp-2 mb-4 max-w-2xl">
                {project.description}
              </p>
            )}

            {/* View Project Link */}
            <div className="flex items-center gap-2 text-white/60 group-hover:text-influence-red transition-colors duration-300">
              <span className="text-sm font-medium tracking-wide">
                VIEW PROJECT
              </span>
              <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </div>
          </div>

          {/* Red accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-influence-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
}
