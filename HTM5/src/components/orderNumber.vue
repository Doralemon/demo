<template>
	<div class="item">
		<div class="orderNum">
			<div class="orderNumber">订单号：S20180808003913</div>
			<div class="status">已完成</div>
		</div>
		<div class="cont">
			<p class="title">【鲜果上市】陕西黑布林大李子5斤大果 水润香甜 口感细腻</p>
			<div class="price">
				<div>¥19.80</div>
				<div>×1</div>
			</div>
		</div>
		<div class="time">
			<div>2018-08-08 09:30</div>
			<div>删除订单</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../assets/css/varable.scss";
	.item{background: #fff;padding: p2r(30);margin-bottom:p2r(16) ;
        .orderNum{font-size: 15px;color: #333333;line-height: p2r(44);margin-bottom:p2r(30) ;overflow: hidden;}
        .orderNum >div:first-child,.time >div:first-child{
            float: left;
        }
        .orderNum >div:last-child,.time >div:last-child{
            float: right;
        }
        .cont{
            background: #F5F5F5;
            padding: p2r(30) p2r(20);
            margin-bottom: p2r(30);
            .title{
                font-size: 14px;
                color: #444444; 
                line-height: p2r(40);
                margin-bottom: p2r(30);
                text-align: justify;
            }
            .price{overflow:hidden;line-height: p2r(56);}
            .price>div:first-child{font-size: 20px;color: #555555;float: left;}
            .price>div:last-child{font-size: 13px;color: #666666;float: right;}
        }
        .time{
            overflow: hidden;
        }
        
    }
</style>