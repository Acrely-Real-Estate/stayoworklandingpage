import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://stayowork.com'),
  title: {
    default: "STAYO WorkStay | Corporate Workforce Accommodation Infrastructure",
    template: "%s | STAYO WorkStay"
  },
  description: "Workforce accommodation, built around your demand. STAYO WorkStay helps companies plan, develop and operate professionally managed accommodation for their workforce.",
  openGraph: {
    title: "STAYO WorkStay",
    description: "Workforce accommodation, built around your demand.",
    url: '/',
    siteName: 'STAYO WorkStay',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STAYO WorkStay',
    description: 'Workforce accommodation, built around your demand.',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased min-h-screen flex flex-col bg-surface-container-lowest text-on-surface font-body selection:bg-primary-container selection:text-on-primary`}
      >
        <Navbar />
        <main className="w-full pt-0 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
