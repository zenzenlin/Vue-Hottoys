<template>
  <div class="container py-5">
    <div class="progressbar-container">
      <ul class="progressbar">
        <li class="active">INFO</li>
        <li>SHIP</li>
        <li>PAY</li>
      </ul>
    </div>
    <!-- <form class="form-container">
      <div class="form-row">
        <div class="form-group form-floating col-md-6">
          <label for="inputFirstName4">Name</label>
          <input type="text" class="form-control" placeholder="First name" id="inputFirstName4" required="" autofocus="">
        </div>
        <div class="form-group form-floating col-md-6 pt-2">
          <label for="inputLastName4"></label>
          <input type="text" class="form-control" placeholder="Last name" id="inputLastName4" required="">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Address">
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputPhone">Phone</label>
          <input type="number" class="form-control" id="inputPhone">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <router-link to="/shipping">
        <button type="submit" class="btn btn-lg btn-info">Continue to shipping</button>
      </router-link>
    </form> -->
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
            <span class="text-muted text-right">${{item.total}}</span>
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
        <form ref="dataForm" @submit.prevent="createOrder">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value=""
              :class="{'is-invalid' : errors.has('name')}"
              v-model="form.user.name"
              v-validate="'required'">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="">
              <div class="invalid-feedback" required>
                Valid last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email <span class="text-muted">(Optional)</span></label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com"
            :class="{'is-invalid' : errors.has('email')}"
            v-model="form.user.email"
            v-validate="'required|email'" required>
            <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St"
            :class="{'is-invalid' : errors.has('address')}"
            v-model="form.user.address"
            v-validate="'required'" required>
            <span class="text-danger" v-if="errors.has('address')">Please enter your shipping address.</span>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <label for="inputPhone">Phone</label>
              <input type="number" class="form-control" id="inputPhone" v-model="form.user.tel">
            </div>
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

          <!-- <h4 class="mb-3">Payment</h4> -->

          <!-- <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
              <label class="custom-control-label" for="credit">Credit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
              <label class="custom-control-label" for="debit">Debit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
              <label class="custom-control-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div> -->
          <!-- <hr class="mb-4"> -->
          <div class="text-right">
            <button class="btn btn-lg btn-info w-100" type="submit">CONTINUE TO SHOPPING</button>
          </div>
        </form>
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
      vm.isLoading = true
      this.$http.post(api, { data: coupon }).then((response) => {
        console.log('addCoupon', response)
        this.$store.dispatch('getCart')
        vm.isLoading = false
      })
    },
    updateCart (items, status) {
      const item = items
      switch (status) {
        case '+':
          item.qty += 1
          break
        case '-':
          item.qty -= 1
          break
        default:
          break
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
</style>
