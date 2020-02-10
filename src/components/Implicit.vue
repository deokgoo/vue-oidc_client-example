<template>
  <div class="implicit">
    <Button @click="signInMainView">signInMainView</Button>
    <Button @click="signInCallBack">callback</Button>
    <Button @click="getUserInfo">getUerInfo</Button>
    <h3>UserInfo</h3>
    <tree-view v-if="userInfo" :data="userInfo"
               style="height:500px;"></tree-view>
  </div>
</template>

<script>
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
  },
  methods: {
    signInMainView() {
      this.authService.signIn.mainWindow();
    },
    signInCallBack() {
      this.authService.signInCallBack.callBack();
    },
    async getUserInfo() {
      const res = await this.authService.resource.user();
      this.userInfo = res;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
