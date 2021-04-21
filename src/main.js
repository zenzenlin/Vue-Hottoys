import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper/* { default global options } */)
Vue.use(VeeValidate)
VeeValidate.Validator.localize('zh_TW', zhTWValidate)
axios.defaults.withCredentials = true

Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  components: { App },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  console.log(to, from, next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`
    axios.post(api).then(response => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
