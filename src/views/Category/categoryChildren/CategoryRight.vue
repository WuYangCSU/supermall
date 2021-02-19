<template>
  <div>
    <div class="item_details">
      <div class="details_info" v-for="(item,index) in detailsInfoList">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </div>
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
    detailsInfoList: {
      type: Array,
      default: []
    }
  },
  components: {

  }
}
</script>

<style scoped>
.item_details {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 5px 0px 0px 0px;
}
.details_info {
  width: 45%;
  margin: 5px 6px;
  text-align: center;
}
img {
  height: 100px;
}
</style>
