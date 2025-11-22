import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ankit-portfolio.example.com"),
  title: {
    default: "Ankit Tiwary · Full Stack Developer",
    template: "%s · Ankit Tiwary",
  },
  description:
    "Modern portfolio for Ankit Tiwary showcasing immersive hero, rich case studies, motion-heavy storytelling, and a production-ready contact workflow.",
  keywords: [
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "Product Design",
    "Framer Motion",
  ],
  openGraph: {
    title: "Ankit Tiwary · Full Stack Developer",
    description:
      "Modern portfolio designed with Next.js, Tailwind, and Framer Motion. Explore case studies, skills, and contact flows.",
    url: "https://ankit-portfolio.example.com",
    siteName: "Ankit Tiwary Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ankit Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ankit",
    creator: "@ankit",
    title: "Ankit Tiwary · Full Stack Developer",
    description:
      "Modern portfolio designed with Next.js, Tailwind, and Framer Motion. Explore case studies, skills, and contact flows.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://ankit-portfolio.example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
