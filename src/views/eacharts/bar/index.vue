<template>
  <div class="container v-eacharts-bar">
    <chart :options="polar"></chart>
  </div>
</template>

<script>
  export default {
    name: 'eacharts-bar',
    data() {
      return {
        polar: {
          title: {
            text: '柱状图示例'
          },
          legend: {},
          xAxis: {
            type: 'value',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            min: 0,
            splitNumber: 10
          },
          yAxis: {},
          series: {
            type: 'bar',
            data: [
              // 维度X   维度Y   其他维度 ...
              [2.3, 4.5, 15, 43],
              [4, 2.3, 20, 91],
              [10, 9.5, 30, 18],
              [7, 8.8, 18, 57]
            ]
          },
          barWidth: '10px',
          grid: {
            show: false
          }
        }
      }
    }
  }
</script>
