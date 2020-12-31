<template>
  <div class="good-list-item" @click="clickItem">
    <img v-lazy="showImage" @load="imgLoad">
    <div class="goods-info">
      <p>{{good.title}}</p>
      <span class="price">{{good.price}}</span>
      <span class="collect">{{good.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.good.image || this.good.show.img
    }
  },
  components: {

  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgHasLoad")
    },
    clickItem() {
      // const id = this.good.item_id || this.good.iid
      this.$router.push("/details/" + this.good.iid)
    }
  }
}
</script>

<style scoped>
.good-list-item {
  position: relative;
  padding-bottom: 44px;
  width: 48%;
}
.good-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 5px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 30px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  position: absolute;
  content: "";
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~@/assets/img/common/collect.svg") 0px 1px/14px 14px;
}
</style>
