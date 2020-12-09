import Vue from 'vue';
import Vuex from 'vuex';

// Import all utils from ./utils
import projects from './utils/projects';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		projects,
	},
});

export default store;
