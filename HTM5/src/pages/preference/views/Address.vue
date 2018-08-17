<template>
        <div class="address common-bg">
           <header></header>
           <!-- <div class="address-null">
               <div class="img-box"></div>
               <p class="tc">还没有添加收货地址呢~</p>
           </div> -->
           <div class="address-center">
               <mt-cell-swipe
                    :right="right">
                    <div class="address-info">
                        <div class="address-info-left">
                            <p class="clearfix">
                                <span class="fl font-15">张西西&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;186****3928</span>
                                <span class="fl moren tc">默认</span>
                                <span class="fl address-tag tc">公司</span>
                            </p> 
                            <p class="padding-top-16 font-13">广东省深圳市福田区卓越世纪中心3号楼35F卓越世纪中心3号楼35F</p> 
                        </div>
                    </div>
                </mt-cell-swipe>
                <div class="iconfont icon-bianjiicon" @click="editAddress"></div>
           </div>
           <div class="clearfix btn-box">
               <el-button type="primary" round @click="add"  icon="el-icon-plus">新增地址</el-button>
           </div>
        </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return{ 
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
            
        },
        mounted(){
            
        },
        methods:{
           add(){
              this.$router.push({name:"AddAddress",params:{type:"add"}});
           },
           editAddress(){
              this.$router.push({name:"AddAddress",params:{type:"edit"}}); 
           }
        },
        components:{
            
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../../assets/css/varable.scss';
    .address{
        padding-top:p2r(88);
        padding-bottom: p2r(140);
        .address-null{
            width:100%;
            height: 100%;
            .img-box{
                @include size(320,320);
                margin:0 auto;
                margin-top:p2r(260);
                background-image: url("../../../assets/img/收货地址空状态png@2x.png");
                background-position: center center;
                background-repeat: no-repeat;
                background-size: p2r(258) p2r(234);
            } 
             p{
                font-size: 15px;
                color: #888888;  
                margin-top:p2r(24);
            }
        }
        .address-center{
            position: relative;
             .icon-bianjiicon{
                position: absolute;
                top:50%;
                right: p2r(30);
                transform: translateY(-50%);
                }
            .mint-cell-swipe{
                margin-top:p2r(16);
            }
            .address-info{
                width:100%;
                padding:p2r(30); 
            }
            .address-info-left{
                max-width:p2r(580);
            } 
            .moren,.address-tag{
                margin-top:2px;
            }
        }
        .btn-box{
            position: fixed;
            width:100%;
            padding:p2r(30);
            z-index:310;
            left:0;
            right:0;
            bottom: 0;
            button{
                 width:100%;
                 font-size: 15px;
            }
        }
    }
</style>