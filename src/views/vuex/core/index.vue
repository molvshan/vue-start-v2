<template>
  <div class="container v-vuex-core">
    <v-self-catalog></v-self-catalog>
    <router-view></router-view>
  </div>
</template>

<script>
  import vSelfCatalog from '../../selfCatalog';
  export default {
    name: 'vuex-core',
    components: {
      vSelfCatalog
    }
  }
</script>
