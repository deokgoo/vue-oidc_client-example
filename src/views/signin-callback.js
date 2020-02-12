import Vue from 'vue';
import store from '../store';
import AuthService from '../service/AuthService';

export default Vue.component('my-component', {
  template: '<div id="my-component"> </div>',
  created() {
    const { redirectUrl } = store.state;

    new AuthService().signInCallBack.redirect().then(() => {
      window.history.replaceState({},
        window.document.title,
        window.location.origin);
      this.$router.push(redirectUrl);
    }, (error) => {
      console.error(error);
    });
  },
});
