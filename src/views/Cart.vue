<template>
  <div class="container mx-auto mt-3 py-5">
    <div class="top text-center">
      <h1>Your Cart</h1>
    </div>
    <ol class="main py-4">
      <li class="mb-3">
        <!-- <div class="row">
          <div class="position d-flex justify-content-between">
            <div>product</div>
            <div>quantity</div>
            <div>total</div>
          </div>
        </div> -->
        <hr>
        <div class="content-div d-flex row">
          <div class="col-lg-4">
            <div class="img-div">
              <img class="img" src="@/assets/images/batman.jpg">
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-center justify-content-around info-area">
            <div class="title-position">
              <h2 class=""><a class="text-style" href="">BATMAN</a></h2>
            </div>
            <div class="select-position">
              <div class="quantity">
                <button class="plus-btn btn" type="button" name="button">
                  -
                </button>
                <input type="text" name="name" value="1">
                <button class="minus-btn btn" type="button" name="button">
                  +
                </button>
              </div>
            </div>
            <div class="h5 num-position">NT$ 40,000</div>
            <div><a class="text-style" href=""><i class="fas fa-times"></i></a></div>
          </div>
        </div>
      </li>
      <li class="mb-3">
        <hr>
        <div class="content-div d-flex row">
          <div class="col-lg-4">
            <div class="img-div">
              <img class="img" src="@/assets/images/batman.jpg">
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-center justify-content-around info-area">
            <div class="title-position">
              <h2 class=""><a class="text-style" href="">BATMAN</a></h2>
            </div>
            <div class="select-position">
              <div class="quantity">
                <button class="plus-btn btn" type="button" name="button">
                  -
                </button>
                <input type="text" name="name" value="1">
                <button class="minus-btn btn" type="button" name="button">
                  +
                </button>
              </div>
            </div>
            <div class="h5 num-position">NT$ 40,000</div>
            <div><a class="text-style" href=""><i class="fas fa-times"></i></a></div>
          </div>
        </div>
      </li>
    </ol>
    <hr>
    <div class="checkout">
      <div class="checkout-number">
        <div class="d-flex flex-column">
          <div class="d-flex">
            <div class="flex-grow-1">Subtotal</div>
            <div>NT$ 40,000</div>
          </div>
          <div class="d-flex">
            <div class="flex-grow-1">Shipping</div>
            <div>Calculated at next step</div>
          </div>
        </div>
        <hr>
        <div class="d-flex">
          <h3 class="flex-grow-1">Grand total</h3>
          <div class="h3">NT$ 40,000</div>
        </div>
      </div>
      <div class="checkout-checkbtn text-right pt-3">
        <router-link to="/checkout">
          <a class="btn btn-primary btn-lg">Check out</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.img-div{
  position: relative;
  vertical-align: middle;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  .img{
    // background-image: url(../assets/images/batman.jpeg);
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-right: 20px;
  }
}
.main{
  margin: 0;
  padding: 0;
  list-style: none
}
// .position{
//   flex-basis: 40%;
//   margin: 0 auto;
//   margin-left: 40%;
// }
.checkout{
  margin-left: 50%;
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
.text-style{
  text-decoration: none;
  color: #1d1d1f;
  &:hover{
    text-decoration: none;
    // color: #00cc99;
  }
  i{
    color: red;
    font-size: 20px;
  }
}
.info-area{
  margin-top: 20px;
  .title-position,.select-position,.num-position{
    padding: 0;
    margin: 0;
  }
}
.quantity {
  vertical-align: middle;
    button:focus, input:focus{
    outline: none;
  }
}
.quantity input {
  // -webkit-appearance: none;
  vertical-align: middle;
  border: none;
  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
  // button:focus, .btn:focus{
  //   outline: none;
  // }
}
.plus-btn,.minus-btn {
  width: 30px;
  height: 30px;
  background-color: #E1E8EE;
  border-radius: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  // &:focus{
  //   outline: red;
  // }
}
// .minus-btn img {
//   margin-bottom: 3px;
// }
// .plus-btn img {
//   margin-top: 2px;
// }
</style>
