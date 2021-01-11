<template>
  <div class="profile">
    <profile-nav-bar></profile-nav-bar>
    <profile-user></profile-user>
    <profile-user-info></profile-user-info>
    <profile-user-orders></profile-user-orders>
  </div>
</template>

<script>
import ProfileUser from "./profileChildren/ProfileUser";
import ProfileNavBar from "./profileChildren/ProfileNavBar";
import ProfileUserInfo from "./profileChildren/ProfileUserInfo";
import ProfileUserOrders from "./profileChildren/ProfileUserOrders.vue";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    ProfileUser,
    ProfileNavBar,
    ProfileUserInfo,
    ProfileUserOrders,
  },
};
</script>
<style scoped>
.profile {
  background-color: rgb(248, 248, 248);
  height:800px ;
}
</style>
