<template>
  <div :class="[prefixCls]">
    <template v-for="item in list">
      <div :class="item.position" :key="item.id" @click.stop="cuttingBox(item.id)">
        <template v-if="item.children && item.children.length > 0">
          <v-zujian-recursion-box-recursion
            :list="item.children"
            @handleSelectBox="handleSelectBox">
          </v-zujian-recursion-box-recursion>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
  const prefixCls = 'v-zujian-recursionBox-recursion';

  export default {
    name: 'v-zujian-recursion-box-recursion',
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        prefixCls
      }
    },
    methods: {
      cuttingBox(id) {
        this.$emit('handleSelectBox', id)
      },
      handleSelectBox(id) {
        this.$emit('handleSelectBox', id)
      }
    }
  }
</script>

<style lang="scss">
  .v-zujian-recursionBox-recursion {
    width: 100%;
    height: 100%;
    div {
      float: left;
      box-sizing: border-box;
    }

    .top,
    .bottom {
      width: 100%;
      height: 50%;
    }
    .left,
    .right {
      width: 50%;
      height: 100%;
    }
    .top {
      border-bottom: 1px solid #333;
    }
    .left {
      border-right: 1px solid #333;
    }
  }
</style>
