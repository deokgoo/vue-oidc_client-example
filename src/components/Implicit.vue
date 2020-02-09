<template>
  <div class="implicit">
    <Button @click="signInMainView">signInMainView</Button>
    <Button @click="signInCallBack">callback</Button>
    <Button @click="getUserInfo">getUerInfo</Button>
  </div>
</template>

<script>
import AuthService from '../service/AuthService';

export default {
  name: 'Implicit',
  data() {
    return {
      authService: {},
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
      const userInfo = await this.authService.resource.user();
      console.log(userInfo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
