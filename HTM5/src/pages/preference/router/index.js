import Vue from 'vue'
import Router from 'vue-router'
import Preference from '../views/Preference.vue'
import PreferenceInfo from '../views/PreferenceInfo.vue'
import GoodsInfo from '../views/GoodsInfo.vue'
import GoodsInfoProduct from '../views/GoodsInfoProduct.vue'
import GoodsInfoImg from '../views/GoodsInfoImg.vue'
import Order from '../views/singleOrder.vue'
import Address from '../views/Address.vue'
import AddAddress from '../views/AddAddress.vue'
import OnlinePay from '../views/onlinePay.vue'
import CouponCode from '../views/CouponCode.vue'
import Cart from '../views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Preference',
      component: Preference,
      meta:{
        title:'列表',
        index:1
      },
      // children:[{
      //   path: ':id',
      //   name:'PreferenceInfo',
      //   component: PreferenceInfo 
      // }] 
    },
  //   {
  //     path: '/:id/:goodsId',
  //     name:'GoodsInfo',
  //     redirect: {name: 'Goods'},
  //     component: GoodsInfo,
  //     meta:{
  //       title:'详情',
  //       index:2
  //     },
  //     children:[{
  //       path: 'goods',
  //       name:'Goods',
  //       component: GoodsInfoProduct 
  //     },
  //     {
  //       path: 'goodsInfo',
  //       name:'GoodsImg',
  //       component: GoodsInfoImg 
  //     }]
  //  },
   {
    path: '/order',
    name:'Order',
    component: Order,
    meta:{
      title:'订单',
      index:3
    }
   },
   {
    path: '/address',
    name:'Address',
    component: Address,
    meta:{
      title:'收获地址',
      index:2
    }
   },
   {
    path: '/addAddress/:type',
    name:'AddAddress',
    component: AddAddress,
    meta:{
      title:'新增/编辑地址',
      index:3
    }
   },
   {
    path: '/onlinePay',
    name:'OnlinePay',
    component: OnlinePay,
    meta:{
      title:'在线支付',
      index:4
    }
   },
   {
    path: '/cart',
    name:'Cart',
    component: Cart,
    meta:{
      title:'购物车',
      index:5
    }
   },
  ]
})
