<template>
    <div class="quan-item-box">
        <div class="guoqiquan"></div>
        <!-- <div :class="flag?'checkedQuan':'uncheckedQuan'"></div> -->
        <div class="lingquanBox-container-top font-15">黑手星巴克优惠券</div>
        <div class="lingquanBox-container-center clearfix">
            <div class="fl">
                <img src="../assets/logo.png" alt="">
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
        <div class="lingquanBox-container-bottom">仅限于星巴克星巴克星巴克星巴克星巴克星巴克使用</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{ 
               
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
            
        },
        props:["flag"]
    }
</script>
<style lang="scss" scoped>
    @import '../assets/css/varable.scss';
     .quan-item-box{
        position: relative;
        height: p2r(324);
        margin:p2r(24); 
        background-image: url("../assets/img/优惠券bg2@2x.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: p2r(718) p2r(340);
        padding:p2r(30) p2r(30) p2r(24) p2r(30);
        
        .guoqiquan{
            position: absolute;
            top:0;
            left:0;
            right: 0;
            height: 100%;
            background: #fff;
            opacity: 0.8;
            &::before{
                content: '';
                @include size(124,124);
                position: absolute;
                top:p2r(20);
                right: p2r(20);
                background: url("../assets/img/已过期icon.svg") no-repeat center center;
                background-size: p2r(124) p2r(124);
        }
        }
        .checkedQuan,.uncheckedQuan{
            position: absolute;
            top:0;
            right:0;
            @include size(72,72);
            
        }
        .checkedQuan{
            background: url("../assets/img/选择优惠券（选择.svg") no-repeat center center;
        }
        .uncheckedQuan{
            background: url("../assets/img/选择优惠券（未选.svg") no-repeat center center;
        }
        .weilingqu{
            background: #FF5656;
        }
        .lingquanBox-container-top{
            font-weight: 700;
        }
        .lingquanBox-container-center{
            padding-top:p2r(24);
            img{
                display: block;
                @include size(120,120);
                margin-right: p2r(30);
            }
            .quan-info{
                .quan-info-box{
                    position: relative;
                    vertical-align: bottom;
                }
                p{
                    font-size: 12px;
                    color: #666666;
                   
                }
                 .quan-info-left{
                     span:first-child{
                        position:absolute;
                        left:0;
                        top:2px;
                        font-size: 15px;
                        color: $Ored;
                        letter-spacing: 0;
                        line-height: 15px;
                    }  
                 }
                  .zhekou{
                        position: relative;
                        width:p2r(90);
                        font-size: 30px;
                        color: $Ored;
                        line-height: 30px;
                        margin-right: p2r(20);
                        span{
                            padding:0;
                        }
                        span.price{
                            position: absolute;
                            top:0;
                            right: 0;
                            font-size: 15px;
                            color: $Ored;
                            letter-spacing: 0;
                            line-height: 15px;
                        }
                    }
                .price{
                    font-size: 30px;
                    color: $Ored;
                    letter-spacing: 0;
                    line-height: 30px;
                    padding-right: p2r(20);
                    padding-left:p2r(25);
                }
                .delay-date{
                    padding-top:p2r(26);
                }
            }
        }
        .lingquanBox-container-bottom{
            position: absolute;
            bottom: p2r(24);
            font-size: 12px;
            color: #666666;
        }
    } 
</style>