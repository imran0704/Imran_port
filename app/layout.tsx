import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  title: "Imran — Full-Stack Developer & UI/UX Specialist",
  description:
    "Portfolio of Imran: Full-Stack Engineer and UI/UX Designer crafting high-performance web applications, scalable design systems, and thoughtful digital experiences.",
  keywords: [
    "Imran",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Engineer",
    "Sanity CMS",
    "TypeScript",
  ],
  authors: [{ name: "Imran" }],
  openGraph: {
    title: "Imran — Full-Stack Developer & UI/UX Specialist",
    description: "Crafting digital experiences with precision, performance, and modern aesthetics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-600 selection:text-white`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans"
      >
        {children}
      </body>
    </html>
  );
}
