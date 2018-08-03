<template>
    <div class='preference'>
        <!-- 头部 -->
        <mt-header title="卓越优选">
          <mt-button icon="back" @click="goAndroid" slot="left"></mt-button>
        </mt-header>
       <!-- 底部 -->
       <div class="o-pre-bottom">
            <!-- 左边侧边栏 -->
                <aside>
                    <ul class="o-goodsList">            
                        <li v-for='(item,index) in asideList' :key='index' >
                            <router-link :to="{ name: 'PreferenceInfo', params: { id: item.id }}">{{item.name}}</router-link>
                        </li>    
                    </ul>
                </aside>         
            <!-- 右边商品侧边栏 -->
            <router-view></router-view>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            asideList:[{id:1,name:'百果园'},
            {id:2,name:'面包乳品'},
            {id:3,name:'消遣零口'},
            {id:4,name:'生活便利'},
            {id:5,name:'酒品饮料'},
            {id:6,name:'名品特惠'},
            {id:7,name:'滋养茗茶'},
            {id:8,name:'爱车养护'},
            {id:9,name:'港澳旅行'},
            {id:10,name:'中秋特辑'}] 
        }
    },
    beforeCreate () {
        
    },
    created () {
        if(this.$route.path=='/'){           
            this.$router.replace(`/preference/${this.asideList[0].id}`);   
        }
    },
    methods:{
      goAndroid(){
         window.WebViewJavascriptBridge.callHandler(
                'backNative',//data发送给native
                // function(responseData) {//接收onCallBack回传回来的数据
                //     document.getElementById("show").innerHTML = responseData;
                // }
            );
      }
    }    
}
</script>
<style lang="scss" scoped>
@function p2r($px){
    @return ($px/32)*1rem
  };
  @mixin size($width, $height) {
    width: p2r($width);
    height: p2r($height);
  }
//   卓越优选
  .preference{
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    // 底部
    .o-pre-bottom{
        flex: 1;
        display: flex;
        margin-top:p2r(20);
    }
    // 底部侧边栏
    aside{
        width: p2r(160);
        height: 100%;
        background-color: #fff;
        margin-right: p2r(20);
        .o-goodsList{
            padding-left: 0;
            margin:0;
            width:100%;
            text-align: center;
            li{
                list-style: none;
                height: p2r(70);
                line-height: p2r(70);
                border-bottom: 1px solid #F4F4F4;
                a{
                    display: inline-block;
                    color:#000;
                    width: 100%;
                    height: 100%;
                    &.router-link-active{
                        border-bottom:none;
                        color: #CF3330;
                        background-color: #EDEDED;
                    }
                }        
            }
        }
        }
}
</style>

