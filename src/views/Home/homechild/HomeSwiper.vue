<template>
  <div>
    <swiper :showIndicator="true">
      <swiper-item v-for="(item,i) in banner" :key="i">
        <a :href="item.link">
          <img :src="item.image" @load="swiperLoading" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
  name: '',
  props: {
    banner: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperLoading() {
      if (!this.isLoad) {
        this.$emit("getOffSetTop")
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
</style>
