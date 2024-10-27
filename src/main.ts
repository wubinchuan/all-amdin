import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import pinia from './store'
import './assets/css/index.less'
import registerIcons from './global/Element-icon'
// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"
// app.use(ElementPlus)
//按需引入
import 'element-plus/theme-chalk/el-message.css'
import useLogin from './store/login/login'
const app = createApp(App).use(pinia)
const loginstore = useLogin()
loginstore.refreshloding()
app.use(route).use(registerIcons).mount('#app')
