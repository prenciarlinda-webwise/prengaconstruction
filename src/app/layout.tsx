import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prenga Construction Inc | Quality Home Improvement Services",
  description:
    "Prenga Construction Inc provides professional residential construction and home improvement services including painting, trim carpentry, pressure washing, flooring, remodeling, and more. Call (904) 909-0916 for a free estimate.",
  keywords: [
    "construction",
    "home improvement",
    "remodeling",
    "painting",
    "trim carpentry",
    "pressure washing",
    "flooring",
    "bathroom remodel",
    "kitchen remodel",
    "roofing",
    "residential construction",
    "Jacksonville",
    "Florida",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
