<template>
  <div class="shopcart-bottom">
    <div class="shopcart-check-button">
      <check-button class="check-button" @click.native="checkClick" :is-checked="isSelectAll"></check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice">合计:<span class="price">￥{{totalPrice}}</span></div>
    <div class="totalNumber" @click="settleAccount">结算:{{totalNumber}}</div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {

      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.price
      }, 0)
    },
    totalNumber() {
      return this.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      return this.cartList.length === 0 ? false : !this.cartList.find(item => {
        return !item.checked
      })
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(element => {
          return element.checked = false
        })
      }
      else {
        this.cartList.forEach(element => {
          return element.checked = true
        })
      }
    },
    settleAccount() {
      this.$emit('settleAccount', this.totalPrice)
    }
  }
}
</script>

<style scoped>
.shopcart-bottom {
  display: flex;
  height: 40px;

  line-height: 40px;
  background-color: #eee;
}
.shopcart-check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 100px;
}
.check-button {
  line-height: 0px;
  margin-right: 10px;
}
.totalPrice {
  flex: 1;

  text-align: center;
}
.price {
  color: orangered;
}
.totalNumber {
  width: 100px;
  background-color: orangered;
  text-align: center;
  color: white;
}
</style>
