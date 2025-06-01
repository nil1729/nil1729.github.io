import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, TrendingUp, Users, Wrench } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {/* InMobi Group */}
            <AnimatedSection delay={200}>
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">Data Engineer</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">InMobi Group</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Current Role</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <AnimatedSection direction="right" delay={300}>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-semibold">98% Latency Reduction</span>
                        </div>
                        <p className="text-sm text-muted-foreground">From 1 hour to 1 minute</p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={400}>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-semibold">70% Improvement</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Data onboarding efficiency</p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={500}>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="font-semibold">30% Cost Reduction</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Infrastructure optimization</p>
                      </div>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection delay={600}>
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Architected real-time data streaming pipelines using Spark Streaming and Kafka</li>
                        <li>• Implemented CDC pipeline with Apache Hudi for efficient data lake management</li>
                        <li>• Developed Trino gateway with Apache Iceberg for optimized query performance</li>
                        <li>• Integrated AI-powered analytics tools (Vanna.AI) with LLM for content generation</li>
                        <li>• Designed and deployed infrastructure using Helm charts and Kubernetes</li>
                        <li>• Implemented OPA (Open Policy Agent) with Trino for enhanced data security</li>
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={700}>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Apache Spark",
                        "Kafka",
                        "Trino",
                        "Apache Iceberg",
                        "Hudi",
                        "Vanna.AI",
                        "LLM",
                        "Kubernetes",
                        "Helm",
                      ].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Helioweb */}
            <AnimatedSection delay={800}>
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">Full Stack Engineer</CardTitle>
                      <p className="text-lg font-semibold text-green-600">Helioweb</p>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Previous Role</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <AnimatedSection direction="right" delay={900}>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-semibold">70% Efficiency Boost</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Operational processes</p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={1000}>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-semibold">50% Admin Efficiency</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Administrative workflows</p>
                      </div>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection delay={1100}>
                    <div>
                      <h4 className="font-semibold mb-3">Key Projects:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Developed P2P delivery platform with real-time order tracking</li>
                        <li>• Built comprehensive order management system for manufacturing</li>
                        <li>• Created student management portal with advanced analytics</li>
                        <li>• Implemented manufacturing web application with workflow automation</li>
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={1200}>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "MongoDB", "Express.js", "Vue.js", "PostgreSQL", "Docker"].map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Key Responsibilities */}
            <AnimatedSection delay={1300}>
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Leadership & Technical Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-blue-600" />
                      <span className="text-sm">System Design (LLD/HLD)</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">Team Mentoring</span>
                    </div>
                    <div className="flex items-center">
                      <Wrench className="h-4 w-4 mr-2 text-purple-600" />
                      <span className="text-sm">Code Reviews</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-sm">Cross-functional Coordination</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
