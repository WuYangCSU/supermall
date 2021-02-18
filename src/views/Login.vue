<template>
  <div id="login">
    <nav-bar class="login_navbar">
      <template v-slot:center>
        <div class="user_login_navbar">用户登录</div>
      </template>
    </nav-bar>
    <form action="">
      <div class="userName"><input name="userName" type="text" v-model="userName" placeholder="手机号/邮箱/会员名" autocomplete></div>
      <div class="password"><input type="password" v-model="password" placeholder="请输入登录密码" autocomplete></div>
    </form>
    <div><span class="remember"><input type="checkbox" class="rememberme" name="rememberme" id="rememberme"><label class="remember_password" for="rememberme">记住密码</label></span></div>
    <div class="login_button"> <button type="button" @click="login">登录</button></div>
    <div class="other_info">
      <span class="login_message">短信验证码登录</span>
      <span class="register" @click="register">免费注册</span>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: "",
      password: "",
    }
  },
  components: {
    NavBar
  },
  methods: {
    ...mapActions({ userLogin: "login" }),
    login() {
      const loginForm = {
        userName: this.userName,
        passowrd: this.password
      }

      this.userLogin(loginForm).then(res => {
        if (res === 200) {
          this.$router.push({
            path: this.$route.params.redirect
          })
        }
      })
    },
    register() {
      alert("用户注册")
    }
  }
};
</script>

<style scoped>
#login {
  height: 100vh;
  background-color: rgb(236, 236, 236);
  overflow: hidden;
}
.login_navbar {
  height: 44px;
  line-height: 44px;
  font-size: 17px;
  text-align: center;
  color: #000;
  background-color: #f7f7f8;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 15px;
}
.userName {
  font-size: 16px;
  text-align: center;
}
.password {
  font-size: 16px;
  text-align: center;
}
input {
  height: 50px;
  margin-top: 1px;
  padding-left: 10px;
  width: 100%;
  border: none;
}
button {
  color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  width: 98%;
  margin: 10px 2px;
  background-color: red;
}
.other_info {
  color: red;
  font-size: 16px;
}
.login_message {
  margin-left: 5px;
  float: left;
}
.remember {
  float: left;
  margin-top: 3px;
  margin-left: 5px;
}
.rememberme {
  position: relative;
  top: 2.5px;
  height: 14px;
  width: 14px;
  text-align: center;
}
.remember_password {
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}
.register {
  margin-right: 5px;
  float: right;
}
</style>