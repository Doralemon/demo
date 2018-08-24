import Vue from 'vue'
import Router from 'vue-router'
import reading from '../views/reading.vue'
import beforePay from '../views/beforePay.vue'

Vue.use(Router)

export default new Router({
  routes: [
  {
  	name:"reading",
  	path:"/",
  	component:reading
  },
  {
  	name:"beforePay",
  	path:"/beforePay",
  	component:beforePay
  }
  ]
})
