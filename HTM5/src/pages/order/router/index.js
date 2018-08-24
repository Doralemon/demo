import Vue from "vue"
import router from "vue-router"
import allOrder from "../views/allOrder.vue"
import orderDetail from "../views/orderDetail.vue"
import comment from "../views/comment.vue"
Vue.use(router)

export default new router({
	routes:[
	{
		name:"allOrder",
		path:"/",
		component:allOrder
	},
	{
		name:"orderDetail",
		path:"/detail",
		component:orderDetail
	},
	{
		name:"comment",
		path:"/comment",
		component:comment
		
	}
	]
})
