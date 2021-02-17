<template>
  <div class="profile_user_order">
    <div class="user_order">
      <span class="my_order">我的订单</span>
      <span class="all_orders">查看全部订单</span>
    </div>
    <div class="order_info">
      <div class="finance">
        <div class="icon icon_finance"></div>
        <div>待付款</div>
      </div>
      <div>
        <div class="icon icon_deliver"></div>
        <div>代发货</div>
      </div>
      <div>
        <div class="icon icon_receive"></div>
        <div>待收货</div>
      </div>
      <div>
        <div class="icon icon_evaluate"></div>
        <div>评价</div>
      </div>
      <div>
        <div class="icon icon_aftersales"></div>
        <div>退款\售后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile_user_order {
  margin: 15px;
  border: 1px soild #ffffff;
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
  height: 70px;
  display: flex;
  justify-content: space-around;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  margin-top: 5px;
}

.icon {
  width: 25px;
  height: 25px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
.icon_finance {
  margin-left: 8px;
  background-image: url("https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp");
}
.icon_deliver {
  margin-left: 8px;
  background-image: url("https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp");
}
.icon_receive {
  margin-left: 8px;
  background-image: url("https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp");
}
.icon_evaluate {
  margin-left: 3px;
  background-image: url("https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp");
}
.icon_aftersales {
  margin-left: 18px;
  border-radius: 50%;
  background-position-x: -1px;

  background-image: url("https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp");
}
</style>