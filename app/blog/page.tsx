import Link from "next/link"
import { preload } from "react-dom"
import type { Metadata } from "next"
import { ArrowLeft, Bell, Calendar } from "lucide-react"
import { Circled, CheckBox, Highlight, PenButton, Sheet, Stamp, Underline, type Stock } from "@/components/looseleaf/paper"

export const metadata: Metadata = {
  // Not linked from anywhere until the first post is written, so keep it out of search results.
  robots: { index: false, follow: false },
  title: "Blog - Data Engineering & AI Insights",
  description:
    "Technical blog by Nilanjan Deb covering Data Engineering, AI, Machine Learning, Apache Spark, Kafka, and real-world applications. Daily learnings and practical examples from a Data Engineer at Harness.",
  keywords: [
    "Data Engineering Blog",
    "AI Blog",
    "Machine Learning Blog",
    "Apache Spark Tutorial",
    "Kafka Tutorial",
    "Technical Blog",
    "Data Pipeline",
    "Real-time Streaming",
    "LLM Integration",
    "Big Data",
    "Nilanjan Deb Blog",
  ],
  openGraph: {
    title: "Blog - Nilanjan Deb | Data Engineering & AI Insights",
    description: "Technical insights and daily learnings in Data Engineering and AI from an experienced Data Engineer",
    url: "https://nilanjandeb.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://nilanjandeb.com/blog",
  },
}

type Category = "Data Engineering" | "AI & Machine Learning" | "System Design"

const STAMP_TONE: Record<Category, "blue" | "red" | "green"> = {
  "Data Engineering": "blue",
  "AI & Machine Learning": "red",
  "System Design": "green",
}

const upcomingTopics: ReadonlyArray<{
  title: string
  category: Category
  description: string
  stock: Stock
  tape?: "top" | "corner"
  rotate: number
}> = [
  {
    title: "Real-time Data Streaming with Apache Kafka",
    category: "Data Engineering",
    description: "Deep dive into building scalable streaming pipelines",
    stock: "index",
    tape: "top",
    rotate: -1.4,
  },
  {
    title: "LLM Integration in Data Analytics",
    category: "AI & Machine Learning",
    description: "Practical approaches to integrating AI in data workflows",
    stock: "sticky-yellow",
    rotate: 1.8,
  },
  {
    title: "Apache Iceberg: Modern Data Lake Architecture",
    category: "Data Engineering",
    description: "Building efficient data lakes with Apache Iceberg",
    stock: "graph",
    tape: "corner",
    rotate: -0.9,
  },
  {
    title: "Performance Optimization in Spark Streaming",
    category: "Data Engineering",
    description: "Techniques for optimizing real-time data processing",
    stock: "kraft",
    tape: "top",
    rotate: 1.2,
  },
  {
    title: "AI-Powered Analytics with Vanna.AI",
    category: "AI & Machine Learning",
    description: "Implementing intelligent analytics solutions",
    stock: "sticky-pink",
    rotate: -1.9,
  },
  {
    title: "System Design for Data Engineers",
    category: "System Design",
    description: "Architectural patterns for scalable data systems",
    stock: "sticky-green",
    rotate: 1.1,
  },
]

const dataEngineering = [
  "Real-time streaming architectures",
  "Data pipeline optimization techniques",
  "Modern data lake implementations",
  "Performance tuning strategies",
  "Infrastructure as Code practices",
]

const aiAndMl = [
  "LLM integration patterns",
  "AI-powered analytics solutions",
  "Machine learning in production",
  "Automated content generation",
  "AI system architecture design",
]

const NOTIFY_HREF = "mailto:hello@nilanjandeb.com?subject=Blog%20Updates%20Notification"

