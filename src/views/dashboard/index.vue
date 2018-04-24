<template>
  <div class="dashboard-menu">
    <el-menu default-active="1-4-1" router>
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
  data () {
    return {
      openRouter: true,
      menu: this.$router.options.routes
    }
  }
}
</script>

<style lang="scss">
  .dashboard-menu {
    position: relative;
    height: 100%;
    padding-left: 20px;

    .el-submenu__icon-arrow {
      display: none;
    }

    .el-menu {
      width: auto;
      border-right: none;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
