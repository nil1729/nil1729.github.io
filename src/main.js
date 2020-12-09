import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
