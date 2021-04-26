<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <main>
      <div class="container">
        <div class="banner-pic d-flex">
        </div>
      </div>
      <div class="container py-4">
        <div class="row">
          <div class="col-12 col-lg-2 mb-3">
            <div class="sidebar">
              <ul class="category-root">
                <li>
                  <div class="dropdown__header" @click="toggleDropdown($event)">
                    <span>強打活動</span>
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
                    <span>New in</span>
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
                <!-- <li>
                  <div class="d-flex justify-content-between align-items-center category-font">DC
                    <span class="arrow"></span>
                  </div>
                  <ul class="category-inner">
                    <li @click.prevent="changeTab('batman')" :class="{'category-inner-active':prodCategory==='batman'}">
                      <a href="#">Batman</a>
                    </li>
                    <li @click.prevent="changeTab('wonderwoman')" :class="{'category-inner-active':prodCategory==='wonderwoman'}">
                      <a href="#">Wonderwoman</a>
                    </li>
                  </ul>
                </li> -->
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
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-10">
            <div class="sortbar align-items-center">
              <span class="sortbar-result"></span>
              <div class="sortbar-select">
                <div class="sortbar-btn-first">
                  <div class="show">
                    <span class="">
                      綜合排序
                      <svg
                        class=""
                        width="20"
                        height="36"
                        viewBox="0 0 48 48"
                        data-icon="caret-down"
                        style="fill: rgb(151, 155, 167); stroke: rgb(151, 155, 167); stroke-width: 0; vertical-align: bottom;">
                        <path
                          d="M24.21 33.173l12.727-12.728c.78-.78.78-2.048 0-2.828-.78-.78-2.047-.78-2.828 0l-9.9 9.9-9.9-9.9c-.78-.78-2.047-.78-2.827 0-.78.78-.78 2.047 0 2.828L24.21 33.173z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="hidden">
                    <span class="inner-btn">
                      <svg
                        class=""
                        width="16"
                        height="36"
                        viewBox="0 0 48 48"
                        data-icon="checkmark"
                        style="fill: rgb(122, 77, 255); stroke: rgb(122, 77, 255); stroke-width: 0; vertical-align: bottom;">
                        <path d="M44.414 13.566c.78-.78.78-2.047 0-2.828-.78-.78-2.047-.78-2.826 0L18.98 33.344 8.374 22.738c-.78-.78-2.048-.78-2.828 0-.78.78-.78 2.047 0 2.828L18.98 39l25.434-25.434z"/></svg>
                      <span class="">綜合排序</span>
                    </span>
                    <a href="" class="">
                      <span class="">價格低到高</span>
                    </a>
                    <a href="" class="">
                      <span class="">價格高到低</span>
                    </a>
                  </div>
                </div>
                <!-- <a href="" class="sortbar-btn">價格低到高</a>
                <a href="" class="sortbar-btn">價格高到低</a> -->
              </div>
            </div>
            <div class="row mt-4 py-3">
              <div class="col-md-4 mb-4" v-for="item in filterData" :key="item.id">
                <div class="card border-1 shadow">
                  <div style="height: 200px; background-size: contain; background-position: center; background-repeat: no-repeat; cursor: pointer"
                    :style="{backgroundImage: `url(${item.imageUrl})`}" @click="$router.push(`/product/${item.id}`)">
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="#" class="text-dark" @click="$router.push(`/product/${item.id}`)">{{ item.title }} </a>
                    </h5>
                    <!-- <p class="card-text">{{ item.content }}</p> -->
                    <div class="d-flex justify-content-between align-items-baseline">
                      <div class="h5" v-if="!item.price">{{ item.origin_price }}</div>
                      <del class="h6" v-if="item.price">$ {{ item.origin_price }}</del>
                      <div class="h5 text-danger" v-if="item.price">$ {{ item.price }}</div>
                    </div>
                    <div class="d-flex mt-2">
                      <span class="badge badge-info mr-auto">{{ item.category }}</span>
                      <i class="far fa-heart cursor" style="cursor: pointer"></i>
                    </div>
                  </div>
                  <div class="card-footer d-flex">
                    <button type="button" class="btn btn-outline-secondary btn-sm" @click="$router.push(`/product/${item.id}`)">
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addToCart(item.id)">
                      立即購買
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <pagination class="d-flex justify-content-center" :pages="pagination" @emitPages="getProducts"></pagination>

            <!-- <div class="item-list">
              <div class="item-box">
                <div>
                  <a href="" class="item-pic-wrap">
                    <div class="item-pic"></div>
                  </a>
                  <div class="item-name">123</div>
                </div>
              </div>
              <div class="item-box">
                <div>
                  <a href="" class="item-pic-wrap">
                    <div class="item-pic"></div>
                  </a>
                  <div class="item-name">123</div>
                </div>
              </div>
              <div class="item-box">
                <div>
                  <router-link to="/SingleProduct" class="item-pic-wrap">
                    <div class="item-pic"></div>
                  </router-link>
                  <div class="item-name">123</div>
                  <div class="price">
                    <div class="origin">7500</div>
                    <div class="sale">6000</div>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import pagination from '../components/pagination'

