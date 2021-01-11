<template>
  <div class="user_info">
    <div class="user_img"><img src="http://static.hdslb.com/images/akari.jpg" alt=""></div>
    <di class="user_status">
      <div>登录/注册</div>
   </di>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.user_info {
  display: flex;
  color: #999;
}
.user_img {
  
  height: 50px;
  margin: 10px 20px 10px 10px ;
}
.user_img img {
  border-radius: 50px;
  height: 50px;
}
.user_status{
  line-height: 70px;
  text-align: center;
  font-size: 20px;
}
</style>