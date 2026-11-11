import { Brain, Code, Database, Zap } from "lucide-react"
import { Sheet, SectionHead, Underline, type Stock } from "@/components/looseleaf/paper"

const pillars: ReadonlyArray<{ Icon: typeof Database; title: string; text: string; stock: Stock; rotate: number }> = [
  { Icon: Database, title: "Data Engineering", text: "Big Data, ETL, Streaming Pipelines", stock: "sticky-yellow", rotate: -2 },
  { Icon: Brain, title: "AI & Analytics", text: "LLM Integration, AI-driven Workflows", stock: "sticky-blue", rotate: 1.6 },
  { Icon: Code, title: "Full-Stack Dev", text: "APIs, Microservices, Web Platforms", stock: "sticky-green", rotate: 1.2 },
  { Icon: Zap, title: "System Design", text: "LLD, HLD, Performance Optimization", stock: "sticky-pink", rotate: -1.5 },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="About" id="about-title" className="mb-14">
          Who I <Underline seed="h-about">Am</Underline>
        </SectionHead>

        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Sheet stock="ruled" seed="about-notebook" still torn rotate={-0.5} index={1}>
              <div className="ll-prose">
                <p>
                  Currently a Software Engineer at Harness, contributing to the CCM (Cloud Cost Management) team with a
                  focus on the Billing Data Ingestion Pipeline. Previously spent over three years at Glance building
                  large-scale data infrastructure — from real-time streaming pipelines and data lake architectures to
                  AI-powered analytics and internal developer tooling.
                </p>
                <p>
                  I graduated from BITS Pilani with a Bachelor of Engineering in Computer Science, where I built a strong
                  foundation across Data Structures, Algorithms, Operating Systems, Databases, and Networks. That
                  foundation shapes how I approach system design — with an emphasis on correctness, scalability, and
                  performance.
                </p>
                <p>
                  My work spans the full data stack: streaming pipelines with Spark and Kafka, query engines with Trino
                  and Iceberg, AI integrations with LLMs, and cloud cost infrastructure. I care about building systems
                  that are reliable, efficient, and observable.
                </p>
              </div>
            </Sheet>
          </div>

          <ul className="ll-pillars lg:col-span-5">
            {pillars.map(({ Icon, title, text, stock, rotate }, i) => (
              <li key={title}>
                <Sheet stock={stock} seed={`pillar-${i}`} rotate={rotate} index={i + 2}>
                  <Icon className="mb-3 h-7 w-7" aria-hidden="true" />
                  <h3 className="ll-card-title" style={{ fontSize: "1.2rem" }}>
                    {title}
                  </h3>
                  <p className="ll-card-body">{text}</p>
                </Sheet>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
