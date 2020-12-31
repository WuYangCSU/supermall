<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div class="bar-left-item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="bar-left-item">
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="bar-left-item">
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
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

  },
  methods: {
    addToCart() {
      this.$emit("addToCart")
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  display: flex;
  text-align: center;
  background-color: white;
}
.bar-item {
  flex: 1;
  display: flex;
}
.bar-left {
  font-size: 13px;
}
.bar-left > div {
  margin-bottom: 5px;
}
.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 6px auto 4px;
  background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0px -53px;
}
.bar-left .shop {
  background-position: 0 -98px;
}
.bar-item div {
  flex: 1;
}
.cart {
  background-color: yellow;
  text-align: center;
  font-size: 15px;
  line-height: 49px;
}
.buy {
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 15px;
  line-height: 49px;
}
</style>
