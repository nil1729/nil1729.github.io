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
    to: process.env.INBOX_EMAIL_ADDRESS,
    cc: email,
    from: `${process.env.SENDER_EMAIL_NAME} <${process.env.SENDER_EMAIL_ADDRESS}>`,
    subject: `Contact Request: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
        </div>
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
          <p style="line-height: 1.6; color: #475569;">${message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
          <p style="margin: 0; color: #1e40af; font-size: 14px;">
            <strong>Source:</strong> Contact form at https://nilanjandeb.com
          </p>
          <p style="margin: 5px 0 0 0; color: #1e40af; font-size: 14px;">
            <strong>Timestamp:</strong> ${new Date().toLocaleString()}
          </p>
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
