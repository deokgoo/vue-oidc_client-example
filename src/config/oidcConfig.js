import { WebStorageStateStore } from 'oidc-client';

const { VUE_APP_SERVER } = process.env;
// VUE_APP_CLIENT
export default {
  userStore: new WebStorageStateStore(),
  authority: VUE_APP_SERVER,
  client_id: 'interactive.confidential',
  // client_secret: 'c1GMptd9MpBFD80v6x9WAkwX5Mpqy4dXxcyPO1EVWpdAH58k3aFyX6YjNuMaVHvA',
  scope: 'api',
  // redirect_uri: `${VUE_APP_CLIENT}/callback`,
  // silent_redirect_uri: `${VUE_APP_CLIENT}/silent-renew`,
  // post_logout_redirect_uri: `${VUE_APP_CLIENT}/logout`,
  response_type: 'code',
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};
