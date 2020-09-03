import Home from '@/components/pages/Home/home';

const routes = [
	{
		path: '',
		component: Home,
		name: 'Home',
	},
	{
		path: '/contact',
		component: () =>
			import ('@/components/pages/Contact/contact'),
		name: 'Contact',
	},
];
export default routes;
