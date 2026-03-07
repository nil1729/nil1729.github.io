import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Globe, Cloud, BarChart3, Settings, GitBranch } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Java", "Python"],
    },
    {
      title: "Big Data & Pipelines",
      icon: Database,
      skills: ["Apache Spark (Streaming)", "Kafka", "Trino", "Apache Airflow", "Apache Iceberg", "Hudi", "Apache Superset", "ETL"],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: ["LLM Integration", "Vanna.AI", "AI/ML Tools", "Content Generation"],
    },
    {
      title: "Backend Frameworks",
      icon: Settings,
      skills: ["FastAPI", "Django", "Express.js", "Spring Boot"],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: ["React.js", "Vue.js", "Socket.IO", "Chart.js", "Next.js"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Iceberg"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "ArgoCD", "Helm"],
    },
    {
      title: "Monitoring & Analytics",
      icon: BarChart3,
      skills: ["Grafana", "Prometheus", "Apache Superset"],
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      skills: ["Git", "Linux", "System Design (LLD/HLD)", "Agile Methodologies"],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Skills</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} direction="up" delay={200 + index * 100}>
                <Card className="h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center text-sm font-semibold">
                      <category.icon className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
