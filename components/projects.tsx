import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Brain,
  Code,
  Database,
  Gamepad2,
  Music,
  Calendar,
  ShoppingCart,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export default function Projects() {
  const dataAIProjects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Integrated Vanna.AI with LLM for automated content generation and data insights at InMobi",
      icon: Brain,
      technologies: ["Vanna.AI", "LLM", "Python", "Apache Spark"],
      category: "Professional Project",
      highlights: ["Real-time analytics", "AI-driven insights", "Automated reporting"],
    },
    {
      title: "Real-time Data Streaming Pipeline",
      description: "Architected high-performance streaming pipeline reducing data latency by 98%",
      icon: Database,
      technologies: ["Apache Spark", "Kafka", "Trino", "Apache Iceberg"],
      category: "Professional Project",
      highlights: ["98% latency reduction", "Real-time processing", "Scalable architecture"],
    },
  ]

  const softwareProjects = [
    {
      title: "Remote Code Execution Platform",
      description: "Secure, scalable platform for executing code remotely with advanced concurrency management",
      icon: Code,
      technologies: ["Node.js", "Redis", "Docker", "WebSockets"],
      github: "https://github.com/nil1729/remote-code-execution",
      highlights: ["Concurrent execution", "Security sandboxing", "Real-time results"],
    },
    {
      title: "Multiplayer Game Engine",
      description: "Real-time multiplayer game with state synchronization and low-latency communication",
      icon: Gamepad2,
      technologies: ["Socket.IO", "React", "Node.js", "Redis"],
      github: "https://github.com/nil1729/multiplayer-game",
      highlights: ["Real-time sync", "State management", "Low latency"],
    },
    {
      title: "Music Download Service",
      description: "High-performance music streaming and download service with intelligent caching",
      icon: Music,
      technologies: ["Node.js", "Redis", "Docker", "API Integration"],
      github: "https://github.com/nil1729/music-dl",
      highlights: ["API optimization", "Intelligent caching", "High throughput"],
    },
    {
      title: "Timetable Companion",
      description: "Comprehensive academic scheduling application with smart notifications and analytics",
      icon: Calendar,
      technologies: ["Vue.js", "Node.js", "MongoDB", "Nginx"],
      github: "https://github.com/nil1729/timetable-companion",
      highlights: ["Smart scheduling", "Analytics dashboard", "User-friendly interface"],
    },
    {
      title: "Food Ordering Platform",
      description: "Full-featured e-commerce platform with real-time order tracking and payment integration",
      icon: ShoppingCart,
      technologies: ["Node.js", "MongoDB", "Vue.js", "Firebase"],
      github: "https://github.com/nil1729/food-order-app",
      highlights: ["E-commerce features", "Real-time tracking", "Payment integration"],
    },
    {
      title: "Interactive Polling System",
      description: "Dynamic polling application with real-time results visualization and analytics",
      icon: BarChart3,
      technologies: ["Node.js", "MongoDB", "Chart.js", "WebSockets"],
      github: "https://github.com/nil1729/poll-application",
      highlights: ["Real-time visualization", "Interactive charts", "Live polling"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          </AnimatedSection>

          {/* Data & AI Projects */}
          <div className="mb-16">
            <AnimatedSection delay={200}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold flex items-center justify-center">
                  <Brain className="h-6 w-6 mr-3 text-purple-600" />
                  Data Engineering & AI
                </h3>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-6">
              {dataAIProjects.map((project, index) => (
                <AnimatedSection key={index} direction="up" delay={300 + index * 100}>
                  <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <project.icon className="h-5 w-5 mr-2 text-purple-600" />
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="w-fit">
                        {project.category}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{project.description}</p>

                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Key Highlights:</h4>
                        <ul className="text-left max-w-xs mx-auto text-sm text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Software Engineering Projects */}
          <div>
            <AnimatedSection delay={500}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold flex items-center justify-center">
                  <Code className="h-6 w-6 mr-3 text-blue-600" />
                  Software Engineering & Full-Stack
                </h3>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project, index) => (
                <AnimatedSection key={index} direction="up" delay={600 + index * 100}>
                  <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <project.icon className="h-5 w-5 mr-2 text-blue-600" />
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{project.description}</p>

                      <div className="text-center">
                        <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="text-left max-w-xs mx-auto text-xs text-muted-foreground space-y-1">
                          {project.highlights.map((highlight, i) => (
                            <li key={i}>• {highlight}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.github} target="_blank">
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={1200}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/nil1729" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
