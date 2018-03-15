<template>
  <div class="container">
    <!-- 按钮区 -->
    <layout-menu :isCollapse="collapse"></layout-menu>
  </div>
</template>

<script>
import layoutMenu from './components/menu/index'

export default {
  name: 'layout',
  components: {
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
