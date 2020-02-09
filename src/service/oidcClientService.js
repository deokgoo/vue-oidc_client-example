import { UserManager } from 'oidc-client';
import oidcConfig from '../config/oidcConfig';

const uManager = new UserManager(oidcConfig);

uManager.events.addUserLoaded(function (user) {
  console.log('New User Loaded：', arguments);
  console.log('Acess_token: ', user.access_token);
});

uManager.events.addAccessTokenExpiring(function () {
  console.log('AccessToken Expiring：', arguments);
});

uManager.events.addAccessTokenExpired(function () {
  console.log('AccessToken Expired：', arguments);
});

uManager.events.addSilentRenewError(function () {
  console.error('Silent Renew Error：', arguments);
});

uManager.events.addUserSignedOut(function () {
  console.log('UserSignedOut：', arguments);
});

export default uManager;
