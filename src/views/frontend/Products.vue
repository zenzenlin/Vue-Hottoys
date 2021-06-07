<template>
  <div class="container-xl p-0">
    <div >
      <div class="banner-pic">
      </div>
    </div>
    <div class="container py-4">
      <div class="row">
        <div class="col-12 col-lg-2 mb-3">
          <div class="sidebar">
            <ul class="category-root">
              <li>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>POPULAR</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li @click.prevent="changeTab('classic')" :class="{'category-inner-active':prodCategory==='classic'}">
                    <a href="#">classic</a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>New</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li @click.prevent="changeTab('newin')" :class="{'category-inner-active':prodCategory==='newin'}">
                    <a href="#">New arrival</a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>MARVEL</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li @click.prevent="changeTab('ironman')" :class="{'category-inner-active':prodCategory==='ironman'}">
                    <a href="#">Iron man</a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>DC</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li @click.prevent="changeTab('batman')" :class="{'category-inner-active':prodCategory==='batman'}">
                    <a href="#">Batman</a>
                  </li>
                  <li @click.prevent="changeTab('wonderwoman')" :class="{'category-inner-active':prodCategory==='wonderwoman'}">
                    <a href="#">Wonderwoman</a>
                  </li>
                </ul>
              </li>
              <li>
                <div class="dropdown__header category-inner">
                  <li @click="changeTab('')">All Products</li>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-10">
          <div class="sortbar align-items-center">
            <div class="sortbar-select">
              <div class="sortbar-font">
                <span>
                  SORT BY
                  <svg width="20"  height="36"  viewBox="0 0 48 48"  data-icon="caret-down"
                    style="fill: rgb(151, 155, 167); stroke: rgb(151, 155, 167); stroke-width: 0; vertical-align: bottom;">
                    <path d="M24.21 33.173l12.727-12.728c.78-.78.78-2.048 0-2.828-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.9-9.9c-.78-.78-2.047-.78-2.827 0-.78.78-.78 2.047 0 2.828L24.21 33.173z"/>
                  </svg>
                </span>
                <div class="hidden">
                  <a href="" :class="{'inner-btn':currentSort==='Highest'}" @click.prevent="sortTable('Highest')">
                    <span>Price (Highest First)</span>
                  </a>
                  <a href="" :class="{'inner-btn':currentSort==='Lowest'}" @click.prevent="sortTable('Lowest')">
                    <span>Price (Lowest First)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4 py-3">
            <div class="col-lg-4 col-md-6 mb-4" v-for="item in filterPager" :key="item.id">
              <div class="card border-1 shadow">
                <div class="mdSize" style="height: 200px; background-size: cover; background-position: center; background-repeat: no-repeat; cursor: pointer"
                  :style="{backgroundImage: `url(${item.imageUrl})`}" @click="$router.push(`/product/${item.id}`)">
                </div>
                <div class="card-body">
                  <h5 class="card-title mb-5">
                    <a href="#" class="text-dark" @click="$router.push(`/product/${item.id}`)">{{ item.title }} </a>
                  </h5>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
                    <del class="h6" v-if="item.price">$ {{ item.origin_price }}</del>
                    <div class="h5 text-danger" v-if="item.price">$ {{ item.price }}</div>
                  </div>
                  <div class="d-flex mt-2">
                    <span class="badge badge-info mr-1">{{ item.category2 }}</span>
                    <span class="badge badge-info mr-auto">{{ item.category }}</span>
                    <i class="far fa-heart cursor" style="cursor: pointer"></i>
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button type="button" class="btn btn-outline-secondary btn-sm" @click="$router.push(`/product/${item.id}`)">
                    DETAIL
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(item.id, qty)">
                    BUY IT NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <pagination class="d-flex justify-content-center" :pages="pagination" @emitPages="getPages"></pagination>
        </div>
      </div>
      <button class="back-to-top" type="button" v-if="isVisible" @click="backToTop">
        <i class="fa fa-angle-up" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import { mapGetters } from 'vuex'
import $ from 'jquery'

