import Vue from 'vue';
import Vuex from 'vuex';

// Import all utils from ./utils
import projects from './utils/projects';
import seo from './utils/seo';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		projects,
		seo,
	},
});

export default store;
