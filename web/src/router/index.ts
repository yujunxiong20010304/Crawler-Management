import {createRouter, createWebHashHistory} from 'vue-router';

// 路由列表
const routes = [
    // {
    //     path: '/',
    //     name: 'home',
    //     component: () => import('../views/home/home.vue')
    // },
    // {
    //     path: '/list',
    //     name: 'list',
    //     component: () => import('../views/list/list.vue')
    // }
]

// 导出路由
export default  createRouter({
    history: createWebHashHistory(),
    routes
})


