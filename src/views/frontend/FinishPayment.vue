<template>
  <div class="container py-5">
    <div class="progressbar-container">
      <ul class="progressbar">
        <li class="finished">INFO</li>
        <li class="finished">CONFIRM</li>
        <li class="finished">PAY</li>
      </ul>
    </div>
    <div class="my-5 text-center">
      <img src="@/assets/images/check.png" style="height:120px" alt="">
      <div>
        <h1 class="mt-3">Payment Successful</h1>
      </div>
      <p class="mt-3"><em>A confirmation email will be sent to you.</em></p>
    </div>
    <div class="text-center pt-4">
      <router-link to="/index">
        <button class="btn btn-lg btn-info">Continue Shopping</button>
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
}
// 數字跟文字
.progressbar li {
  list-style: none;
  display: inline-block;
  width: 30.33%;
  position: relative;
  text-align: center;
  cursor: pointer;
  color: #808080;
}
// 三個圓圈
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 30px;
  height: 30px;
  line-height : 28px;
  border: 1px solid ;
  border-radius: 50%;
  display: block;
  margin: 0 auto 10px auto;
}
// 背景斜線
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #82E0AA;
  top: 15px;
  left: -50%;
  z-index : -1;
}
// info 前斜線
.progressbar li:first-child:after {
  content: none;
}
// info confirm 完成出現打勾
.progressbar li.finished:before {
  content: "";
  background-color: #fff;
  height: 30px;
  background-size: cover;
  background-image: url(../../assets/images/check.png);
}
</style>
