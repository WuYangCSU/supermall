
import { debounce } from './debounce.js'
export const imgListener = {
  mounted() {

    let refresh = debounce(this.$refs.scroll.refresh, 200)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on(
      'imgHasLoad', this.itemImgListener)
  },
  activated() {
    this.$bus.$on(
      'imgHasLoad', this.itemImgListener)
  },
  deactivated() {
    this.$bus.$off('imgHasLoad', this.itemImgListener)
  }
}
export const backTopMixins = {
  data() {
    return {
      showToTop: false,
    }
  },
  methods: {
    // 首页返回顶部
    toTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
  }
}