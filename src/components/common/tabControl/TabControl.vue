<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class=" {active: currentIndex == index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {

  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: pink;
}
.active span {
  border-bottom: 2px solid;
}
</style>
