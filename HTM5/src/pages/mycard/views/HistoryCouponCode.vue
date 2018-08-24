<template>
    <div class="history-couponCode">
        <Header :titleName="title"></Header>
        <div class="history-couponCode-main main-cover mycard-common">
            <CouponCode :isHostory="isHostory" v-if="!historycouponCode.length"></CouponCode>
            <Nullcart v-else :des="des"></Nullcart>
        </div>
    </div>
</template>
<script>
import Header from '../../../components/head.vue'
import Nullcart from './Nullcart.vue'
import CouponCode from './CouponCode.vue'
    export default {
        data(){
            return{ 
                title:"历史优惠券",
                isHostory:false,
                des:"还没有历史优惠券呢~",
                historycouponCode:[]
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
            
        },
        components:{
             Header,
            Nullcart,
            CouponCode
        }
    }
</script>
<style lang="scss">
 
</style>