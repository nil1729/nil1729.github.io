import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nilanjan Deb - Data Engineer & Software Developer",
  description:
    "Data Engineer & Software Developer specializing in Big Data, AI-driven analytics, and full-stack application development.",
  keywords: ["Data Engineer", "Software Developer", "Big Data", "AI", "Machine Learning", "Full Stack"],
  authors: [{ name: "Nilanjan Deb" }],
  openGraph: {
    title: "Nilanjan Deb - Data Engineer & Software Developer",
    description: "Architecting Intelligent Data Solutions & Scalable Software",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
