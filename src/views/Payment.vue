<template>
  <div class="container py-5">
    <div class="progressbar-container mt-5">
      <ul class="progressbar">
        <li class="finished">Information</li>
        <li class="finished">Shipping</li>
        <li class="active">Payment</li>
      </ul>
    </div>
    <div>
      <h1 class="text-center py-4">Payment method</h1>
    </div>
    <div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <div class="payment-container">
            <div class="form-check option-form">
              <input class="form-check-input option-input" type="radio" name="flexRadioDefault" id="creditcard">
              <label class="form-check-label option-label" for="creditcard">
                Credit Card
              </label>
            </div>
            <div class="form-check option-form">
              <input class="form-check-input option-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label option-label" for="flexRadioDefault2">
                Cash on delivery
              </label>
            </div>
            <div class="form-check option-form">
              <input class="form-check-input option-input" type="radio" name="flexRadioDefault" id="JKO" checked>
              <label class="form-check-label option-label" for="JKO">
                JKO PAY
              </label>
              <span class="ml-3"><img src="../assets/images/JKOPAY_logo.svg.png" style="height:25px" alt=""></span>
            </div>
            <div class="form-check option-form">
              <input class="form-check-input option-input" type="radio" name="flexRadioDefault" id="JKO" checked>
              <label class="form-check-label option-label" for="JKO">
                LINE PAY
              </label>
              <span class="ml-3"><img src="../assets/images/Line_pay_logo.svg.png" style="height:30px;padding-bottom:5px" alt=""></span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form>
            <div class="form-group cardGroup">
              <label for="inputCardNumber">Credit Card Number</label>
              <input type="text" class="form-control" id="inputCardNumber">
              <ul class="card">
                <li>
                  <img src="../assets/images/visa.svg" style="height:25px" alt="">
                </li>
                <li>
                  <img src="../assets/images/mastercard.svg" style="height:25px" alt="">
                </li>
              </ul>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Expiration</label>
                <input type="text" class="form-control" placeholder="11 / 11" id="inputCity">
              </div>
              <div class="form-group col-md-4">
                <label for="inputcode">CVV</label>
                <input type="text" class="form-control" id="inputcode">
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip">
              </div>
            </div>
            <router-link to="/finishpayment">
              <button type="submit" class="btn btn-lg btn-danger">PAY ORDER</button>
            </router-link>
          </form>
        </div>
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
.progressbar li.finished::before {
  color: #808080;
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
.option-input{
  width: 20px;
  height: 20px;
  margin-top: 0.3rem;
}
.option-label{
  margin-left: 20px;
  font-size: 20px;
}
.cardGroup{
  position: relative;
}
.card{
  list-style: none;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
  opacity: .3;
  border: none;
  margin: 38px 15px;
}
</style>
