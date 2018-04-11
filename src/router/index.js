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
      component: layout,
      redirect: 'dashboard',
      meta: {
        title: '首页',
        icon: 'icon-shouye'
      },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: _import('dashboard/index')
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: layout,
      meta: {
        title: '组件',
        icon: 'icon-zujian'
      },
      children: [
        {
          path: 'recursion',
          name: 'components_recursion',
          meta: {
            title: '递归组件'
          },
          component: _import('zujian/recursion/index')
        },
        {
          path: 'table',
          name: 'components_table',
          meta: {
            title: 'element-uiTable'
          },
          component: _import('zujian/table/index')
        }
      ]
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: layout,
      meta: {
        title: '图标',
        icon: 'icon-zujian'
      },
      children: [
        {
          path: 'example',
          name: 'echarts_example',
          meta: {
            title: '示例图'
          },
          component: _import('eacharts/example/index')
        },
        {
          path: 'line',
          name: 'echarts_line',
          meta: {
            title: '折线图'
          },
          component: _import('eacharts/line/index')
        },
        {
          path: 'timeline',
          name: 'echarts_timeline',
          meta: {
            title: '时间轴'
          },
          component: _import('eacharts/timeline/index')
        }
      ]
    },
    {
      path: '/promise',
      name: 'promise',
      component: layout,
      meta: {
        title: 'promise',
        icon: 'icon-zujian'
      },
      children: [
        {
          path: 'basic',
          name: 'promise-basic',
          meta: {
            title: '基础用法'
          },
          component: _import('promise/basic/index')
        }
      ]
    }
  ]
})
