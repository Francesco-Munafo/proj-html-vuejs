import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faEye, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUserPlus, faPlus, faMoneyBill1, faPaperPlane  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faCalendarDays, faEye, faUser , faMagnifyingGlass, faUserPlus, faPlus, faMoneyBill1 , faPaperPlane, faFacebookF, faTwitter, faInstagram)

createApp(App)
.component('bootstrap', bootstrap)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
