import { Fragment, useState } from 'react';

function ContactForm() {
	const [submitted, set_submitted] = useState(false);

	return (
		<Fragment>
			{!submitted ? (
				<form className='row contact_form'>
					<div className='col-md-12'>
						<div className='form-group'>
							<label className='sr-only' htmlFor='name'>
								Name
							</label>
							<input
								required
								v-model='name'
								type='text'
								className='form-control'
								placeholder='Your Name'
							/>
							<div className='invalid-feedback'>Please enter a Valid Name</div>
						</div>
						<div className='form-group'>
							<label className='sr-only' htmlFor='email'>
								Email Address
							</label>
							<input
								required
								v-model='email'
								type='email'
								className='form-control'
								placeholder='Email Address'
							/>
							<div className='invalid-feedback'>Please enter a Valid Email Address</div>
						</div>
						<div className='form-group'>
							<label className='sr-only' htmlFor='message'>
								Message
							</label>
							<textarea
								required
								v-model='message'
								className='form-control'
								placeholder='Your Message'
								rows='1'
							></textarea>
						</div>
					</div>
					<div className='col-md-12 submit_btn'>
						<button type='submit' value='submit' className='primary_btn'>
							<span>Send Message</span>
						</button>
					</div>
				</form>
			) : (
				<div v-else className='mt-3 banner_content text-center success-msg'>
					<h5 className='text-uppercase'>Message sent</h5>
					<h1 className='text-uppercase'>Thank You</h1>
					<a className='primary_btn tr-bg mt-2' href='#'>
						<span>Send another Message</span>
					</a>
				</div>
			)}
		</Fragment>
	);
}

export default ContactForm;
