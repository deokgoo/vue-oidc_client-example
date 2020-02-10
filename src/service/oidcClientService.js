import { UserManager } from 'oidc-client';
import oidcConfig from '../config/oidcConfig';

const uManager = new UserManager(oidcConfig);

uManager.events.addUserLoaded((user) => {
  console.log('New User Loaded：', user);
  console.log('Acess_token: ', user.access_token);
});

uManager.events.addAccessTokenExpiring((args) => {
  console.log('AccessToken Expiring：', args);
});

uManager.events.addAccessTokenExpired((args) => {
  console.log('AccessToken Expired：', args);
});

uManager.events.addSilentRenewError((args) => {
  console.error('Silent Renew Error：', args);
});

uManager.events.addUserSignedOut((args) => {
  console.log('UserSignedOut：', args);
});

export default uManager;
