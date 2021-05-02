<template>
  <div class="container py-5">
    <div class="progressbar-container">
      <ul class="progressbar">
        <li class="active">INFO</li>
        <li>CONFIRM</li>
        <li>PAY</li>
      </ul>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">ORDER SUMMARY</span>
          <span class="badge badge-danger badge-pill" v-if="cart.carts.length">{{cart.carts.length}}</span>
        </h4>
        <ul class="list-group mb-3">
          <li v-for="item in cart.carts" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center lh-condensed">
            <a href="#" class="text-danger mr-2" @click.prevent="removeCartItem(item.id)">
              <i class="far fa-trash-alt"></i>
            </a>
            <div class="mr-auto">
              <h6 class="my-0">{{ item.product.title }}</h6>
              <!-- <small class="text-muted">{{ item.qty }} {{item.product.unit}}</small> -->
              <div class="cart_item-qty">
                <button @click="updateCart(item, '-')" type="button">−</button>
                <span type="number">{{ item.qty }}</span>
                <button @click="updateCart(item, '+')" type="button">+</button>
              </div>
            </div>
            <span class="text-muted text-right" :class="{'addCoupon': cart.final_total !== cart.total}">${{item.total}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between" v-if="cart.final_total == cart.total">
            <span>Total</span>
            <strong>$ {{ cart.total }}</strong>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center" v-if="cart.final_total !== cart.total">
            <span colspan="3" class="text-success">Discounted Total</span>
            <span class="text-right text-success">${{ cart.final_total }}</span>
          </li>
        </ul>

        <form class="">
          <div class="input-group">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="Promo code">
            <div class="input-group-append">
              <button type="button" class="btn btn-sm btn-info" @click="addCouponCode">APPLY</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-md-7 order-md-1">
        <h4 class="mb-3 text-muted">CONTACT INFORMATION</h4>
        <validation-observer v-slot="{ invalid, handleSubmit }">
          <form ref="dataForm" @submit.prevent="handleSubmit(createOrder)">
            <div class="row">
              <validation-provider class="col-md-6 mb-3" rules="required" v-slot="{ errors, classes }">
                <!-- 輸入框 -->
                <label for="firstName">Name</label>
                <input id="firstName" type="text" name="name" v-model="form.user.name"
                    class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
              <validation-provider class="col-md-6 mb-3" rules="required" v-slot="{ errors, classes }">
                <!-- 輸入框 -->
                <label for="phone">Phone</label>
                <input id="phone" type="number" name="phone" v-model="form.user.tel"
                    class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div class="row">
              <validation-provider class="col-md mb-3" rules="required|email" v-slot="{ errors, classes, passed }">
                <!-- 輸入框 -->
                <label for="email">Email</label>
                <input id="email" type="email" name="email" v-model="form.user.email" placeholder="you@example.com"
                    class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
                <span v-if="passed" class="valid-feedback">Email is correct</span>
              </validation-provider>
            </div>
            <div class="row">
              <validation-provider class="col-md mb-3" rules="required" v-slot="{ errors, classes }">
                <!-- 輸入框 -->
                <label for="address">Address</label>
                <input id="address" type="text" name="address" v-model="form.user.address" placeholder="1234 Main St"
                    class="form-control" :class="classes">
                <!-- 錯誤訊息 -->
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </validation-provider>
            </div>
            <div>
              <label for="comment">Comment</label>
              <textarea class="form-control" name="comment" v-model="form.message" id="comment" rows="4"></textarea>
            </div>

            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="same-address">
              <label class="custom-control-label" for="same-address">Shipping address is the same as my contact address</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info">
              <label class="custom-control-label" for="save-info">Save this information for next time</label>
            </div>
            <hr class="mb-4">
            <div class="text-right">
              <button class="btn btn-lg btn-info w-100" :disabled="invalid" type="submit">CONTINUE TO CHECKOUT</button>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkout',
  data () {
    return {
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    removeCartItem (id) {
      this.$store.dispatch('removeCartItem', id)
    },
    addCouponCode () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log('addCoupon', response)
        this.$store.dispatch('getCart')
        this.coupon_code = ''
      })
    },
    updateCart (items, status) {
      const item = items
      if (status === '+') {
        item.qty += 1
      } else if (status === '-') {
        item.qty -= 1
        if (item.qty === 0) {
          this.removeCartItem(item.id)
          return
        }
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const parm = {
        product_id: item.product.id,
        qty: item.qty
      }
      const deleteApi = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${item.id}`
      this.$http.post(url, { data: parm })
      this.$http.delete(deleteApi).then((response) => {
        if (response.data.success) {
          this.getCart()
          this.$store.dispatch('updateMessage', { message: '數量以更改', status: 'success' })
        }
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/`
      const vm = this
      const order = vm.form
      this.$http.post(api, { data: order }).then(response => {
        console.log('createOrder', response)
        if (response.data.success) {
          vm.$router.push(`paycheck/${response.data.orderId}`)
        }
        vm.isLoading = false
        this.$refs.dataForm.reset()
      })
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  mounted () {
    this.$store.dispatch('getCart')
  }
}
</script>

<style lang="scss" scoped>
.progressbar-container {
  width: 100%;
}
.progressbar {
  counter-reset: step;
  padding: 0;
  transform: translate(50px, 0px);
  @media (max-width: 992px) {
    transform: translate(20px, 0px);
  }
}
.progressbar li {
  list-style: none;
  display: inline-block;
  width: 30.33%;
  position: relative;
  text-align: center;
  cursor: pointer;
  color: #ABB2B9;
}
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height : 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: #fff;
  position: relative;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index : -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: #3498DB;
}
.progressbar li.active:before {
  border: 2px solid #3498DB;
  line-height : 26px;
}
.form-container{
  max-width: 80%;
  margin: 0 auto;
}
.cart_item-qty{
  display: flex;
  width: 84px;
  height: 30px;
  border: 1px solid #d8d9d8;
  line-height: 1;
  button{
    width: 33.33%;
    font-size: 18px;
    color: #919191;
    border: none;
    border-radius: 0;
  }
  span{
    width: 33.33%;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #919191;
    border: none;
    border-radius: 0;
  }
}
.addCoupon {
  text-decoration: line-through
}
</style>
