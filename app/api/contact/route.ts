import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

function createEmailTemplate(name: string, email: string, subject: string, message: string) {
  return {
    to: email,
    bcc: process.env.INBOX_EMAIL_ADDRESS,
    from: `${process.env.SENDER_EMAIL_NAME} <${process.env.SENDER_EMAIL_ADDRESS}>`,
    replyTo: process.env.INBOX_EMAIL_ADDRESS,
    subject: `Re: ${subject}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); padding: 28px 24px; border-radius: 12px 12px 0 0;">
          <p style="color: #94a3b8; margin: 0 0 4px 0; font-size: 12px; font-family: monospace; letter-spacing: 0.05em;">nilanjandeb.com</p>
          <h1 style="color: #f1f5f9; margin: 0; font-size: 20px; font-weight: 600;">Message received. I'll get back to you soon.</h1>
        </div>

        <!-- Main Content -->
        <div style="padding: 28px 24px;">
          <!-- Greeting -->
          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 16px 0;">
            Hey <strong>${name}</strong>,
          </p>
          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
            Got your message. Just a heads up that it's in my inbox. I read every one personally and tend to reply within a day or two, usually sooner.
          </p>

          <!-- Message Echo -->
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border-left: 3px solid #3b82f6;">
            <p style="color: #64748b; font-size: 12px; font-family: monospace; margin: 0 0 12px 0; letter-spacing: 0.05em; text-transform: uppercase;">What you sent</p>
            <div style="margin-bottom: 10px;">
              <span style="font-size: 13px; color: #64748b;">Subject: </span>
              <span style="font-size: 13px; font-weight: 600; color: #1e293b;">${subject}</span>
            </div>
            <div style="background-color: #ffffff; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="line-height: 1.6; color: #374151; margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
            </div>
          </div>

          <!-- What I enjoy discussing -->
          <div style="background-color: #f0fdf4; padding: 18px 20px; border-radius: 8px; border: 1px solid #bbf7d0; margin-bottom: 24px;">
            <p style="color: #166534; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">What I genuinely enjoy digging into</p>
            <ul style="color: #374151; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 18px;">
              <li>Tricky data pipeline problems: latency, throughput, correctness</li>
              <li>System design trade-offs (when to use what and why)</li>
              <li>LLM / AI integrations that go beyond the hello-world demo</li>
              <li>Interesting engineering problems worth thinking through together</li>
            </ul>
          </div>

          <p style="color: #374151; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
            If your message needs more context or you want to jump straight into a discussion, just reply here. Happy to dig in.
          </p>

          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 6px 0;">
              Nilanjan
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              <a href="https://nilanjandeb.com" style="color: #3b82f6; text-decoration: none;">nilanjandeb.com</a> &nbsp;·&nbsp;
              <a href="https://github.com/nil1729" style="color: #3b82f6; text-decoration: none;">github.com/nil1729</a>
            </p>
          </div>
        </div>
      </div>
    `,
  }
}

function createNodemailerAgent() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_ALLOW_SECURE_CONNECTION === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
  return transporter
}

async function sendThroughNodeMailer(mailObj: any) {
  const mailAgent = createNodemailerAgent()
  const info = await mailAgent.sendMail(mailObj)
  console.log(`Email sent successfully: ${info.messageId}`)
  return info
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create and send email
    const emailTemplate = createEmailTemplate(name, email, subject, message)
    await sendThroughNodeMailer(emailTemplate)

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
