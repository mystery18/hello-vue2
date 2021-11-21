<template>
  <div class="watch-box">
    <h2>今天的天气{{ info }}</h2>
    <el-button type="primary" @click="changeWeather">切换天气</el-button>
    <el-divider />
    <h3>a的值是：{{ numbers.a }}</h3>
    <el-button type="success" @click="numbers.a++">点我让a加一</el-button>
    <h3>b的值是：{{ numbers.b }}</h3>
    <el-button type="success" @click="numbers.b++">点我让b加一</el-button>
    <el-divider />
    姓：<input type="text" v-model="firstName" /><br />
    名：<input type="text" v-model="lastName" /><br />
    全名：<span>{{ fullName }}</span>
  </div>
  <!-- 
    1. 当监视属性变化时，回调函数自动调用
    2. 监视属性必须存在，才能进行监视！！！
    3. 监视的两种写法：
      (1). new Vue 时传入watch配置
      (2). 通过vm.$watch监视
    深度监视：
      (1). Vue中watch默认不监视对象内部值的改变（一层）
      (2). 配置deep: true可以监测对象内部值的改变（多层）
    Vue自身可以监测对象内部值的改变，但vue提供的watch默认不可以
    使用watch时根据数据的具体结构，决定是否采用深度监视
    PS：简写形式的前提是：如果你不需要immediate和deep才可以简写，写成函数咯！！$watch同理，第二个参数对象可以写成函数
    就行computed计算属性，我不考虑修改的时候，就可以简写，配置项只有一个get的时候可以简写。
    **所有vue所管理的函数要写成普通函数，不能写成箭头函数
  -->
  <!-- 
    如果有个需求是：监视的某个属性改变，需要延迟一秒中再做出相关改变，此时就不能用computed了，只能用watch
    计算属性是不能开启异步任务去维护数据的！！因为computed靠的就是return
    watch靠的时候你亲自写代码去修改东西！！
  -->
  <!-- 
    总结：
    1. watch能完成的功能，computed不一定可以，例如：watch可以执行异步任务
    PS：(1).所被vue管理的函数，最好写成普通函数，这样this指向才是vm或组件实例
        (2).所有不被vue所管理的函数（定时器回调、ajax回调），最好写成箭头函数。
    这样this的指向才是vm或组件实例
  -->
</template>

<script>
export default {
    data() {
      return {
        isHot: true, // 默认是true热
        numbers: {
          a: 1,
          b: 1
        },
        firstName: '孙',
        lastName: '燕姿',
        fullName: ''
      }
    },
    created() {
      this.fullName = this.firstName + '-' + this.lastName
    },
    computed: {
      info() {
        return this.isHot ? '很热' : '很冷'
      }
    },
    watch: {
      isHot: {
        // handler什么时候被调用？只有当isHot发生改变时，handler才执行（监视isHot）
        handler(newValue, oldValue) {
          console.log('isHot被修改了', newValue, oldValue)
        },
        immediate: true // immediate默认是false
        // 如果你加了immediate并设为true的话，它一上来就会调用immediate（初始化时让handler调用一下）
      },
      // 监视多级结构中某个属性的变化
      'numbers.a': {
        handler() {
          console.log('a改变了')
        }
      },
      // 如果你想监视整个numbers对象，不管a变还是b变 都要监视到
      // 监视多级结构中所有属性的变化
      numbers: {
        deep: true,
        handler() {
          console.log('numbers改变了')
        }
      },
      firstName(NewVal) {
        setTimeout(() => {
          this.fullName = NewVal + '-' + this.lastName
        }, 1000)
      },
      lastName(NewVal) {
        setTimeout(() => {
          this.fullName = this.firstName + '-' + NewVal
        }, 1000)
      }
    },
    // 补充：也可以监视计算属性
    // 另一种写法：Vue.$watch('isHot', {})
    // 如果你创建实例的时候，你已经想明白了你要监视谁 就直接写watch配置
    // 如果你创建实例的时候不知道要监测谁，后续根据用户的行为才知道我要监视谁，此时就用这种API $watch
    methods: {
      changeWeather() {
        this.isHot = !this.isHot
      }
    }
}
</script>

<style scoped>
.watch-box {
  padding-bottom: 50px;
}
h2 {
  margin-top: 20px;
}
</style>
