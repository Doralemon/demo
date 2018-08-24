<template>
    <div class="couponCode mycard-common">
        <ul>
            <li class="quan-item-box" :class="{addHeight:isShow1}">
                <div class="lingquanBox-container-top font-15">黑手星巴克优惠券</div>
                <div class="lingquanBox-container-center clearfix">
                    <div class="fl">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                    <div class="fl quan-info">
                        <div class="clearfix quan-info-box">
                            <!-- <div class="quan-info-left fl"><span>¥</span><span class="price">10</span></div> -->
                            <div class="zhekou fl"><span>5</span><span class="price">折</span></div>
                            <div class="quan-info-right fl"><p>订单满100元使用</p>
                            <p>兑换码：C000291821392</p></div>
                        </div>
                        <p class="delay-date">有效期：2018-08-05至2018-09-20</p>
                    </div>
                </div>
                <div class="line"></div>
                <div @click="zhankaiOrshouqi" class="lingquanBox-container-bottom iconfont" :class="isShow1?'icon-wangshangshouqi':['icon-wangxiazhankai']">
                     <p :class="{addHeight:isShow1}">仅限于星巴克星巴克星巴克星巴克星巴克星巴克仅限于星巴克星巴克星巴克星巴克星巴克星巴克</p>
                </div>
            </li>
            <li class="quan-item-box" :class="{addHeight:isShow2}">
                <div class="lingquanBox-container-top font-15">黑手星巴克优惠券</div>
                <div class="lingquanBox-container-center clearfix">
                    <div class="fl">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                    <div class="fl quan-info">
                        <div class="clearfix quan-info-box">
                            <!-- <div class="quan-info-left fl"><span>¥</span><span class="price">10</span></div> -->
                            <div class="zhekou fl"><span>5</span><span class="price">折</span></div>
                            <div class="quan-info-right fl"><p>订单满100元使用</p>
                            <p>兑换码：C000291821392</p></div>
                        </div>
                        <p class="delay-date">有效期：2018-08-05至2018-09-20</p>
                    </div>
                </div>
                <div class="line"></div>
                <div @click="zhankaiOrshouqi" class="lingquanBox-container-bottom iconfont" :class="isShow2?'icon-wangshangshouqi':['icon-wangxiazhankai']">
                     <p :class="{addHeight:isShow2}">仅限于星巴克星巴克星巴克星巴克星巴克星巴克仅限于星巴克星巴克星巴克星巴克星巴克星巴克</p>
                </div>
            </li>
        </ul>
         <p class="font-13 tc nomore">没有更多了~</p>
        <p class="font-13 tc seeHistory"  v-if="isHostory" @click="toHistoryGift">查看历史优惠券</p>
    </div>
</template>
<script>
    export default {
        data(){
            return{ 
              isShow1:false,
              isShow2:false,
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
               this.isShow1 = !this.isShow1 ;
               this.isShow2 = !this.isShow2 ;
            },
            toHistoryGift(){
                 this.$router.push({name:"HistoryCouponCode"});
            }
        },
      props:["isHostory"]
    }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/varable.scss";
  .couponCode{
     
  }
     

</style>