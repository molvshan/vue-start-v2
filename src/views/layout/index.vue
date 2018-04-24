<template>
  <el-container style="height: 100%;">
    <el-header height="auto">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadcrumbLists" :key="item.name" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>Footer</el-footer>
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
      breadcrumbLists: [{ path: '/', name: 'dashboard', meta: { title: '首页' } }].concat(this.$route.matched)
    }
  },
  watch: {
    $route(obj) {
      this.breadcrumbLists = [{ path: '/', name: 'dashboard', meta: { title: '首页' } }].concat(obj.matched)
    }
  }
}
</script>

<style lang="scss">
  .el-container {
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
