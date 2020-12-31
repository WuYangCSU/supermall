<template>
  <div class="home">
    <home-nav-bar-view class="nav-bar"></home-nav-bar-view>
    <tab-control class="tab-control1" :titles="titles" @tabClick="tabClick" ref="tabControl1" v-show="showTabControl1"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" :pullUpLoad="true" @onScroll="onScroll" @LoadingMore="LoadingMoreGoods">
      <home-swiper class="home-swiper" :banner="banner" v-if="banner" @getOffSetTop="getOffSetTop"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-fashion-view></home-fashion-view>
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <to-top @click.native="toTop" v-show="showToTop"></to-top>
  </div>
</template>

<script>
import HomeNavBarView from './homechild/HomeNavBarView'
import HomeSwiper from './homechild/HomeSwiper'
import HomeRecommend from './homechild/HomeRecommend'
import HomeFashionView from './homechild/HomeFashionView'


import TabControl from '@/components/common/tabControl/TabControl'
import Scroll from '@/components/common/bscroll/BScroll'

import { getHomeMultiDatas, getHomeGoodsDatas } from '@/network/home.js'
import GoodsList from '../../components/content/goodsList/GoodsList.vue'

import ToTop from '@/components/common/toTop/ToTop.vue'
import { debounce } from '@/common/debounce.js'
import { imgListener, backTopMixins } from '@/common/itemImgListener.js'

export default {
  name: '',
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsTypes: ["pop", "new", "sell"],
      currentType: "pop",
      offsetTop: 0,
      showTabControl1: false,
      scrollY: 0,
      itemImgListener: null,
    }
  },
  mixins: [imgListener, backTopMixins],
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultiDatas()
    this.getHomeGoodsDatas("pop")
    this.getHomeGoodsDatas("new")
    this.getHomeGoodsDatas("sell")


  },
  mounted() {
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.scrollY, 0)
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.bscroll.y

  },
  components: {
    HomeNavBarView,
    HomeSwiper,
    HomeRecommend,
    HomeFashionView,
    TabControl,
    GoodsList,
    Scroll,
    ToTop

  },
  methods: {
    // 获取主页数据相关方法
    getHomeMultiDatas() {
      getHomeMultiDatas().then(
        res => {
          this.banner = res.data.banner.list
          this.dKeyword = res.data.dKeyword.list
          this.keywords = res.data.keywords.list
          this.recommend = res.data.recommend.list
        }
      )
    },
    getHomeGoodsDatas(type) {
      const page = this.goods[type].page + 1
      getHomeGoodsDatas(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })

    },
    tabClick(index) {
      this.currentType = this.goodsTypes[index]
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 首页返回顶部

    // 刷新滚动高度

    // 监听滚动距离
    onScroll(position) {
      this.showToTop = -position.y > 800 ? true : false
      this.showTabControl1 = -position.y > this.offsetTop
    },
    // 下拉加载更多商品数据
    LoadingMoreGoods() {
      this.getHomeGoodsDatas(this.currentType)
    },
    // 获取选项卡offSetTop属性
    getOffSetTop() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    }

  }

}

</script>

<style scoped>
.home {
  padding: 0;
  margin: 0;
  position: relative;
  height: 100vh;
}
.nav-bar {
  padding-bottom: 0;
}
.tab-control1 {
  position: relative;
  z-index: 10;
}
.tab-control {
  z-index: 10;
  background-color: #fff;
}
.content {
  padding: 0;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
