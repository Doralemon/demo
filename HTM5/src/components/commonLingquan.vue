<template>
    <div>
        <div class="lingquan clearfix" @click="lingquan">
            <div class="fl">
                <span class="span-title">领券</span>
                <span class="tc">优惠券</span>
            </div>
            <div class="fr iconfont icon-zhankai"></div>
        </div>
        <!-- 领券弹框 -->
        <mt-popup
            v-model="popupVisible"
            position="bottom" class="lingquan-popup">
            <div class="lingquanBox-top">
                <p class="tc lingquan-title">领券</p>
                <div class="iconfont icon-guanbiicon" @click="beClose">
                </div>
            </div>
            <div class="lingquanBox-container">
                <ul>
                    <li class="quan-item">
                        <div class="quan-item-box">
                            <div class="lingquan-status yilingqu tc">已领取</div>
                            <div class="lingquanBox-container-top font-15">黑手星巴克优惠券</div>
                            <div class="lingquanBox-container-center clearfix">
                                <div class="fl">
                                    <img src="../../../assets/logo.png" alt="">
                                </div>
                                <div class="fl quan-info">
                                    <p><span>¥</span><span class="price">10</span>订单满100元使用</p>
                                    <p class="delay-date">有效期：2018-08-05至2018-09-20</p>
                                </div>
                            </div>
                            <div class="lingquanBox-container-bottom">仅限于星巴克星巴克星巴克星巴克星巴克星巴克使用</div>
                        </div>
                    </li>
                    <li class="quan-item">
                        <div class="quan-item-box">
                            <div class="lingquan-status weilingqu tc">未领取</div>
                            <div class="lingquanBox-container-top font-15">黑手星巴克优惠券</div>
                            <div class="lingquanBox-container-center clearfix">
                                <div class="fl">
                                    <img src="../../../assets/logo.png" alt="">
                                </div>
                                <div class="fl quan-info">
                                    <p><span>¥</span><span class="price">10</span>订单满100元使用</p>
                                    <p class="delay-date">有效期：2018-08-05至2018-09-20</p>
                                </div>
                            </div>
                            <div class="lingquanBox-container-bottom">仅限于星巴克星巴克星巴克星巴克星巴克星巴克使用</div>
                        </div>
                    </li>
                </ul>
            </div>
        </mt-popup>
    </div>
</template>
<script>
    export default {
        data(){
            return{ 
            popupVisible:false,
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
            lingquan(){ //领券
                this.popupVisible = true;
            },
            beClose(){ //关闭领券弹框
                this.popupVisible = false;
            }
        },
            components:{
                
            }
    }
</script>
<style lang="scss" scoped>

</style>