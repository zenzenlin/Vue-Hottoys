<template>
  <div  >
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-warning" @click="openModal(true)">建立新優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="250">名稱</th>
          <th width="250">折扣 %</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ item.due_date }}</td>
          <td>
            <span v-if="item.is_enabeld==1" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm mr-1" @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <pagination :pages="pagination" @emitPages="getCoupons"></pagination>
    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-warning text-dark">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title"
              v-model="tempCoupon.title"
                placeholder="請輸入標題">
            </div>

            <div class="form-group">
              <label for="code">優惠碼</label>
              <input type="text" class="form-control" id="code"
              v-model="tempCoupon.code"
                placeholder="請輸入優惠碼">
            </div>

            <div class="form-group">
              <label for="due_date">到期日</label>
              <input type="date" class="form-control" id="due_date"
              v-model="tempCoupon.due_date"
                placeholder="請輸入到期日">
            </div>

            <div class="form-group">
              <label for="percent">折扣 %</label>
              <input type="number" class="form-control" id="percent"
              v-model="tempCoupon.percent"
                placeholder="請輸入折扣百分比">
            </div>

            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                v-model="tempCoupon.is_enabeld"
                :true-value="1"
                :false-value="0"
                  id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{ tempCoupon.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import pagination from './pagination'

export default {
  components: {
    pagination
  },
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isNew: false,
      isLoading: false,
      pagination: {}
    }
  },
  filters: {
    date (n) {
      const date = new Date(n * 1000)
      return date.toLocaleDateString()
    }
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      const vm = this
      console.log(process.env.VUE_APP_API, process.env.VUE_APP_CUSTOMPATH)
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.isLoading = false
        vm.coupons = response.data.coupons
        // response.data.products.forEach(item => {
        //   if(!item.origin_price){
        //     item.origin_price = 0;
        //   }
        //   if(!item.price){
        //     item.price = 0;
        //   }
        //   vm.products.push(item)
        vm.pagination = response.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
        this.isNew = true
      } else {
        this.tempCoupon = Object.assign({}, item)
        this.isNew = false
      }
      $('#couponModal').modal('show')
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      let httpMethod = 'post'
      const vm = this
      // 如果isNew是false則要修改api路徑及http方法
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          console.log('update success')
          $('#couponModal').modal('hide')
          vm.getCoupons()
        } else {
          console.log('update fail')
          $('#couponModal').modal('hide')
          vm.getCoupons()
        }
        // vm.products = response.data.products
      })
    },
    openDeleteModal (item) {
      this.tempCoupon = Object.assign({}, item)
      $('#delCouponModal').modal('show')
    },
    deleteCoupon () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      this.$http.delete(api).then((response) => {
        $('#delCouponModal').modal('hide')
        vm.getCoupons()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
