import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Globe, Send } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "./animated-section"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 w-full max-w-md h-full">
              <AnimatedSection delay={200}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in discussing data engineering challenges, AI innovations, and opportunities
                    to build impactful solutions. Feel free to reach out!
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-4 flex-1">
                <AnimatedSection direction="right" delay={300}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4">
                      <Mail className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <Link
                          href="mailto:nilanjan1729nsvian@gmail.com"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          nilanjan1729nsvian@gmail.com
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={400}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4">
                      <Linkedin className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <Link
                          href="https://linkedin.com/in/nil1729"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          linkedin.com/in/nil1729
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={500}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4">
                      <Github className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <Link
                          href="https://github.com/nil1729"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          github.com/nil1729
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection direction="right" delay={600}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4">
                      <Globe className="h-5 w-5 mr-3 text-blue-600" />
                      <div>
                        <p className="font-medium">Website</p>
                        <Link
                          href="https://nilanjandeb.com"
                          target="_blank"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          nilanjandeb.com
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={700} className="w-full max-w-md h-full">
              <Card className="h-full flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <form className="space-y-4 h-full flex flex-col">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What's this about?" />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Your message..." rows={5} className="h-32" />
                    </div>
                    <Button type="submit" className="w-full mt-auto">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
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
