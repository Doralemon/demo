<template>
	<div class="header">
	  <div class="iconfont icon-fanhuiicon" style="width:20%;"></div>
	  <div class="text-center" style="width: 60%;">{{titleName}}</div>
	  <div  style="width:20%;"></div>
	</div>
</template>

<script>
	
	export default{
		props:["titleName"],
		methods:{
	      goAndroid(){
	         window.WebViewJavascriptBridge.callHandler(
	                'backNative',//data发送给native
	                // function(responseData) {//接收onCallBack回传回来的数据
	                //     document.getElementById("show").innerHTML = responseData;
	                // }
	            );
	      }
    
		}
	}
</script>

<style lang="scss" scoped>
	@import "../assets/css/varable.scss";
.header{
	display: flex;
	align-items: center;
	background: rgba(255,255,255,0.90);
	box-shadow: 0 1px 0 0 #F2F2F2;
	width: 100%;
	position: fixed;
	top:0;
	height: p2r(88);
	line-height: p2r(88);
}
.header >div{
	font-size: 17px;
	color: #333333;
}

.header >div:first-child{
	    text-indent:p2r(35) ;
	    /*: 0.35rem;*/
	box-sizing: border-box;
}

</style>