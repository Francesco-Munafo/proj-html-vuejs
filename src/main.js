import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'

createApp(App)
.component('bootstrap', bootstrap)
.mount('#app')
