import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
// import recursion from '@/views/zujian/index'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout
    },
    {
      path: '/components',
      name: 'components',
      component: layout,
      children: [
        {
          path: 'recursion',
          name: 'components_recursion',
          component: _import('zujian/recursion/index')
        },
        {
          path: 'table',
          name: 'components_table',
          component: _import('zujian/table/index')
        }
      ]
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: layout,
      children: [
        {
          path: 'example',
          name: 'echarts_example',
          component: _import('eacharts/example/index')
        },
        {
          path: 'line',
          name: 'echarts_line',
          component: _import('eacharts/line/index')
        },
        {
          path: 'timeline',
          name: 'echarts_timeline',
          component: _import('eacharts/timeline/index')
        }
      ]
    }
  ]
})
