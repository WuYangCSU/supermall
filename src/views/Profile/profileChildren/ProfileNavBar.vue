<template>
  <div class="profile_nav_bar">
    <nav-bar>
      <template v-slot:right class="">
        <div class="nav_bar_setup">
           <div class="set_up set_up_1"><i class="el-icon-user"></i></div>
        <div class="set_up set_up_2"><i class="el-icon-setting"></i></div>
        </div>
       

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
.nav_bar_setup {
  display: flex;
  justify-content: center;
}
.set_up {
  text-align: center;
  line-height: 44px;
  font-size: 18px;
}
.set_up_1{
  margin-left: 5px;
}
.set_up_2 {
  margin: 0px 10px;
}
</style>