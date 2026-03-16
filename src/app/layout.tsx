import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.ascendralai.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AscendralAI — AI Automation for Your Business",
    template: "%s | AscendralAI",
  },
  description:
    "We build AI automation systems that save you time, cut costs, and let you focus on growing your business.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "AscendralAI",
    title: "AscendralAI — AI Automation for Your Business",
    description:
      "We build AI automation systems that save you time, cut costs, and let you focus on growing your business.",
    url: siteUrl,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AscendralAI — AI Automation for Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AscendralAI — AI Automation for Your Business",
    description:
      "We build AI automation systems that save you time, cut costs, and let you focus on growing your business.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "AscendralAI",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      description:
        "We build AI automation systems that save you time, cut costs, and let you focus on growing your business.",
    },
    {
      "@type": "ProfessionalService",
      name: "AscendralAI",
      url: siteUrl,
      description:
        "AI automation consulting and development — lead generation, email automation, document processing, and custom workflows.",
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
