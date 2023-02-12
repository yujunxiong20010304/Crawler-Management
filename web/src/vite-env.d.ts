declare module 'qs'

封装
import axios from 'axios';
import qs from 'qs';
import { ElMessageBox } from "element-plus";
import router from "../router/index"
const BASEURL ='url';
const service = axios.create({
    timeout: 5000,
    baseURL: BASEURL,
})
// http request 拦截器
service.interceptors.request.use(config => {
    // 0. 过滤获取token的请求
    if (config.url === '/api/login/get_verification') {
        return config
    }
    // 获取 token 和 sk
    let token = localStorage.getItem('token') || '';
    let sk = localStorage.getItem('sk') || '';
    // 1. 获取请求参数 row
    // let data = config.data;

    //  let row = data.row
    let data = config?.data || (config['data'] = []);
    let row = data?.row || (config['data']['row'] = []);
    config.data = qs.stringify(data)
    return config
}, err => {
    return err
})
service.interceptors.response.use(response => {
    //接收返回数据..
    const res = response.data
    const { code, msg } = response.data
    if (code === 0) {
        showMessage(res, 'success')
        return res
    }
    else if (code === -3) {
        showMessage(res, 'error')
        return res
        // 抛出异常
    }
    else if (code === -9998) {   // token认证失败
        showMessageLOGIN(res)
        return Promise.reject(msg)  // 抛出异常
    } else {
        showMessage(res, 'error')
        return Promise.reject(msg || '服务器异常')
    }
}, err => {
    return err;
})
//封装错误提示信息..
function showMessage(res: any, types: string) {
    if (types == 'error') {
        ElMessage({
            message: res.msg,
            type: 'error',
        })
    } else {
        ElMessage({
            message: res.msg,
            type: 'success',
        })
    }

    // ElMessageBox.alert(res.msg, "舜泰汽车", {
    //     confirmButtonText: "OK",
    // })
}
function showMessageLOGIN(res: any) {
    ElMessageBox.alert(res.msg, "舜泰汽车", {
        confirmButtonText: "OK",
        callback: (action: any) => {
            setTimeout(() => {
                router.push('/login')
            }, 15000)
        },
    })
}
export default service;

// 调用
// import service from "../../request/index"
// export function get_data(vin) {
//     return service({
//         url: "/api/api/get_data",
//         method: 'POST',
//         data: {
//             row: {
//                 vin:vin,
//             }
//         }
//
//     })
// }
