<template>
  <el-container>
    <el-aside width="200px">
      <layout-menu :menu="menu"></layout-menu>
    </el-aside>
    <el-container style="height: 100%;">
      <el-header height="auto">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in breadcrumbLists" :key="item.name" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import layoutHead from './components/head/index'
import layoutMenu from './components/menu/index'

export default {
  name: 'layout',
  components: {
    layoutHead,
    layoutMenu
  },
  data () {
    return {
      breadcrumbLists: this.$route.matched,
      menu: this.$router.options.routes
    }
  },
  watch: {
    $route(obj) {
      this.breadcrumbLists = this.$route.matched
    }
  }
}
</script>

<style lang="scss">
  .el-container {
    height: 100%;
    .el-header {
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      .el-breadcrumb {
        font-size: 16px;
        padding-left: 40px;
      }
    }
    .el-main {
      padding-top: 5px;
      padding-bottom: 0;
    }
  }
</style>
