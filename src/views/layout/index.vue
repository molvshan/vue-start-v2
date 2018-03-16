<template>
  <div class="container">
    <!-- 头部 -->
    <layout-head :isCollapse="collapse"></layout-head>
    <!-- 按钮区 -->
    <layout-menu :isCollapse="collapse"></layout-menu>
  </div>
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
        isCollapse: true
      }
    }
  }
}
</script>

<style lang="scss">
  .container {
    .layout-head {
      margin-left: 64px;
      -webkit-transition: margin-left 0.3s ease-in-out;
      -moz-transition: margin-left 0.3s ease-in-out;
      -ms-transition: margin-left 0.3s ease-in-out;
      -o-transition: margin-left 0.3s ease-in-out;
      transition: margin-left 0.3s ease-in-out;
    }
    .layout-head.open {
      margin-left: 200px;
    }
  }
</style>
