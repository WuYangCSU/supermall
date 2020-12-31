<template>
  <div class="goods-info" v-if="Object.keys(goods).length !== 0">
    <div class="goods-title">
      {{goods.title}}
    </div>
    <div class="goods-price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span v-show="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="other-info">
      <div> {{goods.columns[0]}}</div>
      <div> {{goods.columns[1]}}</div>
      <div> {{goods.services[goods.services.length-1].name}}</div>
    </div>
    <hr :style="{color: 'gray'}">
    <div class="goods-services">
      <div v-for="(item,i) in goods.services.length-1" class="goods-service-item">

        <img class="goods-services-img" :src="goods.services[item-1].icon">
        <span>{{goods.services[item-1].name}}</span>
      </div>
    </div>
    <hr :style="{color: 'gray'}">
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
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.goods-title {
  margin: 5px;
}
.goods-price {
  margin-left: 5px;
  margin-top: 5px;
}
.goods-price span {
  margin: 0 2px;
}
.newPrice {
  font-size: 20px;
  color: var(--color-high-text);
}
.oldPrice {
  color: gray;
  font-size: 13px;
  text-decoration: line-through;
}
.discount {
  position: relative;
  bottom: 10px;
  padding: 0 5px;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  background-color: var(--color-high-text);
}
.other-info {
  display: flex;
  justify-content: space-between;
  margin: 25px 2px 10px;
  font-size: 13px;
  color: gray;
}
.goods-services {
  display: flex;
  justify-content: space-between;
  margin: 20px 5px;
  font-size: 13px;
}
.goods-service-item img {
  height: 13px;
}
</style>
