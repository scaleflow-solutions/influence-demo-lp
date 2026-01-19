"use client";

import { motion } from "framer-motion";
import { useContactModal } from "@/lib/contact-modal-context";

interface ContactButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}

export function ContactButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = true,
}: ContactButtonProps) {
  const { openModal } = useContactModal();

  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-influence-red hover:bg-influence-red-light text-white hover:shadow-lg hover:shadow-influence-red/30",
    secondary:
      "bg-transparent border border-influence-red/50 text-white hover:bg-influence-red/10 hover:border-influence-red",
    glass:
      "glass glass-hover rounded-full relative overflow-hidden group",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const roundedClass = variant === "glass" ? "" : "rounded-sm";

  if (variant === "glass") {
    return (
      <motion.button
        onClick={openModal}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-influence-red opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        />
      </motion.button>
    );
  }

  return (
    <button
      onClick={openModal}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClass} ${className}`}
    >
      <span>{children}</span>
      {showArrow && <span className="text-xl">→</span>}
    </button>
  );
}
