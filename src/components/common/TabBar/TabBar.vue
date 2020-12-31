<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
@import "~@/assets/css/base.css";
.tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  height: 49px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #f6f6f6;
  box-shadow: 0px -1px 1px rgba(184, 184, 184, 0.3);
}
.tab-bar-item {
  flex: 1;
}
</style>
