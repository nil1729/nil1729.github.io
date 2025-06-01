"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"
import { unstable_ViewTransition as ViewTransition } from "react"

export default function Hero() {
  return (
    <ViewTransition>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <AnimatedSection direction="down" delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nilanjan Deb
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Architecting Intelligent Data Solutions & Scalable Software
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Data Engineer & Software Developer specializing in Big Data, AI-driven analytics, and full-stack
                application development. Passionate about leveraging big data technologies and AI to drive insights,
                optimize performance, and build secure, scalable systems.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={900}>
              <div className="flex justify-center gap-6 pt-8">
                <Link
                  href="https://github.com/nil1729"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com/in/nil1729"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </ViewTransition>
  )
}
