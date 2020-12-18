import Home from '@/components/pages/Home/home';

const routes = [
	{
		path: '',
		component: Home,
		name: 'Home',
	},
	{
		path: '*',
		redirect: { name: 'Home' },
	},
];
export default routes;
