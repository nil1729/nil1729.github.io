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
    replyTo: process.env.INBOX_EMAIL_ADDRESS,
    subject: `Contact Request Received: ${subject}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Thank You for Your Message!</h1>
          <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 14px;">Your inquiry has been received and we'll respond soon</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px 20px;">
          <!-- Personal Greeting -->
          <div style="margin-bottom: 24px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0;">
              Hi <strong style="color: #1e293b;">${name}</strong>,
            </p>
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 12px 0 0 0;">
              Thank you for reaching out through my website. I've received your message and wanted to confirm the details with you.
            </p>
          </div>

          <!-- Message Summary -->
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 10px; margin-bottom: 24px; border-left: 4px solid #3b82f6;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px; font-weight: 600;">Your Message Summary</h2>
            <div style="display: grid; gap: 12px;">
              <div>
                <span style="font-weight: 600; color: #374151;">Subject:</span>
                <span style="color: #6b7280; margin-left: 8px;">${subject}</span>
              </div>
              <div>
                <span style="font-weight: 600; color: #374151;">Your Email:</span>
                <span style="color: #6b7280; margin-left: 8px;">${email}</span>
              </div>
              <div>
                <span style="font-weight: 600; color: #374151;">Date Submitted:</span>
                <span style="color: #6b7280; margin-left: 8px;">${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>
          </div>

          <!-- Original Message -->
          <div style="background-color: #ffffff; padding: 24px; border: 2px solid #e5e7eb; border-radius: 10px; margin-bottom: 24px;">
            <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Your Message</h3>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; border-left: 3px solid #8b5cf6;">
              <p style="line-height: 1.6; color: #374151; margin: 0; white-space: pre-wrap; font-style: italic;">"${message}"</p>
            </div>
          </div>

          <!-- Next Steps -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; border-radius: 10px; margin-bottom: 24px;">
            <h3 style="color: #ffffff; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; text-align: center;">Let's Connect!</h3>
            <p style="color: #e2e8f0; text-align: center; margin: 0 0 20px 0; line-height: 1.5;">
              I typically respond to all inquiries within 24 hours. To expedite our conversation, feel free to schedule a discovery call directly.
            </p>
            <div style="text-align: center;">
              <a href="https://calendar.notion.so/meet/nil1729/discovery" 
                 style="display: inline-block; background-color: #ffffff; color: #667eea; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; margin: 0 auto;">
                📅 Schedule a Discovery Call
              </a>
            </div>
            <p style="color: #e2e8f0; text-align: center; margin: 16px 0 0 0; font-size: 14px;">
              Or simply reply to this email - I'd love to hear more about your project!
            </p>
          </div>

          <!-- What to Expect -->
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 10px; border: 1px solid #bae6fd; margin-bottom: 24px;">
            <h4 style="color: #0369a1; margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">What to Expect Next</h4>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="width: 32px; padding: 0 12px 12px 0; vertical-align: top;">
                  <div style="background-color: #3b82f6; color: white; border-radius: 50%; width: 24px; height: 24px; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">1</div>
                </td>
                <td style="padding-bottom: 12px; vertical-align: top;">
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.5;">I'll review your message and respond personally within 24 hours</p>
                </td>
              </tr>
              <tr>
                <td style="width: 32px; padding: 0 12px 12px 0; vertical-align: top;">
                  <div style="background-color: #10b981; color: white; border-radius: 50%; width: 24px; height: 24px; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">2</div>
                </td>
                <td style="padding-bottom: 12px; vertical-align: top;">
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.5;">We'll discuss your project requirements and objectives</p>
                </td>
              </tr>
              <tr>
                <td style="width: 32px; padding: 0 12px 0 0; vertical-align: top;">
                  <div style="background-color: #f59e0b; color: white; border-radius: 50%; width: 24px; height: 24px; text-align: center; line-height: 24px; font-size: 12px; font-weight: bold;">3</div>
                </td>
                <td style="vertical-align: top;">
                  <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.5;">I'll provide a tailored proposal with next steps</p>
                </td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="text-align: center; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px 0; font-weight: 500;">
              Best regards,<br>
              <strong style="color: #1e293b;">Nilanjan Deb</strong>
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0; line-height: 1.5;">
              🌐 <a href="https://nilanjandeb.com" style="color: #3b82f6; text-decoration: none;">nilanjandeb.com</a> | 
              📧 <a href="mailto:${process.env.SENDER_EMAIL_ADDRESS || 'contact@nilanjandeb.com'}" style="color: #3b82f6; text-decoration: none;">Get in touch</a>
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
