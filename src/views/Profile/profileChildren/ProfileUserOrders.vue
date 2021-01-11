<template>
  <div class="profile_user_order">
    <div class="user_order"><span class="my_order">我的订单</span><span class="all_orders">查看全部订单</span></div>
    <div class="order_info">
      <div>待付款</div>
      <div>代发货</div>
      <div>待收货</div>
      <div>评价</div>
      <div>退款\售后</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile_user_order {
  margin: 15px;
  border:1px soild #ffffff;
  background-color: #ffffff;
  border-radius: 5px;
  height: 100px;
}
.user_order {
  height: 40px;
  font-size: 16px;
  margin-top: 10px;
  line-height: 40px;
  border-bottom: 0.5px solid rgb(231, 231, 231);
}
.my_order {
  position: relative;
  float: left;
  margin-left: 10px;
}
.all_orders {
  position: relative;
  float: right;
  margin-right: 10px;
}
.order_info {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  line-height: 60px;
}
</style>