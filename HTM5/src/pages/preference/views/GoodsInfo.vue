<template>
    <div class='preference-goods-info'>
        <!-- 商品详情头部 -->
        <header>
            <!-- 返回 -->
            <div class="goBack iconfont icon-fanhuiicon" @click="goBack"></div>
            <!-- tab -->
            <div class="title">
                <router-link :to="{name:'Goods'}" class="pre-goods">商品</router-link>
                <router-link :to="{name:'GoodsImg'}" class="pre-info">详情</router-link>                
            </div>
           <!-- 喜欢 -->
            <div class="like iconfont" @click="like" :class="this.isLike?'icon-xihuanyidianji':'icon-xihuanweidianji'"></div>
            <!-- 购物车 -->
            <div class="cart">
                 <el-badge :value="12" :max="99" class="item">
                    <div class="iconfont icon-gouwucheicon"></div>
                </el-badge>
            </div>
        </header>
       <!-- 内容部分 -->
       <div class="article">
            <router-view></router-view>
            <!-- 购买和加入购物车按钮 -->
            <div class="preference-goods-info-btn clearfix">
                <mt-button class="fl cart-btn"  @click="goBuy('cart')">加入购物车</mt-button>
                <mt-button class="fr buy-btn"  @click="goBuy('buy')">立即购买</mt-button>
            </div>
            <!-- 加入购物车或立即购买弹框 -->
            <mt-popup v-model="popupVisible" position="bottom" class="preference-goods-buy">
                <!-- 顶部商品信息 -->
                <div class="preference-goods-buy-top">
                    <div class="beClose iconfont icon-guanbiicon" @click="close"></div>
                    <!-- 商品信息 -->
                    <div class="preference-goods-buy-info clearfix">
                        <img src="../../../assets/logo.png" class="fl" alt="">
                        <div class="fr">
                            <p class="goods-title two2ell   ">【不三不四】黑巧克力脏脏包黑巧克力脏脏包</p>
                            <p class="p-price"><span class="price">&yen;29.00</span> /箱</p>
                        </div>
                    </div>
                    <!-- 规格 -->
                    <div class="preference-goods-buy-gui">
                        <p class="font-15">规格</p>
                        <ul class="clearfix">
                            <li class="fl" @click='getItem(1)' :class="this.buyList.gui==1?'active':''">5斤装</li>
                            <li class="fl" @click='getItem(2)' :class="this.buyList.gui==2?'active':''">10斤装</li>
                            <li class="fl" @click='getItem(3)' :class="this.buyList.gui==3?'active':''">15斤装</li>
                            <li class="fl" @click='getItem(4)' :class="this.buyList.gui==4?'active':''">200斤装</li>
                        </ul>
                    </div>
                    <!-- 购买数量 -->
                    <div class="preference-goods-buy-num">
                        <p class="font-15">购买数量</p>
                        <commonBtn v-on:getNum='getnum'></commonBtn>
                    </div>
                </div>
                <!-- 确定按钮 -->
                <div class="preference-goods-buy-bottom">
                    <mt-button size="large" class="tc" @click="confirmGoods">确定</mt-button>
                </div> 
            </mt-popup> 
       </div>
    </div>
</template>
<script>
import commonBtn from '../../../components/commonBtn.vue';
import { Toast } from 'mint-ui';
    export default {
        data(){
            return{
                popupVisible:false, //控制购买弹框
                isLike:false,//是否喜欢
                buyList:{gui:1},//商品信息
                text:"请选择规格",
                isToast:false,//是否显示toast
                isBuy:false,//是否是购买按钮
            }
        },
        beforeCreate () {
                
        },
        created () { 
         
        },
        mounted(){
        
        },
        methods:{
            goBack(){ //后退
                this.$router.push({name:'PreferenceInfo'});
            },
            goBuy(type){ //购买
                this.popupVisible =true;
                if(type=="buy"){
                    this.isBuy=true;
                }else{
                    this.isBuy=false;
                }
            }, 
            getnum(msg){
                this.buyList.num = msg;
            },
            getItem(num){
                this.buyList.gui =num;
            },      
            confirmGoods(){ //确定
                if(!this.buyList.gui){
                    Toast({
                        message: '请选择规格',
                        duration: 3000
                    });
                    return;
                }
                if(this.isBuy){
                    this.$router.push({name:"Order"});
                }else{
                    Toast({
                        message: '加入购物车成功',
                        duration: 3000
                    });
                }
                    this.popupVisible = false;
            },
            like(){ //喜欢
                this.isLike = !this.isLike;
            },
            close(){ //关闭
                this.popupVisible = false;
            },
        },
        components:{
            commonBtn,
        }
    }
