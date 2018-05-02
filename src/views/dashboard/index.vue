<template>
  <div class="dashboard-menu">
    <!--<el-menu default-active="1-4-1" router>-->
      <!--<menu-child :menu="menu"></menu-child>-->
    <!--</el-menu>-->
    <v-catalog :routers="menu"></v-catalog>
  </div>
</template>

<script>
import menuChild from './menuChild'
import vCatalog from './catalog'

export default {
  name: 'vNavMenu',
  components: {
    menuChild,
    vCatalog
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
    text-align: center;

    .el-submenu__icon-arrow {
      display: none;
    }

    .el-menu {
      width: auto;
      border-right: none;

      .el-submenu__title {
        height: 30px;
        line-height: 30px;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }
</style>
