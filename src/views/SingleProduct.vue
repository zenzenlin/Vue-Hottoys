<template>
  <div class="container fluid main">
    <div class="row">
      <div class="col-md-7">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">batman</li>
          </ol>
        </nav>
        <div class="content-watch">
          <div class="img"></div>
          <div class="img-list">
            <span class="img-hover">
              <img class="img" />
            </span>
            <span class="img-hover">
              <img class="img" />
            </span>
            <span class="img-hover">
              <img class="img" />
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="parameter">
          <h6>THE DARK KNIGHT RISES</h6>
          <h1 class="display-4">BATMAN</h1>
          <p>PRODUCT CODE: DX19</p>
          <hr />
          <div class="detail py-3">
            <h5 class="mb-3">“A hero can be anyone.” - Batman</h5>
            <p>Standing as pop culture icon, Batman is always one of the most recognizable super heroes in the DC universe. Recreated in accurate proportions, Hot Toys is excited to present the true-to-movie creation from our proud DX Series, the 1/6th scale Batman collectible figure inspired by The Dark Knight Rises.</p>
          </div>
          <hr />
          <div class="price">
            <div class="text-right mr-3">
              <span class="h4 mr-2">$</span>
              <h2 class="d-inline">350</h2>
            </div>
          </div>
          <div class="mt-3 px-3">
            <div class="row">
              <button class="btn btn-lg btn-danger w-100">ADD TO CART</button>
            </div>
          </div>
          <div class="py-3 mt-3 summary-area">
            <div id="summaryDiv">
              <div class="d-flex">
                <span class="summary-title mr-auto">The features</span>
                <div
                  class="summary-arrow" :class="{'summary-arrowTurn': active}" @click="clickHandler(2)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div class="pt-3 summary-contentTurn" data-one=2>
                <p>
                  <small>
                    - Authentic and detailed fully realized likeness of Batman/ Bruce Wayne in The Dark Knight Rises
                    <br />- One (1) newly developed Batman helmeted head sculpt with separate rolling eyeballs features and four (4) interchangeable lower part of faces capturing his classic facial expressions
                    <br />- One (1) newly developed Batman helmeted head sculpt with LED light up function on eyes and interchangeable faces techniques design (battery operated)
                    <br />- One (1) newly developed head sculpt of Christian Bale as Bruce Wayne in the movie with accurate facial expression, detailed hair, wrinkles and skin texture
                    <br />- Approximately 32 cm tall
                  </small>
                </p>
              </div>
            </div>
            <div>
              <div class="d-flex">
                <span class="summary-title mr-auto">The features</span>
                <div
                  class="summary-arrow" :class="{'summary-arrowTurn': active}" @click="clickHandler(1)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
              <div class="pt-3 summary-contentTurn" data-one=1>
                <p>
                  <small>
                    - Authentic and detailed fully realized likeness of Batman/ Bruce Wayne in The Dark Knight Rises
                    <br />- One (1) newly developed Batman helmeted head sculpt with separate rolling eyeballs features and four (4) interchangeable lower part of faces capturing his classic facial expressions
                    <br />- One (1) newly developed Batman helmeted head sculpt with LED light up function on eyes and interchangeable faces techniques design (battery operated)
                    <br />- One (1) newly developed head sculpt of Christian Bale as Bruce Wayne in the movie with accurate facial expression, detailed hair, wrinkles and skin texture
                    <br />- Approximately 32 cm tall
                  </small>
                </p>
              </div>
            </div>
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
      active: true
    }
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss">
.main {
  margin: auto;
  padding-top: 70px;
  // margin-bottom: 50px;
  background: #ebebeb;
}
hr {
  background: #e1e1e1;
}
.img {
  background-image: url(../assets/images/batman.jpeg);
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
.summary-area {
  position: relative;
  width: 100%;
  .summary-arrow {
    opacity: 0.4;
    cursor: pointer;
    transform: translate(0, 0) rotate(180deg);
    transition: all 0.5s ease;
    &:hover {
      opacity: 1;
    }
  }
  .summary-arrowTurn {
    transform: translate(0, 0) rotate(0deg);
  }
}
.summary-contentTurn {
  opacity: 0;
  z-index: -10;
  position: absolute;
}
.summary-content {
  opacity: 1;
  transition: opacity 0.5s ease;
  z-index: 10;
  position: relative;
}
</style>
