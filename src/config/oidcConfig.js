import { WebStorageStateStore } from 'oidc-client';

const { VUE_APP_SERVER, VUE_APP_CLIENT } = process.env;
// VUE_APP_CLIENT
export default {
  userStore: new WebStorageStateStore(),
  authority: VUE_APP_SERVER,
  client_id: 'interactive.public',
  scope: 'openid profile email api offline_access',
  response_type: 'code',

  redirect_uri: `${VUE_APP_CLIENT}/signin-callback`,
  silent_redirect_uri: `${VUE_APP_CLIENT}/silent-callback`,

  post_logout_redirect_uri: `${VUE_APP_CLIENT}/logout`,

  popup_redirect_uri: `${VUE_APP_CLIENT}/popup-callback`,
  popup_post_logout_redirect_uri: `${VUE_APP_CLIENT}/user-manager-sample-popup-signout`,

  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};
