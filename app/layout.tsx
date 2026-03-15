import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Kumar - Full Stack Developer",
  description: "A self-taught Full Stack Developer with hands-on experience in MERN Stack, Flutter, Firebase & Supabase. I build scalable web apps and cross-platform mobile apps — from design to deployment.",
  keywords: [
    "Aman Kumar",
    "Full Stack Developer",
    "Flutter Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Mobile App Developer",
    "Freelancer",
    "Web Developer",
    "Firebase",
    "Supabase",
    "Portfolio",
    "Rampur",
    "India",
  ],
  authors: [{ name: "Aman Kumar" }],
  creator: "Aman Kumar",
  publisher: "Aman Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vipamangautam.com",
    title: "Aman Kumar - Full Stack Developer",
    description: "A self-taught Full Stack Developer with hands-on experience in MERN Stack, Flutter, Firebase & Supabase. Building scalable web apps and cross-platform mobile apps — from design to deployment.",
    siteName: "Aman Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Kumar - Full Stack Developer",
    description: "A self-taught Full Stack Developer with hands-on experience in MERN Stack, Flutter, Firebase & Supabase.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://vipamangautam.com" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}