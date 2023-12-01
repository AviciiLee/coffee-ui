import './assets/main.css'
import '@coffee-ui/theme-chalk/src/index.scss'
import CoffeeButton from '@coffee-ui/components/button'
import CoffeeCard from '@coffee-ui/components/card'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(CoffeeButton)
app.use(CoffeeCard)

app.mount('#app')
