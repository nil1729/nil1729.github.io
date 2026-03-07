import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export default function About() {
  return (
    <section id='about' className='py-24 bg-background'>
      <div className='container mx-auto px-6 md:px-8'>
        <div className='max-w-5xl mx-auto'>
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">About</p>
              <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>Who I Am</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className='max-w-3xl mx-auto mb-14 space-y-4'>
              <p className='text-base leading-relaxed text-muted-foreground'>
                Currently a Software Engineer at Harness, contributing to the CCM (Cloud Cost
                Management) team with a focus on the Billing Data Ingestion Pipeline. Previously
                spent over three years at Glance building large-scale data infrastructure — from
                real-time streaming pipelines and data lake architectures to AI-powered analytics
                and internal developer tooling.
              </p>
              <p className='text-base leading-relaxed text-muted-foreground'>
                I graduated from BITS Pilani with a Bachelor of Engineering in Computer Science,
                where I built a strong foundation across Data Structures, Algorithms, Operating
                Systems, Databases, and Networks. That foundation shapes how I approach system
                design — with an emphasis on correctness, scalability, and performance.
              </p>
              <p className='text-base leading-relaxed text-muted-foreground'>
                My work spans the full data stack: streaming pipelines with Spark and Kafka, query
                engines with Trino and Iceberg, AI integrations with LLMs, and cloud cost
                infrastructure. I care about building systems that are reliable, efficient, and
                observable.
              </p>
            </div>
          </AnimatedSection>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <AnimatedSection direction='up' delay={300}>
              <Card className='text-center h-full'>
                <CardContent className='p-6 flex flex-col items-center justify-center min-h-[10rem]'>
                  <Database className='h-8 w-8 mx-auto mb-4 text-foreground' />
                  <h3 className='font-semibold mb-2 text-sm'>Data Engineering</h3>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    Big Data, ETL, Streaming Pipelines
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction='up' delay={400}>
              <Card className='text-center h-full'>
                <CardContent className='p-6 flex flex-col items-center justify-center min-h-[10rem]'>
                  <Brain className='h-8 w-8 mx-auto mb-4 text-foreground' />
                  <h3 className='font-semibold mb-2 text-sm'>AI & Analytics</h3>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    LLM Integration, AI-driven Workflows
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction='up' delay={500}>
              <Card className='text-center h-full'>
                <CardContent className='p-6 flex flex-col items-center justify-center min-h-[10rem]'>
                  <Code className='h-8 w-8 mx-auto mb-4 text-foreground' />
                  <h3 className='font-semibold mb-2 text-sm'>Full-Stack Dev</h3>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    APIs, Microservices, Web Platforms
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction='up' delay={600}>
              <Card className='text-center h-full'>
                <CardContent className='p-6 flex flex-col items-center justify-center min-h-[10rem]'>
                  <Zap className='h-8 w-8 mx-auto mb-4 text-foreground' />
                  <h3 className='font-semibold mb-2 text-sm'>System Design</h3>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    LLD, HLD, Performance Optimization
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
