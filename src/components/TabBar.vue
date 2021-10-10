<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
};
</script>

<style scoped>
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  z-index: 1;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 5px;
  /* box-shadow: 1px 1px 1px; */
}
</style>