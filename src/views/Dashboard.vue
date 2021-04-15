<template>
  <div>
    <DashNavbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <Sidebar/>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import DashNavbar from '../components/DashNavbar'
import Sidebar from '../components/Sidebar'
import Alert from '../components/AlertMessage'

export default {
  components: {
    DashNavbar,
    Sidebar,
    Alert
  },
  created () {
    const mycookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = mycookie
  }
}
</script>
