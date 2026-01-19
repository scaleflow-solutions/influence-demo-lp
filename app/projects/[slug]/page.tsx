"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactButton } from "@/components/ui/ContactButton";
import { getProjectBySlug, projects } from "@/lib/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="relative bg-dark min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Project Not Found
            </h1>
            <Link
              href="/projects"
              className="text-influence-red hover:underline"
            >
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.category.some((cat) => project.category.includes(cat))
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative bg-dark min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden">
          {/* Back Link */}
          <div className="container mx-auto px-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-white/60 hover:text-influence-red transition-colors"
              >
                <span>←</span>
                <span className="text-sm font-medium tracking-wide">
                  BACK TO PROJECTS
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              {/* Left: Project Details */}
              <div>
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="px-4 py-2 text-sm font-medium tracking-wider text-influence-red border border-influence-red/30 rounded-full bg-influence-red/5"
                    >
                      {cat.toUpperCase()}
                    </span>
                  ))}
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4"
                >
                  {project.title}
                </motion.h1>

                {/* Client */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl sm:text-2xl text-influence-red font-medium mb-6"
                >
                  {project.client}
                </motion.p>

                {/* Meta */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex gap-8 text-white/60"
                >
                  <div>
                    <p className="text-xs font-medium tracking-wider mb-1">
                      YEAR
                    </p>
                    <p className="text-white font-semibold">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wider mb-1">
                      LOCATION
                    </p>
                    <p className="text-white font-semibold">
                      {project.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right: KPIs */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                {project.kpis.map((kpi, index) => (
                  <div
                    key={kpi.label}
                    className="bg-dark-lighter/50 border border-dark-border rounded-lg p-4 sm:p-5 md:p-6 group hover:border-influence-red/30 transition-colors duration-300"
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white group-hover:text-influence-red transition-colors duration-300">
                      {kpi.value}
                    </p>
                    <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wide">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="container mx-auto px-6">
              <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-t-xl md:rounded-t-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8 md:space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Overview
                  </h2>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    The Challenge
                  </h2>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                    Our Solution
                  </h2>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className={`relative rounded-lg overflow-hidden ${
                          index === 0 ? "md:col-span-2 aspect-video" : "aspect-[4/3]"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} gallery ${index + 1}`}
                          fill
                          sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          quality={80}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24 md:top-32 space-y-6 md:space-y-8">
                  {/* Project Info Card */}
                  <div className="bg-dark-lighter/50 border border-dark-border rounded-xl p-5 sm:p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-white mb-6">
                      Project Details
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-medium tracking-wider text-white/50 mb-1">
                          CLIENT
                        </p>
                        <p className="text-white font-medium">
                          {project.client}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-medium tracking-wider text-white/50 mb-1">
                          SERVICES
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.category.map((cat) => (
                            <span
                              key={cat}
                              className="text-sm text-influence-red"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-medium tracking-wider text-white/50 mb-1">
                          YEAR
                        </p>
                        <p className="text-white font-medium">{project.year}</p>
                      </div>

                      <div>
                        <p className="text-xs font-medium tracking-wider text-white/50 mb-1">
                          LOCATION
                        </p>
                        <p className="text-white font-medium">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-influence-red/20 to-dark-lighter border border-influence-red/20 rounded-xl p-5 sm:p-6 md:p-8">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Start Your Project
                    </h3>
                    <p className="text-sm text-white/60 mb-6">
                      Ready to achieve similar results? Let&apos;s talk about
                      your goals.
                    </p>
                    <ContactButton className="w-full">GET IN TOUCH</ContactButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-20 border-t border-dark-border">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white mb-10"
              >
                Related Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard
                    key={relatedProject.id}
                    project={relatedProject}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
