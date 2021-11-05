<template>
  <div class="">
    <p>我是child 子组件，父组件给我的值是这个：{{ value }}</p>
    <el-button @click="changeCount">点我可以改父组件的值</el-button>
    <el-button @click="showSex">student.sex给我出来</el-button>
    <span v-if="student.sex">性别：{{ student.sex }}</span>
    <ul>
      <li v-for="item of person" :key="item.id">
        {{ item.id }}-{{ item.name }}-{{ item.age }}--{{ item.is_selected }}
      </li>
    </ul>
    <el-button type="primary" @click="changeArr">点我改数组</el-button>
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
          age: 18
        }
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
        // this.student.sex = 'boy'
        // 需求：给student对象追加一个新的属性，并且要是响应式的：
        this.$set(this.student, 'sex', 'boy') // 局限性：只能给data里面的某一个对象追加属性，而不能给data去追加属性，会报错
        // Vue.set(this.student, 'sex', 'boy')
      }
    }
}
</script>

<style scoped>
</style>
