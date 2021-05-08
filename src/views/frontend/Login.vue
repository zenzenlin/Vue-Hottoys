<template>
  <div class="bg">
    <main class="form-signin text-center">
      <form class="form-signin">
        <router-link to="/">
          <img class="mb-4" src="@/assets/images/hottoys_logo.png" alt="" width="72" height="72">
        </router-link>
        <h1 class="h3 my-4 text-info font-weight-normal">WELCOME BACK!</h1>
        <div class="input-form">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" v-model="user.username" class="form-control mb-3" placeholder="Email address" required autofocus>
        </div>
        <div class="input-form">
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" v-model="user.password" class="form-control mb-3" placeholder="Password" required>
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" @click.prevent="signin" type="submit">Sign in</button>
        <p class="my-5 mb-3 text-muted">&copy; 2017-2021</p>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const vm = this
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$http.post(api, vm.user).then(response => {
        console.log(response.data)
        if (response.data.success) {
          const token = response.data.token
          const expired = response.data.expired
          console.log(token, expired)
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          vm.$router.push('/admin/product')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bg {
  height: 100vh;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 430px;
  padding: 15px;
  margin: auto;
  h1 {
    letter-spacing: 3px;
  }
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
