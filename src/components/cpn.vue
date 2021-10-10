<template>
  <div>
    <div :class="{active: !isActive}">i am a components</div>
    <button @click="showRoute"><slot name="btnSlot">default content</slot></button>
    <slot>iam no name slot</slot>
    <div>
      <slot name="body">v-slot</slot>
    </div>
    <div>
      <slot name="footer" :puser="user">{{user.id}}</slot>
    </div>
    
    <div>-----------------------</div>
  </div>
</template>

<script>
export default {
  name: "cpn",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data(){
    return {
      user: {
        id: 7,
        backid: 10
      },
      isActive: false
    }
  },
  computed: {
    activeStyle() {
      return isActive? {color: this.activeColor} : {}
    }
  },
  methods: {
    showRoute(){
      console.log(this.$route.path)
    }
  }
};
</script>

<style scoped>
.active{
  background-color: khaki;
}
</style>