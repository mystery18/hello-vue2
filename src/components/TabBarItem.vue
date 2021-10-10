<template>
  <div class="tab-bar-item">
    <!-- 不要写死 动态让外界决定！搞两个插槽 -->
    <!-- <img src="" alt="">
    <div></div> -->
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem'
}
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  flex: 1;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>