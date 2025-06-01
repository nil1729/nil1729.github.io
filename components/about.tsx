import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { unstable_ViewTransition as ViewTransition } from "react"

export default function About() {
  return (
    <ViewTransition>
      <section id="about" className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                <p className="text-lg leading-relaxed">
                  My journey into data engineering and software development began at BITS Pilani, where I built a strong
                  foundation in Computer Science fundamentals. The rigorous curriculum in Data Structures, Algorithms,
                  Operating Systems, Databases, and Networks has been instrumental in shaping my analytical approach to
                  problem-solving and system design.
                </p>
                <p className="text-lg leading-relaxed">
                  I believe that understanding core CS concepts is crucial for building robust, scalable systems.
                  Whether I'm optimizing a Spark Streaming pipeline or designing a full-stack application, I leverage
                  these fundamentals to create efficient algorithms, design scalable architectures, and ensure optimal
                  performance.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion lies in transforming complex data challenges into actionable solutions. I thrive on data
                  integration, ETL processes, real-time streaming, and performance optimization while maintaining the
                  highest standards of security and reliability.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatedSection direction="up" delay={300}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Database className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="font-semibold mb-2">Data Engineering</h3>
                    <p className="text-sm text-muted-foreground">Big Data, ETL, Real-time Streaming</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={400}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Brain className="h-12 w-12 mx-auto mb-4 text-purple-600" />
                    <h3 className="font-semibold mb-2">AI & Analytics</h3>
                    <p className="text-sm text-muted-foreground">LLM Integration, AI-powered Tools</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={500}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Code className="h-12 w-12 mx-auto mb-4 text-green-600" />
                    <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                    <p className="text-sm text-muted-foreground">Scalable Web Applications</p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={600}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Zap className="h-12 w-12 mx-auto mb-4 text-orange-600" />
                    <h3 className="font-semibold mb-2">System Design</h3>
                    <p className="text-sm text-muted-foreground">LLD, HLD, Performance Optimization</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </ViewTransition>
  )
}
