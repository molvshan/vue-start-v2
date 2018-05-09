<template>
  <div class="layout-menu">
    <el-menu backgroundColor="#f6f6f6" text-color="#000" class="el-menu-vertical-demo" router>
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
    background-color: #f6f6f6;
    .el-menu {
      border-right: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
