<template>
  <div>
    <swiper :showIndicator="true" class="details-swiper">
      <swiper-item v-for="(item,i) in topImages" :key="i">
        <img :src="item" @load="swiperLoading" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'

export default {
  name: '',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperLoading() {
      if (!this.isLoad) {
        this.$emit('refresh')
        this.isLoad = true
      }

    }
  }
}
</script>

<style scoped>
.details-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
