import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store'
import toast from '@/components/common/toast/index.js'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/mock/index.js'
FastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require('@/assets/img/common/placeholder.png')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
