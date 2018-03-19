<template>
  <div class="container v-eacharts-line">
    <chart :options="polar1"></chart>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }

    return {
      polar1: {
        title: {
          text: '示例二：折线图'
        },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {
              pixelratio: 2
            },
            restore: {}
          }
        },
        legend: {},
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: 'line',
            smooth: true,
            name: '折线一',
            data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
          },
          {
            type: 'line',
            smooth: true,
            name: '折线二',
            data: [[12, 8], [24, 10], [36, 26], [48, 30], [60, 25], [72, 20]]
          }
        ]
      }
    }
  },
  methods: {
    getUrl() {
      axios.get('/gallery/data/asset/data/aqi-beijing.json').then(res => {
        console.log(res)
      })
    }
  },
  created() {
    this.getUrl()
  }
}
</script>

<style lang="scss">
  .echarts {
    height: 300px;
  }
</style>
