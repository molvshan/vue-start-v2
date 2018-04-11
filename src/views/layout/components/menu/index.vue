<template>
  <div class="layout-menu">
    <el-menu background-color='#000' text-color="#fff" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" router>
      <template v-for="item in menu">
        <el-menu-item v-if="item.name === 'layout'" :key="item.name" :index="item.path">
          <i :class="['iconfont', item.meta.icon]" v-if="item.meta && item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <el-submenu v-else :key="item.name" :index="item.path">
          <template slot="title">
            <i :class="['iconfont', item.meta.icon]" v-if="item.meta && item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <template v-for="child in item.children">
            <v-nav-menu :key="child.name" v-if="child.children && child.children.length > 0" :menu="child.children"></v-nav-menu>
            <el-menu-item :key="child.name" v-else :index='item.path + "/" + child.path'>{{ child.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'vNavMenu',
  props: {
    menu: {
      type: Array
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
