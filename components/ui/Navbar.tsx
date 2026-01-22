"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useContactModal } from "@/lib/contact-modal-context";
import { useScroll } from "@/lib/scroll-context";

export function Navbar() {
  const { scrolled } = useScroll(); // Use shared scroll context
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  // Close mobile menu when clicking outside or on a link
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-3 md:py-4" : "bg-transparent py-4 md:py-6"
          }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo - Responsive sizes */}
          <Link href="/" className="relative w-[420px] h-40 sm:w-[440px] sm:h-42 md:w-[460px] md:h-44 lg:w-[500px] lg:h-48">
            <Image
              src="/assets/influence-logo.png"
              alt="Influence Group"
              fill
              sizes="(max-width: 640px) 420px, (max-width: 768px) 440px, (max-width: 1024px) 460px, 500px"
              className="object-contain object-left"
              priority
              quality={85}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/projects"
              className="text-sm font-medium tracking-wide hover:text-influence-red transition-colors duration-300 relative group"
            >
              PROJECTS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-influence-red group-hover:w-full transition-all duration-300" />
            </Link>
            <NavLink href="#ecosystem">ECOSYSTEM</NavLink>
            <NavLink href="#team">TEAM</NavLink>
          </div>

          {/* Desktop Contact Button */}
          <motion.button
            onClick={openModal}
            className="hidden md:block glass glass-hover px-6 py-3 rounded-full text-sm font-semibold tracking-wide group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CONTACT US</span>
            <motion.div
              className="absolute inset-0 bg-influence-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bottom-0 bg-dark/98 backdrop-blur-md z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center pt-12 gap-6"
            >
              <Link
                href="/projects"
                onClick={closeMobileMenu}
                className="text-xl font-semibold tracking-wide hover:text-influence-red transition-colors"
              >
                PROJECTS
              </Link>
              <a
                href="#ecosystem"
                onClick={closeMobileMenu}
                className="text-xl font-semibold tracking-wide hover:text-influence-red transition-colors"
              >
                ECOSYSTEM
              </a>
              <a
                href="#team"
                onClick={closeMobileMenu}
                className="text-xl font-semibold tracking-wide hover:text-influence-red transition-colors"
              >
                TEAM
              </a>
              <button
                onClick={() => {
                  closeMobileMenu();
                  openModal();
                }}
                className="mt-4 px-6 py-3 bg-influence-red hover:bg-influence-red-light text-white font-semibold rounded-sm transition-all"
              >
                CONTACT US
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium tracking-wide hover:text-influence-red transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-influence-red group-hover:w-full transition-all duration-300" />
    </a>
  );
}
