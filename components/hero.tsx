import { ArrowDown, ExternalLink, Github, Linkedin } from "lucide-react"
import { PenButton, PenBox, Sheet, Stamp, Underline, Highlight } from "@/components/looseleaf/paper"
import { siteConfig } from "@/lib/config"

const facts = [
  { label: "Now", main: "Software Engineer, Harness", sub: "Cloud Cost Management · billing data ingestion", when: "Aug 2025 – now" },
  { label: "Before", main: "Software Engineer, Glance", sub: "Streaming pipelines, data lake, AI analytics", when: "Jul 2022 – Jul 2025" },
  { label: "School", main: "BITS Pilani", sub: "B.E. Computer Science", when: "" },
]

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="flex min-h-[calc(100vh-4rem)] items-center px-6 pb-10 pt-28 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Stamp seed="stamp-role" tone="blue" rotate={-2} onDesk>
            Software Engineer · Data &amp; AI
          </Stamp>

          <h1 id="hero-title" className="ll-title mt-7">
            Nilanjan
            <span className="block">
              <Underline seed="title-deb">Deb</Underline>
            </span>
          </h1>

          <p className="mt-10 text-xl font-bold md:text-2xl">
            <Highlight>Data Engineer &amp; Software Developer</Highlight>
          </p>

          <p className="ll-lede mt-6">
            Software Engineer at Harness working on cloud cost management. Previously built scalable data pipelines and
            AI-driven analytics at Glance. BITS Pilani Alumnus.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-4">
            <PenButton href="#projects" seed="btn-projects">
              View Projects
              <ArrowDown aria-hidden="true" />
            </PenButton>
            <PenButton href={siteConfig.resumeUrl} seed="btn-resume" tone="paper">
              <ExternalLink aria-hidden="true" />
              Resume
            </PenButton>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {[
              { href: siteConfig.github, label: "GitHub", Icon: Github },
              { href: siteConfig.linkedin, label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="ll-iconbtn">
                <PenBox seed={`social-${label}`} w={40} h={40} fill="var(--ll-slip)" strokeWidth={1.5} amp={0.7} sketch={false} />
                <span className="ll-iconbtn-glyph">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <Sheet stock="index" seed="hero-card" tape="top" rotate={2} as="aside" index={1}>
            <h2 className="ll-card-title" style={{ fontSize: "1.6rem" }}>
              The short version
            </h2>
            <dl className="ll-facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>
                    <strong>{f.main}</strong>
                    <span>{f.sub}</span>
                    {f.when ? <em>{f.when}</em> : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Sheet>
        </div>
      </div>
    </section>
  )
}
