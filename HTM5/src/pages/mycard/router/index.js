import Vue from 'vue'
import Router from 'vue-router'
import Mycard from '../views/Mycard.vue'
import HistoryCouponCode from '../views/HistoryCouponCode.vue'
import HistoryGiftCoupon from '../views/HistoryGiftCoupon.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Mycard',
      component: Mycard,
      meta:{
        title:'我的卡券',
        index:1
      }
    },
    {
      path:"/historyCouponCode",
      name:"HistoryCouponCode",
      component:HistoryCouponCode,
      meta:{
        title:'历史优惠券',
        index:2
      }
    },
    {
      path:"/historyGiftCoupon",
      name:"HistoryGiftCoupon",
      component:HistoryGiftCoupon,
      meta:{
        title:'历史礼品券',
        index:3
      }
    },
  ]
})
