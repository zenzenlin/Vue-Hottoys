import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    cart: {},
    product: {},
    products: [],
    prodCategory: '',
    pagination: {},
    qty: 1
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
    getProducts (context, page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      context.commit('LOADING', true)
      axios.get(api).then(response => {
        console.log('getProducts', response.data)
        context.commit('PRODUCTS', response.data.products)
        context.commit('PAGINATION', response.data.pagination)
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
      context.commit('LOADING', true)
      axios.get(api).then((response) => {
        console.log('getCart', response)
        context.commit('CART', response.data.data)
        context.commit('LOADING', false)
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
    },
    changeTab (context, prodCategory) {
      context.commit('PRODCATEGORY', prodCategory)
    }
  },
  mutations: {
    LOADING (state, payload) {
      state.isLoading = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    },
    PRODUCTS (state, payload) {
      state.products = payload
    },
    CART (state, payload) {
      state.cart = payload
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    PRODCATEGORY (state, payload) {
      state.prodCategory = payload
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    prodCategory (state) {
      return state.prodCategory
    },
    qty (state) {
      return state.qty
    },
    pagination (state) {
      return state.pagination
    }
  }
})
