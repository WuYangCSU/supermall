import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { getToken } from '@/common/login.js'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
const Home = () => import('@/views/Home/Home')
const Category = () => import('@/views/Category/Category')
const Profile = () => import('@/views/Profile/Profile')
const Shopcart = () => import('@/views/Shopcart/Shopcart')
const Details = () => import('@/views/Details/Details')
const Login = () => import('@/views/Login')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/profile',
    name: "profile",
    component: Profile
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: Shopcart
  },
  {
    path: '/details/:iid',
    component: Details
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.name === 'shopcart') {
    if (!token) {

      if (from.name !== 'login') {
        alert("请先完成登录")
      }
      next({
        name: 'login',
        params: {
          redirect: to.fullPath
        }
      })

    }
    else {

      next()
    }

  } else {
    next()
  }



})

export default router