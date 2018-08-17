<template>
    <div class="common-btn clearfix">
       <div class="less fl" @click="less"></div>
       <input type="num" class="tc fl" v-model="num" @blur="isNum">
       <div class="fr more" @click="more"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           num:1
        }
    },
    beforeCreate () {
            
    },
    created () { 
      this.notice();
    },
      mounted(){
       
    },
    methods:{
       less(){
           if(this.num==1){
               return;
           }else{
               this.num--
           }
       },
       more(){
           this.num++;
       },
       notice(){
           this.$emit('getNum',this.num);
       },
       isNum(){
           if(this.num==''){
               this.num=1;
           }
       }
    },
    watch:{
        "num":function(newValue,oldValue){
                this.notice()
            }
    },
    components:{
       
    }
    }
</script>
<style lang="scss" scoped> 
    @import '../assets/css/varable.scss';
  .common-btn{
        margin-top:p2r(30);
        @include size(240,60);
        border: 1px solid #CDCDCD;
        border-radius: 17px;
        padding:p2r(10) p2r(24);
      .less,.more,{
          display: inline-block;
          width: p2r(36);
          height:p2r(36);
          color: #444;
      }
      .more{
         background-image: url('../assets/img/添加icon.svg');
          background-repeat: no-repeat;
          background-position: center center;
      }
      .less{
          background-image: url('../assets/img/减少icon.svg');
          background-repeat: no-repeat;
          background-position: center center;
      }
      input{
          width: p2r(110);
          border:none;
          height: 100%;
      }
  }
</style>




