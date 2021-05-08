<template>
  <main role="main">
    <div class="container-fluid p-0">
      <div class="banner-style banner"></div>
        <div class="container">
          <div class="py-3">
            <h1 class="font-family">Hot toys.</h1>
            <h5 class="text-muted p-3">Hot Toys is the leader in the 1/6th collectible industry and has led the quality of collectible figures development to another climax over the past years. Moreover, Hot Toys has obtained the patent for its innovation of Parallel Eyeball Rolling System (PERS) and Interchangeable Faces Techniques (IFT) for its DX series, which has further increased the likeness of the collectible figures.</h5>
          </div>
        </div>
      </div>
      <div class="container marketing">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="img-style img1" style="height: 100%" alt="">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="font-family">Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <router-link class="btn btn-lg btn-warning" href="#" to="/products">Sign up today</router-link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="img-style img2" style="height: 100%" alt="">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="font-family">Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <router-link class="btn btn-lg btn-primary" href="#" to="/products">Learn more</router-link>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="img-style img3" style="height: 100%" alt="">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1 class="font-family">One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <router-link class="btn btn-lg btn-danger" href="#" to="/products">Browse gallery</router-link>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- START THE FEATURETTES -->
      <section class="">
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7 d-flex flex-column justify-content-center">
            <h2 class="featurette-heading mt-0">Iron Man <span class="text-muted"> - Tony Stark</span></h2>
            <p class="lead">"My armor, it was never a distraction or a hobby, it was a cocoon. And now, I'm a changed man. You can take away my house, all my tricks and toys. But one thing you can't take away... I am Iron Man." ―Tony Stark</p>
          </div>
          <div class="col-md-5">
            <img class="main-img-style img1" alt="">
          </div>
        </div>
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7 order-md-2 d-flex flex-column justify-content-center">
            <h2 class="featurette-heading mt-0">Batman <span class="text-muted"> -  Bruce Wayne</span></h2>
            <p class="lead">"It's not who I am underneath, but it's what I do that defines me." -Bruce Wayne</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="main-img-style img2" alt="">
          </div>
        </div>
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7 d-flex flex-column justify-content-center">
            <h2 class="featurette-heading mt-0">Wonder Woman <span class="text-muted"> - Diana Prince</span></h2>
            <p class="lead">“It’s Not About What You Deserve; It’s About What You Believe. And I Believe In Love.” -Diana Prince</p>
          </div>
          <div class="col-md-5">
            <img class="main-img-style img3" alt="">
          </div>
        </div>
      </section>
      <!-- /END THE FEATURETTES -->
      <div class="my-5">
        <div class="text-center pt-5">
          <h2 class="d-inline featurette-heading hot-style">WHAT TOY'S HOT!<span></span></h2>
        </div>
        <div class="row mt-4 py-3">
          <div class="col-lg-4 col-md-4 mb-4" v-for="item in filterData" :key="item.id">
            <div class="shadow rounded-lg">
              <div class="mdSize rounded-top-lg" style="border-radius: 5px 5px 0 0; height: 200px; background-size: cover; background-position: center; background-repeat: no-repeat; cursor: pointer"
                :style="{backgroundImage: `url(${item.imageUrl})`}" @click="$router.push(`/product/${item.id}`)">
              </div>
              <div class="">
                <h5 class="p-3">
                  <a href="#" class="text-dark" @click="$router.push(`/product/${item.id}`)">{{ item.title }} </a>
                </h5>
                <div class="d-flex align-items-baseline justify-content-center">
                  <del class="text-muted" v-if="item.price">$ {{ item.origin_price }}</del>
                  <div class="h4 text-danger" v-if="item.price">$ {{ item.price }}</div>
                </div>
              </div>
              <div class="text-center pb-3">
                <button type="button" class="btn btn-info" @click="addToCart(item.id, qty)">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    },
    addToCart (id, qty) {
      this.$store.dispatch('addToCart', { id, qty })
    }
  },
  computed: {
    filterData () {
      const vm = this
      return vm.products.filter((item) => {
        return item.category === 'marvel'
      })
    },
    ...mapGetters(['products', 'qty'])
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style lang="scss" scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}
/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}
/* Declare heights because of positioning of img element */
.carousel-item {
  height: 40rem;
}
.img-style {
  width: 100%;
  background: black;
  opacity: 0.9;
  height: 1000px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.main-img-style{
  width: 100%;
  height: 310px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.img1{
  background-image: url(../../assets/images/IRONMAN.jpg);
}
.img2{
  background-image: url(../../assets/images/batman.jpg);
}
.img3{
  background-image: url(../../assets/images/wonderwoman.jpg);
}
.banner-style{
  max-width: 100%;
  height: 300px;
}
.banner{
  background-image: url(../../assets/images/hot-toys-wonder-woman-background.jpeg);
  background-position: center center;
  @media (max-width: 992px){
    background-position: left;
  }
}
/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}
/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.hot-style {
  position: relative;
  letter-spacing: 10px;
  font-size: 60px;
  span::before {
    content: "";
    position: absolute;
    // display: ;
    width: 100%;
    left: 0;
    bottom: 10px;
    height: 10px;
    z-index: -1;
    background-color: rgb(140, 242, 237);
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
</style>
