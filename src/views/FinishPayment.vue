<template>
  <div class="container py-5">
    <div class="progressbar-container mt-5">
      <ul class="progressbar">
        <li class="finished">Information</li>
        <li class="finished">Shipping</li>
        <li class="finished">Payment</li>
      </ul>
    </div>
    <div>
      <h1 class="text-center py-4">Payment sent</h1>
    </div>
    <div class="m-auto text-center">
      <img src="@/assets/images/check.png" style="height:200px" alt="">
      <p class="pt-3"><em>A confirmation email will be send to you.</em></p>
    </div>
    <div class="text-center pt-4">
      <router-link to="/index">
        <button class="btn btn-lg btn-info">Continue to shopping</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkout',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.progressbar-container {
  width: 100%;
}
.progressbar {
  counter-reset: step;
  padding: 0;
  transform: translate(50px, 0px);
  @media (max-width: 992px) {
    transform: translate(20px, 0px);
  }
}
.progressbar li {
  list-style: none;
  display: inline-block;
  width: 30.33%;
  position: relative;
  text-align: center;
  cursor: pointer;
}
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height : 28px;
  border: 1px solid ;
  border-radius: 50%;
  color: #808080;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: #82E0AA;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index : -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.finished {
  color: #ABB2B9;
}
.progressbar li:last-child:before {
  background-color: #82E0AA;
}
.progressbar li:after {
  background-color: #82E0AA;
}
.checkout{
  // margin-left: 50%;
  max-width: 800px;
  border: 1px solid #FFFFF2;
  border-radius: 4px;
  background: #F5F5F5;
  padding: 10px;
  // box-sizing: border-box;
  @media(max-width: 768px)
  {
    margin-left: 0%;
  }
}
.payment-container{
  background: #d2d2d7;
  padding: 20px;
  border-radius: 4px;
  // input{
  //   width: 18px;
  //   height: 18px;
  // }
}
</style>
