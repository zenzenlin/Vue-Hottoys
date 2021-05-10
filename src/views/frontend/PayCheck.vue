<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="container py-5">
      <div class="progressbar-container">
        <ul class="progressbar">
          <li class="finished">INFO</li>
          <li class="active">CONFIRM</li>
          <li>PAY</li>
        </ul>
      </div>
      <div class="mt-5">
        <div class="cart-frame">
          <form class="col" @submit.prevent="payOrder">
            <div class="row" v-for="item in order.products" :key="item.id">
              <div class="col-md-5 p-3">
                <div style="height: 250px; background-size: cover; background-position: center; background-repeat: no-repeat;"
                  :style="{backgroundImage: `url(${item.product.imageUrl})`}">
                </div>
              </div>
              <div class="col-md-7 text-center d-flex flex-column justify-content-center">
                <span class="h4 py-2">{{ item.product.title }}</span>
                <span class="text-muted">{{ item.qty }} {{ item.product.unit }}</span>
                <span class="text-muted py-2">$ {{ item.final_total }}</span>
              </div>
            </div>
            <hr>
            <div class="text-right p-3">
              <span class="h5">TOTAL</span>
              <span class="ml-5 h3 text-danger">$ {{ order.total }}</span>
            </div>
            <table class="table">
              <tbody>
                <tr>
                  <th width="150">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>Comment</th>
                  <td>{{ order.user.commment }}</td>
                </tr>
                <tr>
                  <th>Payment Status</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-danger">Unpaid</span>
                    <span v-else class="text-success">Paid</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center" v-if="order.is_paid === false">
              <button class="btn btn-danger btn-lg">CONFIRM AND PAY</button>
            </div>
            <!-- <div class="text-center" v-if="order.is_paid === true">
              <router-link class="btn btn-info" to="/list">Continue Shopping</router-link>
            </div> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      order: {
        user: {}
      },
      isLoading: false
    }
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCart')
    },
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        console.log('getOrder', response.data)
        vm.order = response.data.order
        vm.isLoading = false
      })
    },
    payOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.isLoading = true
      this.$http.post(api).then(response => {
        if (response.data.success) {
          vm.getProducts()
          console.log('payOrder', response.data)
          vm.$router.push('/finishpayment')
          vm.$bus.$emit('messsage:push', response.data.message, 'warning')
          vm.isLoading = false
        }
      })
    }
  },
  mounted () {
    this.$store.dispatch('getCart')
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.progressbar-container {
  width: 100%;
}
.progressbar {
  counter-reset: step;
}
// 數字跟文字
.progressbar li {
  list-style: none;
  display: inline-block;
  width: 30.33%;
  position: relative;
  text-align: center;
  cursor: pointer;
  color: #808080;
}
// 三個圓圈
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height : 28px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: block;
  margin: 0 auto 10px auto;
  background-color: #ffff9a;
}
// 背景斜線
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #82E0AA;
  top: 15px;
  left: -50%;
  z-index : -1;
}
// info 前斜線
.progressbar li:first-child:after {
  content: none;
}
// info 完成出現打勾
.progressbar li.finished:before {
  content: "";
  background-color: #fff;
  height: 30px;
  background-size: cover;
  background-image: url(../../assets/images/check.png);
}
// pay
.progressbar li:last-child {
  color: #ddd;
  // pay 去掉背景
  &:before {
    color: #ddd;
    border-color: #ddd;
    background-color: white;
  }
  // pay 前斜線
  &:after {
    background-color: #ddd;
    height: 1px;
  }
}
.form-container{
  max-width: 80%;
  margin: 0 auto;
}

</style>
