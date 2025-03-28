import type { Metadata, Viewport } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "obviate",
    template: "obviate | %s",
  },
  description: "My works.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://obviate.my.id"
      : "http://localhost:3000",
  ),
  openGraph: {
    title: {
      default: "obviate",
      template: "obviate | %s",
    },
    description: "My works.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nyferin",
    creator: "@nyferin",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
