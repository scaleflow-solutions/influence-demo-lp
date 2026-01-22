"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { ContactModalProvider } from "@/lib/contact-modal-context";
import { ScrollProvider } from "@/lib/scroll-context";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { ContactModal } from "@/components/ui/ContactModal";

// Dynamically import CustomCursor - only loads on desktop, defers Framer Motion
const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ScrollProvider>
      <ContactModalProvider>
        <FilmGrain />
        <CustomCursor />
        {children}
        <ContactModal />
      </ContactModalProvider>
    </ScrollProvider>
  );
}
