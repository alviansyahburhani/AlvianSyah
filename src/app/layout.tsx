import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alviansyah.com"),
  title: "Alvian Syah System",
  description: "website profesional untuk bisnis Anda? Jelajahi portofolio saya dan mulai konsultasi pembuatan website impian Anda hari ini. Mari wujudkan ide Anda!",
  keywords: ["Alvian Syah Burhani", "Alvian", "Alvian Syah", "Web Developer", "Jasa Pembuatan Website", "Portofolio Developer", "Frontend Developer", "Machine Learning", "Backend Developer"],
  authors: [{ name: "Alvian Syah Burhani" }],
  openGraph: {
    title: "Alvian Syah System | Web Developer & Services",
    description: "Layanan jasa pembuatan website profesional dan portofolio digital Alvian Syah Burhani.",
    url: "https://alviansyah.com", // Ganti dengan domain asli jika sudah ada
    siteName: "Alvian Syah System",
    images: [
      {
        url: "/images/images.png", // Gunakan background hero sebagai default OG Image
        width: 1200,
        height: 630,
        alt: "Alvian Syah System",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvian Syah System",
    description: "Jasa pembuatan website modern & Portofolio Alvian Syah Burhani.",
    images: ["/images/images.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alvian Syah Burhani",
    "url": "https://alviansyah.com",
    "jobTitle": "Developer",
    "alumniOf": "Universitas Muhammadiyah Makassar",
    "knowsAbout": ["Frontend Development", "Backend Development", "Machine Learning", "Next.js", "Alvian", "Alvian Syah", "Jasa Pembuatan Website", "Jasa Machine Learning",],
    "description": "Portofolio profesional dan layanan jasa pembuatan website oleh Alvian Syah Burhani."
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Menyuntikkan JSON-LD agar AI (Google SGE, ChatGPT) mengenali identitas website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
