import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geistSans = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webnexa - Digital Marketing Agency",
  description:
    "Transform your brand with data-driven strategies and creative excellence.",
  icons: {
    icon: [
      {
        url: "/icon.png",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_geistSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
