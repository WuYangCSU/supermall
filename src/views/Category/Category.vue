<template>
  <div ref="wrapper">
    <nav-bar class="category_navbar">
      <template v-slot:center>
        <div>分类</div>
      </template>
    </nav-bar>
    <div class="main">
      <scroll class="content1" ref="scroll1" :probe-type="3" :pullUpLoad="true">
        <category-side-bar :categoryList="categoryList" @getDetailsInfoList="getDetailsInfoList"></category-side-bar>
      </scroll>
      <scroll class="content2" ref="scroll2" :probe-type="3" :pullUpLoad="true">
        <category-right :detailsInfoList="detailsInfoList"></category-right>
      </scroll>
    </div>

  </div>
</template>

<script>
import CategoryRight from './categoryChildren/CategoryRight'
import NavBar from '@/components/common/navbar/NavBar.vue'
import CategorySideBar from './categoryChildren/CategorySideBar'
import Scroll from '@/components/common/bscroll/BScroll'
import { getCategory, getCategoryInfo } from '@/network/category.js'
export default {
  name: '',
  data() {
    return {
      categoryList: [],
      currentIndex: 0,
      detailsInfoList: []
    }
  },
  mounted() {

  },
  created() {
    this.init()
  },
  components: {
    Scroll,
    NavBar,
    CategorySideBar,
    CategoryRight

  },
  methods: {
    init() {

      this.getCategoryList()
      setTimeout(() => {
        this.getDetailsInfoList(this.categoryList[0].maitKey)
      }, 500)
    },
    clickBtn() {
      console.log("aaa");
    },
    getCategoryList() {
      getCategory().then(res => {

        this.categoryList = res.data.category.list

      })
      setTimeout(() => {
        this.$refs.scroll1.refresh()
      }, 500)
    },
    getDetailsInfoList(maitKey) {
      getCategoryInfo(maitKey).then(res => {
        this.detailsInfoList = res.data.list
        setTimeout(() => {
          this.$refs.scroll2.refresh()

        }, 500)
        this.$refs.scroll2.scrollTo(0, 0, 0)
      })

    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
}
.content1 {
  padding: 0;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 0;
  width: 100px;
  overflow: hidden;
}
.content2 {
  padding: 0;
  position: absolute;
  top: 44px;
  bottom: 44px;
  left: 100px;
  right: 0 px;
  overflow: hidden;
}
.category_navbar {
  background-color: var(--color-tint);
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  color: #fff;
}
</style>
