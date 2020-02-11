import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignInCallBack from '../views/signin-callback';

Vue.use(VueRouter);

const routes = [
  {
    path: '/auth/:flow',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin-callback',
    name: 'SignInCallBack',
    component: SignInCallBack,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next)=> {
//   // oidcInfo => vuex
//   next();
// });

export default router;
