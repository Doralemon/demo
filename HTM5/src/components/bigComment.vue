<template>
        <div class="comment">
           <div class="comment-top clearfix">
               <p class="span-title fl">
                   评价
               </p> 
               <p class="fr lookAll iconfont icon-zhankai" @click="lookAll">
                   查看全部（10000）
               </p>
           </div>
           <Comment></Comment>
        </div>
</template>
<script>
    import Comment from './comment.vue';
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
           lookAll(){
            //    this.$router.push();
           }
        },
        components:{
            Comment
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/css/varable.scss';
.comment{
    padding:p2r(30);
    background-color: #fff;
    margin-top:p2r(16);
    .comment-top{
       .lookAll {
           position: relative;
           font-size: 15px;
           color: #888888;
           padding-right: p2r(30);
           &::before{
               position: absolute;
               right: 0;
               top:p2r(7);
               font-size: 12px;
           }
       }
    }
}
</style>