</script>
<style lang="scss" scoped> 
    @import '../../../assets/css/varable.scss';
    .preference-goods-info{
        background-color: $commongary;
         header{
            .goBack{
                position: absolute;
                left:p2r(32);
                top:p2r(26);
                @include size(20,36);
            }
            .title{
                font-family: PingFangSC-Medium;
                font-size: 17px;
                line-height: p2r(88);
                font-weight: 700;
                color: #333333;
                margin:0 p2r(100);
                text-align: center;
                .pre-goods{
                    margin-right: p2r(80);
                }
                a{
                    position: relative;
                    display: inline-block;
                    font-family: PingFangSC-Regular;
                    font-size: 15px;
                    color: #666666;
                    height: 100%;
                    padding-left: p2r(5); 
                    padding-right: p2r(5); 
                    &.router-link-active{
                        &::after{
                            display: block;
                            content: '';
                            width: 100%;
                            height: p2r(4);
                            background: #FF5656;
                            border-radius: 1px;
                            position: absolute;
                            bottom:1px;
                            left:0;
                        }
                    }
                } 
            }
            .like{
                 position: absolute;
                 right: p2r(122);
                 top:p2r(26);
                 @include size(36,34);          
            }
             .icon-xihuanyidianji{
                     color: $Ored;
                 } 
            .cart{
                position: absolute;
                right:p2r(32);
                top:p2r(26);
                @include size(44,44);
            }
        }
        .article{
            padding-top: p2r(88);
            padding-bottom: p2r(112);
        }
        // 底部
        .preference-goods-info-btn{
            position: fixed;
            bottom: 0;
            left:0;
            right:0;
            width:100%;
            padding-left: 4%;
            padding-right:4%;
            height: p2r(112);
            background: #FFFFFF;
            z-index:310;
            .mint-button{
                @include size(330,80);
                border-radius: p2r(58);
                margin-top:p2r(16);
                font-size: 15px;
            }
            .cart-btn{
                background: #FFFFFF;
                border: 1px solid #FF5656;
                color:#FF5656;
            }
            .buy-btn{
                background: #FF5656;
                color:#fff;
            }
        }
    } 
    .preference-goods-buy{
        width: 100%;
        background-color: #fff;
        padding:p2r(30);
        .preference-goods-buy-top{
            position: relative;
            .beClose{
                position: absolute;
                right:p2r(30);
                top:0;
                @include size(24,24);
            }
        }
        //    商品信息
        .preference-goods-buy-info{
            display: flex;
            img{
                display: block;
                @include size(200,200);
                margin-right: p2r(20);
            }
            .goods-title{
                flex:1;
                margin-top:p2r(60);
                color: #444444;
                letter-spacing: 0;
                margin-bottom: p2r(12);
            }
            .p-price{
                font-size: 13px;
                color: #666666;
                letter-spacing: 0;
                    .price{
                    font-size: 20px;
                    color: $Ored;
                    letter-spacing: 0;
                    line-height: 24px;
                }
            }  
        }
        .font-15{
                margin-top:p2r(48);
            }
        //    商品规格
        .preference-goods-buy-gui{  
            ul{
                li{
                    height: p2r(68);
                    font-size: p2r(28);
                    color: #444444;
                    letter-spacing: 0;
                    border: 1px solid #CDCDCD;
                    border-radius: 17px;
                    padding:p2r(14) p2r(40);
                    margin-right: p2r(30);
                    margin-top:p2r(22);
                    &.active{
                        border: 1px solid $Ored;
                        color: $Ored;
                    }
                    &:last-child{
                        margin-right:0;
                    }
                }
            }
        }
        .preference-goods-buy-bottom{
            margin-top:p2r(198);
           .mint-button{
                background: #FF5656;
                border-radius: p2r(58);
                font-size: 15px;
                color: #FFFFFF;
           }
        } 
    }
</style>



