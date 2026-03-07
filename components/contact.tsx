"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({ type: "success", message: result.message })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus({ type: "error", message: result.error || "Failed to send message" })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." })
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <AnimatedSection delay={200}>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Let's Connect</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I'm always interested in discussing data engineering challenges, AI innovations, and opportunities
                    to build impactful solutions. Feel free to reach out!
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={300}>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Mail className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                      <Link
                        href="mailto:hello@nilanjandeb.com"
                        className="text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        hello@nilanjandeb.com
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={400}>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Linkedin className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                      <Link
                        href="https://linkedin.com/in/nil1729"
                        target="_blank"
                        className="text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        linkedin.com/in/nil1729
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={500}>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Github className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
                      <Link
                        href="https://github.com/nil1729"
                        target="_blank"
                        className="text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        github.com/nil1729
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={600}>
                <Card>
                  <CardContent className="flex items-center p-4">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                      <Link
                        href="tel:+919366496119"
                        className="text-sm font-medium hover:text-muted-foreground transition-colors"
                      >
                        +91-93664-96119
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={700}>
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0 pb-3">
                  <CardTitle className="text-base">Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          disabled={status.type === "loading"}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          disabled={status.type === "loading"}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        disabled={status.type === "loading"}
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        rows={5}
                        className="h-32"
                        required
                        disabled={status.type === "loading"}
                      />
                    </div>

                    {/* Status Message */}
                    {status.type !== "idle" && (
                      <div
                        className={`flex items-center gap-2 p-3 rounded-md ${
                          status.type === "success"
                            ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : status.type === "error"
                              ? "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                              : "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                        }`}
                      >
                        {status.type === "success" && <CheckCircle className="h-4 w-4" />}
                        {status.type === "error" && <AlertCircle className="h-4 w-4" />}
                        {status.type === "loading" && (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
                        )}
                        <span className="text-sm">{status.message}</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full mt-auto" disabled={status.type === "loading"}>
                      {status.type === "loading" ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
