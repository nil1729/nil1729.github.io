import DEVELOPER_INFO from '../../../_data/author';
import github_icon from '../../../public/assets/icons/github.svg';
import linkedin_icon from '../../../public/assets/icons/linkedin.svg';
import twitter_icon from '../../../public/assets/icons/twitter.svg';
import Image from 'next/image';

function Footer() {
	return (
		<footer className='footer_area'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className='footer_top flex-column'>
							<div className='footer_logo'>
								<h5>
									<span className='fa fa-code mr-2'></span> with
									<span className='fa fa-heart mx-2'></span> and
									<span className='fa fa-coffee ml-2'></span>
								</h5>
								<h4>{DEVELOPER_INFO.default_title}</h4>
							</div>
							<div className='footer_social d-flex justify-content-center align-items-center'>
								<a
									href={DEVELOPER_INFO.social.github.url}
									target='_blank'
									rel='noreferrer noopener'
								>
									<span className='sr-only'>Github</span>
									<Image src={github_icon} alt='github' height={30} width={30} />
								</a>
								<a
									href={DEVELOPER_INFO.social.linkedin.url}
									target='_blank'
									rel='noreferrer noopener'
								>
									<span className='sr-only'>Linkedin</span>
									<Image src={linkedin_icon} alt='github' height={30} width={30} />
								</a>
								<a
									href={DEVELOPER_INFO.social.twitter.url}
									target='_blank'
									rel='noreferrer noopener'
								>
									<span className='sr-only'>Twitter</span>
									<Image src={twitter_icon} alt='github' height={30} width={30} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='credit_footer text-right'>
				<h5 className='col-lg-8 col-sm-12 ml-auto mr-5 lead mt-2'>
					Template by{` `}
					<a href='https://colorlib.com/' target='_blank' rel='noreferrer noopener'>
						Colorlib
					</a>
				</h5>
			</div>
		</footer>
	);
}

export default Footer;
