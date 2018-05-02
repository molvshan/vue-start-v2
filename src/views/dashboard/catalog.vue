<template>
  <div class="v-dashboard-catalog">
    <template v-for="item in routers">
      <div class="v-catalog-title" :key="item.name">
        <span>{{ item.meta.title }}</span>
      </div>
      <template v-for="child in item.children">
        <v-catalog class="v-catalog-title" :key="child.name" v-if="child.children && child.children.length > 0" :routers="item.children"></v-catalog>
        <div class="v-catalog-title-t" v-else :key="child.name">
          <i>{{ child.meta.title }}</i>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'v-catalog',
    props: {
      routers: {
        type: Array
      }
    }
  }
</script>

<style lang="scss">
  .v-dashboard-catalog {
    width: 600px;
    margin: 0 auto;

    .v-catalog-title {
      font-size: 18px;
      text-align: left;
      padding-top: 5px;

      .v-catalog-title {
        font-size: 16px;
        padding-top: 0;
      }
    }

    .v-dashboard-catalog {
      padding-left: 20px;
      padding-top: 0;
    }

    .v-catalog-title-t {
      font-size: 14px;
      padding-left: 20px;
      text-align: left;
    }
  }
</style>
