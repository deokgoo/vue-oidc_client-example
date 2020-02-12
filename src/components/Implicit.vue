<template>
  <div class="implicit">
    <Button @click="signInMainView">signInMainView</Button>
    <Button @click="signInPopView">signInPopView</Button>
    <Button @click="signInSilent">silent</Button>
    <Button @click="signInCallBack">callback</Button>
    <Button @click="getUserInfo">getUerInfo</Button>
    <Button @click="signOutPop">signOutPop</Button>
    <h3>UserInfo</h3>
    <tree-view v-if="userInfo" :data="userInfo"
               style="height:500px;"></tree-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AuthService from '../service/AuthService';

export default {
  name: 'Implicit',
  data() {
    return {
      authService: {},
      userInfo: '',
    };
  },
  created() {
    this.authService = new AuthService();
    this.updateRedirectUrl('/implicit');
  },
  methods: {
    ...mapActions(['updateRedirectUrl']),
    signInMainView() {
      this.authService.signIn.mainWindow();
    },

    async signInPopView() {
      await this.authService.signIn.popup();
    },

    signInSilent() {
      this.authService.signIn.silent();
    },

    signInCallBack() {
      this.authService.signInCallBack.callBack();
    },

    async getUserInfo() {
      const res = await this.authService.resource.user();
      this.userInfo = res;
    },

    signOutPop() {
      this.authService.signOut.popup();
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
