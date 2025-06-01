import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Nilanjan Deb | Data Engineering & AI Insights",
  description:
    "Technical blog covering Data Engineering, AI, and Machine Learning insights. Daily learnings, practical examples, and real-world applications.",
  keywords: ["Data Engineering", "AI", "Machine Learning", "Technical Blog", "Apache Spark", "Kafka", "LLM"],
  openGraph: {
    title: "Blog - Nilanjan Deb | Data Engineering & AI Insights",
    description: "Technical insights and daily learnings in Data Engineering and AI",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
