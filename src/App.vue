<template>
  <div id="container">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- link to就是到某个路由，并且这个是公共部分，那么某个路由里面的template就会替代掉这里的router-view -->
    <!-- <router-view/> -->
    <!-- 这边是路由，下面是组件！！！ -->

    <!-- tab-bar里面的所有内容（innerHTML）都会替换掉tab-bar组件的插槽 -->
    <tab-bar>
      <!-- 第一个item你想展示什么图片呀 什么内容啊？自己写 自己决定！！ -->
      <tab-bar-item>
        <template v-slot:item-icon>
          <img src="./assets/logo.png">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/logo.png">
        <div slot="item-text">搜索</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/logo.png">
        <div slot="item-text">发现</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/logo.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>

    <cpn><span>wtf?</span></cpn>
    <cpn><span slot="btnSlot">iam new</span></cpn>
    <cpn>
      <!-- 现在 <template> 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 v-slot 的 <template> 中的内容都会被视为默认插槽的内容。 -->
      <template #body>
        wtf????
      </template>
      <!-- 跟 v-on 和 v-bind 一样，v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 # 如果你希望使用缩写的话，你必须始终以明确插槽名取而代之-->

      <template v-slot:default>
        <span>111</span>
        <span>222</span>
      </template>

      <!-- puser是子组件传过来的值 -->
      <template v-slot:footer="slotProps">
        {{slotProps.puser.backid }}
      </template>


      
    </cpn>
    <!-- 感觉用这两种方法都可以替换，但是用下面 template结合 v-slot 的感觉更好！他是template的内容直接替换 -->
    <!-- 而用slot="" 上述例子还得包裹一个span，也就是我要替换button的插槽，父组件还得有个容器 -->

    <div v-show="moreShow" @click="goMore">GO MORE</div>
    <p>mapState {{ username }}</p>
    <p>mapGetters {{ reverseUser }}</p>
    <button @click="changeFn('hhhhh')">mapMutations</button>
    <router-view></router-view>

  </div>
</template>

<script>
import TabBar from './components/TabBar'
import TabBarItem from './components/TabBarItem'
import cpn from './components/cpn'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem,
    cpn
  },
  methods: {
    goMore(){
      // console.log(this.$route.path)
      this.$router.push('/more').catch(err => {
        console.log(err)
      })
    },
    ...mapMutations(['changeFn'])
  },
  computed: {
    moreShow(){
      return this.$route.path === '/'
    },
    ...mapState(['username']),
    ...mapGetters(['reverseUser'])
  }
}
</script>

<style>
/* 引用一次就OK了 */
@import "./assets/css/base.css";
</style>
