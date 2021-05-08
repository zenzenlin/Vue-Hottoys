<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar class="sticky-top"></Navbar>
    <Alert></Alert>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Alert from '@/components/AlertMessage'

export default {
  components: {
    Navbar,
    Footer,
    Alert
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>
