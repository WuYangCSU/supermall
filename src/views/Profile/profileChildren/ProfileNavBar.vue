<template>
  <div class="profile_nav_bar">
    <nav-bar>
      <template v-slot:right>
        <div class="set_up">设置</div>
        </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.profile_nav_bar {
  background-color: var(--color-tint);
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.set_up {
  text-align: center;
}
</style>