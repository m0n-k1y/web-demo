<template>
  <div class="App">
    <Header></Header>
    <Mainer></Mainer>
    <Footer></Footer>
    <!-- <button></button> -->
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
  height: 600px;
  width: 700px;
  background-color:rgb(149, 149, 218);
  margin: 0 auto;
  padding: 20px;
}
</style>