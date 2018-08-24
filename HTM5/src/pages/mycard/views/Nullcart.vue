<template>
    <div class="cart-null">
        <div class="cart-center">
             <div class="cart-box">
                <div class="cart-nullbg">
                </div>
                <p class="font-15 tc">{{des}}</p>
                <el-button type="danger" round @click="goToSee">去逛逛</el-button>
            </div>
        </div>
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
        mounted(){
            
        },
        methods:{
             goToSee(){ //去逛逛
                 window.location.href="/preference"
             }
        },
       props:["des"]
    }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/varable.scss";
    // 卡券空状态
    .cart-null{
        .cart-center{
        position: relative;
        padding-top:p2r(88);
        .cart-box{
            position: absolute;
            top:p2r(180);
            left: 50%;
            transform: translateX(-50%);
            .cart-nullbg{
                @include size(320,320);
                background:url("../../../assets/img/我的卡券空状态png@2x.png") no-repeat center center;
                background-size: p2r(286) p2r(206);
            }
            p{
                margin-top:p2r(24);
                color: #888888;
            }
            button{
                position: absolute;
                bottom:p2r(-54-74);
                left:50%;
                transform: translateX(-50%);
                @include size(218,74);
        }
        }      
    }
    }
</style>