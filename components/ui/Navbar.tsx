"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useContactModal } from "@/lib/contact-modal-context";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-80 h-32 md:w-[420px] md:h-36 lg:w-[500px] lg:h-40">
          <Image
            src="/assets/influence-logo.png"
            alt="Influence Group"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Navigation Links */}
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

        {/* Contact Button */}
        <motion.button
          onClick={openModal}
          className="glass glass-hover px-6 py-3 rounded-full text-sm font-semibold tracking-wide group relative overflow-hidden"
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
      </div>
    </motion.nav>
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
