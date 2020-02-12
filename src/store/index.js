import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    redirectUrl: 'test',
  },
  mutations: {
    updateRedirectUrl(state, url) {
      state.redirectUrl = url;
    },
  },
  actions: {
    updateRedirectUrl({ commit }, url) {
      commit('updateRedirectUrl', url);
    },
  },
});
