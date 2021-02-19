<template>
  <div class="category">
    <div class="category_list">
      <div class="category_list_item" :class="{'isactived':currentIndex===index}" v-for="(item,index) in categoryList" @click="getDetailInfo(item,index)">{{item.title}}</div>
    </div>

  </div>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {

      currentIndex: 0,

    }
  },
  props: {
    categoryList: {
      type: Array,
      default: []
    }
  },
  components: {

  },
  computed: {

  },
  created() {

  },
  methods: {
    getDetailInfo(item, index) {
      this.currentIndex = index
      this.$emit('getDetailsInfoList', item.maitKey)

    }
  }
}
</script>

<style scoped>
.category {
  display: flex;
}
.category_list {
  width: 100px;
}
.category_list_item {
  height: 40px;
  border-bottom: 1px solid rgb(236, 236, 236);
  text-align: center;
  line-height: 40px;
}
.isactived {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
