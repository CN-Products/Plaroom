import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index'

Vue.use(Router)

const Login = () => import('./pages/Login.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        
      ]
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})