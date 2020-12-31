<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
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
.nav-bar {
  display: flex;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
