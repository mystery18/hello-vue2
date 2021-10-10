<template>
  <div>
    <button @click="isShow = !isShow">点击</button> <br/>
    <!-- <h1 v-show="isShow" class="come">哈喽</h1> -->
    <transition name="hello" appear>
      <h1 v-show="isShow">哈喽</h1>
    </transition>
  </div>
</template>

<script>
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
.hello-enter-active {
  animation: ani 1s linear;
}
.hello-leave-active {
  animation: ani 1s linear reverse;
}
/* .come {
  animation: ani 1s;
}
.go {
  animation: ani 1s reverse;
} */
@keyframes ani {
  /* 从xxx 到xxx */
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>