import { Element, Link } from 'react-scroll';
import Image from 'next/image';

function Skill({ technical_skill_icons }) {
	return (
		<Element name='my-skills-section'>
			<section className='brand_area' id='skills'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-9 text-center'>
							<div className='main_title'>
								<h2>technical skills</h2>
								<p>
									I started coding by learning about C programming and solving algorithmic problems.
									<br />
									After I began learning Frontend Development, I fell in love with Javascript. I
									have learned Frontend frameworks ReactJS and VueJS so far. Then I started learning
									about NodeJS and exploring backend development. Now I am exploring some DevOps
									related stuffs and started learning Docker.
								</p>
							</div>
						</div>
					</div>
					<div className='row justify-content-center'>
						<div className='col-lg-6'>
							<div className='row skill_container' id='tech-icons'>
								{technical_skill_icons.map((item) => (
									<div className='col-lg-4 col-md-4 col-sm-6' key={item}>
										<div className='single-brand-item d-table'>
											<div className='d-table-cell text-center'>
												<Image src={`/assets/skills/${item}`} alt={item} height={80} width={80} />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className='offset-lg-2 col-lg-4 col-md-6'>
							<div className='client-info'>
								<div className='d-flex mb-50'>
									<span className='lage'>2+</span>
									<span className='smll'>Years of Working Experience</span>
								</div>
								<div className='call-now d-flex'>
									<div>
										<span className='fa fa-question-circle'></span>
									</div>
									<div className='ml-15'>
										<p>Wanna know More ?</p>
										<h3>
											<Link
												href='#contact'
												data-toggle='dropdown'
												role='button'
												aria-expanded='false'
												to='my-contact-section'
												smooth={true}
												offset={-100}
												duration={500}
											>
												Let&apos;s Connect!
											</Link>
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Element>
	);
}

export default Skill;
