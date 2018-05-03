<template>
  <div class="v-menu-child">
    <template v-for="item in menu">
      <el-menu-item v-if="item.name === 'dashboard'" :key="item.name" :index="item.path">
        <i :class="['iconfont', item.meta.icon]" v-if="item.meta && item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu v-else-if="!item.hidden && item.children && item.children.length > 0" :key="item.name" :index="item.path">
        <template slot="title">
          <i :class="['iconfont', item.meta.icon]" v-if="item.meta && item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="child in item.children">
          <v-menu-child :key="child.name" v-if="child.children && child.children.length > 0" :menu="item.children"></v-menu-child>
          <el-menu-item :key="child.name" v-else-if="!child.hidden" :index='item.path + "/" + child.path'>{{ child.meta.title }}</el-menu-item>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'vMenuChild',
    props: {
      menu: {
        type: Array
      }
    }
  }
</script>
