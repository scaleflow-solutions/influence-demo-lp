"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactButton } from "@/components/ui/ContactButton";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      <Navbar />
      <main className="relative bg-dark min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 md:pt-40 pb-12 md:pb-20 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-influence-red/5 via-transparent to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wider text-influence-red border border-influence-red/30 rounded-full bg-influence-red/5"
            >
              OUR WORK
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 max-w-4xl"
            >
              Projects That{" "}
              <span className="text-influence-red italic">Define</span> Impact
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl"
            >
              Explore our portfolio of successful campaigns that have shaped
              brands, driven engagement, and delivered measurable results across
              the MENA region.
            </motion.p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-white mb-10"
            >
              Featured Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant={index === 0 ? "featured" : "default"}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        {otherProjects.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold text-white mb-10"
              >
                More Projects
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-influence-red/20 via-influence-red/10 to-dark-lighter" />
              <div className="absolute inset-0 bg-dark-lighter/80" />

              {/* Content */}
              <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Create Your Next{" "}
                  <span className="text-influence-red">Success Story</span>?
                </h2>
                <p className="text-base sm:text-lg text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto">
                  Let&apos;s discuss how we can amplify your brand&apos;s
                  influence and deliver exceptional results.
                </p>
                <ContactButton size="lg">START A PROJECT</ContactButton>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
