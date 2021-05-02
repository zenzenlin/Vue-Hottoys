<template>
  <div>
    <!-- <loading :active.sync="isLoading"></loading> -->
    <div class="container py-5">
      <div class="progressbar-container">
        <ul class="progressbar">
          <li class="active">INFO</li>
          <li>CONFIRM</li>
          <li>PAY</li>
        </ul>
      </div>
      <div class="mt-5">
        <div class="cart-frame">
          <form class="col-md" @submit.prevent="payOrder">
            <table class="table">
              <!-- <thead>
                <th>品名</th>
                <th>數量</th>
                <th>小計</th>
              </thead> -->
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td>
                    <div class="" style="width: 150px; height: 110px; background-size: cover; background-position: center; background-repeat: no-repeat;"
                    :style="{backgroundImage: `url(${item.product.imageUrl})`}"></div>
                  </td>
                  <td class="align-middle h4">{{ item.product.title }}
                  </td>
                  <td class="align-middle">{{ item.qty }} {{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right h5">TOTAL</td>
                  <td class="text-right h5">{{ order.total }}</td>
                </tr>
              </tfoot>
            </table>

            <table class="table">
              <tbody>
                <tr>
                  <th width="150">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>收件人電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th>收件人地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>備註</th>
                  <td>{{ order.user.commment }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                    <span v-else class="text-success">付款完成</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-center" v-if="order.is_paid === false">
              <button class="btn btn-danger btn-lg">確認付款去</button>
            </div>
            <div class="text-center" v-if="order.is_paid === true">
              <router-link class="btn btn-info" to="/list">繼續逛逛</router-link>
            </div>
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
  line-height : 28px;
  border: 1px solid;
  // color: #808080;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: #82E0AA;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  color: #808080;
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
  background-color: white;
  border: 2px solid #3498DB;
  line-height : 26px;
}
.progressbar li.finished + li:after {
  background-color: #82E0AA;
}
.progressbar li:last-child:before {
  border-color: #ddd;
  background-color: white;
}
.progressbar li.finished:before {
  color: #808080;
}
.form-container{
  max-width: 80%;
  margin: 0 auto;
}

</style>
