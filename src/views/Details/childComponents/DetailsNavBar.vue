<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div @click="backClick">
          <img src="@/assets/img/common/back.svg" class="back">
        </div>
      </template>
      <template v-slot:center class="titles">
        <div class="titles">
          <div v-for="(item,index) in titles" class="titles-item" @click="titleClick(index)" :class="{active:index==currentIndex}">{{item}}</div>
        </div>

      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'



export default {
  name: '',
  data() {
    return {
      currentIndex: 0,
      titles: ["商品", "参数", "评论", "推荐"]
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit("titleClick", index)
    }
  }
}
NavBar
</script>

<style scoped>
.titles {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  line-height: 44px;
}

.back {
  margin-top: 11px;
  margin-left: 20px;
}
.active {
  color: var(--color-high-text);
}
</style>