export default {
  name: 'list',
  components: {
    pagination
  },
  data () {
    return {
      products: [],
      product: {},
      coupon_code: '',
      prodCategory: '',
      searchFilter: '',
      searchResult: [],
      pagination: {},
      isLoading: false
    }
  },
  methods: {
    getProducts (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      vm.isLoading = true
      this.$http.get(api).then(response => {
        console.log('getProducts', response.data)
        vm.products = response.data.products
        vm.isLoading = false
        vm.pagination = response.data.pagination
      })
    },
    changeTab (prodCategory) {
      const vm = this
      vm.prodCategory = prodCategory
      vm.searchFilter = ''
      vm.searchResult = []
      console.log(prodCategory)
      // vm.pagination.current_page=1;
    },
    toggleDropdown (event) {
      event.currentTarget.classList.toggle('is-active')
    }
  },
  computed: {
    filterData () {
      const vm = this
      // if (vm.searchFilter || vm.searchResult.length) {
      //   return vm.searchResult
      // } else {
      // console.log(this.product)
      return vm.products.filter((item) => {
        return vm.prodCategory === '' ? item : item.category === vm.prodCategory
      })
      // }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss">
.banner-pic {
  background-image: url(../assets/images/banner.jpeg);
  height: 150px;
  width: 100%;
  background-position: center center;
  font-family: monospace;
  // background-repeat: no-repeat;
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
  display: flex;
  .sortbar-result{
    // display: inline-block;
    margin-right: auto;
    line-height: 36px;
    padding-left: 8px;
  }
  .sortbar-select{
    display: flex;
    line-height: 36px;
    font-size: 14px;
    .sortbar-btn-first{
      position: relative;
      display: inline-block;
      padding: 0 15px 0 0;
      cursor: pointer;
    }
    .sortbar-btn{
      text-decoration: none;
      padding: 0 12px 0 12px;
      line-height: 36px;
      color: #26282a;
      &:hover{
        box-shadow: #979ba7 0 2px 0 0  ;
      }
    }
  }
}
.hidden{
  border: 1px solid #e0e4e9;
  display: flex;
  flex-direction: column;
  width: 100px;
  opacity: 0;
  z-index: 20;
  background: white;
  position: absolute;
  a{
    color: #26282a;
    text-decoration: none;
    padding: 0 8px;
    &:hover{
      background: #f1f1f5;
    }
  }
  .inner-btn{
    display: inline-block;
    padding: 0 8px;
    &:hover{
      background: #f1f1f5;
    }
  }
}
.sortbar-btn-first:hover>.hidden{
  opacity: 1;
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
        background-image: url(../assets/images/batman.jpeg);
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
</style>
