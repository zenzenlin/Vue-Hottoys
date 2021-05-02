<template>
  <main role="main">
    <div class="container-fluid p-0">
      <div class="banner-style banner"></div>
        <div class="container">
          <div class="py-3">
            <h1 class="font-family">Hot toys.</h1>
            <h5 class="text-muted p-3">Find the best selection of Hot Toys Wonder Woman Sixth Scale Figures at Sideshow. Based on the DC Comics superhero, the Hot Toys Wonder Woman figures present film accurate collectibles featuring the stunning likeness of Gal Gadot. Check out our full line of Wonder Woman Figures.</h5>
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
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
          <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
        </div>
        <div class="col-md-5">
          <img class="main-img-style img1" alt="">
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="main-img-style img2" alt="">
        </div>
      </div>
      <hr class="featurette-divider">
      <div class="row featurette " style="margin-bottom:80px">
        <div class="col-md-7">
          <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
          <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
        </div>
        <div class="col-md-5">
          <img class="main-img-style img3" alt="">
        </div>
      </div>
      <!-- /END THE FEATURETTES -->
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {}
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
</style>
