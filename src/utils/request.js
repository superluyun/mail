import Vue from 'vue'
import axios from 'axios'
import store from '../store'

// Vue.use(axios) // error:Cannot read property 'protocol' of undefined

//创建axios实例
const service = axios.create({
    baseURL:'/', // api
    timeout:5000 //请求超时
})

// request拦截
service.interceptors.request.use(
    config =>{
        if(store.getters.token){
            config.headers['X-Token'] = store.getters.token
        }
        if(config.method === 'post'){
            config.data = config.params
            config.params = ''// 清空
        }
        return config
    },
    error =>{
        console.err(error)
        Promise.reject(error)
    }
)

// response拦截
service.interceptors.response.use(
    response =>{
        let {data,code,msg} = response.data
        if(code!=200){
            // token 过期
            return Promise.resolve(false);
        }else{
            return {data,code,msg}
        }
    },
    error =>{
        console.err(error)
        return Promise.reject(error)
    }
)

export default service