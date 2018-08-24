<template>
    <div class='app preference'>
        <!-- 头部 -->
        <header>
            <div class="goBack iconfont icon-fanhuiicon">
            </div>
            <div class="title">
                卓越优选
            </div>
            <div class="cart" @click="goCart">
                <el-badge :value="cartNum" :max="99" class="item">
                    <div class="iconfont icon-gouwucheicon"></div>
                </el-badge>
            </div>
        </header>
       <!-- 底部 -->
       <div class="o-pre-bottom">
            <!-- 左边侧边栏 -->
            <aside class="">
                <ul class="o-goodsList" v-if="this.asideList.length">  
                    <li v-for='(item,index) in asideList' :key='index'>
                        <a :class="{active:selectIndex==index}" @click='getProductInfo(item.id,index)'>{{item.classifyName}}</a>
                    </li>          
                </ul>
            </aside>
            <!-- 右边商品侧边栏 -->
            <PreferenceInfo></PreferenceInfo>
       </div>
    </div>
</template>
<script>
    import { queryProductCategroy,queryCartNum }  from '../../../assets/js/api.js';
    import PreferenceInfo from './PreferenceInfo.vue'
    export default {
        data(){
            return{
                asideList:[] ,
                cartNum:"",
                token:"",
                userId:"",
                projectId:"",
                selectIndex:1
            }
        },
        beforeCreate () {
   
            },
        created () {
               this.token = localStorage.getItem('token');
               this.projectId = localStorage.getItem('projectId');
               this.userId = localStorage.getItem('userId');
               this.getProductCategroy();
               this.getCartNum();
        },
        beforeDestroy(){
        },
        destroyed(){
        },
        methods:{
            goAndroid(){
                window.WebViewJavascriptBridge.callHandler(
                        'backNative',//data发送给native
                        // function(responseData) {//接收onCallBack回传回来的数据
                        //     document.getElementById("show").innerHTML = responseData;
                        // }
                    );
            },
            getProductCategroy(){ //获取分类列表
                queryProductCategroy({params:{token:this.token,
                    projectId:this.projectId,
                    busCode:"BSC0001",
                    } 
                 }
                ).then(Response=>{
                    switch(Response.code){
                        case '000':
                        this.asideList = Response.data[0].busProductClassifyBean;
                        localStorage.removeItem('businessID');
                        localStorage.setItem('businessID',Response.data[0].id);
                        this.selectIndex = 0;
                        break;
                    }
                })
            },
            getCartNum(){ //获取购物车数量
                queryCartNum(
                    {params:{token:this.token,
                        userId:this.userId
                    } 
                 }
                ).then(Response=>{
                    switch(Response.code){
                        case '000':
                        this.cartNum = Response.data
                        break;
                    }
                })  
            },
            getProductInfo(id,index){ //获取分类列表的详情
                this.selectIndex = index;
            },
            goCart(){
                this.$router.push({name:"Cart"});
            } 
        },
        components:{
            PreferenceInfo
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .view {
    transition: all 0.4s ease-in-out;
    &.view.fade-enter-active,&.view.fade-leave-active{
        opacity: 0.01;
    }
    &.view.fade-enter,&.view.fade-leave{
        transition: opacity 0.4s;
    }
    }
    //   卓越优选
    .preference{
        display: flex;
        flex-direction:column;
        // 头部
        header{
            width: 100%;
            margin:0 auto;
            position: relative;
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
            }
            .cart{
                position: absolute;
                right:p2r(32);
                top:p2r(26);
                @include size(44,44);
            .icon-gouwucheshuliangyiweishubg{
                color: #FF5656;
            }
            }
        
        }
        // 底部
        .o-pre-bottom{
            flex:1;
            overflow: hidden;
            display: flex;
        }
        // 底部侧边栏
        aside{
            width: p2r(160);
            background-color: $commongary;
            margin-right: p2r(20);
            .o-goodsList{
                padding-left: 0;
                margin:0;
                width:100%;
                text-align: center;
                li{
                    list-style: none;
                    height: p2r(88);
                    line-height: p2r(88);   
                    a{
                        position: relative;
                        display: block;
                        color:#888888 ;
                        width: 100%;
                        height: 100%;
                        &.active{
                            border-bottom:none;
                            color: #FF5656;
                            background-color: #fff;
                            &::after{
                                display: block;
                                content: '';
                                @include size(10,40);
                                background: #FF5656;
                                border-radius: 1px;
                                position: absolute;
                                top:p2r(24);
                            }
                        }
                    }        
                }
            }
        }

    }
</style>

