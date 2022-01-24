import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import router from "@/router"
import "./assets/css/styles.css"
import eventBus from "@/utils/eventBus"
Vue.prototype.$bus = eventBus

Vue.config.productionTip = false

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
