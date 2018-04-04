<template>
  <div class="v-recursion-recursion">
    <template v-for="item in dataArr">
      <div :key="item.id" class="txt-1">{{ item.txt }}</div>
      <components-recursion :dataArr="item.children" v-if="item.children"></components-recursion>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'componentsRecursion',
    props: {
      dataArr: {
        type: Array
      }
    }
  }
</script>
