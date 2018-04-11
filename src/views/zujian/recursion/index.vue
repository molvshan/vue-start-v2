<template>
  <div class="container v-zujian-recursion">
    <recursion :dataArr="arr"></recursion>
    <!-- element-ui NavMenu再封装 -->
    <p class="title">element-ui——NavMenu再封装</p>
    <nav-menu :menu="menu"></nav-menu>
  </div>
</template>

<script>
  import recursion from './components/recursion/index'
  import navMenu from './components/NavMenu/index'
  export default {
    name: 'zujian',
    components: {
      recursion,
      navMenu
    },
    props: {
      arr1: {
        type: Array
      }
    },
    data() {
      return {
        arr: [
          {
            id: '1',
            txt: 'aaa',
            children: [
              {
                id: '11',
                txt: 'aaa_aaa',
                pid: '1'
              },
              {
                id: '12',
                txt: 'aaa_bbb',
                pid: '1'
              },
              {
                id: '13',
                txt: 'aaa_ccc',
                pid: '1'
              }
            ]
          },
          {
            id: '2',
            txt: 'bbb'
          },
          {
            id: '3',
            txt: 'ccc'
          },
          {
            id: '4',
            txt: 'ddd',
            children: [
              {
                id: '41',
                txt: 'ddd_aaa',
                pid: '4'
              },
              {
                id: '42',
                txt: 'ddd_bbb',
                pid: '4'
              }
            ]
          },
          {
            id: '5',
            txt: 'eee'
          }
        ],
        menu: this.$router.options.routes
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

    .title {
      padding: 10px 0;
      color: #ab7272;
      font-size: 20px;
    }
  }
</style>
