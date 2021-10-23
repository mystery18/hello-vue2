<template>
  <div class="home">
    <h1>这里是根路由</h1>
    <div>
      <el-button @click="goCar">去CAR页面</el-button>
      <el-button type="primary" @click="goTree">去TREE页面</el-button>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {
    goCar() {
      this.$router.push({
        name: 'car'
      })
    },
    goTree() {
      this.$router.push({
        name: 'tree'
      })
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
