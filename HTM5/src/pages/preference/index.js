// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import MintUI from 'mint-ui'
import {   Rate, Badge,Button,Input } from 'element-ui';
import preview from 'vue-photo-preview'
import '../../assets/font/iconfont.js'
import 'vue-photo-preview/dist/skin.css'
import 'mint-ui/lib/style.css'
import '../../assets/css/animate.css'
import '../../assets/font/iconfont.css'
import '../../assets/css/common.css'
import '../../assets/css/index.scss'

Vue.use(MintUI);
Vue.use(Rate);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Input);
Vue.use(preview,options);
var options={
  fullscreenEl:false //关闭全屏按钮
}
/* eslint-disable no-new */
new Vue({
  mode:"hash",
  el: '#app',
  router,
  render: h => {
    return h(App);
}
});