export default function BlogPage() {
  preload("/fonts/KevinSans-Bold.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  preload("/fonts/KevinSans-Regular.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" })

  return (
    <main className="pt-16">
      {/* ------------------------------------------------------------ hero */}
      <section aria-labelledby="blog-title" className="px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Link href="/" className="ll-link ll-link-desk inline-flex items-center text-sm">
              <ArrowLeft className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
              Back to Portfolio
            </Link>

            <div className="mt-8">
              <Stamp seed="stamp-hero" tone="blue" rotate={-2} onDesk>
                Data Engineering · AI Insights
              </Stamp>
            </div>

            <h1 id="blog-title" className="ll-title mt-6">
              Tech <Underline seed="title-blog">Blog</Underline>
            </h1>

            <p className="ll-lede mt-9">
              Daily learnings, practical insights, and real-world experiences in{" "}
              <Highlight>Data Engineering and AI</Highlight> — from building scalable pipelines to implementing
              AI-powered analytics.
            </p>
          </div>

          <div className="lg:col-span-5">
            <Sheet stock="paper" seed="coming-soon" tape="both" rotate={1.6} as="aside" index={1}>
              <div className="flex items-center gap-4">
                <Circled seed="bell" className="!px-3 !py-2.5">
                  <Bell className="block h-6 w-6" aria-hidden="true" />
                </Circled>
                <h2 className="text-[1.9rem] font-bold leading-none">Blog coming soon</h2>
              </div>
              <p className="mt-5 text-[1.02rem] leading-relaxed" style={{ color: "var(--ll-ink-soft)" }}>
                I&apos;m currently working on creating high-quality content covering my daily learnings in Data
                Engineering and AI. Each post will include practical examples, code snippets, and real-world
                applications from my professional experience.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-4">
                <PenButton href={NOTIFY_HREF} seed="btn-notify">
                  <Bell aria-hidden="true" />
                  Notify me when live
                </PenButton>
                <PenButton href="/#contact" seed="btn-contact" tone="paper">
                  Get in touch
                </PenButton>
              </div>
            </Sheet>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- upcoming topics */}
      <section aria-labelledby="desk-title" className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14 max-w-xl">
            <p className="ll-eyebrow">Coming up</p>
            <h2 id="desk-title" className="ll-h2 mt-3">
              On the <Underline seed="h-desk">desk</Underline>
            </h2>
            <p className="ll-lede mt-6">Six topics pinned up so far, no posts published yet.</p>
          </header>

          <ul className="ll-board">
            {upcomingTopics.map((topic, i) => (
              <li key={topic.title}>
                <Sheet
                  as="article"
                  stock={topic.stock}
                  seed={`topic-${i}`}
                  rotate={topic.rotate}
                  tape={topic.tape ?? false}
                  index={i + 2}
                >
                  <div className="ll-note-meta">
                    <Stamp seed={`stamp-${i}`} tone={STAMP_TONE[topic.category]}>
                      {topic.category}
                    </Stamp>
                    <span className="ll-no" aria-hidden="true">
                      no. {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="ll-card-title">{topic.title}</h3>
                  <p className="ll-card-body">{topic.description}</p>
                  <div className="ll-card-foot">
                    <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    Coming Soon
                  </div>
                </Sheet>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------- what to expect */}
      <section aria-labelledby="expect-title" className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-14 max-w-xl">
            <p className="ll-eyebrow">Coverage</p>
            <h2 id="expect-title" className="ll-h2 mt-3">
              What to <Underline seed="h-expect">expect</Underline>
            </h2>
          </header>

          <div className="grid items-start gap-14 md:grid-cols-2">
            <Sheet as="section" stock="ruled" seed="expect-de" torn rotate={-0.8} index={8}>
              <h3 className="ll-notebook-title">Data Engineering</h3>
              <ul className="ll-list">
                {dataEngineering.map((item, i) => (
                  <li key={item}>
                    <CheckBox seed={`de-${i}`} />
                    <span>{i === 0 ? <Highlight>{item}</Highlight> : item}</span>
                  </li>
                ))}
              </ul>
            </Sheet>

            <Sheet as="section" stock="graph" seed="expect-ai" tape="top" rotate={0.9} index={9}>
              <h3 className="ll-notebook-title">AI &amp; Machine Learning</h3>
              <ul className="ll-list">
                {aiAndMl.map((item, i) => (
                  <li key={item}>
                    <CheckBox seed={`ai-${i}`} />
                    <span>{i === 1 ? <Highlight>{item}</Highlight> : item}</span>
                  </li>
                ))}
              </ul>
            </Sheet>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- sign-off */}
      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Stamp seed="stamp-wip" tone="green" rotate={-3} onDesk>
            Writing in progress
          </Stamp>
          <p className="ll-lede !max-w-md">
            Want to talk shop in the meantime?{" "}
            <Link href="/#contact" className="ll-link ll-link-desk">
              Say hello
            </Link>
            , or{" "}
            <Link href="/" className="ll-link ll-link-desk">
              head back to the portfolio
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
