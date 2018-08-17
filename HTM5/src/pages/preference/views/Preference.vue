<template>
    <div class='app preference'>
        <!-- 头部 -->
        <header>
            <div class="goBack iconfont icon-fanhuiicon">

            </div>
            <div class="title">
                卓越优选
            </div>
            <div class="cart">
                <el-badge :value="9" :max="99" class="item">
                    <div class="iconfont icon-gouwucheicon"></div>
                </el-badge>
            </div>
        </header>
       <!-- 底部 -->
       <div class="o-pre-bottom">
            <!-- 左边侧边栏 -->
            <aside class="wrapper1">
                <ul class="o-goodsList content" v-if="this.asideList.length">            
                    <li v-for='(item,index) in asideList' :key='index'>
                        <router-link :to="{ name: 'PreferenceInfo', params: { id: item.id }}">{{item.name}}</router-link>
                    </li>    
                </ul>
            </aside>
            <!-- 右边商品侧边栏 -->
            <router-view class="view"></router-view>
       </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll';
    import {queryProductCategroy}  from '../../../assets/js/api.js';
    export default {
        data(){
            return{
                asideList:[{id:1,name:"百果园"},
                {id:2,name:"面包乳品"},
                {id:3,name:"消遣零口"},
                {id:4,name:"生活便利"},
                {id:5,name:"酒品饮料"},
                {id:6,name:"名品特惠"},
                {id:7,name:"滋养茗茶"},
                {id:8,name:"爱车养护"},
                {id:9,name:"港澳旅行"},
                {id:10,name:"中秋特辑"},
                ] 
            }
        },
        beforeCreate () {
            
        },
        created () {
            if(this.$route.path=='/preference'&&this.asideList.length!==0){       
                this.$router.replace({name:'PreferenceInfo',params: { id: this.asideList[0].id }});   
            }
            // this.getProductCategroy();
        },
        mounted(){
            this.$nextTick(function(){
            new BScroll('.wrapper1',{
                    scrollY: true,
                    click: true
                })
            })
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
            getProductCategroy(){
                queryProductCategroy({params:{token:"3bcc5433-523b-4c77-887d-755443540a0d",
                    ByProductCategroy:"8527c7ca-0a89-11e5-b693-000c29a11092"     
                } 
                }
                    ).then(Response=>{
                switch(Response.code){
                    case '000':
                    this.asideList = Response.data;
                    break;
                }
                })
            }
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
                        &.router-link-active{
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

