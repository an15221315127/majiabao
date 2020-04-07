import axios from 'axios';
import router from '@/router';
import store from "@/store";
import config from '@/config'
import Qs from 'qs';
import {Toast} from "vant";


// 环境的切换
axios.defaults.baseURL =
// 超时时间
axios.defaults.timeout = 10000;
var token = store.state.token;
const service = axios.create({
    baseURL:config.baseURI,
    headers:{
        Authorization:token ? `Bearer ${token}`:'',
    }
})
// 响应拦截
service.interceptors.response.use(
    response => {
        if (response.status === 200) { // 请求服务端成功
            const res = response.data
            switch (res.code) {
                case 1:
                  return  Promise.resolve(res.data,res.code,res.msg)
                case 0:
                  return Toast(res.msg);
                case 301:
                    return Promise.reject(res);
                case 302:
                    return Promise.reject(res);
                case 500:
                    return Promise.reject(res);
                default:
                    break;
            }

        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '请求参数错误';
                    break;
                case 401:
                    error.message = '未授权，请登录';
                    break;
                case 403:
                    error.message = '跨域拒绝访问';
                    break;
                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`;
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器内部错误';
                    break;
                case 501:
                    error.message = '服务未实现';
                    break;
                case 502:
                    error.message = '网关错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网关超时';
                    break;
                case 505:
                    error.message = 'HTTP版本不受支持';
                    break;
                default:
                    break;
            }
            return Promise.reject(error.response);
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return service.get(`${url}?${Qs.stringify(params)}`)
}
/**
 * post方法，对应请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return service.post(url,params)
}
