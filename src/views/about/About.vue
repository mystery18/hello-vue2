<template>
  <div>
    <input type="text" @input="search" v-model="fInput">
    <h2>从这里下面开始是about</h2>
    <div>
      <input v-model="firstName" />
    </div>
    <div>
      <input v-model="lastName" />
    </div>
    <p>全名：{{ fullName }}</p>
    <hr>
    <div>
      <input v-model="fName" />
    </div>
    <div>
      <input v-model="lName" />
    </div>
    <p>全名：{{ fN }}</p>
    <!-- <about /> -->
    <!-- <about-2 /> -->
    <about-3 />
  </div>
</template>

<script>
import about from '@/components/About.vue'
import about2 from '@/components/About2.vue'
import about3 from '@/components/About3.vue'
// computed 能完成的 watch都可以完成
// watch 能完成的，computed不一定可以，例如 watch 可以进行异步操作

// PS：
// 所有被vue管理的函数，最好写成普通函数，这样this 的指向才是vm或组件实例对象
// 所有不被vue所管理的函数（定时器回调函数、ajax的回调函数等）最好写成箭头函数，这样this指向才是vm或组件实例对象
export default {
  name: 'About',
  components : {
    about,
    about2,
    about3
  },
  data () {
    return {
      fInput: '999',
      firstName: '孙',
      lastName: '燕姿',
      fName: '孙',
      lName: '燕姿',
      fN: '空'
    }
  },
  computed: {
    fullName () {
      return this.firstName + this.lastName
    }
  },
  // 计算属性是不可以靠 异步任务去返回数据的，而watch 可以。因为watch不是靠返回值！他是靠你亲自写的代码
  watch: {
    fName (val) {
      setTimeout(() => {
        this.fN = val + this.lastName
      }, 1000)
    },
    lName (val) {
      this.fN = this.fName + val
    }
  },
  methods: {
    search () {
      console.log(123)
    }
  }
}
</script>

<style>

</style>