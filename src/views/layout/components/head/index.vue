<template>
  <div class="layout-head">
    <span class="head-icon" :class="{ 'open': !isCollapse.isCollapse }"></span>
  </div>
</template>

<script>
export default {
  name: 'layouthead',
  props: {
    isCollapse: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  .layout-head {
    .head-icon {
      display: inline-block;
      width: 40px;
      height: 40px;
      background-image: url("/static/svg/zhankai.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
</style>
