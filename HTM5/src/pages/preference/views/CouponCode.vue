<template>
    <div class="couponCode common-bg">
        <header>
            <div class="fr">不使用</div>
        </header>
        <div class="couponCode-container">
            <div class="couponCode-top tc">
                <input type="text" placeholder="请输入您的优惠码">
                <div class="duihuan tc">兑换</div>
            </div>
            <ul>
                <li @click="checked(1)">
                    <youhuiquan :flag="flag1"></youhuiquan>
                </li>
                <li  @click="checked(2)">
                    <youhuiquan :flag="flag2"></youhuiquan>
                </li>
                <li  @click="checked(3)">
                    <youhuiquan :flag="flag3"></youhuiquan>
                </li>
            </ul>
            <div class="couponCode-bottom tc font-13">没有更多了~</div>
        </div>
    </div>
</template>
<script>
import youhuiquan from '../../../components/youhuiquan.vue'
    export default {
        data(){
            return{ 
               value:"",
               flag1:false,
               flag2:false,
               flag3:false,
            }
        },
        beforeCreate() {
                
        },
        created() { 
            
        },
        mounted(){
            
        },
        methods:{
           checked(num){
               switch(num){
                   case 1:
                   this.flag1 = !this.flag1;
                   break;
                   case 2:
                   this.flag2 = !this.flag2;
                   break;
                   case 3:
                   this.flag3 = !this.flag3;
                   break;
               }  
           }
        },
        components:{
            youhuiquan
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .couponCode{
        padding-top:p2r(88);
        .couponCode-container{
            margin-top:p2r(24);
            .couponCode-top{
                position: relative;
                padding-left:p2r(24);
                padding-right:p2r(24);
                margin-top:p2r(24);
                input{
                    width:100%;
                    border:none;
                    outline: none;
                    border-radius: 3px;
                    padding-left:p2r(22);
                    padding-right: p2r(30);
                    padding-top:p2r(26);
                    padding-bottom:p2r(26);
                }
                .duihuan{
                    position: absolute;
                    top:p2r(24);
                    right: p2r(54);
                    @include size(108,50);
                    font-size: 12px;
                    line-height: p2r(50);
                    color: #FFFFFF;
                    background: #FF5656;
                    border-radius: p2r(100);
                }
            }
        }
    }
</style>