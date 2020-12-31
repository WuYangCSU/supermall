import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/views/Home/Home')
const Category = () => import('@/views/Category/Category')
const Profile = () => import('@/views/Profile/Profile')
const Shopcart = () => import('@/views/Shopcart/Shopcart')
const Details = () => import('@/views/Details/Details')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/details/:iid',
    component: Details
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router