<template>
  <div class="good-list">
    <goods-list-item class="good-list-item" v-for="(item,index) in goodsList" :key="index" :good="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
