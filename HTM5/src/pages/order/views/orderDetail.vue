<template>
	<div class="orderDetail">
		<heads :titleName="title"></heads>
		<!--需引入地址和订单号模块-->
		<!--<div></div>-->
		<!--<div></div>-->
		<!--需引入地址和订单号模块end-->
		<orderDetail ></orderDetail>
		
		<!--订单完成状态-->
		<div class="orderRate">
			<div>
				<div class="range current"></div>
				<div class="line"></div>
				<div class="content">
					<div class="rateInfo">
						<p>订单完成</p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
			<div>
				<div class="range"></div>
				<div class="line"></div>
				<div class="content">
					<div class="rateInfo">
						<p>已送达</p>
						<p>请确认收货</p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
			<div>
				<div class="range"></div>
				<div class="line"></div>
				<div class="content">
					<div class="rateInfo">
						<p>商品打包完成，配送中</p>
						<p>处理人：百色田东芒果供应有限公司</p>
						<p>联系方式：<span style="color:#FF5656;">13728291321</span></p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
			<div>
				<div class="range"></div>
				<div class="line"></div>
				<div class="content">
					<div class="rateInfo">
						<p>商家已接单，等待配送</p>
						<p>处理人：百色田东芒果供应有限公司</p>
						<p>联系方式：<span style="color:#FF5656;">13728291321</span></p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
			<div>
				<div class="range"></div>
				<div class="line"></div>
				<div class="content">
					<div class="rateInfo">
						<p>支付成功</p>
						<p>待【百色田东芒果供应有限公司】确认</p>
						<p>联系方式：13728291321</p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
			<div>
				<div class="range"></div>
				<div class="content">
					<div class="rateInfo">
						<p>订单已经提交</p>
					</div>
					<p class="time">2018-08-08 17:30</p>
				</div>
			</div>
		</div>
		<div>
			<mt-button type="default"></mt-button>
		</div>
	</div>
</template>

<script>
	import heads from "../../../components/head.vue"
	import orderDetail from "../components/shopDetial.vue"
//	import "../../../assets/css/page/order.scss"
	export default{
		data(){
			return {
				title:"订单详情",
			}
		},
		components:{
			heads,
			orderDetail
	}
		
	}
</script>

<style>
</style>