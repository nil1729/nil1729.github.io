"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export default function ContactStatic() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")

    const formData = new FormData(e.currentTarget)

    try {
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          </AnimatedSection>

          <div className="max-w-md mx-auto">
            <AnimatedSection delay={200}>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Your name" required />
                    <Input name="email" type="email" placeholder="your.email@example.com" required />
                    <Input name="subject" placeholder="Subject" required />
                    <Textarea name="message" placeholder="Your message..." rows={5} required />

                    {status === "success" && (
                      <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-md">
                        <CheckCircle className="h-4 w-4" />
                        <span>Message sent successfully!</span>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-md">
                        <AlertCircle className="h-4 w-4" />
                        <span>Failed to send message. Please try again.</span>
                      </div>
                    )}

                    <Button type="submit" className="w-full" disabled={status === "loading"}>
                      {status === "loading" ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-4 w-4" />
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
