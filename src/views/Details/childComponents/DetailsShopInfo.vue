<template>
  <div>
    <div class="shop-info">
      <div><img :src="shop.logo" class="shop-logo"></div>
      <div class="shop-name">{{shop.name}}</div>
    </div>
    <div class="shop-others">
      <div class="shop-data">
        <div class="shop-sells">{{(shop.sells/10000).toFixed(1)}}万<br>总销量</div>
        <div class="shop-goodsCount">{{shop.goodsCount}}<br>全部宝贝</div>
      </div>
      <div>
        <div class="shop-score" v-for="(item,i) in shop.score" :key="i">
          <span> {{item.name}}</span>
          <span class="shop-item-score" :class="{isHigher:item.isBetter,isLower:!item.isBetter}"> {{item.score}}</span>
          <span v-if="!item.isBetter" class="shop-isBetter-low shop-isBetter">低</span>
          <span v-else class="shop-isBetter-high shop-isBetter">高</span>
        </div>
      </div>
    </div>
    <div class="go-shop">进店逛逛</div>
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
    shop: {
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
.shop-info {
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;
}

.shop-logo {
  margin: 0 5px 0 10px;
  height: 44px;
}
.shop-name {
  margin: 0 5px;
  line-height: 44px;

  text-align: center;
  color: #333;
}
.shop-data {
  margin-top: 10px;
  width: 60%;
  display: flex;
  text-align: center;
  line-height: 26px;
}
.shop-others {
  display: flex;
  margin-top: 10px;
  font-size: 13px;
}
.shop-sells {
  margin: 0 10px 0 30px;
}
.shop-goodsCount {
  margin: 0 20px 0 5px;
}
.shop-score {
  margin: 0px 0 10px 0;
}
.shop-item-score {
  margin: 0 12px;
}
.shop-isBetter {
  position: absolute;
  right: 10px;
  color: white;
}
.shop-isBetter-low {
  background-color: rgb(5, 172, 5);
}
.shop-isBetter-high {
  background-color: rgb(243, 79, 79);
}
.isLower {
  color: rgb(5, 172, 5);
}
.isHigher {
  color: rgb(243, 79, 79);
}
.go-shop {
  width: 150px;
  font-size: 13px;
  margin: 10px auto;
  text-align: center;
  line-height: 25px;
  background-color: rgba(92, 91, 91, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>
