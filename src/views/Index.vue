<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  created () {
    console.log(process.env.VUE_APP_API)
    const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products`
    // const vm = this
    this.$http.get(api).then((response) => {
      console.log(response.data)
    })
  }
}
</script>
