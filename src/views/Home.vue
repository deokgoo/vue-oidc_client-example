<template>
  <div class="home">
    <Base v-if="this.$route.params.flow==='base'"/>
    <Code v-if="this.$route.params.flow==='code'"/>
    <Implicit v-if="this.$route.params.flow==='implicit'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Base from '@/components/Base.vue';
import Code from '@/components/Code.vue';
import Implicit from '@/components/Implicit.vue';

export default {
  name: 'Home',
  components: {
    Base,
    Code,
    Implicit,
  },
};
</script>
