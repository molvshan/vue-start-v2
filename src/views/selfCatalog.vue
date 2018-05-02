<template>
  <div class="container v-self-catalog">
    <v-catalog :routers="routers"></v-catalog>
  </div>
</template>

<script>
  import vCatalog from './dashboard/catalog';
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
      const routers = this.$router.options.routes;
      const nowName = this.$route.matched[0].name;
      routers.forEach(item => {
        if (item.name === nowName) {
          this.routers = [item];
        }
      })
    }
  }
</script>
