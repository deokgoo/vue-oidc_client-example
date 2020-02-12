import Vue from 'vue';
import TreeView from 'vue-json-tree-view';
import store from './store';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(TreeView);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
