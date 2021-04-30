<template>
  <div class="container main">
    <div class="row">
      <div class="col-md-7">
        <div class="content-watch">
          <div class="img-fluid img-style mt-5" style="height: 400px; background-size: cover; background-position: center; background-repeat: no-repeat;"
            :style="{backgroundImage: `url(${product.imageUrl})`}">
          </div>
          <!-- <img :src="product.imageUrl" class="img-fluid" alt="產品圖片" /> -->
          <!-- <div class="img-list">
            <span class="img-hover">
              <img class="img" />
            </span>
            <span class="img-hover">
              <img class="img" />
            </span>
            <span class="img-hover">
              <img class="img" />
            </span>
          </div> -->
        </div>
      </div>
      <div class="col-md-5">
        <div class="parameter">
          <h1 class="display-5">{{ product.title }}</h1>
          <hr />
          <div class="detail py-3">
            <h5 class="mb-3">{{ product.description }}</h5>
            <p>{{ product.content }}</p>
          </div>
          <hr />
          <div class="price d-flex justify-content-between align-items-baseline my-3">
            <span style=" text-decoration: line-through">$ {{ product.origin_price }}</span>
            <div class="text-right mr-3">
              <h2 class="d-inline text-danger"><span class="h4 mr-2">$</span>{{ product.price }}</h2>
            </div>
          </div>
          <div class="pt-2">
            <select name="qty" id="qty" class="form-control" v-model="qty">
              <option v-for="qty in 5" :value="qty" :key="qty">
                {{ qty }}
              </option>
            </select>
          </div>
          <div class="mt-3 px-3">
            <div class="row">
              <button class="btn btn-lg btn-danger w-100" @click="addToCart(product.id, qty)">ADD TO CART</button>
            </div>
          </div>
          <div class="sidebar">
            <ul class="category-root">
              <li>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>The features</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li>
                    <div class="pt-3">
                      <small>
                        - Authentic and detailed fully realized likeness of Batman/ Bruce Wayne in The Dark Knight Rises
                        <br />- One (1) newly developed Batman helmeted head sculpt with separate rolling eyeballs features and four (4) interchangeable lower part of faces capturing his classic facial expressions
                        <br />- One (1) newly developed Batman helmeted head sculpt with LED light up function on eyes and interchangeable faces techniques design (battery operated)
                        <br />- One (1) newly developed head sculpt of Christian Bale as Bruce Wayne in the movie with accurate facial expression, detailed hair, wrinkles and skin texture
                        <br />- Approximately 32 cm tall
                      </small>
                    </div>
                  </li>
                </ul>
                <div class="dropdown__header" @click="toggleDropdown($event)">
                  <span>Warning</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                  <i class="fa fa-angle-up" aria-hidden="true"></i>
                </div>
                <ul class="dropdown__content category-inner">
                  <li>
                    <div class="pt-3">
                      <small>
                        - Authentic and detailed fully realized likeness of Batman/ Bruce Wayne in The Dark Knight Rises
                        <br />- One (1) newly developed Batman helmeted head sculpt with separate rolling eyeballs features and four (4) interchangeable lower part of faces capturing his classic facial expressions
                        <br />- One (1) newly developed Batman helmeted head sculpt with LED light up function on eyes and interchangeable faces techniques design (battery operated)
                        <br />- One (1) newly developed head sculpt of Christian Bale as Bruce Wayne in the movie with accurate facial expression, detailed hair, wrinkles and skin texture
                        <br />- Approximately 32 cm tall
                      </small>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'singleproduct',
  data () {
    return {
      isShow: true,
      active: true,
      qty: 1
    }
  },
  methods: {
    toggleDropdown (event) {
      event.currentTarget.classList.toggle('is-active')
    },
    clickHandler (val) {
      const num = document.querySelectorAll('[data-one]')
      num.forEach((item) => {
        const x = parseInt(item.getAttribute('data-one'))
        if (val === x && this.isShow) {
          this.isShow = false
          item.classList.add('summary-content')
        } else if (val === x && !this.isShow) {
          this.isShow = true
          item.classList.remove('summary-content')
        }
      })
    },
    getProduct (productId) {
      this.$store.dispatch('getProduct', productId)
    },
    addToCart (id, qty) {
      this.$store.dispatch('addToCart', { id, qty })
    },
    getCart () {
      this.$store.dispatch('getCart')
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    cart () {
      return this.$store.state.cart
    }
  },
  created () {
    // this.productId = this.$route.params.productId
    this.getProduct(this.$route.params.productId)
    // this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.main {
  margin: auto;
  padding: 0px 20px;
  // margin-bottom: 50px;
  background: #ebebeb;
}
hr {
  background: #e1e1e1;
}
.img {
  background-image: url(../assets/images/batman.jpg);
  // width: 100%;
  height: 600px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.img-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 17px;
  margin-bottom: 17px;
  .img-hover {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid #fff;
    margin: 0 2px 2px 0;
    cursor: pointer;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.parameter {
  padding-top: 70px;
}
.parameter h6 {
  font-size: 2em;
  font-weight: 400;
  letter-spacing: 3px;
}
.parameter h1 {
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: -20px;
}
.parameter p {
  color: #555;
}
.sidebar {
  overflow: hidden;
  .category-root {
    list-style: none;
    padding: 0;
    div {
      padding: 8px 10px;
    }
    .category-inner{
      list-style: none;
      padding: 0;
      li{
        padding: 4px 12px;
      }
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
      height: auto;
      opacity: 1;
      display: block;
    }
  }
}
.dropdown__content {
  height: 0;
  opacity: 0;
  display: none;
}

@media screen and (min-width:768px) and (max-width:992px){
  .img-style{
    height: 300px !important;
  }
}
</style>
