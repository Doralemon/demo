<template>
    <div class='preference-info-sub clearfix'>
        <!-- 左边图片 -->
        <div class="preference-info-sub-img fl">
            <img src="../../../assets/logo.png" alt="">
        </div>
        <!-- 右边信息 -->
        <div class="preference-info-sub-right fl">
            <!-- 上边文字 -->
            <p><span class="goods-tag">[ 鲜果上市 ]</span>陕西黑布林大李子 5斤大袋装</p>
            <!-- 下面价格 -->
            <p><span>&yen; 29.80</span><span>新品</span></p>
        </div>
    </div>   
</template>
<style  scoped>
</style>
<script>
export default {
    name:"PreferenceInfoSub",
    data(){
        return{
            
        }
    },
    beforeCreate () {
        
    },
    created () {
        console.log(this.goodsArrInfo)
    },
    methods:{

    },
    props:['goodsArrInfo']   
}
</script>



