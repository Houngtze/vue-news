import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import content from '../views/content'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/views/content',
      name: 'content',
      component: content
    }
  ]
})
