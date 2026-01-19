import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FilmGrain } from "@/components/ui/FilmGrain";
import { ContactModalProvider } from "@/lib/contact-modal-context";
import { ContactModal } from "@/components/ui/ContactModal";

export const metadata: Metadata = {
  title: "Influence Group | The Architecture of Influence",
  description: "6 Companies. 1 Ecosystem. Infinite Impact. Leading communications group across the Middle East.",
  keywords: ["PR", "Public Relations", "Marketing", "Digital", "Events", "Middle East"],
  openGraph: {
    title: "Influence Group | The Architecture of Influence",
    description: "6 Companies. 1 Ecosystem. Infinite Impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative overflow-x-hidden">
        <ContactModalProvider>
          <FilmGrain />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
