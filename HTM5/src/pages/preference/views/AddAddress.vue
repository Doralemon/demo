<template>
        <div class="add-address common-bg">
           <Head :titleName="title"></Head>
           <div class="add-address-center">
               <div class="tongxunlu-box">
                    <mt-field label="收货人" placeholder="请输入收货人姓名" v-model="username" class="shouhuoren"></mt-field>
                    <div class="tongxunlu"></div>
               </div>
                <mt-field label="联系电话" placeholder="请输入联系电话"  v-model="phone"></mt-field>
                <mt-field label="收货地址" placeholder="请输入收货地址"  v-model="address" class="shouhuodizhi"></mt-field>
                <div class="clearfix biaoqian">
                    <p class="font-15 fl">标签</p>
                    <span class="fl tc font-13" v-bind:class="{ active: isActive1 }" @click="getTag(1)">公司</span>
                    <span class="fl tc font-13" v-bind:class="{ active: isActive2 }" @click="getTag(2)">家</span>
                </div>
           </div>
           <mt-checklist class="morendizhi"
            v-model="value"
            :options="['设为默认地址']">
            </mt-checklist>
           <div class="clearfix btn-box">
               <!-- <el-button type="info" round disabled>确定</el-button> -->
               <el-button type="primary" round @click="confirm">确定</el-button>
           </div>
        </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import Head from '../../../components/head.vue'
    export default {
        data(){
            return{ 
                title:"",
                username:"",
                phone:"",
                address:"",
                value:[],//复选框绑定的值
                isActive1:false,
                isActive2:false,
                right:[
          {
            content: '<div class="delete"></div>',
            style: {background: '#FF5656', color: '#fff',  textAlign: 'center'},
            handler: () => this.$messagebox({
              message: '确定要删除该地址?',
              showCancelButton: true
            }).then((action) => {
              if (action === 'confirm') {
                Toast({message: '删除成功',
                duration: 2000})
              } else {
 
              }
            })
          }
        ]
            }
        },
        beforeCreate () {
                
        },
        created () { 
            if(this.$route.params.type=="add"){
                    this.title = "新增地址"
                }else{
                    this.title = "编辑地址"
                }
        },
        mounted(){
            
           
        },
        // deactivated() {
        //     this.$destroy()
        // },
        methods:{
           confirm(){
              this.$router.push({name:"Address"});
           },
           getTag(num){
               switch(num){
                   case 1:
                   this.isActive1 = true;
                   this.isActive2 = false;
                   break;
                   case 2:
                   this.isActive2 = true;
                   this.isActive1 = false;
                   break;
               }
           }
        },
        watch:{
            $route(to,from){
                if(to.params.type=="add"){
                    this.title = "新增地址"
                }else{
                    this.title = "编辑地址"
                }
            }
            },
            
        components:{
            Head
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
       .add-address{
           padding-top:p2r(88);
            .tongxunlu-box{
                position: relative;
                .tongxunlu{
                     position: absolute;
                    right:p2r(30) ;
                    top:p2r(30);
                    content: "";
                    @include size(44,44);
                    background-image: url("../../../assets/img/通讯录icon.svg");
                    background-position: center center;
                    background-repeat: no-repeat;
                    background-size: p2r(40) p2r(44);
                }
            }
            .shouhuoren{
               
            }
            .btn-box{
                height: p2r(80);
                width:100%;
                padding-left:p2r(30);
                padding-right:p2r(30);
                margin-top:p2r(100);
                button{
                    width: 100%;
                    height: 100%;
                    font-size: 15px;
                        color: #FFFFFF;
                }
            }
            .biaoqian{
                height: p2r(104);
                padding:p2r(30);
                p{
                    width:105px;
                    font-weight: 500;
                }
                span{
                    @include size(126,48);
                    border: 1px solid #E5E5E5;
                    border-radius: 15px;
                    line-height: p2r(48);
                    margin-right: p2r(60);
                    &.active{
                        border:1px solid #1478C8;
                        color:#1478C8;
                    }
                }
            }
       }
</style>