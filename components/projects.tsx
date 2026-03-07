import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Brain,
  Database,
  ShoppingCart,
  Shield,
  Activity,
  Terminal,
  Network,
  Server,
} from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";

export default function Projects() {
  const dataAIProjects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Deployed Vanna.AI to enable natural language querying over data warehouse — analysts query data without writing SQL",
      icon: Brain,
      technologies: ["Vanna.AI", "LLM", "Python", "Apache Spark", "Trino"],
      category: "Professional",
      highlights: ["Natural language to SQL", "Integrated with Trino query engine", "Improved analyst productivity"],
    },
    {
      title: "Real-time Data Streaming Pipeline",
      description: "Replaced hourly batch jobs with Spark Streaming + Kafka, cutting data latency from 1 hour to under 1 minute",
      icon: Database,
      technologies: ["Apache Spark", "Kafka", "Trino", "Apache Iceberg", "Hudi"],
      category: "Professional",
      highlights: ["98% latency reduction", "OLAP-ready Iceberg tables", "CDC with Debezium"],
    },
    {
      title: "Trino Monitoring Stack",
      description: "Production-grade observability for Trino clusters — JMX metrics scraped by Prometheus and visualized in Grafana",
      icon: Activity,
      technologies: ["Trino", "JMX", "Prometheus", "Grafana", "Docker"],
      category: "Open Source",
      github: "https://github.com/nil1729/trino-jmx-monitoring",
      highlights: ["Cluster-level JMX metrics", "Pre-built Grafana dashboards", "Query performance tracking"],
    },
    {
      title: "Trino + Apache Ranger Security",
      description: "Fine-grained authorization for Trino using Apache Ranger — table, column, and row-level access policies via Docker",
      icon: Shield,
      technologies: ["Trino", "Apache Ranger", "Docker", "SQL"],
      category: "Open Source",
      github: "https://github.com/nil1729/trino-ranger-demo",
      highlights: ["Column & row-level policies", "Ranger admin UI", "Reproducible Docker setup"],
    },
    {
      title: "Trino + Hive Data Lakehouse",
      description: "End-to-end local data lakehouse setup — Trino query engine over Hive Metastore with MinIO object storage",
      icon: Server,
      technologies: ["Trino", "Hive Metastore", "MinIO", "Docker Compose"],
      category: "Open Source",
      github: "https://github.com/nil1729/trino-hive-demo",
      highlights: ["Local lakehouse environment", "Hive Metastore integration", "S3-compatible storage"],
    },
  ];

  const systemsProjects = [
    {
      title: "Remote Code Execution Engine",
      description: "Microservice that securely executes arbitrary code in isolated environments with concurrency control and resource limits",
      icon: Terminal,
      technologies: ["Node.js", "Docker", "Redis", "Express.js"],
      github: "https://github.com/nil1729/code-execution-backend",
      highlights: ["Sandboxed execution", "Concurrent job management", "Resource isolation"],
    },
    {
      title: "Multiplayer Real-time Game Server",
      description: "In-memory game server for multiplayer Tic-Tac-Toe — real-time state sync across clients with Socket.IO",
      icon: Network,
      technologies: ["Socket.IO", "Node.js", "React", "In-memory state"],
      github: "https://github.com/nil1729/in-memory-socket-server",
      highlights: ["Real-time bidirectional events", "In-memory game state", "Room-based matchmaking"],
    },
    {
      title: "Food Ordering Platform",
      description: "Full-stack food ordering app with cart management, restaurant listings, auth, and order tracking",
      icon: ShoppingCart,
      technologies: ["Vue.js", "Node.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com/nil1729/food-order-app",
      highlights: ["56 GitHub stars", "End-to-end full-stack", "Firebase auth & storage"],
    },
  ];

  return (
    <section id='projects' className='py-24 bg-background'>
      <div className='container mx-auto px-6 md:px-8'>
        <div className='max-w-5xl mx-auto'>
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Projects</p>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Featured Projects</h2>
            </div>
          </AnimatedSection>

          {/* Data Engineering & AI Projects */}
          <div className='mb-14'>
            <AnimatedSection delay={200}>
              <h3 className='text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6'>
                Data Engineering & AI
              </h3>
            </AnimatedSection>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {dataAIProjects.map((project, index) => (
                <AnimatedSection key={index} direction='up' delay={300 + index * 100}>
                  <Card className='flex flex-col h-full'>
                    <CardHeader className='flex-shrink-0 pb-3'>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className='flex items-center text-base'>
                          <project.icon className='h-4 w-4 mr-2 text-muted-foreground shrink-0' />
                          {project.title}
                        </CardTitle>
                        <Badge variant='outline' className='text-xs shrink-0'>{project.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className='space-y-4 flex-1 flex flex-col'>
                      <p className='text-sm text-muted-foreground'>{project.description}</p>
                      <ul className='text-xs text-muted-foreground space-y-1 flex-1'>
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                      <div className='space-y-3 mt-auto'>
                        <div className='flex flex-wrap gap-1.5'>
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant='secondary' className='text-xs'>{tech}</Badge>
                          ))}
                        </div>
                        {'github' in project && project.github && (
                          <Button size='sm' variant='outline' asChild>
                            <Link href={project.github} target='_blank'>
                              <Github className='h-3 w-3 mr-1.5' />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Systems Engineering Projects */}
          <div>
            <AnimatedSection delay={900}>
              <h3 className='text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6'>
                Distributed Systems
              </h3>
            </AnimatedSection>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {systemsProjects.map((project, index) => (
                <AnimatedSection key={index} direction='up' delay={1000 + index * 100}>
                  <Card className='flex flex-col h-full'>
                    <CardHeader className='flex-shrink-0 pb-3'>
                      <CardTitle className='flex items-center text-base'>
                        <project.icon className='h-4 w-4 mr-2 text-muted-foreground shrink-0' />
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className='space-y-4 flex-1 flex flex-col'>
                      <p className='text-sm text-muted-foreground'>{project.description}</p>
                      <ul className='text-xs text-muted-foreground space-y-1 flex-1'>
                        {project.highlights.map((highlight, i) => (
                          <li key={i}>• {highlight}</li>
                        ))}
                      </ul>
                      <div className='space-y-3 mt-auto'>
                        <div className='flex flex-wrap gap-1.5'>
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant='secondary' className='text-xs'>{tech}</Badge>
                          ))}
                        </div>
                        <Button size='sm' variant='outline' asChild>
                          <Link href={project.github} target='_blank'>
                            <Github className='h-3 w-3 mr-1.5' />
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

          <AnimatedSection delay={1400}>
            <div className='text-center mt-12'>
              <Button variant='outline' asChild>
                <Link href='https://github.com/nil1729' target='_blank'>
                  <Github className='mr-2 h-4 w-4' />
                  View All on GitHub
                  <ExternalLink className='ml-2 h-3.5 w-3.5' />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
