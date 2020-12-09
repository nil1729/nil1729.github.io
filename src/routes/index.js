import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash && savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			if (window.innerWidth < 800) {
				return {
					selector: to.hash,
					offset: { x: 0, y: 100 },
					behavior: 'smooth',
				};
			}
		}
		return { x: 0, y: 0 };
	},
});

export default router;
