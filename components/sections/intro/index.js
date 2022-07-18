import { Link } from 'react-scroll';
import banner_img from '../../../public/assets/banner/dev.svg';
import Image from 'next/image';
import { resume_link } from '../../../_data/author';

function Intro() {
	return (
		<section className='home_banner_area'>
			<div className='banner_inner'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-7'>
							<div className='banner_content'>
								<h3 className='text-uppercase'>Hell0</h3>
								<h1 className='text-uppercase'>I am Nilanjan</h1>
								<h5 className='text-uppercase'>Web Developer • Undergradute Student</h5>
								<div className='d-flex align-items-center'>
									<a
										className='primary_btn tr-bg'
										href={resume_link}
										target='_blank'
										rel='noreferrer noopener'
									>
										<span>My resume</span>
									</a>
									<Link
										href='#portfolio'
										className='primary_btn tr-bg'
										data-toggle='dropdown'
										role='button'
										aria-expanded='false'
										to='my-projects-section'
										smooth={true}
										offset={-100}
										duration={500}
									>
										<span>My Projects</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col-lg-5'>
							<div className='home_right_img'>
								<Image src={banner_img} alt='developer-image' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
