import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
// import recursion from '@/views/zujian/index'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: layout,
      redirect: '/catalog',
      meta: {
        title: '首页',
        icon: 'icon-shouye'
      },
      children: [
        {
          path: 'catalog',
          name: 'catalog',
          component: _import('dashboard/index'),
          meta: {
            title: '目录'
          }
        }
      ]
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: layout,
      redirect: '/catalog_vuex',
      meta: {
        title: 'vueX',
        icon: 'icon-zhuangtai'
      },
      children: [
        {
          path: '/catalog_vuex',
          name: 'catalog_vuex',
          meta: {
            title: 'vuex目录'
          },
          component: _import('selfCatalog'),
          hidden: true
        },
        {
          path: 'start',
          name: 'vuex_start',
          meta: {
            title: '简单示例'
          },
          component: _import('workStudy/vuex/start/index')
        },
        {
          path: '/core',
          name: 'vuex-core',
          meta: {
            title: '核心概念'
          },
          component: _import('workStudy/vuex/core/index'),
          redirect: '/catalog_vuex_core',
          children: [
            {
              path: '/catalog_vuex_core',
              name: 'catalog_vuex_core',
              meta: {
                title: 'vuex——核心概念目录'
              },
              component: _import('selfCatalog'),
              hidden: true
            },
            {
              path: 'state',
              name: 'vuex-core-state',
              meta: {
                title: 'State'
              },
              component: _import('workStudy/vuex/core/state/index')
            },
            {
              path: 'getter',
              name: 'vuex-core-getter',
              meta: {
                title: 'Getter'
              },
              component: _import('workStudy/vuex/core/getter/index')
            },
            {
              path: 'mutation',
              name: 'vuex-core-mutation',
              meta: {
                title: 'Mutation'
              },
              component: _import('workStudy/vuex/core/mutation/index')
            },
            {
              path: 'action',
              name: 'vuex-core-action',
              meta: {
                title: 'Action'
              },
              component: _import('workStudy/vuex/core/action/index')
            },
            {
              path: 'module',
              name: 'vuex-core-module',
              meta: {
                title: 'Moudle'
              },
              component: _import('workStudy/vuex/core/module/index')
            }
          ]
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: layout,
      redirect: '/catalog_zujian',
      meta: {
        title: '组件',
        icon: 'icon-zujian'
      },
      children: [
        {
          path: '/catalog_zujian',
          name: 'catalog_zujian',
          meta: {
            title: '组件目录'
          },
          component: _import('selfCatalog'),
          hidden: true
        },
        {
          path: 'recursion',
          name: 'components_recursion',
          meta: {
            title: '递归组件'
          },
          component: _import('workStudy/zujian/recursion/index')
        },
        {
          path: 'recursion-box',
          name: 'components_recursionBox',
          meta: {
            title: '递归组件—无线分割div'
          },
          component: _import('workStudy/zujian/recursion-box/index')
        },
        {
          path: 'table',
          name: 'components_table',
          meta: {
            title: 'element-uiTable'
          },
          component: _import('workStudy/zujian/table/index')
        }
      ]
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: layout,
      redirect: '/catalog_echarts',
      meta: {
        title: 'echarts',
        icon: 'icon-tubiao'
      },
      children: [
        {
          path: '/catalog_echarts',
          name: 'catalog_echarts',
          meta: {
            title: 'echarts目录'
          },
          component: _import('selfCatalog'),
          hidden: true
        },
        {
          path: 'example',
          name: 'echarts_example',
          meta: {
            title: '示例图'
          },
          component: _import('workStudy/eacharts/example/index')
        },
        {
          path: 'line',
          name: 'echarts_line',
          meta: {
            title: '折线图'
          },
          component: _import('workStudy/eacharts/line/index')
        },
        {
          path: 'bar',
          name: 'echarts_bar',
          meta: {
            title: '柱状图'
          },
          component: _import('workStudy/eacharts/bar/index')
        },
        {
          path: 'timeline',
          name: 'echarts_timeline',
          meta: {
            title: '时间轴'
          },
          component: _import('workStudy/eacharts/timeline/index')
        }
      ]
    },
    {
      path: '/promise',
      name: 'promise',
      component: layout,
      redirect: '/catalog_promise',
      meta: {
        title: 'promise',
        icon: 'icon-promise'
      },
      children: [
        {
          path: '/catalog_promise',
          name: 'catalog_promise',
          meta: {
            title: 'Promise目录'
          },
          component: _import('selfCatalog'),
          hidden: true
        },
        {
          path: 'basic',
          name: 'promise-basic',
          meta: {
            title: '基础用法'
          },
          component: _import('workStudy/promise/basic/index')
        }
      ]
    }
  ]
})
