<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Implicit from '@/components/Implicit.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld: Implicit,
  },
  created() {
    console.log(process.env.NODE_ENV);
    console.log(process.env.VUE_APP_SERVER);
  },
};
</script>
