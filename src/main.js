import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import VueScrollTo from 'vue-scrollto';
import VueMeta from 'vue-meta';
import SEO from './store/utils/seo';
import './registerServiceWorker'

Vue.use(VueScrollTo);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
	metaInfo: {
		...SEO,
	},
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
