<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4 bg-gray py-3">
      <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
        <div class="card border-1 shadow">
          <div style="height: 200px; background-size: cover; background-position: center"
            :style="{backgroundImage: `url(${item.imageUrl})`}">
          </div>
          <div class="card-body">
            <span class="badge badge-info float-right ml-2">{{ item.category }}</span>
            <h5 class="card-title">
              <a href="#" class="text-dark">{{ item.title }}</a>
            </h5>
            <p class="card-text">{{ item.content }}</p>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 <span class="text-danger">{{ item.price }}</span> 元</div>
            </div>
          </div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(item.id)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt="">
            <blockquote class="blockquote mt-3">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-items-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name="" class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{num}} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計 <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button type="button" class="btn btn-primary" @click="addToCart(product.id, product.num)">
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === product.id"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 購物車內容 -->
    <div class="my-5 row justify-content-center">
      <div class="col-md-6">
        <table class="table">
          <thead>
            <th width="50"></th>
            <th>品名</th>
            <th width="100">數量</th>
            <th width="100">單價</th>
          </thead>
          <tbody>
            <tr v-for="item in cart.carts" :key="item.id" v-show="showSupplier">
              <td class="align-middle">
                <button type="button" class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ item.product.title }}
                <div class="text-success font-italic" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="align-middle">{{ item.qty }} / {{ item.product.unit }}</td>
              <td class="align-middle text-right">${{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-right">購物金額總計</td>
              <td class="text-right">${{ cart.total }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-right text-success">折扣後應負金額</td>
              <td class="text-right text-success">${{ cart.final_total }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="input-group mb-3 input-group-sm w-50 float-right">
          <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
          <div class="input-group-append">
            <button class="btn btn-outline-info" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 建立訂單 -->
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" ref="dataForm" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail"
          :class="{'is-invalid' : errors.has('email')}"
          v-model="form.user.email"
          v-validate="'required|email'"
          placeholder="請輸入 Email">
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username"
          :class="{'is-invalid' : errors.has('name')}"
          v-model="form.user.name"
          v-validate="'required'"
          placeholder="請輸入姓名">
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" id="usertel"
          v-model="form.user.tel"
          placeholder="請輸入電話">
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="address" class="form-control" name="address" id="useraddress"
          :class="{'is-invalid' : errors.has('address')}"
          v-model="form.user.address"
          v-validate="'required'"
          placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name="" id="" class="form-control" cols="30" rows="10"></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger btn-lg">送出訂單</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      isLoading: false
    }
  },
  computed: {
    showSupplier () {
      return this.cart.carts
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then(response => {
        // console.log(response.data)
        vm.isLoading = false
        vm.products = response.data.products
      })
    },
    getProduct (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      const vm = this
      vm.status.loadingItem = id
      this.$http.get(api).then(response => {
        console.log('getProduct', response.data)
        vm.product = response.data.product
        $('#productModal').modal('show')
        vm.status.loadingItem = ''
      })
    },
    addToCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.status.loadingItem = id
      const cart = {
        product_id: id,
        qty
      }
      this.$http.post(api, { data: cart }).then(response => {
        console.log('addToCart', response.data)
        vm.status.loadingItem = ''
        $('#productModal').modal('hide')
        vm.getCart()
      })
    },
    getCart () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data
        console.log('getCart', response)
        vm.isLoading = false
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
    },
    addCouponCode () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      vm.isLoading = true
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log('addCoupon', response)
        vm.getCart()
        vm.isLoading = false
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/`
      const vm = this
      const order = vm.form
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(api, { data: order }).then(response => {
            console.log('createOrder', response)
            if (response.data.success) {
              vm.$router.push(`customcheckout/${response.data.orderId}`)
            }
            vm.isLoading = false
            this.$refs.dataForm.reset()
          })
        } else {
          console.log('欄位不完整')
          this.$refs.dataForm.reset()
        }
      })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
