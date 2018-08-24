<template>
   <div class="app">
       <transition :name="transitionName">
            <router-view></router-view>
        </transition>
   </div>
</template>
<script>
export default {
    data(){
        return{
            transitionName:""
        }
    },
    beforeCreate () {
        
    },
    created () {
        // if(this.$route.path=='/'){       
        //     this.$router.replace('/preference');   
        // }
    },
    mounted(){
       
    },
     watch: {//使用watch 监听$router的变化
            $route(to, from) {
                //如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if(to.meta.index > 0){
                    if( to.meta.index < from.meta.index){
                        this.transitionName = 'slide-right';
                    }else{
                        this.transitionName = 'slide-left';
                    }
                }else if(to.meta.index == 0 && from.meta.index > 0){
                    this.transitionName = 'slide-right';
                }
            }
        }    
}
</script>
<style lang="scss" scoped>
    .app{
        font-size: 14px;
    }
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active{
        position: absolute;
        width:100%;
        height: 100%;
        left:0;
        transition: all 0.1s;
        transform: translate3d(0,0,0);
    }  
    .slide-right-enter {
        transform: translate3d(-100%,0,0);
    }
    .slide-right-leave-active {
        transform: translate3d(100%,0,0);
        opacity: 0;
    }
    .slide-left-enter {
        transform: translate3d(100%,0,0);

    }
    .slide-left-leave-active {
        transform: translate3d(-100%,0,0);
        opacity: 0;
    }      
</style>

