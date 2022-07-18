import { Element } from 'react-scroll';
import ContactForm from './form';
import ContactInfo from './info';

function Contact() {
	return (
		<Element name='my-contact-section'>
			<section className='contact_brand_area' id='contact'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 text-center'>
							<div className='main_title'>
								<h2>Contact Me</h2>
								<p>
									If you have any questions, please feel free to drop me a line. If you do not get
									an answer immediately, I might just be travelling through the middle of nowhere. I
									will get back to you as soon as I can. That is a promise!
								</p>
							</div>
						</div>
					</div>
					<section className='contact_area'>
						<div className='container'>
							<div className='row form-container'>
								<div className='col-lg-7 col-sm-12'>
									<ContactForm />
								</div>
								<div className='col-lg-5 col-sm-12'>
									<ContactInfo />
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>
		</Element>
	);
}

export default Contact;
