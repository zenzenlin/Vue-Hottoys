<template>
  <div class="container py-5">
    <div class="progressbar-container mt-5">
      <ul class="progressbar">
        <li class="active">Information</li>
        <li>Shipping</li>
        <li>Payment</li>
      </ul>
    </div>
    <div>
      <h1 class="text-center py-4">Customer Info</h1>
    </div>
    <form class="form-container">
      <div class="form-row">
        <div class="form-group form-floating col-md-6">
          <label for="inputFirstName4">Name</label>
          <input type="text" class="form-control" placeholder="First name" id="inputFirstName4" required="" autofocus="">
        </div>
        <div class="form-group form-floating col-md-6 pt-2">
          <label for="inputLastName4"></label>
          <input type="text" class="form-control" placeholder="Last name" id="inputLastName4" required="">
        </div>
      </div>
      <div class="form-group">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Address">
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity">
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <label for="inputPhone">Phone</label>
          <input type="number" class="form-control" id="inputPhone">
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck">
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <router-link to="/shipping">
        <button type="submit" class="btn btn-lg btn-info">Continue to shipping</button>
      </router-link>
    </form>
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
  line-height : 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  background-color: #fff;
  position: relative;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
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
  border: 2px solid #3498DB;
  line-height : 26px;
}
.form-container{
  max-width: 80%;
  margin: 0 auto;
}
</style>
