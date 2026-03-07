import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nilanjandeb.com"),
  title: {
    default: "Nilanjan Deb - Data Engineer & Software Developer | Portfolio",
    template: "%s | Nilanjan Deb",
  },
  description:
    "Data Engineer & Software Developer at Harness, specializing in Big Data, Apache Spark, Kafka, AI-driven analytics, and distributed systems. BITS Pilani alumni.",
  keywords: [
    "Nilanjan Deb",
    "Data Engineer",
    "Software Developer",
    "Big Data",
    "Apache Spark",
    "Kafka",
    "Trino",
    "Apache Iceberg",
    "AI",
    "Machine Learning",
    "LLM",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Harness",
    "BITS Pilani",
    "Data Pipeline",
    "Real-time Streaming",
    "ETL",
    "Data Lake",
    "System Design",
    "Backend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Nilanjan Deb", url: "https://nilanjandeb.com" }],
  creator: "Nilanjan Deb",
  publisher: "Nilanjan Deb",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nilanjandeb.com",
    siteName: "Nilanjan Deb Portfolio",
    title: "Nilanjan Deb - Data Engineer & Software Developer",
    description:
      "Experienced Data Engineer & Software Developer specializing in Big Data, AI-driven analytics, and scalable software solutions. Building the future with data.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nilanjan Deb - Data Engineer & Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nilanjan Deb - Data Engineer & Software Developer",
    description:
      "Experienced Data Engineer & Software Developer specializing in Big Data, AI-driven analytics, and scalable software solutions.",
    images: ["/og-image.jpg"],
    creator: "@nil1729",
  },
  alternates: {
    canonical: "https://nilanjandeb.com",
  },
  category: "Technology",
  classification: "Portfolio Website",
  other: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://nilanjandeb.com/#profilepage",
      url: "https://nilanjandeb.com",
      name: "Nilanjan Deb — Data Engineer & Software Developer",
      mainEntity: { "@id": "https://nilanjandeb.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://nilanjandeb.com/#person",
      name: "Nilanjan Deb",
      url: "https://nilanjandeb.com",
      email: "hello@nilanjandeb.com",
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Harness",
        url: "https://harness.io",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "BITS Pilani",
        url: "https://www.bits-pilani.ac.in",
      },
      knowsAbout: [
        "Data Engineering",
        "Big Data",
        "Apache Spark",
        "Apache Kafka",
        "Apache Iceberg",
        "Trino",
        "Machine Learning",
        "LLM Integration",
        "Software Development",
        "System Design",
      ],
      sameAs: [
        "https://github.com/nil1729",
        "https://www.linkedin.com/in/nil1729",
        "https://twitter.com/nil1729",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nilanjandeb.com/#website",
      url: "https://nilanjandeb.com",
      name: "Nilanjan Deb",
      publisher: { "@id": "https://nilanjandeb.com/#person" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <head>
        <link rel='canonical' href='https://nilanjandeb.com' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff' media='(prefers-color-scheme: light)' />
        <meta name='theme-color' content='#0a0a0a' media='(prefers-color-scheme: dark)' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c nil1729 ', 'background: #3b82f6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px; font-weight: bold;');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          storageKey='nilanjan-theme'
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
