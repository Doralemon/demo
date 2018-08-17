import Vue from "vue"
import router from "vue-router"
import Index from "../views/buyIndex.vue"
import buyDetail from "../views/buyDetail.vue"
import evaluation from "../views/allEvaluation.vue"

Vue.use(router)

export default new router({
	routes:[
		{
			name:"buyIndex",
			path:"/",
			component:Index
		},
		{
			name:"buyDetail",
			path:"/buyDetail",
			component:buyDetail
		},
		{
			name:"evaluation",
			path:"/evaluation",
			component:evaluation
		}
	]
})
