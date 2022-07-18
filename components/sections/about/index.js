import { Element, Link } from 'react-scroll';
import banner_img from '../../../public/assets/banner/about.svg';
import Image from 'next/image';

function About() {
	return (
		<Element name='my-about-section'>
			<section className='about_area section_gap' id='about'>
				<div className='container'>
					<div className='row justify-content-start align-items-center'>
						<div className='col-lg-5'>
							<div className='about_img'>
								<Image src={banner_img} alt='about-image' />
							</div>
						</div>
						<div className='offset-lg-1 col-lg-5'>
							<div className='main_title text-left'>
								<h2>
									let me{` `}
									<br />
									Introduce myself
								</h2>
								<p>
									I am a Web developer experienced in Vue.js and Node.js. I love creating websites
									with new tech skills. I am a junior year student pursuing B.E. Computer Science
									from BITS Pilani, Rajasthan, India.
								</p>
								<p>
									I am a beginner on this Dev journey. But I am a fast learner; I started learning
									to code in August 2019. This year I joined the Student Union Technical Team of
									BITS Pilani as a Frontend Developer and learned about web development frameworks
									like ReactJS, VueJS, and NodeJS for backend development. Apart from Web
									Development, I love solving algorithmic problems on Leetcode, Codeforces and
									Hackerrank.
								</p>
								<Link
									className='primary_btn'
									href='#contact'
									data-toggle='dropdown'
									role='button'
									aria-expanded='false'
									to='my-contact-section'
									smooth={true}
									offset={-100}
									duration={500}
								>
									<span>get in touch</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
}

export default About;
