<template>
        <div class="comment-container">
               <div class="comment-container-top clearfix">
                   <div class="img-box fl">
                       <img src="../assets/logo.png" alt="">
                   </div>
                   <span class="fl name">杨布拉</span>
                   <div class="fl">
                        <el-rate
                            v-model="value5"
                            disabled
                            disabled-void-color="#DFDFDF"
                            :colors="['#FF4949','#FF4949','#FF4949']"
                            score-template="{value}">
                        </el-rate>    
                    </div>
                    <span class="fr time">09:30</span>
               </div>
               <div class="comment-container-cneter">
                   好棒啊~真的是太好吃了，棒棒哒~好棒啊~真的是太好吃了，棒棒哒~好棒啊~真的是太好吃了，棒棒哒~好棒啊~真的是太好吃了，棒棒哒~
               </div>
               <div class="comment-container-img">
                   <ul >
                       <li >
                           <img src="../assets/logo.png" alt="">
                       </li>
                       <li >
                           <img src="../assets/logo.png" alt="">
                       </li>
                       <li >
                           <img src="../assets/logo.png" alt="">
                       </li>
                   </ul>
               </div>
           </div>
</template>
<script>
    export default {
        data(){
            return{ 
                value5:3.4
            }
        },
        beforeCreate () {
                
        },
        created () { 
            
        },
        mounted(){
            
        },
        methods:{
           
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/css/varable.scss';
 .comment-container{
        margin-top:p2r(30);
        .comment-container-top{
            .img-box{
                 @include size(60,60);
                 border-radius: 100%;
                 margin-right:p2r(24);
            }
            img{
                display: block;
                @include size(60,60);
            }
            .name{
                margin-right: p2r(40.6);
                font-size: 13px;
                color: #666666;
            }
            .time{
                font-size: 12px;
                color: #999999;
            }
        }
        .comment-container-cneter{
            margin-top:p2r(20);
            margin-bottom: p2r(30);
        }
        .comment-container-img{
            ul{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    @include size(182,182);
                    img{
                        display: block;
                        width:100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>