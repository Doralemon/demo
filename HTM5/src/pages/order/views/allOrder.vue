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
		<div style="margin-top:3px;">
			<mt-tab-container swipeable v-model="active">
				
			  <mt-tab-container-item id="tab-container1">
			    <mt-cell v-for="n in 3" title="tab-container 1">
			    	
			    	{{'con'+n}}
			    </mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container2">
			    <mt-cell v-for="n in 5" title="tab-container 2">{{'twn'+n}}</mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container3">
			    <mt-cell v-for="n in 7" title="tab-container 3">{{'three'+n}}</mt-cell>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="tab-container4">
			    <mt-cell v-for="n in 7" title="tab-container 3">{{'three'+n}}</mt-cell>
			  </mt-tab-container-item>
			</mt-tab-container>	
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue"
	import heads from "../../../components/head.vue"
	import { TabContainer, TabContainerItem ,TabItem} from 'mint-ui'

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
			heads
//			"mt-tab-container":TabContainer,
//			"mt-tab-container-item":TabContainerItem
		}
	}
</script>

<style>

</style>