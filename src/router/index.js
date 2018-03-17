import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout/index'
import recursion from '@/views/zujian/index'

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
          component: recursion
        }
      ]
    }
  ]
})
