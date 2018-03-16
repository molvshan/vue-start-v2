<template>
  <div class="layout-menu">
    <el-menu background-color='#000' text-color="#fff" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse.isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-zujian"></i>
          <span slot="title">组件</span>
        </template>
        <el-menu-item index="1-1">递归组件</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Object
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
      console.log('1')
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
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
