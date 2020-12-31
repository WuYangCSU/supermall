<template>
  <div class="detailed-info">
    <div class="detailed-desc">
      {{detailInfo.desc}}
    </div>
    <div v-for="(item,i) in detailInfo.detailImage" :key="i">
      <div>
        <div class="img-key">{{item.key}}</div>
        <div class="img-item" v-for="(image,index) in item.list" :key="index"><img class="image" :src="image" @load="imgLoad"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/common/debounce.js'
export default {
  name: '',
  data() {
    return {
      refreshScroll: null
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {

  },
  methods: {
    imgLoad() {

      if (this.refreshScroll == null) {
        this.refreshScroll = debounce(() => {
          this.$emit("getRefresh")
        }, 100)
      }
      this.refreshScroll()
    }

  }
}
</script>

<style scoped>
.detailed-info {
  margin: 0 10px;
}
.detailed-desc {
  margin-top: 15px;
  font-size: var(--font-size);
  color: var(--color-text);
}
.img-key {
  margin: 5px 0;
  font-size: var(--font-size);
}
.img-item {
  margin: 0;
}
.image {
  width: 100%;
}
</style>
