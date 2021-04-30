import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { ValidationObserver, ValidationProvider, extend, configure } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

import App from './App.vue'
import router from './router'
import store from './store'
import './bus'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Loading)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper/* { default global options } */)
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

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
