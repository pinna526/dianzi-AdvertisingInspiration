import Vue from 'vue'
import Router from 'vue-router'
import page1 from './views/page1.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'page1',
      component: page1
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('./views/page1-1.vue')
    // },
    // {
    //   path: '/page1-2',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/page1-2.vue')
    // }
  ]
})
