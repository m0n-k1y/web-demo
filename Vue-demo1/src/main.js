import Vue from 'vue'
import App from './App.vue'
import button from '../components/button'

Vue.component('Button', button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
