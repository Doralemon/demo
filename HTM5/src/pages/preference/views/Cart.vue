<template>
    <div class="cart common-bg">
        <div class="cart-main" v-if="goodsList.length">
            <Head :titleName="title">
                <div slot="header-right" class="edit-cart tc">编辑</div>
                <div slot="header-right" class="edit-cart tc">完成</div>
            </Head>
            <div class="cart-goods">
                <ul class="cart-goods-ul">
                    <!-- 店铺 -->
                    <li class="cart-shop-item">
                        <p class="shop-title font-15"><span class="input-icon checked" @click="chooseAll"></span>菠萝蜜</p>
                        <ul class="goods-info">
                            <!-- 单个商品 -->
                            <li v-for="(item,index) in goodsList" :key="index">
                                <span class="input-icon"></span>
                                <div class="clearfix goods-des">
                                    <div class="fl img-box">
                                        <img src="../../../assets/logo.png" alt="">
                                    </div>
                                    <div class="fl goods-des-right">
                                        <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                        <p class="goods-gui font-13">规格：多甜</p>
                                        <p class="goods-price font-13 clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;<del class="font-13">¥29.80</del>
                                            <span class="fr"><commonBtn class="btn"></commonBtn></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- 店铺 -->
                    <li class="cart-shop-item">
                        <p class="shop-title font-15"><span class="input-icon"></span>菠萝蜜</p>
                        <ul class="goods-info">
                            <!-- 单个商品 -->
                            <li>
                                <span class="input-icon"></span>
                                <div class="clearfix goods-des">
                                    <div class="fl img-box">
                                        <img src="../../../assets/logo.png" alt="">
                                    </div>
                                    <div class="fl goods-des-right">
                                        <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                        <p class="goods-gui font-13">规格：多甜</p>
                                        <p class="goods-price font-13 clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;<del class="font-13">¥29.80</del>
                                            <span class="fr"><commonBtn class="btn"></commonBtn></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <!-- 单个商品 -->
                            <li>
                                <span class="input-icon"></span>
                                <div class="clearfix goods-des">
                                    <div class="fl img-box">
                                        <img src="../../../assets/logo.png" alt="">
                                    </div>
                                    <div class="fl goods-des-right">
                                        <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                        <p class="goods-gui font-13">规格：多甜</p>
                                        <p class="goods-price font-13 clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;<del class="font-13">¥29.80</del>
                                            <span class="fr"><commonBtn class="btn"></commonBtn></span>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- 失效商品 -->
                <div class="notwork-goods cart-shop-item">
                    <div class="clearfix notwork-goods-top">
                        <p class="fl font-15">失效商品2件</p>
                        <p class="fr font-15 clear-goods" @click="clearAll">清空失效商品</p>
                    </div>
                    <ul class="goods-info">
                        <li>
                            <div class="shixiao"></div>
                            <div class="clearfix goods-des">
                                <div class="fl img-box">
                                    <img src="../../../assets/logo.png" alt="">
                                </div>
                                <div class="fl goods-des-right">
                                    <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                    <p class="goods-gui font-13">规格：多甜</p>
                                    <p class="goods-price font-13 clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;<del class="font-13">¥29.80</del>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="shixiao"></div>
                            <div class="clearfix goods-des">
                                <div class="fl img-box">
                                    <img src="../../../assets/logo.png" alt="">
                                </div>
                                <div class="fl goods-des-right">
                                    <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包黑巧克力脏脏包黑巧克力脏脏包</p>
                                    <p class="goods-gui font-13">规格：多甜</p>
                                    <p class="goods-price font-13 clearfix"><span class="fl">¥19.80</span>&nbsp;&nbsp;<del class="font-13">¥29.80</del>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>  
                </div>
            </div>
            <div class="cart-bottom clearfix">
                <div class="font-15 choose-all fl" @click="chooseAll"><span class="input-icon"></span>全选</div>
                <!-- <div class="fr">
                    <span class="total">¥59.40</span>
                    <div class="cheacout tc" @click="goCheckout">去结算</div>
                </div> -->
                <div class="fr">
                    <div class="delete tc" @click="deleteAll">删除</div>
                </div>
            </div>
        </div>
        <div class="cart-main" v-else>
            <Head :titleName="title"></Head>
            <div class="cart-center">
                <div class="cart-box">
                    <div class="cart-nullbg">
                    </div>
                    <p class="font-15 tc">还没有添加任何商品呢~</p>
                    <el-button type="danger" round @click="goSee">去逛逛</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import commonBtn from '../../../components/commonBtn.vue';
    import Head from "../../../components/head.vue";
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return{ 
                title:"购物车",
                checked:false,
                goodsList :[ {
                name : '山本汉方1',
                price : '19.00'
            }],
            checkoutList:[{
                name : '山本汉方1',
                price : '19.00'
            }],
               selectArr :[]
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
             chooseAll : function(event) { //全选
                var oThis = this;
                oThis.selectArr = [];
                if ( event.currentTarget.checked ) {
                    oThis.goodsList.forEach(function(item , index) {
                    oThis.selectArr.push(index);
                    });
                }
                console.log(oThis.selectArr);
             },
             clearAll(){  //清空失效商品

             },
             goCheckout(){ //去结算
                   if(!this.checkoutList.length){
                       Toast({
                        message: '您还没有选择商品',
                        duration: 3000
                        });
                        return;
                   } 
                   this.$router.push({name:"Order"});
             },
             deleteAll(){ //删除
                 if(this.checkoutList.length){
                       Toast({
                        message: '您还没有选择商品',
                        duration: 3000
                        });
                        return;
                   } 
                MessageBox({
                    message: '确定要删除所选商品?',
                    showCancelButton: true
                });
             },
             goSee(){ //去逛逛
                    this.$router.push({name:"Preference"});
             }
        },
        components:{
            Head,
            commonBtn
        },
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .cart{
        .edit-cart{
           font-size: 14px;
          color: #444444; 
          font-weight: normal; 
        }
        .cart-goods{
            padding-top:p2r(88);
            padding-bottom: p2r(128);
            //   单个商品的公共样式
            .goods-info{
                li{
                    position: relative;
                    border-bottom: 1px solid #F1F1F1;
                    padding:p2r(30) 0 p2r(30) p2r(62);    
                }
                .goods-des{
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
        } 
        .cart-shop-item{
            margin-top:p2r(16);
            padding:p2r(30) p2r(30) 0;
            background: #fff;
            del{
                    color: #C3C3C3;
                }
            .btn{
                width: p2r(164);
                height: p2r(36);
                border:none;
                padding:0;
                display: flex;
                margin-top:0;
                .less,.more{
                    width:p2r(36);
                }
                input{
                    flex:1;
                }
            }
        }
        .notwork-goods{
            &.cart-shop-item{
                padding-left: 0;
            }
            .notwork-goods-top{
                padding-left:p2r(30);
                .clear-goods{
                    font-size: 15px;
                    color: #FF5656;
                    line-height: 22px;
                }
            }
            .goods-info{
                padding-left:p2r(30);
            }
            .shixiao{
                position: absolute;
                top:50%;
                left:0;
                transform: translateY(-50%);
                @include size(32,80);
                background:url("../../../assets/img/失效.svg") no-repeat center center;
                background-size: p2r(32) p2r(80);
            }
        }
        .cart-bottom{
            position: fixed;
            left:0;
            right:0;
            bottom: 0;
            height: p2r(112);
            padding: 0 p2r(30); 
            padding-left: p2r(92);
            background: #fff;
            .choose-all{
                margin-top:p2r(34);
                .input-icon{
                    left:p2r(30);
                }
            }
            .total{
                font-size: 20px;
                line-height: p2r(56);
                color: $Ored;
                padding-right: p2r(32);
                margin-top:p2r(28);
            }
            .cheacout,.delete{
                @include size(240,80);
                background: #FF5656;
                border-radius: p2r(58);
                font-size: 15px;
                color: #FFFFFF;
                line-height: p2r(80);
                margin-top:p2r(16);
            }
            .delete{
                border: 1px solid #FF5656; 
                color: #FF5656;
                background: #fff;
            }
        }
        .shop-title{
            position: relative;
            padding-left:p2r(62);
            .input-icon{
                top:5px;
                transform: translateY(0);
            }
        }
        .input-icon{
            @include size(32,32);
            position: absolute;
            top:50%;
            left:0;
            transform: translateY(-50%);
            background: #FFFFFF;
            border: 1px solid #C0C0C0;
            border-radius: 50%;
            &.checked{
                background: url("../../../assets/img/选中（红色.svg") no-repeat center center;
                background-size: p2r(32) p2r(32);
                border:0;
            }
        }
        // 购物车空状态
        .cart-center{
            position: relative;
            padding-top:p2r(88);
            .cart-box{
                position: absolute;
                top:p2r(260);
                left: 50%;
                transform: translateX(-50%);
                .cart-nullbg{
                    @include size(320,320);
                    background:url("../../../assets/img/购物车空状态png@2x.png") no-repeat center center;
                    background-size: p2r(204) p2r(270);
                }
                p{
                    margin-top:p2r(24);
                    color: #888888;
                }
                button{
                    position: absolute;
                    bottom:p2r(-60-74);
                    left:50%;
                    transform: translateX(-50%);
                    @include size(218,74);
            }
            }
            
        }    
    }
    
</style>