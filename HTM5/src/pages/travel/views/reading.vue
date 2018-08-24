<template>
	<div class="intro">
		<div></div>
		 <el-button type="text" @click="open4">点击打开 Message Box</el-button>
		<div>
			<mt-button type="primary">确定</mt-button>
			
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		  methods: {
		      open4() {
		      	MessageBox({
				  title: '支付手续费提醒',
				  message: '您还有一单差旅手续费（查看慧通差旅服务介绍）未支付，支付完成即可恢复差旅预定功能。是否现在支付？',
				  showCancelButton: true,
				  confirmButtonText:"前往支付"
				});
		      }
		    }
	}
</script>

<style lang="scss" scoped>
	@import '../../../assets/css/varable.scss';
	.intro{
		background: #f5f5f5;
		padding-top:p2r(16);
	}
	
	.intro >div:first-child{
		background: #fff;
		min-height: 100%;
		width: 100%;
	}
	.intro >div:last-child{
		position: fixed;
		bottom: 0;
		    width: 100%;
		border-radius: 0;
	}
	
</style>