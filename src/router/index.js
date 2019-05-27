/*
  路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order' 
import Profile from '../pages/Profile/Profile'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/msite'
    },
    {
      name: 'msite',
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      name: 'order',
      path: '/order',
      component: Order
    },
    {
      name: 'profile',
      path: '/profile',
      component: Profile
    }
  ]
})