import Vue from 'vue'
import Router from 'vue-router'
// pages
import Main from '@/pages/index.vue'
// ...
Vue.use(Router)

let base = process.env.BASE_URL

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('_page/login/index.vue')
    },
    {
    path: '/home',
    name: 'home',
    component: Main,
    children: [
      { path: '/',                component: () => import('_page/home/home/index.vue')},
      { path: 'account_security', component: () => import('_page/home/account_security/index.vue')},
      { path: 'system_info',       component: () => import('_page/home/systemInfo/index.vue')},
      { path: 'login_info',        component: () => import('_page/home/loginInfo/index.vue')}
    ]
  }]
})