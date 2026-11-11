import { Calendar, Users, Wrench } from "lucide-react"
import { Circled, SectionHead, Sheet, Stamp, Tag, Underline } from "@/components/looseleaf/paper"

const harnessTags = ["Cloud Cost Management", "Data Ingestion", "Billing Pipelines", "Java", "Spring Boot"]

const metrics = [
  { value: "98%", title: "Latency Reduction", sub: "From 1 hour to 1 minute", stock: "sticky-yellow" as const, rotate: -2 },
  { value: "70%", title: "Onboarding Improvement", sub: "SQL query interface for analysts", stock: "sticky-green" as const, rotate: 1.4 },
  { value: "30%", title: "Cost Reduction", sub: "Infrastructure optimization", stock: "sticky-orange" as const, rotate: -1 },
]

const achievements = [
  "Implemented Spark Streaming with Kafka, reducing data latency from 1 hour to 1 minute using Iceberg tables",
  "Architected and deployed a Trino gateway system, optimizing query performance and resource utilization",
  "Engineered SQL query interface for analysts, reducing data onboarding time by 70% and improving metric reporting",
  "Developed a CDC pipeline using Hudi and Debezium, transforming OLTP tables into OLAP for BI analytics",
  "Implemented OPA with Trino for row-level filters and column masking to improve data security compliance",
  "Standardized infrastructure with Helm charts, enabling one-click deployment of Trino, Superset, Hive Metastore, and Airflow",
  "Designed an A/B testing experimentation platform, driving data-driven product decisions",
  "Built a distributed job scheduling pipeline with BullMQ and Redis, reducing content onboarding time by 80%",
  "Developed a content generation pipeline using Celery workers and LLM integration for articles and images",
  "Deployed Vanna.AI for AI-powered analytics, improving data analyst productivity",
  "Built enterprise configuration store with SSO authentication and rule-based ACLs",
]

const glanceTags = [
  "Apache Spark", "Kafka", "Trino", "Apache Iceberg", "Hudi", "Debezium", "Vanna.AI", "LLM", "BullMQ", "Redis", "Celery", "Helm", "OPA", "Airflow",
]

const leadership = [
  { Icon: Wrench, label: "System Design (LLD/HLD)" },
  { Icon: Users, label: "Team Mentoring" },
  { Icon: Wrench, label: "Code Reviews" },
  { Icon: Users, label: "Cross-functional Coordination" },
]

function RoleHead({ company, when, tone }: { company: string; when: string; tone: "green" | "blue" }) {
  return (
    <div className="ll-role-head">
      <div>
        <h3 className="ll-card-title" style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
          Software Engineer
        </h3>
        <Stamp seed={`stamp-${company}`} tone={tone}>
          {company}
        </Stamp>
      </div>
      <p className="ll-when">
        <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {when}
      </p>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHead eyebrow="Experience" id="experience-title" className="mb-14">
          Professional <Underline seed="h-exp">Experience</Underline>
        </SectionHead>

        <div className="flex flex-col gap-16">
          {/* Harness */}
          <Sheet as="article" stock="paper" seed="exp-harness" still tape="top" rotate={-0.5} index={1}>
            <RoleHead company="Harness" when="Aug 2025 – Present" tone="green" />
            <h4 className="ll-minor">Key Work</h4>
            <ul className="ll-bullets">
              <li>Contributing to the CCM (Cloud Cost Management) team at Harness</li>
              <li>Focused on the Billing Data Ingestion Pipeline for cloud cost analytics</li>
            </ul>
            <ul className="ll-tags" aria-label="Technologies">
              {harnessTags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Sheet>

          {/* Glance */}
          <Sheet as="article" stock="paper" seed="exp-glance" still tape="both" rotate={0.4} index={2}>
            <RoleHead company="Glance" when="Jul 2022 – Jul 2025" tone="blue" />

            <ul className="ll-metrics">
              {metrics.map((m, i) => (
                <li key={m.title}>
                  <Sheet stock={m.stock} seed={`metric-${i}`} rotate={m.rotate} index={i + 3}>
                    <p className="ll-metric-num">
                      <Circled seed={`metric-c-${i}`} color="var(--ll-ink-you)">
                        {m.value}
                      </Circled>
                    </p>
                    <p className="ll-metric-title">{m.title}</p>
                    <p className="ll-metric-sub">{m.sub}</p>
                  </Sheet>
                </li>
              ))}
            </ul>

            <h4 className="ll-minor">Key Achievements</h4>
            <ul className="ll-bullets">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <ul className="ll-tags" aria-label="Technologies">
              {glanceTags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Sheet>

          {/* Leadership */}
          <Sheet as="aside" stock="kraft" seed="exp-lead" still tape="corner" rotate={-0.7} index={6}>
            <h3 className="ll-card-title" style={{ fontSize: "1.15rem" }}>
              Leadership &amp; Technical Responsibilities
            </h3>
            <ul className="ll-lead">
              {leadership.map(({ Icon, label }) => (
                <li key={label}>
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Sheet>
        </div>
      </div>
    </section>
  )
}
