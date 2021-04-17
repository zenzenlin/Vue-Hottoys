<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="gap-setting mt-5">
      <!-- <div class="process-step clear-space">
        <div class="step">1 填寫資訊</div>
        <div class="step" :class="{'active': order.is_paid == false}">2 確認付款</div>
        <div class="step" :class="{'active': order.is_paid}">3 完成訂單</div>
      </div> -->
      <div class="cart-frame">
        <form class="col-md-8" @submit.prevent="payOrder">
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th>小計</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">總計</td>
                <td class="text-right">{{ order.total }}</td>
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
                <th>付款狀態</th>
                <td>
                  <span v-if="!order.is_paid">尚未付款</span>
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
          vm.$bus.$emit('messsage:push', response.data.message, 'warning')
          vm.isLoading = false
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getProducts()
  }
}
</script>

<style lang="scss">

</style>
