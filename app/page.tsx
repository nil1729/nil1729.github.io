import { lazy, Suspense } from "react"
import Hero from "@/components/hero"

// Lazy load components for better performance
const About = lazy(() => import("@/components/about"))
const Experience = lazy(() => import("@/components/experience"))
const Projects = lazy(() => import("@/components/projects"))
const Skills = lazy(() => import("@/components/skills"))
const Contact = lazy(() => import("@/components/contact"))

// Loading component
function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />

      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </main>
  )
}
