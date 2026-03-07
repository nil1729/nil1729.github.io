"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ExternalLink, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <AnimatedSection direction="down" delay={100}>
            <span className="inline-block text-xs font-mono text-muted-foreground tracking-widest uppercase border border-border rounded-full px-4 py-1.5">
              Software Engineer · Data & AI
            </span>
          </AnimatedSection>

          <AnimatedSection direction="down" delay={200}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Nilanjan Deb
              <span className="sr-only"> — Data Engineer &amp; Software Developer</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={350}>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Software Engineer at Harness working on cloud cost management. Previously built
              scalable data pipelines and AI-driven analytics at Glance. BITS Pilani alumni.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <Link href="https://bit.ly/nilanjandeb" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={650}>
            <div className="flex items-center justify-center gap-5 pt-2">
              <Link
                href="https://github.com/nil1729"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/nil1729"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
