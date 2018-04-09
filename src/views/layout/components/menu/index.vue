<template>
  <div class="layout-menu">
    <el-menu background-color='#000' text-color="#fff" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse.isCollapse" :router="openRouter">
      <el-submenu index="component">
        <template slot="title">
          <i class="iconfont icon-zujian"></i>
          <span slot="title">组件</span>
        </template>
        <el-menu-item index="/components/recursion">递归组件</el-menu-item>
        <el-menu-item index="/components/table">表格组件</el-menu-item>
      </el-submenu>
      <el-submenu index="echarts">
        <template slot="title">
          <i class="iconfont icon-zujian"></i>
          <span slot="title">eacharts</span>
        </template>
        <el-menu-item index="/echarts/example">示例图</el-menu-item>
        <el-menu-item index="/echarts/line">折线图</el-menu-item>
        <el-menu-item index="/echarts/timeline">时间轴图</el-menu-item>
      </el-submenu>
      <el-submenu index="promise">
        <template slot="title">
          <i class="iconfont icon-zujian"></i>
          <span slot="title">Promise</span>
        </template>
        <el-menu-item index="/promise/basic">基本使用</el-menu-item>
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
  data () {
    return {
      openRouter: true
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
