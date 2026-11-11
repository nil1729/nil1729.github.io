import { Activity, Brain, Database, ExternalLink, Github, Network, Server, Shield, ShoppingCart, Terminal } from "lucide-react"
import { PenButton, SectionHead, Sheet, Stamp, Underline, type Stock } from "@/components/looseleaf/paper"
import { siteConfig } from "@/lib/config"

type Project = {
  title: string
  description: string
  Icon: typeof Brain
  highlights: string[]
  category?: "Professional" | "Open Source"
  github?: string
}

const dataAIProjects: Project[] = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Deployed Vanna.AI to enable natural language querying over data warehouse — analysts query data without writing SQL",
    Icon: Brain,
    category: "Professional",
    highlights: ["Natural language to SQL", "Integrated with Trino query engine", "Improved analyst productivity"],
  },
  {
    title: "Real-time Data Streaming Pipeline",
    description: "Replaced hourly batch jobs with Spark Streaming + Kafka, cutting data latency from 1 hour to under 1 minute",
    Icon: Database,
    category: "Professional",
    highlights: ["98% latency reduction", "OLAP-ready Iceberg tables", "CDC with Debezium"],
  },
  {
    title: "Trino Monitoring Stack",
    description: "Production-grade observability for Trino clusters — JMX metrics scraped by Prometheus and visualized in Grafana",
    Icon: Activity,
    category: "Open Source",
    github: "https://github.com/nil1729/trino-jmx-monitoring",
    highlights: ["Cluster-level JMX metrics", "Pre-built Grafana dashboards", "Query performance tracking"],
  },
  {
    title: "Trino + Apache Ranger Security",
    description: "Fine-grained authorization for Trino using Apache Ranger — table, column, and row-level access policies via Docker",
    Icon: Shield,
    category: "Open Source",
    github: "https://github.com/nil1729/trino-ranger-demo",
    highlights: ["Column & row-level policies", "Ranger admin UI", "Reproducible Docker setup"],
  },
  {
    title: "Trino + Hive Data Lakehouse",
    description: "End-to-end local data lakehouse setup — Trino query engine over Hive Metastore with MinIO object storage",
    Icon: Server,
    category: "Open Source",
    github: "https://github.com/nil1729/trino-hive-demo",
    highlights: ["Local lakehouse environment", "Hive Metastore integration", "S3-compatible storage"],
  },
]

const systemsProjects: Project[] = [
  {
    title: "Remote Code Execution Engine",
    description: "Microservice that securely executes arbitrary code in isolated environments with concurrency control and resource limits",
    Icon: Terminal,
    github: "https://github.com/nil1729/code-execution-backend",
    highlights: ["Sandboxed execution", "Concurrent job management", "Resource isolation"],
  },
  {
    title: "Multiplayer Real-time Game Server",
    description: "In-memory game server for multiplayer Tic-Tac-Toe — real-time state sync across clients with Socket.IO",
    Icon: Network,
    github: "https://github.com/nil1729/in-memory-socket-server",
    highlights: ["Real-time bidirectional events", "In-memory game state", "Room-based matchmaking"],
  },
  {
    title: "Food Ordering Platform",
    description: "Full-stack food ordering app with cart management, restaurant listings, auth, and order tracking",
    Icon: ShoppingCart,
    github: "https://github.com/nil1729/food-order-app",
    highlights: ["56 GitHub stars", "End-to-end full-stack", "Firebase auth & storage"],
  },
]

const STOCKS: Stock[] = ["paper", "graph", "index", "kraft", "paper", "graph"]
const TILTS = [-1.2, 1, -0.7, 1.4, -1.5, 0.8]

function ProjectCard({ p, i, base }: { p: Project; i: number; base: number }) {
  const stock = p.category === "Professional" ? "paper" : STOCKS[(i + 1) % STOCKS.length]
  return (
    <li>
      <Sheet
        as="article"
        stock={stock === "index" ? "graph" : stock}
        seed={`proj-${base + i}`}
        rotate={TILTS[(base + i) % TILTS.length]}
        tape={i % 3 === 0 ? "top" : i % 3 === 1 ? "corner" : false}
        index={i + 1}
        className="h-full"
        faceClassName="ll-proj"
      >
        <div className="ll-proj-head">
          <p.Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          {p.category ? (
            <Stamp seed={`proj-stamp-${base + i}`} tone={p.category === "Professional" ? "green" : "blue"}>
              {p.category}
            </Stamp>
          ) : null}
        </div>
        <h4 className="ll-card-title">{p.title}</h4>
        <p className="ll-card-body">{p.description}</p>
        <ul className="ll-bullets ll-bullets-sm">
          {p.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        {p.github ? (
          <div className="ll-proj-foot">
            <PenButton href={p.github} seed={`code-${base + i}`} tone="paper" size="sm" aria-label={`${p.title} source code on GitHub`}>
              <Github aria-hidden="true" />
              Code
            </PenButton>
          </div>
        ) : null}
      </Sheet>
    </li>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Projects" id="projects-title" className="mb-14">
          Featured <Underline seed="h-proj">Projects</Underline>
        </SectionHead>

        <h3 className="ll-eyebrow mb-8">Data Engineering &amp; AI</h3>
        <ul className="ll-board ll-board-proj">
          {dataAIProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} base={0} />
          ))}
        </ul>

        <h3 className="ll-eyebrow mb-8 mt-20">Distributed Systems</h3>
        <ul className="ll-board ll-board-proj">
          {systemsProjects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} base={10} />
          ))}
        </ul>

        <div className="mt-16 flex justify-center">
          <PenButton href={siteConfig.github} seed="btn-gh-all" tone="paper">
            <Github aria-hidden="true" />
            View All on GitHub
            <ExternalLink aria-hidden="true" />
          </PenButton>
        </div>
      </div>
    </section>
  )
}
