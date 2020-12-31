<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  data() {
    return {
      bscroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {


    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    this.bscroll.on('scroll', (position) => {
      this.$emit("onScroll", position)
    })
    this.bscroll.on('pullingUp', () => {
      this.$emit("LoadingMore")
      this.bscroll.finishPullUp()
    })
  },

  components: {

  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.bscroll.scrollTo(x, y, time)
    },
    refresh() {
      this.bscroll.refresh()
    }
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
}
</style>
