<template>
        <div class="onlinePay common-bg">
           <header></header>
           <div class="onlinePay-center">
               <mt-cell title="实付金额" value="¥89.90" class="font-15"></mt-cell>
               <mt-radio
                align="right"
                title="支付方式"
                v-model="value"
                :options="['微信支付','支付宝支付']">
                </mt-radio>
           </div>
           <div class="onlinePay-bottom tc font-15">确认支付</div>
        </div>
</template>
<script>
    export default {
        data(){
            return{ 
               value:""
        
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
           confirm(){
             
           },
        },
        components:{
            
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    @import '../../../assets/css/page/onlinePay.scss';
     .onlinePay{
       .onlinePay-center{
           padding-top:p2r(88);
           margin-top:p2r(16);
       }  
       .onlinePay-bottom{
           position: fixed;
           bottom: 0;
           left:0;
           right: 0;
           height: p2r(98);
           background-color:$Oblue;
           padding-top:p2r(28);
           padding-bottom: p2r(28);
           color: #FFFFFF;
       }
     } 
</style>