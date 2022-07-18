import { useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

function GotoTopButton() {
	const btn_ref = useRef();

	useEffect(() => {
		window.addEventListener('scroll', function () {
			if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
				btn_ref.current.style.display = 'flex';
			} else {
				btn_ref.current.style.display = 'none';
			}
		});
	}, []);

	return (
		<div
			className='goto-top-btn'
			ref={btn_ref}
			onClick={() => {
				scroll.scrollToTop();
			}}
		>
			<i className='fas fa-arrow-up'></i>
		</div>
	);
}

export default GotoTopButton;
