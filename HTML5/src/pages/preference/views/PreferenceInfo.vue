<template>
    <div class='preference-info'>
          <PreferenceInfoSub  v-for="(item,index) in goodsList" :key="index" :goodsArrInfo="item"></PreferenceInfoSub>
    </div>
</template>
<style  scoped>
</style>
<script>
import PreferenceInfoSub from './PreferenceInfoSub.vue';
export default {
    data(){
        return{
            goodsList:[],
            oListId:''
        }
    },
    beforeCreate () {
            
    },
    created () { 
       this.getListGoods() 
    },
    methods:{
         getListGoods(){
            if(this.oListId==2){
                console.log(123)
                this.goodsList = [{
                id:1,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:2,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:3,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            }, {
                id:4,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            }]
            }else{
               this.goodsList= [{
                id:1,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:2,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            },
            {
                id:3,
                des:'鲜果上市',
                title:'陕西黑布林大李子 5斤大',
                price:"29.80",
                tag:"新品"
            }]
            }
        },
    },
    watch:{
             "$route":function(newValue,oldValue){
                this.oListId = newValue.params.id;
                this.getListGoods();
            }
        }, 
    components:{
        PreferenceInfoSub
    }
    }
</script>
<style lang="scss" scoped>
    // 底部右边商品
        .preference-info{
            flex:1;
            .preference-info-sub{
                background-color: #fff;
                margin-bottom:p2r(10);
            }
            .preference-info-sub-img{
                width: 50%;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    }
            }
            .preference-info-sub-right{
                width: 50%;
              p{
                  width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
              }
            }
        }
</style>




