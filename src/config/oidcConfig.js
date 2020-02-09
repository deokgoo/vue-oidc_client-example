const {VUE_APP_SERVER, VUE_APP_CLIENT} = process.env;

export default {
  userStore: new Oidc.WebStorageStateStore(),
  authority: VUE_APP_SERVER,
  client_id: 'lDXLkqx8RMCfS04SrOCF2RxNARCIKXE7',
  scope: 'profile email openid offline_access',
  redirect_uri: `${VUE_APP_CLIENT}/callback`,
  silent_redirect_uri: `${VUE_APP_CLIENT}/silent-renew`,
  post_logout_redirect_uri: `${VUE_APP_CLIENT}/logout`,
  response_type: 'code',
  prompt: "login",
  accessTokenExpiringNotificationTime: 10,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true
}
