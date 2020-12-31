<template>
  <div class="details-evaluate">
    <hr :style="{color:'gray'}">
    <div class="evaluate-title">
      <span class="user-evaluate">用户评价</span>
      <span class="evaluate-more">更多</span>
    </div>
    <hr :style="{color:'gray'}">
    <div v-if="evaluateInfo != null ">
      <div v-for="(item,index) in evaluateInfo">
        <div class="user-info">
          <img class="user-image" :src="item.user.avatar" alt="">
          <div class="user-uname">{{item.user.uname}}</div>
        </div>
        <div class="evaluate-content">
          <div>{{item.content}}</div>
          <div class="evaluate-content-images" v-if="item.images != null ">
            <div v-for="(image,indey) in item.images">
              <img :src="image" @click="getImages(image)" alt="">
            </div>
          </div>
        </div>
        <div class="evaluate-otherInfo">
          <span class="buy-time">{{item.created | showDate}}</span>
          <span class="buy-style">{{item.style}}</span>
        </div>
      </div>
    </div>
    <br>
    <hr :style="{color:'gray'}">
  </div>
</template>

<script>
import { formatDate } from '@/common/formatDate.js'
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
    evaluateInfo: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd hh:ss')
    }
  },
  components: {

  },
  methods: {
    getImages(image) {
      window.open(image)
    }
  }
}
</script>

<style scoped>
.details-evaluate {
  margin-bottom: 20px;
}
.evaluate-title {
  height: 50px;
  line-height: 50px;

  font-size: var(--font-size);
}
.user-evaluate {
  float: left;
  margin-left: 10px;
}
.evaluate-more {
  float: right;
  margin-right: 20px;
}
.user-info {
  display: flex;
  align-items: center;
  margin: 20px 10px 10px 10px;
  font-size: 20px;
}
.user-image {
  width: 50px;
  border-radius: 50%;
}
.user-uname {
  margin-left: 10px;
}
.evaluate-content {
  margin: 10px;
  line-height: 24px;
}
.evaluate-content-images {
  display: flex;
  flex-wrap: wrap;
}
.evaluate-content-images img {
  width: 100px;
  margin: 5px;
}
.evaluate-otherInfo {
  margin: 10px;
  color: gray;
  font-size: 15px;
}
.buy-time {
  margin-left: 10px;
}
.buy-style {
  margin-left: 10px;
}
</style>
