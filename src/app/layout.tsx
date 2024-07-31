import React from "react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "#1 Digit NFT - Figma to Code Challenge",
  description: "Figma to Code Challenge #1 | code by willivmx",
  icons: {
    icon: [
      {
        url: "/assets/images/logo/logo.svg",
        href: "/assets/vectors/logo/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
