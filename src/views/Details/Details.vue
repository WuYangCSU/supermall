<template>
  <div class="details">

    <details-nav-bar class="details-nav-bar" ref="navBar" @titleClick="titleClick"></details-nav-bar>
    <b-scroll ref="scroll" class="wrapper" :pullUpLoad="true" :probeType="3" @onScroll="titleScroll">
      <details-swiper class="details-swiper" :topImages="topImages" @refresh="refreshScroll"></details-swiper>
      <details-goods-info :goods="goods"></details-goods-info>
      <details-shop-info :shop="shop"></details-shop-info>
      <details-goods-detailed-info :detailInfo="detailInfo" @getRefresh="refreshScroll"> </details-goods-detailed-info>
      <details-params-info ref="params" :paramsInfo="paramsInfo"></details-params-info>
      <details-evaluate-info ref="evaluate" :evaluateInfo="Array.from(evaluateInfo)"></details-evaluate-info>
      <goods-list ref="recommond" class="details-recommend" :goodsList="recommendsInfo"> </goods-list>
      <div class="blank-leaving"></div>
    </b-scroll>
    <to-top ref="toTop" @click.native="toTop" v-show="showToTop"></to-top>
    <details-bottom-item class="details-bottom-item" @addToCart="addToCart"></details-bottom-item>

  </div>
</template>

<script>
import DetailsNavBar from './childComponents/DetailsNavBar'
import DetailsSwiper from './childComponents/DetailsSwiper'

import { getGoodDetails, getRecommends, Goods, Shop, ParamsInfo } from '@/network/details.js'
import DetailsShopInfo from './childComponents/DetailsShopInfo.vue'
import DetailsGoodsInfo from './childComponents/DetailsGoodsInfo.vue'
import DetailsGoodsDetailedInfo from './childComponents/DetailsGoodsDetailedInfo.vue'
import DetailsParamsInfo from './childComponents/DetailsParamsInfo.vue'
import DetailsEvaluateInfo from './childComponents/DetailsEvaluateInfo.vue'
import GoodsList from '@/components/content/goodsList/GoodsList.vue'
import DetailsBottomItem from './childComponents/DetailsBottomItem.vue'

import BScroll from '../../components/common/bscroll/BScroll.vue'
import ToTop from '@/components/common/toTop/ToTop.vue'
import { imgListener, backTopMixins } from '@/common/itemImgListener.js'

import { debounce } from '@/common/debounce.js'
export default {
  name: 'Details',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      evaluateInfo: {},
      recommendsInfo: [],
      itemImgListener: null,
      // 导航栏对应标题位置
      navBarItemYs: [],
      rerfeshnavBarItemYs: null,
      currentIndex: 0,
    }
  },
  created() {
    this.init()

  },
  mixins: [imgListener, backTopMixins],
  mounted() {
    this.$nextTick(() => {
      this.rerfeshnavBarItemYs = debounce(() => {
        this.navBarItemYs = []
        this.navBarItemYs.push(0)
        this.navBarItemYs.push(this.$refs.params.$el.offsetTop - 44)
        this.navBarItemYs.push(this.$refs.evaluate.$el.offsetTop - 44)
        this.navBarItemYs.push(this.$refs.recommond.$el.offsetTop - 44)
      }, 100)
    })
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsShopInfo,
    DetailsGoodsInfo,
    BScroll,
    DetailsGoodsDetailedInfo,
    DetailsParamsInfo,
    DetailsEvaluateInfo,
    GoodsList,
    DetailsBottomItem,
    ToTop
  },
  methods: {
    init() {
      this.iid = this.$route.params.iid
      this.getGoodDetails()
      this.getRecommends()
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navBarItemYs[index], 500)
    },
    getGoodDetails() {
      getGoodDetails(this.iid).then(res => {
        const data = res.result
        this.topImages = res.result.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramsInfo = new ParamsInfo(data.itemParams)
        // 评价数据
        if (data.rate.cRate !== 0) {
          this.evaluateInfo = data.rate.list
        }
        if (this.$refs.params.$el) {

        }

      })
    },
    getRecommends() {
      getRecommends().then(res => {
        this.recommendsInfo = res.data.list
      })

    },
    refreshScroll() {
      this.$refs.scroll.refresh()
      this.rerfeshnavBarItemYs()
    },
    titleScroll(position) {
      const positionY = -position.y
      const length = this.navBarItemYs.length
      this.showToTop = -position.y > 800 ? true : false
      for (let i = 0; i < length; i++) {
        if (this.currentIndex !== i) {
          if (i < length - 1) {
            if ((positionY >= this.navBarItemYs[i]) && (positionY < this.navBarItemYs[i + 1])) {
              this.currentIndex = i
              this.$refs.navBar.currentIndex = this.currentIndex
            }
          }
          if (i === length - 1) {
            if (positionY >= this.navBarItemYs[i]) {
              this.currentIndex = i
              this.$refs.navBar.currentIndex = this.currentIndex
            }
          }

        }
      }

    },
    // 将商品加入购物车
    addToCart() {
      const product = {
        iid: this.iid,
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
      }
      this.$store.dispatch('addCartGoods', product).then(res => {
        this.$toast.show(res, 1500)
      }
      )
    },
  }
}
</script>

<style scoped>
.details {
  position: relative;
  z-index: 10000;
  background-color: white;
  height: 100vh;
}
.details-nav-bar {
  position: relative;
  z-index: 10;
  background-color: #ffffff;
}
.wrapper {
  height: calc(100% - 93px);
  overflow: hidden;
}
.details-recommend {
  margin-top: 30px;
  /* margin-bottom: 10px; */
}
.blank-leaving {
  height: 1px;
  width: 100%;
}
.details-bottom-item {
  position: fixed;
  height: 49px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
