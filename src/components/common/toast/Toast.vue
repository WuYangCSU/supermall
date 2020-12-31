<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      isShow: false,
      message: null
    }
  },
  components: {

  },
  methods: {
    show(mes, time) {
      this.isShow = true
      this.message = mes
      setTimeout(() => {
        this.isShow = false
      }, time)
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
}
</style>
