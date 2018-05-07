<template>
  <div class="container v-self-catalog">
    <v-catalog :routers="routers"></v-catalog>
  </div>
</template>

<script>
  import vCatalog from './dashboard/catalog';
  import { arr, filterRouter } from '@/utils/recursion';
  export default {
    name: 'self-catalog',
    components: {
      vCatalog
    },
    data() {
      return {
        routers: []
      }
    },
    created() {
      const length = this.$route.matched.length;
      const routers = this.$router.options.routes;
      const nowName = this.$route.matched[length - 1].parent.name;
      filterRouter(routers, nowName);
      this.routers = arr;
    }
  }
</script>
