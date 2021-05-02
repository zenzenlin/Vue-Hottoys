<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar class="sticky-top"></Navbar>
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
  }
}
</script>
