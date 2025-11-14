import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Azad Patel | Software Engineer",
  description: "Full-stack software engineer specializing in React, Spring Boot, and cloud-native architecture. 4+ years building scalable systems.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Spring Boot", "AWS", "Java", "TypeScript", "Azad Patel"],
  authors: [{ name: "Azad Patel" }],
  creator: "Azad Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azadpatel.in",
    title: "Azad Patel | Software Engineer",
    description: "Full-stack software engineer specializing in React, Spring Boot, and cloud-native architecture.",
    siteName: "Azad Patel Portfolio",
    images: [{
      url: "/og-image.jpeg",
      width: 1200,
      height: 630,
      alt: "Azad Patel - Software Engineer",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azad Patel | Software Engineer",
    description: "Full-stack software engineer specializing in React, Spring Boot, and cloud-native architecture.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
