<template>
  <div class="layout-menu">
    <el-menu background-color='#000' text-color="#fff" default-active="1-4-1" class="el-menu-vertical-demo" router>
      <menu-child :menu="menu"></menu-child>
    </el-menu>
  </div>
</template>

<script>
import menuChild from './menuChild'

export default {
  name: 'vNavMenu',
  components: {
    menuChild
  },
  props: {
    menu: {
      type: Array
    }
  },
  data () {
    return {
      openRouter: true
    }
  }
}
</script>

<style lang="scss">
  .layout-menu {
    position: relative;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #000;
    .el-menu {
      border-right: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
