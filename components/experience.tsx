import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Wrench } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Experience</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {/* Harness */}
            <AnimatedSection delay={200}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Software Engineer</CardTitle>
                      <p className="text-sm font-semibold text-muted-foreground mt-1">Harness</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground shrink-0">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>Aug 2025 – Present</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AnimatedSection delay={300}>
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Key Work</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li>• Contributing to the CCM (Cloud Cost Management) team at Harness</li>
                        <li>• Focused on the Billing Data Ingestion Pipeline for cloud cost analytics</li>
                      </ul>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection delay={400}>
                    <div className="flex flex-wrap gap-2">
                      {["Cloud Cost Management", "Data Ingestion", "Billing Pipelines", "Java", "Spring Boot"].map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Glance */}
            <AnimatedSection delay={600}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">Software Engineer</CardTitle>
                      <p className="text-sm font-semibold text-muted-foreground mt-1">Glance</p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground shrink-0">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      <span>Jul 2022 – Jul 2025</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-3">
                    <AnimatedSection direction="right" delay={700}>
                      <div className="bg-background border border-border p-4 rounded-lg">
                        <p className="font-semibold text-sm mb-0.5">98% Latency Reduction</p>
                        <p className="text-xs text-muted-foreground">From 1 hour to 1 minute</p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={800}>
                      <div className="bg-background border border-border p-4 rounded-lg">
                        <p className="font-semibold text-sm mb-0.5">70% Onboarding Improvement</p>
                        <p className="text-xs text-muted-foreground">SQL query interface for analysts</p>
                      </div>
                    </AnimatedSection>
                    <AnimatedSection direction="right" delay={900}>
                      <div className="bg-background border border-border p-4 rounded-lg">
                        <p className="font-semibold text-sm mb-0.5">30% Cost Reduction</p>
                        <p className="text-xs text-muted-foreground">Infrastructure optimization</p>
                      </div>
                    </AnimatedSection>
                  </div>

                  <AnimatedSection delay={1000}>
                    <div>
                      <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li>• Implemented Spark Streaming with Kafka, reducing data latency from 1 hour to 1 minute using Iceberg tables</li>
                        <li>• Architected and deployed a Trino gateway system, optimizing query performance and resource utilization</li>
                        <li>• Engineered SQL query interface for analysts, reducing data onboarding time by 70% and improving metric reporting</li>
                        <li>• Developed a CDC pipeline using Hudi and Debezium, transforming OLTP tables into OLAP for BI analytics</li>
                        <li>• Implemented OPA with Trino for row-level filters and column masking to improve data security compliance</li>
                        <li>• Standardized infrastructure with Helm charts, enabling one-click deployment of Trino, Superset, Hive Metastore, and Airflow</li>
                        <li>• Designed an A/B testing experimentation platform, driving data-driven product decisions</li>
                        <li>• Built a distributed job scheduling pipeline with BullMQ and Redis, reducing content onboarding time by 80%</li>
                        <li>• Developed a content generation pipeline using Celery workers and LLM integration for articles and images</li>
                        <li>• Deployed Vanna.AI for AI-powered analytics, improving data analyst productivity</li>
                        <li>• Built enterprise configuration store with SSO authentication and rule-based ACLs</li>
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={1100}>
                    <div className="flex flex-wrap gap-2">
                      {["Apache Spark", "Kafka", "Trino", "Apache Iceberg", "Hudi", "Debezium", "Vanna.AI", "LLM", "BullMQ", "Redis", "Celery", "Helm", "OPA", "Airflow"].map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </AnimatedSection>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Leadership */}
            <AnimatedSection delay={1200}>
              <Card className="bg-background/60">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-sm font-semibold">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    Leadership & Technical Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: Wrench, label: "System Design (LLD/HLD)" },
                      { icon: Users, label: "Team Mentoring" },
                      { icon: Wrench, label: "Code Reviews" },
                      { icon: Users, label: "Cross-functional Coordination" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2">
                        <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                        <span className="text-sm">{label}</span>
                      </div>
                    ))}
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
