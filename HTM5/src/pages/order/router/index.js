import Vue from "vue"
import router from "vue-router"
import allOrder from "../views/allOrder.vue"
Vue.use(router)

export default new router({
	routes:[
	{
		name:"allOrder",
		path:"/",
		component:allOrder
	}
	]
})
