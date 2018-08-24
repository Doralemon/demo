<template>
        <div class="singleOrder">
            <Head :titleName="title"></Head>
           <div class="singleOrder-center">
               <div class="buyer-name iconfont icon-zhankai" @click="goAddress">
                    <p class="span-title">收货人信息</p>
                    <div class="p-bottom" v-if="this.address">
                        <p class="clearfix">
                            <span class="fl">张西西&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;186****3928</span>
                            <span class="fl moren tc">默认</span>
                        </p>
                        <p class="p-bottom">{{address}}</p>     
                    </div>
                    <p class="p-bottom" v-else>
                        还没有收货地址呢，快去添加吧
                    </p>
                </div>
                    <ul class="goods-info">
                        <li>
                            <p class="span-title">菠萝蜜</p>
                            <div class="clearfix goods-des">
                                <div class="fl img-box">
                                    <img src="../../../assets/logo.png" alt="">
                                </div>
                                <div class="fl goods-des-right">
                                    <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                    <p class="goods-gui p-bottom">规格：多甜</p>
                                    <p class="goods-price p-bottom clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;&nbsp;/个<span class="fr">×<i>1</i></span></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="quan-box" @click="goQuanCode">
                        <div class="clearfix quan-box-top">
                            <p class="fl span-title">优惠券/优惠码</p>
                            <p class="fr iconfont icon-zhankai p-right">无可用优惠券</p>
                            <p class="fr iconfont icon-zhankai p-right">10元优惠券</p>
                            <p class="fr iconfont icon-zhankai p-right keyongquan">2张可用</p>
                        </div>
                        <div class="clearfix quan-box-bottom">
                            <p class="fl span-title">发票</p>
                            <p class="fr iconfont icon-zhankai p-right">不开发票</p>
                            <p class="fr iconfont icon-zhankai p-right">正联浩东科技有限公司</p>
                        </div>
                    </div>
                <div class="goods-box">
                    <div class="clearfix goods-box-top">
                        <p class="fl span-title">商品合计</p>
                        <p class="fr p-right">¥<span>19.80</span></p>
                    </div>
                    <div class="clearfix goods-box-center">
                        <p class="fl span-title">商品优惠</p>
                        <p class="fr p-right">-¥<span>19.80</span></p>
                    </div>
                    <div class="clearfix goods-box-bottom">
                        <p class="fl span-title">运费</p>
                        <p class="fr p-right">+¥<span>0.00</span></p>
                    </div>
                </div>
                <div class="liuyan-box">
                    <p class="fl span-title">留言</p>
                    <el-input class="p-right"
                            type="textarea"
                            :autosize="{ minRows:1, maxRows: 1}"
                            placeholder="请输入您的留言，让商家满足您"
                            v-model="textarea">
                        </el-input>
                </div>
           </div>
           <div class="clearfix price-box">
               <div>
                   <p class="fl price">¥19.80</p>
                    <div class="fr confirm-btn" @click="confirm">
                        <el-button type="danger">确认</el-button>
                    </div>
               </div>
           </div>
        </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import Head from '../../../components/head.vue'
    export default {
        data(){
            return{ 
                title:"确认订单",
                address:"广东省深圳市",
                textarea:"",
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
            goQuanCode(){
                this.$router.push({name:"CouponCode"})
            },
           confirm(){
               if(!this.address){
                   Toast({
                        message: '请编辑收货地址',
                        duration: 3000
                    });
                    return;  
               }
               this.$router.push({name:"OnlinePay"});
           },
           goAddress(){
               this.$router.push({name:"Address"})
           }
        },
        components:{
            Head
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .singleOrder{
        background-color: $commongary;
        .buyer-name,.goods-info,.quan-box,.goods-box,
        .liuyan-box,.price-box{
            padding:p2r(30);
            margin-top:p2r(16);
            background-color: #fff;
        }
        .buyer-name{
            position: relative;
            background-image: url("../../../assets/img/收货地址bg@2x.png");
            background-position: left bottom;
            background-repeat: no-repeat;
            background-size: p2r(750) p2r(4);
            padding-bottom: p2r(34);
            &::before{
                position: absolute;
                top:50%;
                right: p2r(30);
                transform: translateY(-50%);
            }
            .p-bottom{
                padding-top:p2r(16);
            }           
        }
        .p-bottom{
            font-size: 13px;
            color: #666666;
        }
        .p-right{
            font-size: 15px;
            color: #666666;
        }
        .goods-info{
            .goods-des{
                padding-top:p2r(30);
                display: flex;
                .img-box{
                    @include size(200,200);  
                    margin-right: p2r(20);
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                 .goods-des-right{
                        flex:1;
                        .goods-title{
                            font-size: 14px;
                            color: #444444;
                            font-weight:500;
                        }
                        .goods-gui{
                            margin-top:p2r(16);
                        }
                        .goods-price{
                            margin-top:p2r(26);
                            span:first-child{
                                font-size: 15px;
                                color: $Ored;
                            }
                            span:nth-child(2){
                                font-size: 13px;
                                color: #666666;
                            }
                        }
                    }
            }
        }
        .quan-box{
            .quan-box-top{
                border-bottom: 1px solid  #F1F1F1;
                padding-bottom:p2r(30);
                .keyongquan{
                    color: $Ored;
                }
            }
            .quan-box-bottom{
                padding-top:p2r(30);
            }
             .icon-zhankai{
                    padding-right: p2r(42);
                    position: relative;
                    &::before{
                        position: absolute;
                        font-size: 12px;
                        top:50%;
                        right: 0;
                        transform: translateY(-50%);
                    }
                }
        }
        .goods-box{
            .goods-box-top{
                padding-bottom:p2r(20); 
            }
            .goods-box-center{
                padding-top:p2r(20);
                padding-bottom:p2r(20);
            }
            .goods-box-bottom{
                padding-top:p2r(20);
            }
        }
        .liuyan-box{
            margin-bottom: p2r(16);
        }
        .singleOrder-center{
            padding-top:p2r(88);
            padding-bottom: p2r(112);
        }
        .price-box{
            position: fixed;
            bottom:0;
            left:0;
            right: 0;
            padding:p2r(16) p2r(30);
            height: p2r(112);
            .price{
                font-size: 20px;
                line-height: p2r(80);
                color: $Ored;
            }
            .confirm-btn{
                .el-button{
                    @include size(330,80);
                    background: #FF5656;
                    border-radius: p2r(58);
                    font-size: 15px;
                    color: #FFFFFF;
                }
            }
        }
    }
</style>