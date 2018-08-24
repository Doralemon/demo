<template>
	<div class="orderNone">
		<div class="back">
			<img src="../assets/img/orderNone.png" />
		</div>
		<div class="title">
			没有订单
		</div>
		<div class="go">
			<el-button type="danger"   round>去逛逛</el-button>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	@import "../assets/css/varable.scss";
	.orderNone{
		.back{margin-top:p2r(120);}
		.back >img{
			display: block;
			width: p2r(320);
			margin:0 auto;
			margin-bottom: p2r(24);
		}
		.title{text-align: center;font-size: 15px;color: #888888;letter-spacing: -0.36px;margin-bottom: p2r(54);}
		.go{
			text-align: center;
		}
		.el-button.is-round {
		    border-radius: 20px;
		    padding: p2r(16) p2r(65);
		}
		.el-button--danger{background-color:#FF5656;}
		
		.go span{font-size:15px;}
	}
</style>