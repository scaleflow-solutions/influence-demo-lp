"use client";

import { motion } from "framer-motion";
import { useContactModal } from "@/lib/contact-modal-context";

export function Footer() {
  const { openModal } = useContactModal();

  return (
    <footer className="relative border-t border-white/10 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-influence-red/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* CTA */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
              HAVE A PROJECT
              <br />
              <span className="text-influence-red">IN MIND?</span>
            </h3>
            <motion.button
              onClick={openModal}
              className="inline-flex items-center gap-2 text-lg font-semibold hover:text-influence-red transition-colors group"
              whileHover={{ x: 10 }}
            >
              <span className="text-influence-red text-2xl">GET.</span>
              <span>LETS TALK</span>
              <motion.span
                initial={{ x: 0 }}
                className="group-hover:translate-x-2 transition-transform"
              >
                →
              </motion.span>
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4 sm:gap-6">
              <SocialLink href="https://twitter.com/influencegroup" label="TWITTER" />
              <SocialLink href="https://linkedin.com/company/influencegroup" label="LINKEDIN" />
              <SocialLink href="https://instagram.com/influencegroup" label="INSTAGRAM" />
            </div>
            <p className="text-sm text-white/50 mt-4 md:mt-8">
              © {new Date().getFullYear()} INFLUENCE GROUP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium tracking-wide hover:text-influence-red transition-colors"
      whileHover={{ y: -2 }}
    >
      {label}
    </motion.a>
  );
}
