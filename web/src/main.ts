import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

// 创建pinia实例
const pinia = createPinia()
const app = createApp(App)

// 挂载到vue根实例上
app.use(pinia)
app.use(router)
app.mount('#app')

