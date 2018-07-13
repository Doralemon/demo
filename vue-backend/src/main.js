import Vue from 'vue';
import VueRouter from "vue-router";
import axios from 'axios';
import ElementUI from 'element-ui';
import routes from './routes'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
import App from './App.vue';
const router = new VueRouter({
    // mode: 'history',
    // history: true,
    // hashbang: true,
    routes
})
router.beforeEach((to, from, next) => {
    //NProgress.start();
    console.log(to)
    console.log(from)
    if (to.path == '/login') {
        // sessionStorage.removeItem('user');
    }
    // let user = JSON.parse(sessionStorage.getItem('user'));
    // if (!user && to.path != '/login') {
    //     next({ path: '/login' })
    // } else {
    next()
        // }
})
const vm = new Vue({
    // el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')