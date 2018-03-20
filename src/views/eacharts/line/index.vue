<template>
  <div class="container v-eacharts-line">
    <chart :options="polar1"></chart>
    <chart :options="polar2"></chart>
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
          text: '示例一：折线图'
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
      },
      polar2: {}
    }
  },
  methods: {
    getUrl() {
      axios.get('/api/gallery/data/asset/data/aqi-beijing.json').then(res => {
        const arr1 = []
        const arr2 = []
        res.data.forEach(item => {
          arr1.push(item[0])
          arr2.push(item[1])
        })
        this.polar2 = {
          title: {
            text: '示例二：折线图'
          },
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: arr1
          },
          yAxis: {
            splitLine: {
              show: false
            }
          },
          toolbox: {
            left: 'center',
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          dataZoom: [{
            startValue: '2014-06-01'
          }, {
            type: 'inside'
          }],
          visualMap: {
            top: 10,
            right: 10,
            pieces: [{
              gt: 0,
              lte: 50,
              color: '#096'
            }, {
              gt: 50,
              lte: 100,
              color: '#ffde33'
            }, {
              gt: 100,
              lte: 150,
              color: '#ff9933'
            }, {
              gt: 150,
              lte: 200,
              color: '#cc0033'
            }, {
              gt: 200,
              lte: 300,
              color: '#660099'
            }, {
              gt: 300,
              color: '#7e0023'
            }],
            outOfRange: {
              color: '#999'
            }
          },
          series: {
            name: 'Beijing AQI',
            type: 'line',
            data: arr2,
            markLine: {
              silent: true,
              data: [
                {
                yAxis: 50
                },
                {
                yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          }
        }
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
