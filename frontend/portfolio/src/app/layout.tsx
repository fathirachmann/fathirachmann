import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathirachmann Portfolio",
  description: "Fathirachmann's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <Particles
            className="fixed inset-0"
            particleCount={300}
            particleSpread={20}
            speed={0.1}
            particleColors={["#ffffff", "#9ca3af", "#60a5fa"]}
            alphaParticles
            sizeRandomness={1}
            particleBaseSize={150}
            cameraDistance={15}
            moveParticlesOnHover={true}
            particleHoverFactor={0.6}
          />
        </div>
        <Navbar />
        <AOSProvider />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
