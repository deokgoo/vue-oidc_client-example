import Vue from 'vue';
import TreeView from 'vue-json-tree-view';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(TreeView);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
