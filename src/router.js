import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Home from './views/home'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }

  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') next()
  const tokenstr = window.sessionStorage.getItem('token')
  if (!tokenstr) next('/login')
  next()
})
export default router
