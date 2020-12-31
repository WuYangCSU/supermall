
<template>
  <div id="cart-goods">
    <div class="goods-button">
      <check-button class="check-button" @click.native="checkClick" :is-checked="goods.checked"></check-button>
    </div>
    <div class="goods-image">
      <img :src="goods.image">
    </div>
    <div class="goods-item">
      <div class="goods-title">{{goods.title}}</div>
      <div class="goods-desc">{{goods.desc}}</div>
      <div class="info-bottom">
        <div class="info-bottom-price left">￥{{goods.price}}</div>
        <div class="info-bottom-count right">×{{goods.count}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
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
    CheckButton
  },
  methods: {
    checkClick() {
      this.goods.checked = !this.goods.checked
    }
  }
}
</script>

    CheckButton
<style scoped>
#cart-goods {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.goods-button {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-image {
  padding: 5px;
}
.goods-image img {
  height: 100px;
  width: 80px;
  border-radius: 5px;
}
.goods-item {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.goods-title,
.goods-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-item .goods-desc {
  margin-top: 15px;
  font-size: 14px;

  color: #666;
}
.info-bottom {
  justify-content: space-around;
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom-price {
  color: orangered;
}
.info-bottom-count {
  margin-right: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
}
</style>
