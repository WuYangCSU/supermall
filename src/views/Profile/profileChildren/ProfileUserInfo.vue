<template>
  <div class="profile_user_info">
    <div>
      <div class="count">22</div>
      <div>收藏夹</div>
    </div>
    <div>
      <div class="count">15</div>
      <div>关注店铺</div>
    </div>
    <div>
      <div class="count">10</div>
      <div>足迹</div>
    </div>
    <div>
      <div class="count">0</div>
      <div>红包卡卷</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile_user_info {
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  height: 60px;
  text-align: center;
  color: #666;
}
.profile_user_info > div {
  padding-top: 12px;
}
.count {
  color: black;
}
</style>