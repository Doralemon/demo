<template>
    <div class='preference-info'>
        <ul  v-infinite-scroll="loadMore"
                infinite-scroll-disabled="moreLoading"
                infinite-scroll-distance="10"
                infinite-scroll-immediate-check="false"
                v-if="this.goodsList.length||!oListId" class="preference-info-sub">
            <!-- <li v-for="(item,index) in goodsList" :key="index">
                左边图片
                <div class="preference-info-sub-img fl">
                    <img :src="item.enterImgPath" alt="">
                </div>
                右边信息
                <div class="preference-info-sub-right fl">
                    上边文字
                    <div class="goods-title-box">
                        <p class="goods-title two2ell"> {{item.productName}}</p>
                    </div>
                    商品标签
                    <div class="goods-tag">
                        <span class="one2ell" v-show="item.label" v-for="(itemLabel,index) in item.label.split('&&')" :key="index">{{itemLabel}}</span>
                    </div>
                    下面价格
                    <p class="goods-price"><span class="price">&yen;{{item.price}}</span>
                        <span class="news-goods" v-show="item.isNew=='1'">新品</span>
                    </p>
                </div>
            </li> -->
             <!--底部判断是加载图标还是提示“全部加载”-->
            <li class="more_loading" v-show="!queryLoading">
                <mt-spinner class="tc" type="fading-circle" color="#888888" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
                <span class="font-13 tc" v-show="allLoaded">没有更多啦</span>
            </li>
        </ul>
        <div v-else class="null-img">
           <div class="img-box">
           </div>
            <p class="tc">没搜到商品哦~</p>
        </div>
    </div>
</template>
<script>
import { queryProductSpecList }  from '../../../assets/js/api.js';
export default {
    data(){
        return{
            goodsList:[],
            oListId:'',
            businessID:'',
            page:"1",
            pageSize:"5",
            moreLoading:true,//无限加载参数
            queryLoading:false,//
            allLoaded:false,
            token:"",
            projectId:""
        }
    },
    beforeCreate () {
            
    },
    created () { 
        this.token = localStorage.getItem('token');
        this.projectId = localStorage.getItem('projectId');
        // this.getListGoods() 
    },
    activated(){
        
    },
    deactivated(){
        
    },
    methods:{
        loadMore() {
            this.moreLoading = true;
            if(this.allLoaded){
                return;
            }
            if(this.queryLoading){
            return;
            }
//          this.moreLoading = !this.queryLoading;
            this.getListGoods();
        },
        getListGoods(){ //对应分类的产品
                this.oListId = this.$route.params.id;
                this.businessID = localStorage.getItem('businessID');
                if(!this.oListId){
                    return;
                }
             queryProductSpecList({params:{
                    projectId:this.projectId,
                    businessID:this.businessID,
                    classify:this.oListId,
                    viewType:"02",
                    pageNo:this.page,
                    pageSize:this.pageSize,
                    sortType:"1",
                    token:this.token
                }}).then(Response=>{
                    switch(Response.code){
                        case '000':
                        if(this.page==1){
                            this.goodsList = Response.data;
                        }else{
                            this.goodsList = this.goodsList.concat(Response.data);
                        }
                        this.page++;
                        this.allLoaded =   Response.data.length<this.pageSize;
                        if(!this.allLoaded){
                        	this.moreLoading = false;
                        }
                        break;
                    }
                })
            }
    },
    watch:{
        "$route":function(newValue,oldValue){
            console.log(newValue)
            if(newValue.name=="PreferenceInfo"){
                this.moreLoading=true;//无限加载参数
                this.page =1; 
                this.goodsList =[];
                this.queryLoading=false;
                this.allLoaded=false;
                this.getListGoods();//清空后会自动触发事件
            }
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
            overflow: auto;
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
                    position: relative;
                    width:p2r(280);
                    height: 100%;
                    left:p2r(20);
                    // 商品名称
                    .goods-title-box{
                        // height: p2r(80);
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
                        position: absolute;
                        bottom: 0;
                        left:0;
                        .price{
                            padding-right: p2r(10);
                        }  
                    }
                    .goods-tag{
                        margin-top:p2r(10);
                        height: p2r(84);
                    }
                }
            }
        }
</style>




