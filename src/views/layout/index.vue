<template>
  <el-container style="height: 100%;">
    <el-aside style="width: auto;">
      <layout-menu :isCollapse="collapse"></layout-menu>
    </el-aside>
    <el-container>
      <el-header>
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
      }
    }
  }
}
</script>

<style lang="scss">
  .el-container {
    .el-header {
      padding: 0;
    }
  }
</style>
