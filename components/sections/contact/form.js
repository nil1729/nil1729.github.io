import { Fragment, useState, useRef } from 'react';
import validator from 'validator';

function ContactForm() {
	const [form_submitting, set_form_submitting] = useState(false);
	const [submitted, set_submitted] = useState(false);
	const [email_input, set_email_input] = useState('');
	const [name_input, set_name_input] = useState('');
	const message_input = useRef();
	const [invalid_input, set_invalid_input] = useState({
		name: false,
		email: false,
	});

	async function handleSubmit(e) {
		e.preventDefault();

		console.log(message_input.current.value);

		// Double Check
		if (name_input && email_input && message_input.current.value.trim().length > 0) {
			set_form_submitting(true);

			const response = await fetch('/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: name_input,
					email_address: email_input,
					message: message_input.current.value,
				}),
			});

			if (response.ok) {
				set_form_submitting(false);
				set_submitted(true);
				clearInput();
			}
		}
	}

	function checkNameInput(e) {
		set_name_input(e.target.value);
		if (validator.matches(e.target.value, /^[a-zA-Z ]*$/)) {
			set_invalid_input({ ...invalid_input, name: false });
		} else {
			set_invalid_input({ ...invalid_input, name: true });
			return false;
		}
	}

	function checkEmailInput(e) {
		set_email_input(e.target.value);
		if (validator.isEmail(e.target.value)) {
			set_invalid_input({ ...invalid_input, email: false });
		} else {
			set_invalid_input({ ...invalid_input, email: true });
			return false;
		}
	}

	function clearInput() {
		set_email_input('');
		set_name_input('');
		message_input.current.value = '';
	}

	return (
		<Fragment>
			{!submitted ? (
				<form className='row contact_form' onSubmit={handleSubmit}>
					<div className='col-md-12'>
						<div className='form-group'>
							<label className='sr-only' htmlFor='name'>
								Name
							</label>
							<input
								required
								name='name'
								type='text'
								className={`form-control ${invalid_input.name && 'is-invalid'}`}
								placeholder='Your Name'
								onChange={checkNameInput}
								value={name_input}
							/>
							<div className='invalid-feedback'>Please enter a Valid Name</div>
						</div>
						<div className='form-group'>
							<label className='sr-only' htmlFor='email'>
								Email Address
							</label>
							<input
								required
								name='email'
								type='email'
								className={`form-control ${invalid_input.email && 'is-invalid'}`}
								placeholder='Email Address'
								onChange={checkEmailInput}
								value={email_input}
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
								ref={message_input}
							></textarea>
						</div>
					</div>
					<div className='col-md-12 submit_btn'>
						<button
							type='submit'
							value='submit'
							className={`primary_btn ${form_submitting && 'loading-disabled'}`}
						>
							<span>{!form_submitting ? 'Send Message' : 'loading ...'}</span>
						</button>
					</div>
				</form>
			) : (
				<div className='mt-3 banner_content text-center success-msg'>
					<h5 className='text-uppercase'>Message sent</h5>
					<h1 className='text-uppercase'>Thank You</h1>
					<a
						className='primary_btn tr-bg mt-2'
						href='#'
						onClick={(e) => {
							e.preventDefault();
							set_submitted(false);
						}}
					>
						<span>Send another Message</span>
					</a>
				</div>
			)}
		</Fragment>
	);
}

export default ContactForm;
