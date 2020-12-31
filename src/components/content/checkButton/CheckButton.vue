<template>
  <div class="check-button" :class="{button:isChecked}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  components: {

  }
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 2px solid #ccc;
}
.button {
  border-color: red;
  background-color: red;
}
</style>
