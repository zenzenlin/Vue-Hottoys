<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-pause="hover">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active inner-picstyle">
          <div class="d-block w-100 inner-picstyle pic1">
            <div class="container">
              <div class="bg-border bg-lighter w-100">
                <p class="text-white">Making things better together.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item inner-picstyle">
          <div class="d-block w-100 inner-picstyle pic2"></div>
        </div>
        <div class="carousel-item inner-picstyle">
          <div class="d-block w-100 inner-picstyle pic3"></div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner-picstyle{
    width: 100%;
    background: black;
    opacity: 0.9;
    position: relative;
    height: 90vh;
    background-size: 70%;
    background-position: center center;
    background-repeat: no-repeat;
  .pic1{
    background-image: url('../assets/images/ironman1.jpeg');
  }
  .pic2{
    background-image: url('../assets/images/batman2.jpeg');
  }
  .pic3{
    background-image: url('../assets/images/batman.jpeg');
  }
  .bg-border{
    // background: black;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0.9;
      p {
        font-size: 50px;
        text-shadow: 0px 3px 50px rgba(0, 0, 0, 1.2);
    }
  }
}

</style>
