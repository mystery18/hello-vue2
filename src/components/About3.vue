<template>
  <div>
    <button @click="isShow = !isShow">点击</button> <br/>
    <transition-group 
      name="animate__animated animate__bounce" 
      appear
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">哈喽</h1>
      <h1 v-show="isShow" key="2">哈喽</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Test',
  data () {
    return {
      isShow: true
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: yellowgreen;
}
</style>