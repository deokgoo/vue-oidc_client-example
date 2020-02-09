import uManager from "./oidcClientService";

export default class AuthService {
  signIn = {
    mainWindow() {
      uManager.settings.redirect_uri = "/";
      return uManager.signinRedirect();
    },

    diffWindow() {
      uManager.settings.redirect_uri = "/callback-signin";
      return uManager.signinRedirect();
    },

    popup() {
      uManager.settings.popup_redirect_uri = "/popup-signin";
      return uManager.signinPopup();
    },
    // iframe login, renewToken
    silent() {
      uManager.settings.redirect_uri = "/";
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

    popup() {
      return uManager.signoutPopup();
    },
  };

  signOutCallBack = {
    callback() {
      return uManager.signoutCallback()
    },

    redirect() {
      return uManager.signoutRedirectCallback();
    }
  };

  resource = {
    user() {
      return uManager.getUser();
    },
  };
}
