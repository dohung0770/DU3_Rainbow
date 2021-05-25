import Vuex from 'vuex';
import Vue from 'vue';
import contents from './modules/contents';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    contents
  }
})