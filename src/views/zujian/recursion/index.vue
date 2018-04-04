<template>
  <div class="container v-zujian-recursion">
    <ul>
      <li :key="index" v-for="(item, index) in items" :class="{ 'Active': b === index }" @click="b = index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'zujian',
    data() {
      return {
        items: ['11111', '22222', '33333', '44444', '55555', '66666', '77777'],
        b: ''
      }
    }
  }
</script>

<style lang="scss">
  .v-zujian-recursion {
    font-size: 18px;

    .Active {
      color: blue;
    }
  }
</style>
