import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    product: {},
    cart: {}
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    },
    getProduct (context, productId) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${productId}`
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        console.log('getProduct', response.data)
        context.commit('PRODUCT', response.data.product)
        context.commit('LOADING', false)
      })
    },
    addToCart (context, { id, qty }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('LOADING', true)
      const cart = {
        product_id: id,
        qty
      }
      axios.post(api, { data: cart }).then(response => {
        console.log('addToCart', response.data)
        context.dispatch('getCart')
        context.commit('LOADING', false)
      })
    },
    getCart (context) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      axios.get(api).then((response) => {
        console.log('getCart', response)
        context.commit('CART', response.data.data)
      })
    },
    removeCartItem (context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('LOADING', true)
      axios.delete(api).then((response) => {
        console.log('delete', response)
        context.dispatch('getCart')
        context.commit('LOADING', false)
      })
    }
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PRODUCT (state, payload) {
      state.product = payload
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    CART (state, payload) {
      state.cart = payload
    }
  }
})
