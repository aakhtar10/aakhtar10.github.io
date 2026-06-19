import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Arsalan Akhtar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Arsalan Akhtar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Arsalan Akhtar" }],
  creator: "Arsalan Akhtar",
  openGraph: {
    title: "Arsalan Akhtar | Full Stack Developer",
    description:
      "Explore my portfolio, projects, skills, and experience as a Full Stack Developer.",
    url: "https://aakhtar10.github.io",
    siteName: "Arsalan Akhtar Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Arsalan Akhtar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arsalan Akhtar | Full Stack Developer",
    description:
      "Explore my portfolio, projects, skills, and experience as a Full Stack Developer.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}