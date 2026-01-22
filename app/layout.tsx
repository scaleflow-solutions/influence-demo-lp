import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";

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
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
