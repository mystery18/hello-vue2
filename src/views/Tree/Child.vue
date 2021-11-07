<template>
  <div class="">
    <p>我是child 子组件，父组件给我的值是这个：{{ value }}</p>
    <el-button @click="changeCount">点我可以改父组件的值</el-button>
    <el-button @click="showSex">student.sex给我出来</el-button>
    <span v-if="student.sex">性别喔：{{ student.sex }}</span>
    <ul>
      <li v-for="item of person" :key="item.id">
        {{ item.id }}-{{ item.name }}-{{ item.age }}--{{ item.is_selected }}
      </li>
    </ul>
    <el-button type="primary" @click="changeArr">点我改数组</el-button>
    <div>
      <h2>当前的n为<span v-text="n"></span></h2>
      <h2>放大十倍后的n为<span v-big="n"></span></h2>
      <el-button type="info" @click="n++">点我n会+1喔</el-button>
      <el-input type="text" v-fbind:value="n" />
      <!-- <input type="text" v-fbind:value="n" /> -->
    </div>
    <el-divider />
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    props: {
      value: {
        type: Number
      }
    },
    data() {
      return {
        person: [
          {
            id: '001',
            name: 'jay',
            age: 30,
            is_selected: 0
          },
          {
            id: '002',
            name: 'stefaine',
            age: 18,
            is_selected: 1
          },
          {
            id: '003',
            name: 'winner',
            age: 40,
            is_selected: 1
          }
        ],
        student: {
          name: 'Jacob',
          age: 18,
          hobby: ['游泳', '篮球', '音乐'],
          friends: [
            {
              name: 'Jerry',
              age: 35
            },
            {
              name: 'Tom',
              age: 30
            }
          ]
        },
        n: 1
      }
    },
    methods: {
      changeCount() {
        let newCount = this.value + 1
        this.$emit('input', newCount)
      },
      changeArr() {
        // let index = this.person.findIndex((item, index) => index === 0)
        // this.person.splice(index, 1)
        let modifyObj = this.person.find((item, index) => index === 0)
        modifyObj.is_selected = 1
        // console.log(modifyObj)
        // modifyObj = { id: '004', name: 'jayChou', age: 10}
      },
      showSex() {
        // 如果原来student上没有sex属性，你新添加的，是不具有响应式的。你想有就得写上去，不然你就用set方法
        // this.student.sex = 'boy'
        // 需求：给student对象追加一个新的属性，并且要是响应式的：
        this.$set(this.student, 'sex', 'boy') // 局限性：只能给data里面的某一个对象追加属性，而不能给data去追加属性，会报错
        // Vue.set(this.student, 'sex', 'boy') // 全局身上添加了
      }
      // 只有调了数组的身上的7个修改数组的方法(push pop shift unshift splice reverse sort)，才能监视到修改数组了
      // 为什么没写 filter 那些？因为这些方法不会修改原数组，更别提监视到原数组改变了
      // 当然你也可以继续用Set方法：this.$set(this.student.hobby, 0, '打网球')
      // 当前的时间戳：Date.now()
    },
    // 指令语法就是操作DOM元素的
    // 指令语法：
    // 功能：用户解析标签（包括：标签属性、标签体内容、绑定事件...）
    directives: {
      // 这里的binding是元素和指令的一种关联关系
      // big 函数何时会被调用？
      // 1. 指令和元素成功**绑定时**会被调用 即一上来就调用（指令和元素建立了关系。关系建立起来了，此时input还没在页面上，因为这是template，要经过编译）
      // 2.指令所在的模板被重新解析时（别的属性刷新，也会执行）
      big(element, binding) {
        element.innerText = binding.value * 10
      },
      // 此时不能把fbind写成函数了，因为写成函数的话，只有上述两种情况会调用。
      // fbind(element, binding) {
      //   element.value = binding.value
      //   element.focus()
      // }
      fbind: {
        // bind就是上面说的，当指令与元素成功绑定时执行（一上来）
        bind(element, binding) {
          // 绑定了，元素出来了，和指令绑定好了，但是还没放到页面！！！可以去写一些样式呀 value值呀什么的
          console.log('bind')
          element.value = binding.value
        },
        // 指令所在元素被插入页面时调用！！！
        inserted(element, binding) {
          console.log('inserted')
          element.focus()
        },
        // 指令所在的模板被重新解析时
        update(element, binding) {
          console.log('update')
          element.value = binding.value
        }
      }
      // 所以，如果你用函数那样简写的形式，相当于只写了bind 和  update，没有写 inserted。
      // 如果你有特殊的需求 如 获取焦点、拿到它的父元素什么的，得写成对象，要写inserted
      // PS1：指令名推荐 如果你是多个单词 要用 - 分隔（不要用驼峰），如：v-big-number。然后你在下面就用：'big-number'(element, binding)
      // 如果你的对象中的key出现 - 了，就不能简写形式啦！！！
      // PS2:所有指令相关里的this，肯定不是vm，就是 window
      // PS3：和filters一样（全局Vue.filter('xxx', (val)=> val.slice(0 ,4)) 局部filters:{} ），这里写的是局部指令.
      // Vue.directive('fbind', {}) 第二个参数：用函数就写函数，用对象就写对象哈！
      // PS4：指令定义时不加v-，使用时要加V-
    }
}
</script>

<style scoped>
</style>
