<template>
    <div class="history-giftCoupon">
        <Header :titleName="title"></Header>
       <div class="history-giftCoupon-main main-cover mycard-common">
            <giftCoupon :isHostory="isHostory" v-if="!historyGiftCoupon.length"></giftCoupon>
            <Nullcart v-else :des="des"></Nullcart>
       </div>
    </div>
</template>
<script>
import Header from '../../../components/head.vue'
import Nullcart from './Nullcart.vue'
import giftCoupon from './giftCoupon.vue'
    export default {
        data(){
            return{ 
              title:"历史礼品券",
              isHostory:false,
              des:"还没有历史礼品券呢~",
              historyGiftCoupon:[]
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
            giftCoupon,
        }
    }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/varable.scss";
    .history-giftCoupon-main{
        padding-top:p2r(88);
    }
</style>