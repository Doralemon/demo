<template>
    <div class="gift-coupon mycard-common">
        <ul>
            <li class="quan-item-box" :class="{addHeight:isShow}">
                <div class="lingquanBox-container-top font-15">礼品券</div>
                <div class="lingquanBox-container-center clearfix">
                    <div class="fl">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                    <div class="fl quan-info">
                        <p>巴拉巴拉小熊娃娃</p>
                        <p>兑换码：C000291821392</p>
                        <p class="delay-date">有效期：2018-08-05至2018-09-20</p>
                    </div>
                </div>
                <div class="line"></div>
                <div @click="zhankaiOrshouqi" class="lingquanBox-container-bottom iconfont" :class="isShow?'icon-wangshangshouqi':['icon-wangxiazhankai']">
                    <p :class="{addHeight:isShow}">仅限于星巴克星巴克星巴克星巴克星巴克星巴克仅限于星巴克星巴克星巴克星巴克星巴克星巴克</p>
                </div>
            </li>
        </ul>
        <p class="font-13 tc nomore">没有更多了~</p>
        <p class="font-13 tc seeHistory" v-if="isHostory" @click="toHistoryGift">查看历史礼品券</p>
    </div>
</template>
<script>
    export default {
        data(){
            return{ 
               isShow:false,
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
            zhankaiOrshouqi(){
               this.isShow = !this.isShow 
            },
            toHistoryGift(){
                this.$router.push({name:"HistoryGiftCoupon"});
            }
        },
        props:["isHostory"]
    }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/varable.scss";
    .gift-coupon{
     
    }
    
</style>