import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Database, Calendar, ArrowLeft, Bell } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <Link
                href="/"
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="flex items-center justify-center mb-6">
                <BookOpen className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Tech Blog
                  </span>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Data Engineering & AI Insights</h2>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Welcome to my technical blog where I share my daily learnings, insights, and practical experiences in
                Data Engineering and Artificial Intelligence. From building scalable data pipelines to implementing
                AI-powered analytics, I document my journey and share knowledge with the community.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={800}>
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-dashed border-blue-300 dark:border-blue-700">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <Bell className="h-16 w-16 text-blue-600 animate-pulse" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Blog Coming Soon!</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    I'm currently working on creating high-quality content that covers my daily learnings in Data
                    Engineering and AI. Each post will include practical examples, code snippets, and real-world
                    applications from my professional experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                      <Link href="mailto:nilanjan1729nsvian@gmail.com?subject=Blog Updates Notification">
                        <Bell className="mr-2 h-4 w-4" />
                        Notify Me When Live
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                      <Link href="/#contact">Subscribe for Updates</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection delay={1000}>
              <h3 className="text-3xl font-bold text-center mb-12">Upcoming Topics</h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingTopics.map((topic, index) => (
                <AnimatedSection key={index} direction="up" delay={1200 + index * 100}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <topic.icon className="h-8 w-8 text-blue-600 mr-3 mt-1" />
                        <div className="flex-1">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                            {topic.category}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-lg mb-3">{topic.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{topic.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
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
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={1800}>
              <h3 className="text-2xl font-bold text-center mb-8">What You Can Expect</h3>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection direction="right" delay={2000}>
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Database className="h-8 w-8 text-blue-600 mr-3" />
                      <h4 className="font-semibold text-lg">Data Engineering</h4>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Real-time streaming architectures</li>
                      <li>• Data pipeline optimization techniques</li>
                      <li>• Modern data lake implementations</li>
                      <li>• Performance tuning strategies</li>
                      <li>• Infrastructure as Code practices</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={2200}>
                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Brain className="h-8 w-8 text-purple-600 mr-3" />
                      <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
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
