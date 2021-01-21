<template>
  <div class="user_info">
    <div class="user_img" @click="userLogin">
      <img src="http://static.hdslb.com/images/akari.jpg" alt="" />
    </div>
    <div class="user_status" @click="userLogin" >
      <div  >登录/注册</div>
    </div>
  </div>
</template>

<script>
export default {
  methods:
  {
    userLogin(){
      this.$emit("userLogin")
    }
  }
};
</script>

<style scoped>
.user_info {
  display: flex;
  color: #999;
}
.user_img {
  height: 50px;
  margin: 10px 20px 10px 10px;
}
.user_img img {
  border-radius: 50px;
  height: 50px;
}
.user_status {
  line-height: 70px;
  text-align: center;
  font-size: 20px;
}
</style>