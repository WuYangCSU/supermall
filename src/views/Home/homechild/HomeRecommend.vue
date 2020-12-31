<template>
  <div class="home-recommend">
    <div v-for="(item,k) in recommend" :key="k" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
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
  mounted() {

  },
  props: {
    recommend: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {

  }
}
</script>

<style scoped>
.home-recommend {
  display: flex;
  border-bottom: 10px solid #eee;
}
.home-recommend-item {
  flex: 1;
  margin-top: 0px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 14px;
  text-align: center;
}
.home-recommend-item img {
  width: 60px;
  margin-bottom: 1px;
}
.home-recommend-item a {
  text-decoration: none;
}
</style>
