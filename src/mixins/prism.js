export default {
  mounted() {
    require('@/assets/js/prism.js')
  },
  beforeDestroy() {
    delete require.cache[require.resolve('@/assets/js/prism.js')]
  }
}
