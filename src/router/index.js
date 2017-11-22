import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/cart',
      name: 'Cart',
      component(resolve){
        require(['../pages/cart'], resolve)
      }
    },
    {
      path: '/myPage',
      name: 'MyPage',
      component(resolve){
        require(['../pages/myPage'], resolve)
      }
    },
    {
      path: '/about',
      name: 'About',
      component(resolve){
        require(['../pages/about'], resolve)
      }
    }
  ]
})
