"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Github, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { PenButton, PenField, SectionHead, Sheet, Underline } from "@/components/looseleaf/paper"

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

const channels = [
  { Icon: Mail, label: "Email", text: siteConfig.email, href: `mailto:${siteConfig.email}`, external: false, rotate: -1.2 },
  { Icon: Linkedin, label: "LinkedIn", text: "linkedin.com/in/nil1729", href: siteConfig.linkedin, external: true, rotate: 1 },
  { Icon: Github, label: "GitHub", text: "github.com/nil1729", href: siteConfig.github, external: true, rotate: -0.8 },
  { Icon: Phone, label: "Phone", text: siteConfig.phone.display, href: siteConfig.phone.href, external: false, rotate: 1.3 },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "Sending message..." })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const busy = status.type === "loading"

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead eyebrow="Contact" id="contact-title" className="mb-14">
          Get In <Underline seed="h-contact">Touch</Underline>
        </SectionHead>

        <div className="grid items-start gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="ll-card-title" style={{ fontSize: "1.5rem", color: "var(--ll-on-desk)" }}>
              Let&apos;s Connect
            </h3>
            <p className="ll-lede mt-3">
              I&apos;m always interested in discussing data engineering challenges, AI innovations, and opportunities to
              build impactful solutions. Feel free to reach out!
            </p>

            <ul className="ll-slips">
              {channels.map(({ Icon, label, text, href, external, rotate }, i) => (
                <li key={label}>
                  <Sheet stock="paper" seed={`slip-${label}`} rotate={rotate} index={i + 1}>
                    <div className="ll-slip">
                      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="ll-slip-label">{label}</p>
                        <a
                          href={href}
                          className="ll-link"
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {text}
                        </a>
                      </div>
                    </div>
                  </Sheet>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Sheet stock="paper" seed="contact-form" still tape="both" rotate={0.5} index={5}>
              <h3 className="ll-card-title" style={{ fontSize: "1.5rem" }}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="ll-form">
                <div className="ll-form-row">
                  <div>
                    <label htmlFor="name">Name *</label>
                    <PenField seed="f-name">
                      <input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required disabled={busy} autoComplete="name" />
                    </PenField>
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <PenField seed="f-email">
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required disabled={busy} autoComplete="email" />
                    </PenField>
                  </div>
                </div>
                <div>
                  <label htmlFor="subject">Subject *</label>
                  <PenField seed="f-subject">
                    <input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required disabled={busy} />
                  </PenField>
                </div>
                <div>
                  <label htmlFor="message">Message *</label>
                  <PenField seed="f-message" h={140}>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Your message..." rows={5} required disabled={busy} />
                  </PenField>
                </div>

                {status.type !== "idle" && (
                  <p
                    className="ll-status"
                    data-type={status.type}
                    role={status.type === "error" ? "alert" : "status"}
                  >
                    {status.type === "success" && <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    {status.type === "error" && <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    {status.type === "loading" && <span className="ll-spinner" aria-hidden="true" />}
                    <span>{status.message}</span>
                  </p>
                )}

                <div>
                  <PenButton type="submit" seed="btn-send" disabled={busy}>
                    <Send aria-hidden="true" />
                    {busy ? "Sending..." : "Send Message"}
                  </PenButton>
                </div>
              </form>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}
