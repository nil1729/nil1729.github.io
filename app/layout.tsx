import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://nilanjandeb.com"),
  title: {
    default: "Nilanjan Deb - Data Engineer & Software Developer | Portfolio",
    template: "%s | Nilanjan Deb",
  },
  description:
    "Experienced Data Engineer & Software Developer specializing in Big Data, Apache Spark, Kafka, AI-driven analytics, and full-stack development. Currently at InMobi Group, building scalable data pipelines and AI-powered solutions.",
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
    "InMobi",
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
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
  generator: "v0.dev",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nilanjan Deb",
  url: "https://nilanjandeb.com",
  image: "https://nilanjandeb.com/profile-image.jpg",
  jobTitle: "Data Engineer & Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "InMobi Group",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "BITS Pilani",
  },
  knowsAbout: [
    "Data Engineering",
    "Big Data",
    "Apache Spark",
    "Kafka",
    "Machine Learning",
    "Software Development",
    "System Design",
  ],
  sameAs: ["https://github.com/nil1729", "https://linkedin.com/in/nil1729"],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://nilanjandeb.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://nilanjandeb.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log('%c nil1729 ', 'background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); color: white; padding: 8px 16px; border-radius: 8px; font-size: 16px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);');
              console.log('%c🚀 Data Engineer & Software Developer', 'color: #667eea; font-size: 14px; font-weight: 600;');
              console.log('%c💼 Currently at InMobi Group', 'color: #764ba2; font-size: 12px;');
              console.log('%c🔗 GitHub: https://github.com/nil1729', 'color: #333; font-size: 12px;');
              console.log('%c📧 Connect: https://nilanjandeb.com', 'color: #333; font-size: 12px;');
              console.log('%c\\n🛠️ Built with Next.js, TypeScript & v0.dev', 'color: #888; font-size: 11px; font-style: italic;');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="nilanjan-theme">
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
