// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import MintUI from 'mint-ui'
import {   Badge,Button,Input } from 'element-ui';
import 'mint-ui/lib/style.css'
import '../../assets/css/common.css'
import '../../assets/css/index.scss'
import '../../assets/css/page/order.scss'
import '../../assets/font/iconfont.css'
import '../../assets/css/page/myCard.scss'
import '../../assets/font/iconfont.js'
Vue.use(MintUI)
Vue.use(Badge);
Vue.use(Button);
Vue.use(Input);

/* eslint-disable no-new */
new Vue({
  mode:"hash",
  el: '#app',
  router,
  render: h => {
    return h(App);
}
})
