<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    }
  },
  components: {

  },
  computed: {
    isActive: function () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle: function () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf(this.path) == -1) {
        this.$router.push(this.path)
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item img {
  margin-top: 3px;
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.isText {
  color: pink;
}
</style>
