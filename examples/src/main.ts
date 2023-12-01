import './assets/main.css'
import '@coffee-ui/theme-chalk/src/index.scss'
import CoffeeUI from '@coffee-ui/components'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(CoffeeUI)

app.mount('#app')
