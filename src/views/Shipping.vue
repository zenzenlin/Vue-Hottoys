<template>
  <div class="container py-5">
    <div class="progressbar-container mt-5">
      <ul class="progressbar">
        <li class="finished">Information</li>
        <li class="active">Shipping</li>
        <li>Payment</li>
      </ul>
    </div>
    <div>
      <h1 class="text-center py-4">Shipping method</h1>
    </div>
    <div class="shipping-method m-auto p-3">
      <div class="custom-control custom-radio d-flex">
        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
        <label class="custom-control-label w-100" for="customRadio1">Shipping Country Untraced</label>
        <span class="text-right">$100</span>
      </div>
      <hr>
      <div class="custom-control custom-radio d-flex">
        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
        <label class="custom-control-label w-100" for="customRadio2">Shipping International Untraced</label>
        <span class="text-right">$1000</span>
      </div>
    </div>
    <hr class="my-4">
    <div class="checkout m-auto">
      <div class="checkout-number">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <div class="flex-grow-1">Subtotal</div>
            <div>NT$ 40,000</div>
          </div>
          <div class="d-flex">
            <div class="flex-grow-1">Shipping</div>
            <div>NT$ 100</div>
          </div>
        </div>
        <hr>
        <div class="d-flex">
          <h3 class="flex-grow-1">Grand total</h3>
          <div class="h3">NT$ 40,100</div>
        </div>
      </div>
      <div class="checkout-checkbtn text-right pt-3">
        <router-link to="/payment">
          <button class="btn btn-primary btn-lg">Check out</button>
        </router-link>
      </div>
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
  color: #ABB2B9;
}
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height : 28px;
  border: 1px solid;
  // color: #808080;
  border-radius: 50%;
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
  color: #808080;
  background-color: #ddd;
  top: 15px;
  left: -50%;
  z-index : -1;
}
.progressbar li:first-child:after {
  content: none;
}
.progressbar li.active {
  color: #3498DB;
}
.progressbar li.active:before {
  background-color: white;
  border: 2px solid #3498DB;
  line-height : 26px;
}
.progressbar li.finished + li:after {
  background-color: #82E0AA;
}
.progressbar li:last-child:before {
  border-color: #ddd;
  background-color: white;
}
.progressbar li.finished:before {
  color: #808080;
}
.form-container{
  max-width: 80%;
  margin: 0 auto;
}
.shipping-method{
  border: 1px solid #cab6b6;
  border-radius: 5px;
  max-width: 800px;
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
</style>
