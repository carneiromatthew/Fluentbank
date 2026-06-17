import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toast";
import { StoreHydrator } from "@/components/app/store-hydrator";
import { themeInitScript } from "@/components/app/theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FluentBank — Build your vocabulary portfolio",
  description:
    "Bank the vocabulary you need to reach B1, B2, C1 and C2 fluency. Every word you master is a deposit into your FluentBank.",
  applicationName: "FluentBank",
  keywords: ["Spanish", "vocabulary", "CEFR", "language learning", "spaced repetition"],
};

export const viewport: Viewport = {
  themeColor: "#0c8f63",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <StoreHydrator />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
