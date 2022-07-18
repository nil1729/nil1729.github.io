import { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
	const header_navbar = useRef();
	const navbar_toggler = useRef();
	const [navbar_fixed, set_navbar_fixed] = useState(false);
	const [navbar_open, set_navbar_open] = useState(false);

	useEffect(() => {
		// Scroll Event Listener
		window.addEventListener('scroll', function () {
			if (header_navbar.current?.getBoundingClientRect().top < -100) {
				set_navbar_fixed(true);
			} else {
				set_navbar_fixed(false);
			}
		});

		window.addEventListener('resize', function () {
			if (window.innerWidth < 991) {
				set_navbar_open(false);
			} else {
				set_navbar_open(true);
			}
		});

		if (window.innerWidth > 991) {
			set_navbar_open(true);
		}
	}, []);

	function navbarExpandHandler() {
		if (window.innerWidth < 991) {
			navbar_toggler.current.setAttribute('aria-expanded', !navbar_open);
			set_navbar_open(!navbar_open);
		}
	}

	return (
		<header
			id='header-top'
			className={`header_area ${navbar_fixed ? 'navbar_fixed' : ''}`}
			ref={header_navbar}
		>
			<div className='main_menu'>
				<nav className='navbar navbar-expand-lg navbar-light'>
					<div className='container'>
						<span
							className='navbar-brand logo_h'
							onClick={() => {
								scroll.scrollToTop();
							}}
						>
							Nilanjan Deb
						</span>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-label='Toggle navigation'
							id='navbar-toggler'
							ref={navbar_toggler}
							onClick={navbarExpandHandler}
						>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
							<span className='icon-bar'></span>
						</button>
						<div
							className={`navbar-collapse offset collapse ${navbar_open ? 'show' : ''}`}
							id='navbarSupportedContent'
						>
							<ul className='nav navbar-nav menu_nav justify-content-end'>
								<li className='nav-item submenu dropdown'>
									<Link
										href='#about'
										className='nav-link'
										data-toggle='dropdown'
										role='button'
										aria-expanded='false'
										to='my-about-section'
										smooth={true}
										offset={-75}
										duration={500}
										onClick={navbarExpandHandler}
									>
										About
									</Link>
								</li>
								<li className='nav-item submenu dropdown'>
									<Link
										href='#portfolio'
										className='nav-link'
										data-toggle='dropdown'
										role='button'
										aria-expanded='false'
										to='my-projects-section'
										smooth={true}
										offset={-100}
										duration={500}
										onClick={navbarExpandHandler}
									>
										Projects
									</Link>
								</li>
								<li className='nav-item submenu dropdown'>
									<Link
										href='#skills'
										className='nav-link'
										data-toggle='dropdown'
										role='button'
										aria-expanded='false'
										to='my-skills-section'
										smooth={true}
										offset={-100}
										duration={500}
										onClick={navbarExpandHandler}
									>
										Skills
									</Link>
								</li>
								<li className='nav-item submenu dropdown'>
									<Link
										href='#contact'
										className='nav-link'
										data-toggle='dropdown'
										role='button'
										aria-expanded='false'
										to='my-contact-section'
										smooth={true}
										offset={-100}
										duration={500}
										onClick={navbarExpandHandler}
									>
										Contact Me
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
