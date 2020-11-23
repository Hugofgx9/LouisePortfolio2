import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { state } from './state';

Vue.use(Vuex);

const store = new Vuex.Store({	
	state: state,
	mutations: mutations,
});

export default store;