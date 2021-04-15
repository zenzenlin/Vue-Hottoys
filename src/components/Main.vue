<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Carousel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
    <main role="main">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"> </text></svg>
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"> </text></svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label=" :  " preserveAspectRatio="xMidYMid slice" focusable="false"><title> </title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em"> </text></svg>
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
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
      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->
      <div class="container marketing">
        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
        <!-- START THE FEATURETTES -->
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
        <hr class="featurette-divider">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div class="col-md-5">
            <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
        <hr class="featurette-divider">
        <!-- /END THE FEATURETTES -->
      </div><!-- /.container -->
      <!-- FOOTER -->
      <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>&copy; 2017-2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    </main>
    <router-view></router-view>
    <Slider></Slider>
    <div class="container mb-4">
      <div class="h3 py-4">經典不容錯過</div>
      <div class="bg-orange d-flex p-3">
        <div class="p-4 mr-3 hot-info">
          <img style="width:56px"
            src="https://res.klook.com/image/upload/v1604053241/ued/ttd/recommended%20section/icon_ttd_recommend_bestseller_fill_sxl_colorful.png"
            alt/>
          <p class="text-orange">Best selling</p>
        </div>
        <div class="d-flex">
          <div class="outer mr-3">
            <div class="inner">
              <div class="img-style">
                <div class="pic"></div>
              </div>
              <div class="content">
                <div class="h4 text-center text-monospace py-2">BATMAN</div>
              </div>
            </div>
          </div>
          <div class="outer mr-3">
            <div class="inner">
              <div class="img-style">
                <div class="pic"></div>
              </div>
              <div class="content">
                <div class="h4 text-center text-monospace py-2">BATMAN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h3 text-center pt-4 text-danger text-bold bg-darker">Build the Hot Toy of your dreams.</div>
    <div class="d-flex pt-5">
      <div class="col-4 mb-3">
        <div>
          <a href="">
            <div class="pic1 pic-style"></div>
          </a>
        </div>
        <div>
          <div class="font-style pt-3">
            <div>AVENGERS: INFINITY WAR</div>
            <div class="h4 font-family">IRON MAN MARK L</div>
            <div class="row-title">1/6TH SCALE ACCESSORIES COLLECTIBLE SET</div>
            <a class="text-decoration-none text-white btn btn-lg btn-danger my-3" href="">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-4 mb-3">
        <div>
          <a href="">
            <div class="pic2 pic-style"></div>
          </a>
        </div>
        <div>
          <div class="font-style pt-3">
            <div>JUSTLEAGUE</div>
            <div class="h4 font-family">WONDER WOMAN</div>
            <div class="row-title">1/6TH SCALE ACCESSORIES COLLECTIBLE SET</div>
            <a class="text-decoration-none text-white btn btn-lg btn-danger my-3" href="">Learn More</a>
          </div>
        </div>
      </div>
      <div class="col-4 mb-3">
        <div>
          <a href="">
            <div class="pic3 pic-style"></div>
          </a>
        </div>
        <div>
          <div class="font-style py-3">
            <div>AVENGERS: INFINITY WAR</div>
            <div class="h4 font-family">BATMAN</div>
            <div class="row-title">1/6TH SCALE ACCESSORIES COLLECTIBLE SET</div>
            <a class="text-decoration-none text-white btn btn-lg btn-danger my-3" href="">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'

export default {
  components: {
    Slider
  }
}
</script>

<style lang="scss" scoped>
.banner-pic {
  background-image: url(../assets/images/banner.jpeg);
  height: 150px;
  width: 100%;
  background-position: center center;
  font-family: monospace;
  // background-repeat: no-repeat;
}
.bg-orange {
  background: rgba(255, 244, 237, 0.7);
  .hot-info{
    width: 200px;
  }
  p {
    font-weight: 700;
    font-size: 26px;
    padding-top: 22px;
  }
  .text-orange{
    color: orange;
  }
  .text-blue{
    color: red;
  }
}
.inner{
  box-shadow: 0 5px 6px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
}
.img-style {
  position: relative;
  height: 300px;
  width: 300px;
  // background-size: 90%;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url("../assets/images/batman2.jpeg");
  border-radius: 4px 4px 0 0;
  overflow: hidden;
  // box-shadow: 0 5px 6px 0 rgb(0 0 0 / 30%);
}
.content{
  background-color: white;
  border-radius: 0 0 4px 4px;
}
  .bg-darker{
    // background: linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.42) 61%,rgba(0,0,0,.31) 78%,rgba(0,0,0,.31) 78%,transparent);
    // background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.42) 61%, rgba(0, 0, 0, 0.31) 78%, transparent);
    font-family: Optima, sans-serif;
  }
  .font-style{
    text-align: center;
    .font-family{
      font-family: Optima, sans-serif;
    }
    .row-title{
      font-family: 'Sofia-Pro-Light-Condensed', 'sofia-pro-regular-condensed-webfont', Arial, 'Helvetica Neue', Helvetica, sans-serif;
    }
    button{
      position: absolute;
      left: 33%;
      &:hover{
        background: gray;
      }
    }
  }
  // .child:before {
  //   content: "";
  //   display: none;
  //   height: 100%;
  //   width: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   background-color: rgba(52,73,94,.35);
  // }
  // .parent:hover .child:before, .parent:focus .child:before {
  //   display: block;
  // }
  .pic-style{
    position: relative;
    height: 50vh;
    background-size: 90%;
    // background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width:100%;
    transition: all .6s;
    cursor: pointer;
  }
  .pic1{
    background-image: url('../assets/images/ironman2.jpeg');
    &:hover{transform: scale(1.1)}
  }
  .pic2{
    background-image: url('../assets/images/wonderwoman.jpeg');
    &:hover{transform: scale(1.1)}
  }
  .pic3{
    background-image: url('../assets/images/batman.jpeg');
    &:hover{transform: scale(1.1)}
  }
</style>
