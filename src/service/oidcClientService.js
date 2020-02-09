import { UserManager } from 'oidc-client';
import oidcConfig from '../config/oidcConfig';

const uManager = new UserManager(oidcConfig);

uManager.events.addUserLoaded(function (user) {
  console.log('New User Loaded：', user);
  console.log('Acess_token: ', user.access_token);
});

uManager.events.addAccessTokenExpiring(function (args) {
  console.log('AccessToken Expiring：', args);
});

uManager.events.addAccessTokenExpired(function (args) {
  console.log('AccessToken Expired：', args);
});

uManager.events.addSilentRenewError(function (args) {
  console.error('Silent Renew Error：', args);
});

uManager.events.addUserSignedOut(function (args) {
  console.log('UserSignedOut：', args);
});

export default uManager;
