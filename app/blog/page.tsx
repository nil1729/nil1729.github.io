import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Database, Calendar, ArrowLeft, Bell } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Data Engineering & AI Insights",
  description:
    "Technical blog by Nilanjan Deb covering Data Engineering, AI, Machine Learning, Apache Spark, Kafka, and real-world applications. Daily learnings and practical examples from a Data Engineer at InMobi.",
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

export default function BlogPage() {
  const upcomingTopics = [
    {
      title: "Real-time Data Streaming with Apache Kafka",
      category: "Data Engineering",
      icon: Database,
      description: "Deep dive into building scalable streaming pipelines",
      estimatedDate: "Coming Soon",
    },
    {
      title: "LLM Integration in Data Analytics",
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Practical approaches to integrating AI in data workflows",
      estimatedDate: "Coming Soon",
    },
    {
      title: "Apache Iceberg: Modern Data Lake Architecture",
      category: "Data Engineering",
      icon: Database,
      description: "Building efficient data lakes with Apache Iceberg",
      estimatedDate: "Coming Soon",
    },
    {
      title: "Performance Optimization in Spark Streaming",
      category: "Data Engineering",
      icon: Database,
      description: "Techniques for optimizing real-time data processing",
      estimatedDate: "Coming Soon",
    },
    {
      title: "AI-Powered Analytics with Vanna.AI",
      category: "AI & Machine Learning",
      icon: Brain,
      description: "Implementing intelligent analytics solutions",
      estimatedDate: "Coming Soon",
    },
    {
      title: "System Design for Data Engineers",
      category: "System Design",
      icon: Database,
      description: "Architectural patterns for scalable data systems",
      estimatedDate: "Coming Soon",
    },
  ]

  return (
    <main className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <AnimatedSection direction="down" delay={100}>
              <Link
                href="/"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5 mr-1.5" />
                Back to Portfolio
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="down" delay={200}>
              <span className="inline-block text-xs font-mono text-muted-foreground tracking-widest uppercase border border-border rounded-full px-4 py-1.5">
                Data Engineering · AI Insights
              </span>
            </AnimatedSection>

            <AnimatedSection direction="down" delay={300}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Tech Blog
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Daily learnings, practical insights, and real-world experiences in Data Engineering and AI —
                from building scalable pipelines to implementing AI-powered analytics.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={600}>
              <Card className="border-dashed">
                <CardContent className="p-10 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Bell className="h-10 w-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-3">Blog Coming Soon</h3>
                  <p className="text-sm text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    I'm currently working on creating high-quality content covering my daily learnings in Data
                    Engineering and AI. Each post will include practical examples, code snippets, and real-world
                    applications from my professional experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button className="w-full sm:w-auto" asChild>
                      <Link href="mailto:hello@nilanjandeb.com?subject=Blog Updates Notification">
                        <Bell className="mr-2 h-4 w-4" />
                        Notify Me When Live
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto" asChild>
                      <Link href="/#contact">Get in Touch</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={800}>
              <div className="mb-12 text-center">
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Coming Up</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Topics</h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingTopics.map((topic, index) => (
                <AnimatedSection key={index} direction="up" delay={1000 + index * 100}>
                  <Card className="flex flex-col h-full">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <topic.icon className="h-5 w-5 text-muted-foreground shrink-0" />
                        <span className="text-xs font-mono text-muted-foreground">{topic.category}</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-2 leading-snug">{topic.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1">{topic.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                        <Calendar className="h-3 w-3 mr-1.5 shrink-0" />
                        {topic.estimatedDate}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-muted/40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection delay={1700}>
              <div className="mb-12 text-center">
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Coverage</p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What to Expect</h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-4">
              <AnimatedSection direction="right" delay={1900}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Database className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                      <h4 className="font-semibold">Data Engineering</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Real-time streaming architectures</li>
                      <li>• Data pipeline optimization techniques</li>
                      <li>• Modern data lake implementations</li>
                      <li>• Performance tuning strategies</li>
                      <li>• Infrastructure as Code practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={2100}>
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Brain className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                      <h4 className="font-semibold">AI & Machine Learning</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• LLM integration patterns</li>
                      <li>• AI-powered analytics solutions</li>
                      <li>• Machine learning in production</li>
                      <li>• Automated content generation</li>
                      <li>• AI system architecture design</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
