import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const More = () => import(/* webpackChunkName: "more" */ '../views/More.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/more',
    component: More,
    meta: {
      title: 'More页面'
    },
    beforeEnter: (to, from, next) => {
      console.log('我要来了')
      next()
    }
  },
  {
    path: '/car',
    name: 'car',
    component: () => import(/* webpackChunkName: "car" */ '../views/Car/Car.vue')
  },
  {
    path: '/ystree',
    name: 'ystree',
    component: () => import(/* webpackChunkName: "ystree" */ '../views/Tree/Ystree.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "tree" */ '../views/Tree/Tree.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import(/* webpackChunkName: "tree" */ '../views/Tree/Watch.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "tree" */ '../views/Tree/Tree.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
