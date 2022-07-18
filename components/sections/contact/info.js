function ContactInfo() {
	return (
		<div className='contact_info border-bottom border-top pt-4'>
			<div className='info_item'>
				<i className='fal fa-home-lg-alt'></i>
				<h6>RAM 1162, BITS PILANI</h6>
				<p>Vidya Vihar Campus, Pilani, Rajasthan 333031</p>
			</div>
			<div className='info_item'>
				<i className='fal fa-phone-alt'></i>
				<h6>
					<a href='tel:+919366496119'>(+91) 93664 96119</a>
				</h6>
				<p>Mobile (Personal)</p>
			</div>
			<div className='info_item'>
				<i className='fal fa-envelope'></i>
				<h6>
					<a href='mailto:nilanjan172nsvian@gmail.com'>nilanjan172nsvian@gmail.com</a>
				</h6>
				<p>Personal Email</p>
			</div>
		</div>
	);
}

export default ContactInfo;
