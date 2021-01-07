<template>
  <div>
    <profile-nav-bar></profile-nav-bar>
    <profile-user></profile-user>
  </div>
</template>

<script>
import ProfileUser from "./profileChildren/ProfileUser";
import ProfileNavBar from "./profileChildren/ProfileNavBar"

export default {
  name: '',
  data() {
    return {

    }
  },
  components: {
ProfileUser,
ProfileNavBar

  }
}
</script>
    ProfileNavBar

<style scoped>
</style>
