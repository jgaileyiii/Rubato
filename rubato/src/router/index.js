import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/Signup'
import Login from '@/views/Login'
import Projects from '@/views/Projects'
import About from "@/views/About"
import store from '../store'
// import App from '@/App.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(store.getters.isLoggedIn){
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
