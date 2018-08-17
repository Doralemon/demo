<template>
    <div class='preference-info wrapper2'>
        <ul  v-if="this.goodsList.length" class="content preference-info-sub">
            <li v-for="(item,index) in goodsList" :key="index">
                <router-link :to="'/preference/'+oListId+'/'+item.id">
            <!-- 左边图片 -->
                    <div class="preference-info-sub-img fl">
                        <img src="../../../assets/logo.png" alt="">
                    </div>
                    <!-- 右边信息 -->
                    <div class="preference-info-sub-right fl">
                        <!-- 上边文字 -->
                        <div class="goods-title-box">
                            <p class="goods-title two2ell">【不三不四】黑巧克力脏脏包</p>
                        </div>
                        <!-- 商品标签 -->
                        <div class="goods-tag">
                            <span class="one2ell">面包面包面包</span>
                            <span class="one2ell">面包面包面包面包</span>   
                            <span class="one2ell">面包面包面包面包</span>   
                            <span class="one2ell">面包面包面包面包</span>   
                        </div>
                        <!-- 下面价格 -->
                        <p class="goods-price"><span class="price">&yen;29.80</span>
                            <span class="news-goods">新品</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
        <div v-else class="null-img">
           <div class="img-box">
           </div>
            <p class="tc">没搜到商品哦~</p>
        </div>
    </div>
</template>
<style  scoped>
</style>
<script>
import BScroll from 'better-scroll';
export default {
    data(){
        return{
            goodsList:[],
            oListId:''
        }
    },
    beforeCreate () {
            
    },
    created () { 
        this.oListId = this.$route.params.id;
       this.getListGoods() 
    },
      mounted(){
           this.$nextTick(function(){
                 new BScroll('.wrapper2',{
                    scrollY: true,
                    click: true,
                })
            })
    },
    methods:{
         getListGoods(){
            if(this.oListId==2){
                this.goodsList = []
            }else{
               this.goodsList= [{
                id:1,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:2,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:3,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:4,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:5,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:6,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            }]
            }
        },
        initScroll(){
             
        },
    },
    watch:{
             "$route":function(newValue,oldValue){
                this.oListId = newValue.params.id;
                this.getListGoods();
            }
        }, 
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    // 底部右边商品
        .preference-info{
            position: relative;
            margin-top:p2r(20);
            padding-right:p2r(28);
            flex:1;
            .null-img{
                width: p2r(320);
                position: absolute;
                top:p2r(260);
                left:p2r(134);
                .img-box{
                    @include size(320,320);
                    background-image: url("../../../assets/img/商品空状态png@2x.png");
                    background-size: p2r(266) p2r(202);
                    background-position: center center;
                    background-repeat: no-repeat;
                }
                p{
                    font-size: 15px;
                    color: #888888;
                    margin-top:p2r(24);
                }
            }
            
             .preference-info-sub{
                width: 100%;      
                li{
                    width:100%;
                    height: p2r(240);
                    margin-bottom: p2r(20);
                    background-color: #fff;
                    &>a{
                        display: inline-block;
                        color:#000;
                        width: 100%;
                        height: 100%;
                        &.router-link-active{
                            color: #000;
                        } 
                    }
                }
                
                .preference-info-sub-img{
                    width:p2r(240);
                    height: p2r(240);
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
                // 右边文字信息
                .preference-info-sub-right{
                    width:p2r(280);
                    margin-left:p2r(20);
                    // 商品名称
                    .goods-title-box{
                        height: p2r(80);
                        .goods-title{
                            font-family: PingFangSC-Regular;
                            font-weight: 500;
                            font-size: 14px;
                            color: #444444;
                            letter-spacing: 0;
                    }
                    }
                    // 商品价格以及是否新品
                    .goods-price{
                        .price{
                            padding-right: p2r(10);
                        }  
                    }
                    .goods-tag{
                        height: p2r(84);
                    }
                }
            }
        }
</style>




