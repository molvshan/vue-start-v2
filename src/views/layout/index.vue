<template>
  <el-container style="height: 100%;">
    <el-aside style="width: auto;">
      <layout-menu :menu="router"></layout-menu>
    </el-aside>
    <el-container>
      <el-header height="auto">
        <layout-head :isCollapse="collapse"></layout-head>
      </el-header>
      <el-main><router-view></router-view></el-main>
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
      collapse: {
        isCollapse: false
      },
      router: this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">
  .el-container {
    .el-header {
      padding: 5px 0;
      border-bottom: 1px solid #eee;
    }
    .el-main {
      padding-top: 5px;
      padding-bottom: 0;
    }
  }
</style>
