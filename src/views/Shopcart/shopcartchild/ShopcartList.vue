<template>
  <div>
    <shopcart-item v-for="(item,index) in cartList" :key="index" :goods="item"></shopcart-item>
  </div>
</template>

<script>
import ShopcartItem from './ShopcartItem'

export default {
  name: '',
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {

    }
  },
  components: {
    ShopcartItem
  }
}
</script>

<style scoped>
</style>
