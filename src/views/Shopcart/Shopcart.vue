<template>
  <div class="shopcart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartList.length}})</div>
      </template>
    </nav-bar>
    <b-scroll ref="scroll" class="content" :pullUpLoad="true">
      <shopcart-list class="shopcart-list" :cartList="cartList"></shopcart-list>
    </b-scroll>
    <shopcart-bottom class="shopcart-bottom" @settleAccount="settleAccount"></shopcart-bottom>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import ShopcartList from './shopcartchild/ShopcartList'

import BScroll from '@/components/common/bscroll/BScroll.vue'

import { mapGetters } from 'vuex'
import ShopcartBottom from './shopcartchild/ShopcartBottom.vue'

export default {
  name: '',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {

    this.$refs.scroll.refresh()
  },
  components: {
    BScroll,
    NavBar,
    ShopcartList,
    ShopcartBottom
  },
  methods: {
    settleAccount(totalPrice) {
      this.$toast.show(`总价为:${totalPrice}`, 1500)
    }
  }

}

</script>

<style scoped>
.shopcart {
  height: 100vh;
  position: relative;
}
.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
.nav-bar {
  background-color: var(--color-tint);
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  font-size: 16px;
}
.shopcart-list {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
