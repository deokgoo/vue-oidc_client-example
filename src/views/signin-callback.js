import Vue from 'vue';
import AuthService from '../service/AuthService';

export default Vue.component('my-component', {
  template: '<div id="my-component"> </div>',
  created() {
    new AuthService().signInCallBack.redirect().then(() => {
      window.history.replaceState({},
        window.document.title,
        window.location.origin);
      window.location.href = '/';
    }, (error) => {
      console.error(error);
    });
  },
});
