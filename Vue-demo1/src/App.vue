<template>
  <div class="App">
    <Header></Header>
    <Mainer></Mainer>
    <Footer></Footer>
  </div>
</template>

<script>

import Mainer from '../components/Mainer.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
    Mainer
  }
}
</script>

<style>
.App {
  height: 100px;
  width: 100px;
  background-color:blue;
}
</style>