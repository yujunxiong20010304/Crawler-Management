import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import path from "path"

export default defineConfig({
    plugins: [
      vue()
    ],
    resolve: {
        // ↓路径别名，主要是这部分
        alias: {
            "@": resolve(__dirname, "./src"),
            "@assets": resolve(__dirname, "src/assets"),
            "@store": resolve(__dirname, "src/store"),
            "@view": resolve(__dirname, "src/view")
        }
    },
    css: {
        preprocessorOptions: {
            less: {// 引入全局基础less变量
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
                },
                javascriptEnabled: true,
            },
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
        proxy: {
            //"/api": "http://t.weather.itboy.net/",
            //对以/api开头的请求进行代理
            "/api": {
            // 代理的目标地址
            target: "http://t.weather.itboy.net/",
            //设置允许跨域
            changeOrigin: true,
            // 路径重写
            rewrite: (path) => path.replace('/^/api/', "")
            }
        }
    }
})
