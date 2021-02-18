<template>
  <div>
    <div v-if="hastoken">
      <div class="user_info">
        <div class="user_img">
          <img src="http://static.hdslb.com/images/akari.jpg" alt="" />
        </div>
        <div class="user_status">
          <div class="userName">{{userName}}</div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="user_info">
        <div class="user_img">
          <img @click="userLogin" src="http://static.hdslb.com/images/akari.jpg" alt="" />
        </div>
        <div class="user_status">
          <div @click="userLogin">登录/注册</div>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["hastoken"]),
    ...mapState({
      userName: state => state.user.name
    })
  },
  methods: {

    userLogin() {
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
.userName {
  color: #000;
}
</style>