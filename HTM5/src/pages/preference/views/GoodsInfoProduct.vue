<template>
        <div class="app preference-goods-info-product">
            <div class="preference-goods-info-img">
                 <!-- 顶部轮播图 -->
                <mt-swipe :auto="4000">
                    <mt-swipe-item>
                        <img preview="1" src="../../../assets/logo.png" alt="商品图片">
                        <div class="item-num tc">1/5</div>
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="preference-goods-info-product-article">
                 <!-- 文字描述 -->
                <div class="goods-info-des">
                    <p class="two2ell goodsInfo-title">&nbsp;【鲜果上市】 陕西黑布林大李子 5斤大果 水润香甜 口感细腻</p>
                    <div class="Gray-666 goodsInfo-price clearfix">
                        <div class="fl">
                            <span class="price">&yen;29.8</span> /箱&nbsp;&nbsp;&nbsp;<span class="news-goods">新品</span>
                        </div>
                        <div class="fr">
                            <el-rate
                                v-model="value5"
                                disabled
                                disabled-void-color="#DFDFDF"
                                :colors="['#FF4949','#FF4949','#FF4949']"
                                score-template="{value}">
                            </el-rate>    
                        </div>
                    </div>
                    <p class="Gray-666 goodsInfo-ship"><span>运费:&nbsp;&nbsp; &yen;0.00元</span><span>销量:&nbsp;&nbsp;999</span></p>
                    <p class="goods-tag">
                        <span class="one2ell">面包面包面包</span>
                        <span class="one2ell">面包面包面包</span>
                    </p>
                </div>
                <!-- 领券 -->
                <div class="lingquan clearfix" @click="lingquan">
                    <div class="fl">
                        <span class="span-title">领券</span>
                        <span class="tc">优惠券</span>
                    </div>
                    <div class="fr iconfont icon-zhankai"></div>
                </div>
                <!-- 商品简介 -->
                <div class="preference-goods-info-bref">
                    <p class="span-title">商品简介</p>
                    <div class="clearfix">
                        <ul class="fl ul-title">
                            <li>服务</li>
                            <li>净含量</li>
                            <li>品牌</li>
                            <li>热卖时间</li>
                            <li>产地</li>
                            <li>特卖品种</li>
                        </ul>
                        <ul class="fl">
                            <li>订单险·不支持7天无理由</li>
                            <li>3000g</li>
                            <li>秦地农场</li>
                            <li>7月、8月、9月、10月、11月</li>
                            <li>中国大陆</li>
                            <li>呼和浩特秋红李</li>
                        </ul>
                    </div>
                </div>
                <div>
                     <!-- 评价 -->
                    <bigComment></bigComment>
                    <!-- 图文详情 -->
                    <div class="img-info">
                        <p class="iconfont icon-shanglaicon tc" @click='goImg'>上拉查看图文详情</p>
                    </div>
                </div>
                <p class="tc goods-provide Gray-666">本商品是由深圳菠萝蜜供应链管理有限公司提供</p>
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
    import bigComment from '../../../components/bigComment.vue'
    export default {
        data(){
            return{
            isToCart:false,
            isTobuy:false,  
            popupVisible:false,
            value5:3.6  //评分
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
            goImg(){
                this.$router.push({name:"GoodsImg"});
            },
            lingquan(){ //领券
                this.popupVisible = true;
            },
            beClose(){ //关闭领券弹框
                this.popupVisible = false;
            }
        },
        components:{
            bigComment
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .preference-goods-info-product{
        // 顶部图文信息
        .preference-goods-info-img{
            position: relative;
            .item-num{
                position: absolute;
                @include size(80,38);
                line-height: p2r(38);
                background: #FFFFFF;
                border: 1px solid #D8D8D8;
                right: p2r(30);
                bottom: p2r(30);
                font-size: 12px;
                color: #666666;
            }
        }
        // 下面具体信息
        .preference-goods-info-product-article{
             .goods-info-des,.lingquan,.preference-goods-info-bref,.img-info{
                background-color: #fff;
                padding:p2r(30);
             }
            .goods-info-des{
                 padding-top:p2r(30);  
                .goodsInfo-price,.goodsInfo-ship,.goods-tag{
                     margin-top:p2r(30);   
                }
                .goodsInfo-title{
                    font-family: PingFangSC-Medium;
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 0.2px;
                    line-height: 30px;
                    font-weight: 700;
                }
                .goodsInfo-price{
                    font-size: 13px;
                    color: #666666;
                    letter-spacing: 0;
                    .price{
                        font-family: PingFangSC-Medium;
                        font-size: 20px;
                        color: #FF4949;
                        letter-spacing: 0;
                        line-height: 24px;
                        font-weight: 500;
                    }
                }    
                .goodsInfo-ship{
                    span:first-child{
                        padding-right: p2r(100);
                    }
                }
                .goods-tag{

                }
            } 
            .lingquan{
                height: p2r(104);
                margin-top:p2r(16);
                margin-bottom:p2r(16);
                padding-top:p2r(30);
                position: relative;
                span:nth-child(2){
                    position: absolute;
                    left:p2r(120);
                    top:p2r(29);
                    display: inline-block;
                    @include size(120,46);
                    line-height: p2r(46);
                    background-image: url('../../../assets/img/优惠券bg.svg');
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: p2r(120) p2r(46);
                    color:#fff;
                    font-size: 12px;
                    line-height: p2r(46);  
                }
                .icon-zhankai{
                    @include size(12,22);
                }
            }
            .preference-goods-info-bref{
                ul{
                    li{
                        margin-top:p2r(30);
                        font-size: 13px;
                        line-height: 18px;
                    }
                }
                .ul-title{
                    font-family: PingFangSC-Regular;
                    color: #888888;
                    letter-spacing: 0;
                    width:p2r(170);
                }
            }
            .img-info{
                height: p2r(98);
                font-size: 15px;
                color: #999999;
                p{
                    &::before{
                        padding-right: 10px;
                        font-size: 15px;
                    }
                }
            }
            .goods-provide{
                margin-top:p2r(30);
                margin-bottom: p2r(30);
                font-size: 12px;
                color: #777777;
                letter-spacing: -0.29px;
            }
            
        }
    }
    .lingquan-popup{
        width:100%;
        .lingquanBox-top{
            position: relative;
            .lingquan-title{
                height: p2r(108);
                line-height: p2r(108);
                font-size: 17px;
                font-weight: 700;
                border-bottom: 1px solid #F1F1F1;
            }
            .icon-guanbiicon{
                position: absolute;
                right: p2r(30);
                top:p2r(42);
                font-size: 12px;
                @include size(24,24);    
            }
        }
        .lingquanBox-container{
            position: relative;
            padding:p2r(30);
            margin-bottom: p2r(164);
            max-height: p2r(892);
            overflow: auto;
            ul{
                .quan-item{
                    position: relative;
                    height: p2r(324);
                    margin-top:p2r(30); 
                    background-image: url("../../../assets/img/优惠券bg2.svg");
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: p2r(702) p2r(324);
                    &:first-child{
                            margin-top:0;
                        }
                    .quan-item-box{
                        padding:p2r(30) p2r(30) p2r(24) p2r(30);
                    }   
                }
            }
            .lingquan-status{
                position: absolute;
                right: p2r(30);
                border-radius: 100px;
                @include size(132,50);
                line-height: p2r(48);
                border-radius: p2r(100);
                font-size: 12px;
                color: #FFFFFF;
            }
            .yilingqu{
                background: #DFDFDF;
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
                    position: relative;
                    vertical-align: bottom;
                    p{
                        font-size: 12px;
                        color: #666666;
                        span:first-child{
                            position:absolute;
                            left:0;
                            top:0;
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
    }
</style>