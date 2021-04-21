<template>
  <div>
    <header>
      <nav class="site-header navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <router-link class="navbar-brand" to="/index">
          <img src="../assets/images/hottoys_logo.png" class="logo-style" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/index">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Features</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products">Enterprise</router-link>
            </li>
          </ul>
          <div class="mr-3 d-flex">
            <div class="mr-2">
              <div class="searchbar">
                <input class="search_input" type="text" name="" placeholder="Search...">
                <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
              </div>
            </div>
            <div class="mr-2">
              <router-link class="btn btn-sm" data-toggle=""  to="/login">
                <i class="fa fa-user text-white fa-2x" aria-hidden="true"></i>
              </router-link>
            </div>
            <!-- 購物車內的數量 (Button 內包含 icon, 數量 badge) -->
            <div class="dropdown ml-auto">
              <button class="btn btn-sm btn-cart" data-toggle="dropdown" data-flip="false">
                <i class="fa fa-shopping-cart text-light fa-2x" aria-hidden="true"></i>
                <span class="badge badge-pill badge-danger position-absolute">{{cart.carts.length}}</span>
                <span class="sr-only">unread messages</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right p-3"
                style="min-width: 300px"
                data-offset="400"
                v-if="cart.carts.length"
              >
                <h6>已選擇商品</h6>
                <table class="table table-sm" v-if="cart.carts.length">
                  <tbody>
                    <tr v-for="item in cart.carts" :key="item.id">
                      <td class="align-middle text-center">
                        <a href="#" class="text-danger" @click.prevent="removeCartItem(item.id)">
                          <i class="far fa-trash-alt"></i>
                        </a>
                      </td>
                      <td class="align-middle">{{ item.product.title }}</td>
                      <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                      <td class="align-middle text-right">{{item.total}}</td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex border-top border-bottom mb-3 p-1">
                  <span class="text-uppercase text-muted">Total</span>
                  <strong class="ml-auto">{{ cart.total }}</strong>
                </div>
                <button class="btn btn-outline-info btn-block">
                  <i class="fa fa-cart-plus" aria-hidden="true"></i> 結帳去
                </button>
              </div>
              <div
                class="dropdown-menu dropdown-menu-right p-3"
                style="min-width: 300px"
                data-offset="400"
                v-else
              >目前購物車空無一物</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      cart: {}
    }
  },
  methods: {
    searchShow () {
      this.isShow = true
    },
    getCart () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data
        console.log('getCart', response)
      })
    },
    removeCartItem (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.isLoading = true
      this.$http.delete(api).then((response) => {
        console.log('delete', response)
        vm.getCart()
        vm.isLoading = false
      })
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Dela+Gothic+One&display=swap');

.font-family {
  font-family: 'Anton', sans-serif;
  font-size: 52px;
}
.navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}
.logo-style{
  max-width: 40px;
}
.searchbar{
  margin-bottom: auto;
  margin-top: auto;
  height: 40px;
  background-color: #353b48;
  border-radius: 30px;
  padding: 5px;
}
.search_input{
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color:transparent;
  line-height: 30px;
  transition: width 0.4s linear;
}
.searchbar:hover > .search_input{
  padding: 0 10px;
  width: 150px;
  caret-color:red;
  transition: width 0.4s linear;
}
.searchbar:hover > .search_icon{
  background: white;
  color: #e74c3c;
}
.search_icon{
  height: 30px;
  width: 30px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color:white;
}
</style>