export default {
  name: 'list',
  components: {
    pagination
  },
  data () {
    return {
      isVisible: false,
      scrollTop: '',
      products: [],
      pagination: {
        page_Size: 6,
        total_pages: '',
        current_page: '1',
        has_pre: false,
        has_next: true
      }
    }
  },
  methods: {
    toggleDropdown (event) {
      console.log(event.currentTarget.classList)
      event.currentTarget.classList.toggle('is-active')
    },
    sortTable (currentSort) {
      // let newSort = []
      const vm = this
      const newProducts = this.$store.state.products
      vm.products = newProducts.sort((a, b) => {
        const aPrice = a.price ? a.price : a.origin_price
        const bPrice = b.price ? b.price : b.origin_price
        if (currentSort === 'Highest') {
          return bPrice - aPrice
        } else {
          return aPrice - bPrice
        }
      })
      return vm.products
    },
    backToTop () {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing')
    },
    getProducts () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(api).then(response => {
        console.log('getProducts', response.data)
        vm.products = response.data.products
        vm.pagination.current_page = 1
        this.$store.dispatch('updateLoading', false)
      })
    },
    getPages (page = 1) {
      this.pagination.current_page = page
    },
    addToCart (id, qty) {
      this.$store.dispatch('addToCart', { id, qty })
    },
    changeTab (prodCategory) {
      this.$store.dispatch('changeTab', prodCategory)
      this.pagination.current_page = 1
    }
  },
  computed: {
    filterData () {
      const vm = this
      if (vm.prodCategory === '') {
        return vm.products
      } else {
        return vm.products.filter((item) => {
          return vm.prodCategory === '' ? item : item.category === vm.prodCategory || item.category2 === vm.prodCategory
        })
      }
    },
    filterPager () {
      const vm = this
      const dataSize = vm.filterData.length
      const pageSize = vm.pagination.page_Size
      const nowPage = vm.pagination.current_page
      vm.pagination.total_pages = Math.ceil(dataSize / pageSize)
      // 上一頁與下一頁邏輯
      nowPage > 1 ? vm.pagination.has_pre = true : vm.pagination.has_pre = false
      nowPage < vm.pagination.total_pages && (vm.pagination.has_next = true);
      (nowPage + 1) > vm.pagination.total_pages && (vm.pagination.has_next = false)
      return vm.filterData.filter((item, index) => {
        console.log(index < (nowPage * pageSize))
        // 資料區間 只有在兩邊都是True 時才會回傳 True
        return index < (nowPage * pageSize) && index >= (nowPage - 1) * pageSize
      })
    },
    ...mapGetters(['qty', 'prodCategory', 'currentSort'])
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      this.scrollTop = top
      if (top >= 100) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    })
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>
.banner-pic {
  background-image: url(../../assets/images/banner.jpeg);
  height: 150px;
  width: 100%;
  background-position: center center;
  font-family: monospace;
}
.sidebar {
  border-radius: 8px;
  border: 1px solid #e0e4e9;
  overflow: hidden;
  .category-root {
    list-style: none;
    padding: 0;
    div {
      padding: 8px 10px;
    }
    cursor: pointer;
    .category-inner{
      list-style: none;
      padding: 0;
      li{
        padding: 4px 12px;
      }
      a {
        padding: 0px 14px;
        text-decoration: none;
        color: #26282a;
      }
      li:hover{
        background: #f1f1f5;
      }
    }
    .category-inner-active{
      background: #f1f1f5;
    }
  }
}
.dropdown__header {
  font-weight: 600;
  position: relative;
  i.fa {
    position: absolute;
    right: 10px;
    transform: translateY(30%);
    transition: opacity .3s;
    &.fa-angle-up {
      opacity: 0;
    }
  }
  &.is-active {
    i.fa {
      &.fa-angle-up {
        opacity: 1;
      }
      &.fa-angle-down {
        opacity: 0;
      }
    }
    + .dropdown__content {
      height: 0;
      opacity: 0;
      display: none;
    }
  }
}
.dropdown__content {
  height: auto;
  opacity: 1;
  transition: opacity .3s;
  display: block;
}
.sortbar{
  height: 38px;
  margin: 0 0 24px 0;
  background: #f1f1f5;
  border-radius: 8px;
  box-sizing: border-box;
  line-height: 36px;
  padding-left: 8px;
  .sortbar-select{
    display: flex;
    justify-content: flex-end;
    line-height: 36px;
    font-size: 14px;
    padding: 0 15px 0 0;
    position: relative;
    .sortbar-font{
      font-weight: normal;
      cursor: pointer;
      &:hover>div{
        opacity: 1;
      }
    }
    .hidden{
      border: 1px solid #e0e4e9;
      display: flex;
      flex-direction: column;
      z-index: 20;
      opacity: 0;
      background: white;
      min-width: auto;
      position: absolute;
      right: 0;
      a{
        color: #26282a;
        text-decoration: none;
        padding: 4px 10px;
        &:hover{
          background: #f1f1f5;
        }
      }
      .inner-btn{
        background: #f1f1f5;
      }
    }
  }
}
.item-list{
  display: inline-block;
  width: 100%;
  .item-box{
    width: 31.33%;
    display: inline-block;
    vertical-align: top;
    padding: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 2px hsl(28deg 37% 90% / 70%);
    border-radius: 3px;
    margin: 0 0 10px 10px;
    font-size: 16px;
    .item-pic-wrap{
      display: block;
      position: relative;
      width: 100%;
      padding-bottom: 100%;
      overflow: hidden;
      cursor: pointer;
      .item-pic{
        border: 1px solid #000;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 150%;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url(../../assets/images/batman.jpg);
      }
    }
    .item-name{
      text-align: center;
      font-size: 20px;
      padding: 10px 0;
    }
  }
}
.price{
  position: relative;
  text-align: right;
  padding: 0 10px;
  .origin{
    position: absolute;
    left: 5%;
    bottom: 0;
    color: #b3b3b3;
    text-decoration: line-through;
  }
  .sale{
    font-size: 20px;
    color: red;
  }
}
.card-title{
  height: 40px;
  margin-bottom: 10px;
}
.back-to-top {
  position: fixed;
  right: 22px;
  bottom: 82px;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: #fff;
  padding: 0 14px;
  z-index: 2;
  border: 1px solid #000;
  opacity: .5;
}
@media screen and (min-width:768px) and (max-width:992px){
  // .card-title{
  //   height: 160px;
  // }
  .mdSize{
    height: 180px !important;
  }
}
@media (max-width:768px){
  .mdSize{
    height: 330px !important;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
// @media (max-width:768px){
// }
</style>
