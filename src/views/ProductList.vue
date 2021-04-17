<template>
  <div  >
    <loading :active.sync="isLoading"></loading>
    <!-- <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">建立新的產品</button>
    </div> -->
    <table class="table mt-5">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="230">訂單ID</th>
          <th>購買品項</th>
          <th width="120">應付金額</th>
          <th width="120">是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>{{ item.create_at | date }}</td>
          <td>{{ item.id }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total}}</td>
          <td>
            <b v-if="item.is_paid" class="text-success">已付款</b>
            <p v-else class="text-gray">尚未付款</p>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <pagination :pages="pagination" @emitPages="getProducts"></pagination>
    <!-- Modal -->
    <!-- <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                  v-model="tempProduct.imageUrl"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUpLoading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadImg">
                </div>
                <img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid"  :src="tempProduct.imageUrl" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title"
                  v-model="tempProduct.title"
                    placeholder="請輸入標題">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                    v-model="tempProduct.category"
                      placeholder="請輸入分類">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                    v-model="tempProduct.unit"
                      placeholder="請輸入單位">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                    <input type="number" class="form-control" id="origin_price"
                    v-model="tempProduct.origin_price"
                      placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" id="price"
                    v-model="tempProduct.price"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                  v-model="tempProduct.description"
                    placeholder="請輸入產品描述"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                  v-model="tempProduct.content"
                    placeholder="請輸入產品說明內容"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                    v-model="tempProduct.is_enabeld"
                    :true-value="1"
                    :false-value="0"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
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
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">確認刪除</button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import $ from 'jquery'
import pagination from '../components/pagination'

export default {
  components: {
    pagination
  },
  data () {
    return {
      orders: [],
      // tempProduct: {},
      // isNew: false,
      isLoading: false,
      pagination: {},
      status: {
        fileUpLoading: false
      }
    }
  },
  filters: {
    date (n) {
      const date = new Date(n * 1000)
      return date.toLocaleDateString()
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      const vm = this
      console.log(process.env.VUE_APP_API, process.env.VUE_APP_CUSTOMPATH)
      vm.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data.orders)
        vm.isLoading = false
        vm.orders = response.data.orders
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
      // 如果是新增的話，tempProduct為空物件，isNew也是true，代表為新增
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        // 若不是新的，因為要編輯所以tempProduct是傳入的物件，isNew也是false
        // 避免this.tempProduct等於傳進來的item，因此給他另一個物件Object.assign({}, item)裡面放item
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    updateProduct () {
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      const vm = this
      // 如果isNew是false則要修改api路徑及http方法
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }
      console.log(process.env.VUE_APP_API, process.env.VUE_APP_CUSTOMPATH)
      this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data)
        if (response.data.success) {
          console.log('update success')
          $('#productModal').modal('hide')
          vm.getProducts()
        } else {
          console.log('update fail')
          $('#productModal').modal('hide')
          vm.getProducts()
        }
        // vm.products = response.data.products
      })
    },
    openDeleteModal (item) {
      this.tempProduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    deleteProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      this.$http.delete(api).then((response) => {
        $('#delProductModal').modal('hide')
        vm.getProducts()
      })
    },
    uploadImg () {
      const uploadedFile = this.$refs.files.files[0]
      const vm = this
      const formData = new FormData()
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      formData.append('file-to-upload', uploadedFile)
      vm.status.fileUpLoading = true
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        vm.status.fileUpLoading = false
        console.log(response.data)
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
        } else {
          this.$bus.$emit('messsage:push', response.data.message, 'danger')
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
