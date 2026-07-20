import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BK CONSTRUCTION | Turning Ideas into Foundations",
  description: "Dedicated and trusted construction company committed to delivering high-quality building solutions in residential, commercial, and infrastructure projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
