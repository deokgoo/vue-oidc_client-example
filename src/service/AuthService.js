import uManager from './oidcClientService';

export default class AuthService {
  signIn = {
    mainWindow() {
      return uManager.signinRedirect({ redirect_uri: window.location.href });
    },

    diffWindow() {
      return uManager.signinRedirect({ redirect_uri: '/callback-signin' });
    },

    popup() {
      return uManager.signinPopup({ redirect_uri: window.location.href });
    },
    // iframe login, renewToken
    silent() {
      uManager.settings.redirect_uri = '/';
      return uManager.signinSilent();
    },
  };

  signInCallBack = {
    callBack() {
      return uManager.signinCallback();
    },

    redirect() {
      return uManager.signinRedirectCallback();
    },

    popup() {
      return uManager.signinPopupCallback();
    },

    silent() {
      return uManager.signinSilentCallback();
    },
  };

  signOut = {
    mainWindow() {
      uManager.settings.post_logout_redirect_uri = '/';
      return uManager.signoutRedirect();
    },

    diffWindow() {
      uManager.settings.post_logout_redirect_uri = '/signout';
      return uManager.signoutRedirect();
    },

    popup(options) {
      return uManager.signoutPopup(options);
    },
  };

  signOutCallBack = {
    callback() {
      return uManager.signoutCallback();
    },

    redirect() {
      return uManager.signoutRedirectCallback();
    },
  };

  resource = {
    user() {
      return uManager.getUser();
    },
  };
}
