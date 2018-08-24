<template>
	<div class="allOrder">
		<heads :titleName="title"></heads>
		<div class="nav">
			<mt-navbar v-model="active">
			  <mt-tab-item id="tab-container1">全部订单<div class="line"></div></mt-tab-item>
			  <mt-tab-item id="tab-container2">待支付<div class="line"></div></mt-tab-item>
			  <mt-tab-item id="tab-container3">待确认<div class="line"></div></mt-tab-item>
			  <mt-tab-item id="tab-container4">待评价<div class="line"></div></mt-tab-item>
			</mt-navbar>
		</div>
		div >
			<mt-tab-container swipeable v-model="active">
				
			  <mt-tab-container-item id="tab-container1">
			  	
			  	<orderNone></orderNone>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <router-link :to="{name:'orderDetail'}">
			    	<orderItem></orderItem>
			    </router-link>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			    <orderItem></orderItem>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container4">
			    <orderItem></orderItem>
			  </mt-tab-container-item>
			</mt-tab-container>	
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue"
	import heads from "../../../components/head.vue"
	import orderItem from "../../../components/orderNumber.vue"
	import { TabContainer, TabContainerItem ,TabItem} from 'mint-ui'
	import orderNone from "../../../components/orderNone.vue"
	Vue.component(TabContainer.name, TabContainer)
	Vue.component( TabContainerItem.name, TabContainerItem)
	Vue.component(TabItem.name, TabItem)
	export default{
		data(){
			return {
				title:"全部订单",
				active:'tab-container1'
			}
		},
		components:{
			heads,
			orderItem,
			orderNone
//			"mt-tab-container":TabContainer,
//			"mt-tab-container-item":TabContainerItem
		}
	}
</script>

<style>

</style>