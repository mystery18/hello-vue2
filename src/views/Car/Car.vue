<template>
  <div>
    <h1>这里是CAR页面</h1>
    <el-popover trigger="hover" @show="requestFalg && popRequest()">
      <distribute ref="tableComponent" @OnceRequest="cancelPopEvent" />
      <el-button slot="reference">hover我能看到pop内容</el-button>
    </el-popover>
  </div>
</template>

<script>
import Distribute from './components/Distribute.vue'
export default {
  components: {
    Distribute
  },
  data() {
    return {
      requestFalg: true
    }
  },
  methods: {
    popRequest() {
      console.log(123)
      this.$refs.tableComponent.getData()
    },
    cancelPopEvent() {
      this.requestFalg = false
    }
  }
}
</script>

<style scoped>
</style>