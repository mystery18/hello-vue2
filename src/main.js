import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'plugins/element'
// import request from '@/src/network/request'

// Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  document.title = to.meta.title || 'hello world'
  next()
})

Vue.config.productionTip = false

process.env.NODE_ENV === "development" && require("@/mock")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 对应法一
// request({
//   url: '/home/mutidata'
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// 对应法二
// request({
//   url: '/home/mutidata'
// }, res => {
//   console.log(res)
// }, err => {
//   console.log(err)
// })
