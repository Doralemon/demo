// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import router from './router/index.js'
import MintUI from 'mint-ui'
import '../../assets/font/iconfont.css'
import '../../assets/font/iconfont.js'
import 'mint-ui/lib/style.css'
import '../../assets/css/common.css'
import headers from "../../components/head.vue"
import '../../assets/css/index.scss'
import {   Button, Upload ,Dialog } from 'element-ui'
// import VueSwiper from 'vue-awesome-swiper'
import router from "./router/index.js"
// import 'swiper/dist/css/swiper.css'
//Vue.use(Rate)
//Vue.use(Badge)
Vue.use(MintUI)
// Vue.use(VueSwiper)
Vue.use(Button)
Vue.use(Upload)
Vue.use(Dialog)

Vue.component("headers",headers)

/* eslint-disable no-new */
new Vue({
  mode:"hash",
  el: '#app',
     router,
  render: h => {
    return h(App);
}
})
