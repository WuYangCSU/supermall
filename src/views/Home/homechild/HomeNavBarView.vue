<template>
  <div>
    <nav-bar class="nav-bar-home">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: '',
  data() {
    return {

    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-bar-home {
  background-color: var(--color-tint);
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  text-align: center;
  line-height: 44px;
  z-index: 10;
  font-size: 16px;
  color: #fff;
}
</style>
