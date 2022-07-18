import { Fragment } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import GotoTopButton from '../ui/go-to-top-btn';

function Layout(props) {
	return (
		<Fragment>
			<Navbar />
			<main>{props.children}</main>
			<Footer />
			<GotoTopButton />
		</Fragment>
	);
}

export default Layout;
