import sg_mail from '@sendgrid/mail';
import { website } from '../../_data/author';
import nodemailer from 'nodemailer';

function createEmailTemplate(name, email_address, message) {
  const msg = {
    to: process.env.INBOX_EMAIL_ADDRESS,
    cc: email_address,
    from: `${process.env.SENDER_EMAIL_NAME} <${process.env.SENDER_EMAIL_ADDRESS}>`,
    subject: `Contact Request`,
    html: `
					<p>Name: ${name}</p>
					<p>Email Address: ${email_address}</p>
					<p>Message: ${message}</p>
					<p>Host: ${website.host_url}</p>
        `,
  };
  return msg;
}

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { name, email_address, message } = req.body;
      const emailTemplate = createEmailTemplate(name, email_address, message);
      await sendThroughNodeMailer(emailTemplate);
      // await sg_mail.send(emailTemplate);
      return res.status(200).json({ message: 'message sent successfully' });
    } else return res.status(503).json({ message: 'method is not implemented yet' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}

// not implemented
async function sendThroughSendGrid() {
  sg_mail.setApiKey(process.env.SENDGRID_API_KEY);
}

// with Sendinblue (Bravo) SMTP
async function sendThroughNodeMailer(mailObj) {
  const mailAgent = createdNodemailerAgent();
  const info = await mailAgent.sendMail(mailObj);
  console.log(`email sent successfully: ${info.messageId}`);
}

function createdNodemailerAgent() {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: Boolean(process.env.SMTP_ALLOW_SECURE_CONNECTION),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  return transporter;
}
