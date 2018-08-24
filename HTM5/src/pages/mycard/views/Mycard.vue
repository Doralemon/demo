<template>
	<div class="my-cart allOrder">
		<Head :titleName="title"></Head>
		<div class="nav">
			<mt-navbar v-model="active">
			<mt-tab-item id="tab-coupon">优惠券<div class="line"></div></mt-tab-item>
			<mt-tab-item id="tab-gift">礼品券<div class="line"></div></mt-tab-item>
			</mt-navbar>
		</div>
		<div class="nav-container">
			<mt-tab-container swipeable v-model="active">
			<mt-tab-container-item id="tab-coupon">
				<CouponCode v-if="flag" :isHostory="isHostory"></CouponCode>
				<NullCart :des="des" v-else></NullCart>
			</mt-tab-container-item>
			<mt-tab-container-item id="tab-gift">
				<giftCoupon v-if="flag" :isHostory="isHostory"></giftCoupon>
				<NullCart :des="des1" v-else></NullCart>
			</mt-tab-container-item>
			</mt-tab-container>	
		</div>		
	</div>
</template>

<script>
	import Vue from "vue"
	import Head from "../../../components/head.vue"
	import NullCart from './Nullcart.vue';
    import CouponCode from './CouponCode.vue';
    import giftCoupon from './giftCoupon.vue';
	import { TabContainer, TabContainerItem ,TabItem} from 'mint-ui'
	Vue.component(TabContainer.name, TabContainer)
	Vue.component( TabContainerItem.name, TabContainerItem)
	Vue.component(TabItem.name, TabItem)
	export default{
		data(){
			return {
				isHostory:true,//是否有查看历史优惠券
				flag:true,
				title:"我的卡券",
				des:"还没有优惠券呢~",
				des1:"还没有礼品券呢~",
				active:'tab-coupon'
			}
		},
		beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
		components:{
			Head,
			NullCart,
			CouponCode,
			giftCoupon
		}
	}
</script>

<style lang="scss" scoped>
	.my-cart{
		width:100%;
		height: 100%;
		.nav{
			margin-bottom: 0;
		}
		.nav-container{
			height: 100%;
			.mint-tab-container{
				height: 100%;
			}
		}
	}
</style>