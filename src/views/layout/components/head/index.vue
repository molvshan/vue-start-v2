<template>
  <div class="layout-head" :class="{ 'open': !isCollapse.isCollapse }">
    <el-radio-group v-model="isCollapse.isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
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
