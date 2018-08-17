import Axios from 'axios';
// import { Loading } from 'element-ui';
import DOMAIN from './domain.js';

let CaresLoading = null;

//请求拦截--请求之前的拦截
Axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // CaresLoading = Loading.service({
    //     text: '正在加载',
    // });
    //数据已formData传输到后台
    config['transformRequest'][0] = function(data){
        let ret = ''
        for (let it in data) { 
            ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
        };
        return ret 
    }
    return config;
});

//请求拦截--请求回来对响应体的拦截
Axios.interceptors.response.use(function(res) {
    // CaresLoading.close();
    //对请求回来的错误码进行判断处理
    switch(res.status){
        case 200:
            {//
                return res.data
            }
            break;
        case 403:
            {// 未登陆 跳转到登陆页
               location.href = DOMAIN.common
            }
            break;
        case 500:
            {//
                location.href = DOMAIN.common
            }
            break;
    }   

}, function(error) {
    // 对响应错误做点什么 比如接口不存在等
        // CaresLoading.close();
        // console.log(`${DOMAIN.common}/#/404`);
        // location.href = `${DOMAIN.common}/#/404`;
    return Promise.reject(error);
});

export default  Axios;
