import Home from '@/components/pages/Home/home';
import Contact from '@/components/pages/Contact/contact';
const routes = [
	{
		path: '',
		component: Home,
		name: 'Home',
	},
	{
		path: '/contact',
		component: Contact,
		name: 'Contact',
	},
];
export default routes;
