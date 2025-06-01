import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Globe, Cloud, BarChart3, Settings, GitBranch } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-blue-600",
      skills: ["JavaScript", "Java", "Python"],
    },
    {
      title: "Big Data & Data Pipelines",
      icon: Database,
      color: "text-purple-600",
      skills: [
        "Apache Spark (Streaming)",
        "Kafka",
        "Trino",
        "Apache Airflow",
        "Apache Iceberg",
        "Hudi",
        "Apache Superset",
        "ETL",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-green-600",
      skills: ["LLM Integration", "Vanna.AI", "AI/ML Tools", "Content Generation"],
    },
    {
      title: "Backend Frameworks",
      icon: Settings,
      color: "text-orange-600",
      skills: ["FastAPI", "Django", "Express.js", "Spring Boot"],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      color: "text-pink-600",
      skills: ["React.js", "Vue.js", "Socket.IO", "Chart.js", "Next.js"],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-indigo-600",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Iceberg"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan-600",
      skills: ["AWS", "GCP", "Docker", "Kubernetes", "ArgoCD", "Helm"],
    },
    {
      title: "Monitoring & Analytics",
      icon: BarChart3,
      color: "text-red-600",
      skills: ["Grafana", "Prometheus", "Apache Superset"],
    },
    {
      title: "Development Tools",
      icon: GitBranch,
      color: "text-gray-600",
      skills: ["Git", "Linux", "System Design (LLD/HLD)", "Agile Methodologies"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} direction="up" delay={200 + index * 100}>
                <Card className="hover:shadow-lg transition-shadow w-full max-w-sm h-56 flex flex-col">
                  <CardHeader className="pb-3 flex-shrink-0">
                    <CardTitle className="flex items-center text-lg min-h-[2rem]">
                      <category.icon className={`h-5 w-5 mr-2 flex-shrink-0 ${category.color}`} />
                      <span className="line-clamp-2">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex items-start overflow-hidden">
                    <div className="flex flex-wrap gap-2 max-h-full overflow-hidden">
                      {category.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs whitespace-nowrap">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Highlighted Core Competencies */}
          <div className="mt-16 mb-8">
            <AnimatedSection delay={1100}>
              <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center max-w-6xl mx-auto">
              <AnimatedSection direction="up" delay={1200}>
                <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 w-full max-w-xs h-56 flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <Database className="h-12 w-12 mx-auto mb-4 text-blue-600 flex-shrink-0" />
                    <h4 className="font-semibold mb-3 min-h-[1.5rem]">Data Architecture</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Designing scalable data pipelines and lake architectures
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={1300}>
                <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 w-full max-w-xs h-56 flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <Brain className="h-12 w-12 mx-auto mb-4 text-purple-600 flex-shrink-0" />
                    <h4 className="font-semibold mb-3 min-h-[1.5rem]">AI Integration</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Implementing AI-powered analytics and LLM solutions
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={1400}>
                <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 w-full max-w-xs h-56 flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <Settings className="h-12 w-12 mx-auto mb-4 text-green-600 flex-shrink-0" />
                    <h4 className="font-semibold mb-3 min-h-[1.5rem]">System Design</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Low-level and high-level system architecture design
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="up" delay={1500}>
                <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 w-full max-w-xs h-56 flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col justify-center">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-orange-600 flex-shrink-0" />
                    <h4 className="font-semibold mb-3 min-h-[1.5rem]">Performance Optimization</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Optimizing systems for speed, efficiency, and cost
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
