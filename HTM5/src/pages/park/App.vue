<template>
    <div class='preference'>
        <!-- 头部 -->
        <mt-header title="停车缴费">
          <mt-button icon="back" @click="goAndroid" slot="left"></mt-button>
        </mt-header>
       <!-- 底部 -->
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
<style>
#app {
   width:100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #EDEDED;
}
</style>
