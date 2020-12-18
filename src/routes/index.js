import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		return { offset: { x: 0, y: 50 }, behavior: 'smooth' };
	},
});

export default router;
