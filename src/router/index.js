import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Cart from '../pages/cart'
import About from '../pages/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'Index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
