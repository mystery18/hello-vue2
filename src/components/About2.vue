<template>
  <div>
    <button @click="isShow = !isShow">点击</button> <br />
    <!-- <h1 v-show="isShow" class="come">哈喽</h1> -->
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1" style="margin-bottom: 10pxs">哈喽</h1>
      <h1 v-show="isShow" key="2">哈喽啊</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'About2',
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
  /* transition: all 2s; */
}
.hello-enter, .hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-active, .hello-leave-active {
  transition: 1s linear;
}
.hello-leave, .hello-enter-to {
  transform: translateX(0);
}

/* @keyframes ani {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>