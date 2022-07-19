import sg_mail from '@sendgrid/mail';
import { website } from '../../_data/author';
sg_mail.setApiKey(process.env.SENDGRID_API_KEY);

function createEmailTemplate(name, email_address, message) {
	const msg = {
		to: process.env.INBOX_EMAIL_ADDRESS,
		from: process.env.SENDER_EMAIL_ADDRESS,
		subject: `Form Submission on ${website.host_url}`,
		html: `
            <p>Name: ${name}</p>
            <p>Email Address: ${email_address}</p>
            <p>Message: ${message}</p>
        `,
	};
	return msg;
}

export default async function handler(req, res) {
	try {
		if (req.method === 'POST') {
			const { name, email_address, message } = req.body;
			const email_template = createEmailTemplate(name, email_address, message);
			await sg_mail.send(email_template);
			return res.status(200).json({ message: 'Message sent successfully' });
		} else return res.status(503).json({ message: 'Method is not implemented yet' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: 'Something went wrong' });
	}
}
