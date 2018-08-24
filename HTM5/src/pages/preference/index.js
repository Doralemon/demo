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
import Vuex from 'vuex'
Vue.use(Vuex);


Vue.use(MintUI);
Vue.use(Rate);
Vue.use(Badge);
Vue.use(Button);
Vue.use(Input);
Vue.use(preview,options);
var options={
  fullscreenEl:false //关闭全屏按钮
}
const store = new Vuex.Store({
  state: {
    static:{'token':'79f3613a-7877-4e4b-91ee-b9bed11a7f20',
         'userId':'3f72e4aa64d447199f5388c2e96e11cb',
         'projectId':'3f72e4aa64d447199f5388c2e96e11cb'}
  },
  mutations: {
    increment (state) {
     
    }
  }
});
localStorage.setItem('token','79f3613a-7877-4e4b-91ee-b9bed11a7f20');
localStorage.setItem('userId','3f72e4aa64d447199f5388c2e96e11cb');
localStorage.setItem('projectId','3f72e4aa64d447199f5388c2e96e11cb');
/* eslint-disable no-new */
new Vue({
  mode:"hash",
  el: '#app',
  store,
  router,
  render: h => {
    return h(App);
}
});


